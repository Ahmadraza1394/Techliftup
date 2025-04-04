import { LeadModel } from "../models/leadModel.js";
import { EmailService } from "../services/emailService.js";
import { OpenAIService } from "../services/openaiService.js";

export class ChatController {
  static async healthCheck(req, res) {
    res.status(200).send("Backend is running");
  }

  static async testEmail(req, res) {
    try {
      const emailService = new EmailService(); // No db needed for testEmail
      const result = await emailService.sendTestEmail(); // Sends a test email to verify email configuration
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error.message); // Handle any errors that occur during email sending
    }
  }

  static async chat(req, res) {
    console.log("Received request to /chat");
    console.log("Request body:", req.body);

    const { messages, email, name } = req.body; // Destructure the request body to get messages, email, and name
    const db = req.db; // Firestore instance from middleware
    const leadModel = new LeadModel(db); // Create an instance of LeadModel to interact with Firestore

    // Get the client's IP address
    const ipAddress =
      req.headers["x-forwarded-for"] || req.socket.remoteAddress || "unknown";
    console.log(`Request from IP: ${ipAddress}`);

    // Check rate limit for the IP address
    try {
      await leadModel.checkRateLimit(ipAddress); // Check if the IP address has exceeded the rate limit
    } catch (error) {
      return res.status(429).send(error.message); // Return 429 Too Many Requests if rate limit exceeded
    }

    // Validate required fields
    if (!messages || !email || !name) {
      console.log(
        `Validation failed: Missing fields - Name: ${name}, Email: ${email}, Messages: ${messages}`
      );
      return res
        .status(400)
        .send(
          "Missing required fields: name, email, and messages are required."
        ); // Return 400 Bad Request if any required fields are missing
    }

    // Validate email format
    if (!LeadModel.validateEmail(email)) {
      console.log(`Invalid email format: ${email} (User: ${name})`);
      return res
        .status(400)
        .send(
          "Invalid email format. Please provide a valid email address (e.g., user@example.com)."
        ); // Return 400 Bad Request if email format is invalid
    }

    try {
      console.log("Messages received:", messages);

      // Check if this is the first message (new user starting the chat)
      const isNewUser = messages.length === 1 && messages[0]?.role === "user";
      console.log("Checking new user condition:", {
        messagesLength: messages.length,
        firstMessageRole: messages[0]?.role,
        firstMessageContent: messages[0]?.content,
        isNewUser,
      });

      if (isNewUser) {
        console.log(
          "New user condition met, calling sendLeadNotificationEmail..."
        );
        const emailService = new EmailService(db); // Create an instance of EmailService, passing the db for future use
        await emailService.sendLeadNotificationEmail(name, email); // Send an email notification about the new lead
        await leadModel.saveLead(name, email); // Save the new lead to the database
        console.log(`New lead saved for ${name} (${email})`);
      } else {
        console.log("New user condition NOT met:", {
          messagesLength: messages.length,
          firstMessageRole: messages[0]?.role,
          firstMessageContent: messages[0]?.content,
        });
      }

      // Get response from OpenAI
      const reply = await OpenAIService.getChatResponse(messages, name, email); // Get a response from OpenAI based on the chat messages
      res.json({ reply }); // Send the response back to the client
    } catch (error) {
      console.error(`Error in chat controller: ${error.message}`);
      res.status(500).send(error.message); // Handle any errors that occur during the chat processing
    }
  }

  static async getLeads(req, res) {
    const db = req.db; // Firestore instance from middleware

    try {
      const querySnapshot = await db
        .collection("leads")
        .orderBy("timestamp", "desc")
        .get(); // Fetch leads from Firestore, ordered by timestamp
      const leads = [];
      querySnapshot.forEach((doc) => {
        leads.push({ id: doc.id, ...doc.data() }); // Push each lead document into the leads array
      });
      res.status(200).json(leads); // Send the leads back to the client
    } catch (error) {
      console.error(`Error fetching leads: ${error.message}`);
      res.status(500).send("Error fetching leads from Firestore."); // Handle any errors that occur during fetching leads
    }
  }
}

import { useState } from "react";
import emailjs from "emailjs-com";
import { T } from "../context/LanguageContext";

const ContactForm = () => {
  const SERVICE_ID = "service_wuajhr5"; // Replace with your EmailJS Service ID
  const TEMPLATE_ID = "template_6gguoa9"; // Replace with your EmailJS Template ID
  const USER_ID = "tV4uPzjmtHiMmsQWh"; // Replace with your EmailJS User ID

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    budget: "",
    details: "",
  });
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!formData.name || !formData.email || !formData.details) {
      setError("Please fill out all required fields.");
      return;
    }

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID).then(
      (result) => {
        console.log(result.text);
        setIsSent(true);
        setTimeout(() => setIsSent(false), 15000);
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          subject: "",
          budget: "",
          details: "",
        });
        setError("");
      },
      (error) => {
        console.error(error.text);
        setError(
          "An error occurred while sending your message. Please try again."
        );
      }
    );
  };

  return (
    <section className="py-12 px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-4 text-sky-500">
        <T>Drop us a line</T>
      </h2>
      <p className="text-gray-600 mb-8">
        <T>Fill in this form or </T>{" "}
        <a
          href="mailto:info@techliftup.com"
          className="text-red-600 font-semibold underline hover:text-red-700"
        >
          <T>send us an email</T>
        </a>{" "}
        <T>with your inquiry.</T>
      </p>

      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label className="text-sm font-semibold">
            <T>Name*</T>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={"Your name"}
            className="p-3 mt-1 rounded-md border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-semibold">
            <T>Email*</T>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={"Your email"}
            className="p-3 mt-1 rounded-md border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-semibold">
            <T>Company</T>
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder={"Your company name"}
            className="p-3 mt-1 rounded-md border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-semibold">
            <T>Phone/Whatsapp*</T>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={"Your phone number"}
            required
            className="p-3 mt-1 rounded-md border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-semibold">
            <T>Subject*</T>
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder={"Subject"}
            required
            className="p-3 mt-1 rounded-md border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-semibold">
            <T>Choose a Budget (USD)*</T>
          </label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
            className="p-3 mt-1 rounded-md border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">
              <T>Select budget</T>
            </option>
            <option value="Less than 5K">
              <T>Less than 5K</T>
            </option>
            <option value="5K - 10K">
              <T>5K - 10K</T>
            </option>
            <option value="10K - 20K">
              <T>10K - 20K</T>
            </option>
            <option value="20K+">
              <T>20K+</T>
            </option>
          </select>
        </div>
        <div className="flex flex-col col-span-2">
          <label className="text-sm font-semibold">
            <T>Project details*</T>
          </label>
          <textarea
            name="details"
            value={formData.details}
            onChange={handleChange}
            placeholder={"Provide some details about your project"}
            rows="5"
            className="p-3 mt-1 rounded-md border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          ></textarea>
        </div>
        <div className="col-span-2">
          <button
            type="submit"
            className="w-full md:w-auto bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-600 transition"
          >
            <T>Get a Quote</T>
          </button>
          {isSent && (
            <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">
              <T>Your message has been sent successfully!</T>
            </div>
          )}
          {error && (
            <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
              <T>{error}</T>
            </div>
          )}
        </div>
      </form>
    </section>
  );
};

export default ContactForm;

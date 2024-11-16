import { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          setTimeout(() => setIsSent(false), 3000);
          setFormData({
            name: "",
            email: "",
            company: "",
            phone: "",
            subject: "",
            budget: "",
            details: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="py-12 px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-4 text-sky-500">Drop us a line</h2>
      <p className="text-gray-600 mb-8">
        Fill in this form or{" "}
        <a
          href="mailto:info@techliftup.com"
          className="text-red-600 font-semibold"
        >
          send us an e-mail
        </a>{" "}
        with your inquiry.
      </p>

      {isSent && (
        <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">
          Your message has been sent successfully!
        </div>
      )}

      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label className="text-sm font-semibold">Name*</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="p-3 mt-1 rounded-md border bg-gray-100 focus:outline-none focus:border-gray-400"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-semibold">Email*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your working email"
            className="p-3 mt-1 rounded-md border bg-gray-100 focus:outline-none focus:border-gray-400"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-semibold">Company</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your company name"
            className="p-3 mt-1 rounded-md border bg-gray-100 focus:outline-none focus:border-gray-400"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-semibold">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your actual phone number"
            className="p-3 mt-1 rounded-md border bg-gray-100 focus:outline-none focus:border-gray-400"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-semibold">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Choose a subject"
            className="p-3 mt-1 rounded-md border bg-gray-100 focus:outline-none focus:border-gray-400"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-semibold">Choose a Budget (USD)</label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="p-3 mt-1 rounded-md border bg-gray-100 focus:outline-none focus:border-gray-400"
          >
            <option value="">Select budget</option>
            <option value="Less than 5K">Less than 5K</option>
            <option value="5K - 10K">5K - 10K</option>
            <option value="10K - 20K">10K - 20K</option>
            <option value="20K+">20K+</option>
          </select>
        </div>
        <div className="flex flex-col col-span-2">
          <label className="text-sm font-semibold">Project details</label>
          <textarea
            name="details"
            value={formData.details}
            onChange={handleChange}
            placeholder="Brief project details"
            rows="5"
            className="p-3 mt-1 rounded-md border bg-gray-100 focus:outline-none focus:border-gray-400"
          ></textarea>
        </div>
        <div className="flex items-start col-span-2">
          <input type="checkbox" className="mt-1 mr-2" />
          <p className="text-sm">
            I’m okay with getting emails and having that activity tracked to
            improve my experience.
          </p>
        </div>
        <div className="col-span-2">
          <button
            type="submit"
            className="w-full md:w-auto bg-red-500 text-white px-8 py-3 rounded mt-4 hover:bg-red-600 transition"
          >
            Get a Quote
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;

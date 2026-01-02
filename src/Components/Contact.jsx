import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("http://localhost:5678/webhook/ai-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-[#0a0a0a] p-8 rounded-2xl shadow-[0_0_30px_rgba(124,0,254,0.3)]">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-[#F9E400] tracking-wide">
          Contact Me
        </h2>
        <p className="text-center text-gray-400 mt-2">
          Let’s build something amazing together
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">

          {/* Name */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3
                         text-white focus:outline-none focus:border-[#7C00FE]
                         focus:shadow-[0_0_10px_#7C00FE]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3
                         text-white focus:outline-none focus:border-[#F9E400]
                         focus:shadow-[0_0_10px_#F9E400]"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your idea..."
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3
                         text-white resize-none focus:outline-none focus:border-[#FF2D2D]
                         focus:shadow-[0_0_10px_#FF2D2D]"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3 rounded-lg font-semibold text-black
                       bg-gradient-to-r from-[#7C00FE] via-[#FF2D2D] to-[#F9E400]
                       hover:opacity-90 transition duration-300
                       disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {/* Status Messages */}
          {status === "success" && (
            <p className="text-green-400 text-center mt-4">
              ✅ Message sent! Check your email.
            </p>
          )}

          {status === "error" && (
            <p className="text-red-400 text-center mt-4">
              ❌ Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;

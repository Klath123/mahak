import React, { useState, useEffect, useRef } from "react";

// Mock API
const API = {
  post: (url, data) =>
    new Promise((resolve) => {
      setTimeout(() => resolve({ status: 200 }), 1000);
    }),
};

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [toast, setToast] = useState(null);

  const sectionRef = useRef();

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const showToast = (msg, type) => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message)
      return showToast("Please fill all required fields.", "error");

    try {
      setLoading(true);
      await API.post("/contact", form);
      showToast("Message sent successfully!", "success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      showToast("Something went wrong.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      ref={sectionRef}
      className="relative w-full py-20  overflow-hidden"
    >
      {/* TOAST */}
      {toast && (
        <div
          className={`fixed top-6 right-6 px-5 py-3 rounded-lg text-white shadow-lg z-[999] animate-slideDown
          ${toast.type === "success" ? "bg-green-600" : "bg-red-500"}
        `}
        >
          {toast.msg}
          <button
            onClick={() => setToast(null)}
            className="ml-4 text-white font-bold text-lg"
          >
            ×
          </button>
        </div>
      )}

      {/* BACKGROUND DECORATION */}
      <div className="absolute -top-20 -right-10 w-80 h-80 bg-sky-900/5 rounded-full blur-3xl"></div>

      {/* MAIN GRID */}
      <div className="w-full flex flex-col md:flex-row">

        {/* LEFT FORM  */}
        <div
          className={`w-full md:w-1/2 px-6 md:px-16 transition-all duration-700
          ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
        `}
        >
          <h2 className="font-playfair text-4xl font-bold text-[#0b1e2e] mb-8">
            Get in Touch
          </h2>

          <div className="flex flex-col gap-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="p-4 bg-white rounded-xl border border-gray-300 focus:border-[#0b1e2e] outline-none"
              placeholder="Your Name"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className="p-4 bg-white rounded-xl border border-gray-300 focus:border-[#0b1e2e] outline-none"
              placeholder="Your Email"
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="p-4 bg-white rounded-xl border border-gray-300 focus:border-[#0b1e2e] outline-none"
              placeholder="Phone Number"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="p-4 bg-white rounded-xl border border-gray-300 focus:border-[#0b1e2e] outline-none min-h-[140px]"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="mt-6 px-8 py-4 rounded-xl text-white font-semibold bg-black  
            shadow-lg hover:-translate-y-1 transition-all disabled:opacity-50"
          >
            {loading ? "SENDING..." : "SEND MESSAGE"}
          </button>
        </div>

        {/* RIGHT SIDE — COMPANY INFO */}
        <div
          className={`w-full md:w-1/2 px-6 md:px-16 mt-10 md:mt-0 border-l md:border-l-2 border-gray-300/40
          transition-all duration-700
          ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
        `}
        >
          <h2 className="font-playfair text-3xl font-bold text-[#0b1e2e] mb-8">
            Our Offices
          </h2>

          <div className="flex flex-col gap-6">

            {/* CARD 1 */}
            <div className="glass-card">
              <h3 className="text-lg font-semibold text-[#0b1e2e] mb-2">
              Marketed By
              </h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Mahak Fragrances Pvt. Ltd</strong> <br />
                221, Silver Avenue Tower <br />
                Phoenix Road, Sector 14 <br />
                Noida, Uttar Pradesh — 201301
              </p>
            </div>

            {/* CARD 2 */}
            <div className="glass-card">
              <h3 className="text-lg font-semibold text-[#0b1e2e] mb-2">
                Manufactured By
              </h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>AromaCraft Labs</strong> <br />
                Plot 98, Industrial Estate <br />
                Horizon Park, IMT Manesar <br />
                Gurgaon, Haryana — 122050
              </p>
            </div>

            {/* CARD 3 */}
            <div className="glass-card">
              <h3 className="text-lg font-semibold text-[#0b1e2e] mb-3">
                 Contact Info
              </h3>

              <p>
                <strong>Email:</strong> <br />
                support@mahakfragrances.com
              </p>

              <p className="mt-3">
                <strong>Phone:</strong> <br />
                +91 98200 XXXXX <br />
                <span className="text-sm text-gray-500">
                  (Mon–Sun, 9 AM – 9 PM)
                </span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

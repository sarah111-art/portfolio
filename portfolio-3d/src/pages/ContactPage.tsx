import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';


export default function ContactPage() {
const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_portfolio',    // 🔁 Replace
        'template_12t9z0h',   // 🔁 Replace
        formRef.current!,
        'fhTnHy-x-kvfYUWbC'     // 🔁 Replace
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
        },
        (error) => {
          alert('Something went wrong. Please try again.');
        }
      );
  };
  return (
    <section id="contact" className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] bg-[length:400%_400%] animate-[bg-pan_10s_infinite] text-white py-20 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-cyan-400 text-center mb-12"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>

        {/* Contact Info + Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Info */}
          <motion.div
            className="space-y-6 text-gray-300"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-cyan-400" />
              <span>quy073880@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-cyan-400" />
              <span>0346062720</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-cyan-400" />
              <span>272 Bung Ong Thoan - Thu Duc - Ho Chi Minh City</span>
            </div>

            {/* Embedded Map */}
            <div className="mt-8 w-full">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.7539076612784!2d106.78310684859753!3d10.830135457893949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175271d07bfc895%3A0xf27b225a157859f1!2zMjcyIELGsG5nIMOUbmcgVGhvw6BuLCBUxINuZyBOaMahbiBQaMO6IEIsIFRo4bunIMSQ4bupYywgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1751643974441!5m2!1sen!2s"
                height="200"
                width="100%"
                allowFullScreen
                loading="lazy"
                className="rounded-lg border border-cyan-500"
              ></iframe>
            </div>
          </motion.div>

          {/* Form */}
         <motion.form 
  ref={formRef}
  className="space-y-4"
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  onSubmit={sendEmail}
>
  <input
    name="name" // ✅ PHẢI có để EmailJS nhận biến {{name}}
    type="text"
    placeholder="Your Name"
    required
    className="w-full p-3 rounded bg-[#1e293b] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
  />
  <input
    name="email" // ✅ Phải khớp với biến {{email}} trong template
    type="email"
    placeholder="Your Email"
    required
    className="w-full p-3 rounded bg-[#1e293b] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
  />
  <input
    name="title" // ✅ Tương ứng với {{title}} trong EmailJS subject
    type="text"
    placeholder="Subject"
    required
    className="w-full p-3 rounded bg-[#1e293b] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
  />
  <textarea
    name="message" // ✅ Gửi được {{message}} qua EmailJS
    rows={5}
    placeholder="Your Message"
    required
    className="w-full p-3 rounded bg-[#1e293b] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
  ></textarea>
  <div className="flex justify-center">
    <button
      type="submit"
      className="bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-2 rounded-full text-white hover:scale-105 transition"
    >
      Send Message
    </button>
  </div>
          </motion.form>

        </div>
      </div>
    </section>
  );
}

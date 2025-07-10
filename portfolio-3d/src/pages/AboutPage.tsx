// src/pages/AboutPage.tsx
import { motion } from 'framer-motion';
import React from 'react';

export default function AboutPage() {
  return (
    <section className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] bg-[length:400%_400%] animate-[bg-pan_10s_infinite] text-white py-16 px-6 min-h-screen" id="about">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          className="text-4xl font-extrabold text-cyan-400 text-center mb-12"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Soft Skills & Experience */}
        <motion.div
          className="mb-12 text-gray-200 leading-relaxed"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4">
            • Develop website interfaces for clients using <strong>HTML, CSS, JavaScript, Sass</strong> based on designs from Figma, Photoshop.
          </p>
          <p className="mb-4">
            • Ensure responsive, pixel-perfect, lazy loading, and SEO-friendly layouts.
          </p>
          <p className="mb-4">
            • Analyze requirements, propose technical solutions, and resolve issues during UI implementation.
          </p>
          <p className="mb-4">
            • Collaborate with the design team to ensure high-quality UI/UX following best practices.
          </p>
          <p className="mb-4">
            • Write clean, maintainable, high-performance code and keep up with modern trends in web technologies and animation.
          </p>
          <p>
            • Build realtime features using <strong>Socket.IO</strong> such as chat, notifications, and online user status.
          </p>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 text-gray-200 text-sm"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ul className="space-y-2 list-disc list-inside">
            <li>Proficient in <strong>HTML5, CSS3, JavaScript (ES6+)</strong></li>
            <li><strong>React.js</strong> (with Redux, React Query, Next.js)</li>
            <li>Understand SPA architecture & component-based design</li>
            <li>Responsive design and UI/UX from Figma</li>
            <li>Skilled in <strong>TypeScript</strong> and <strong>framer-motion</strong></li>
            <li>Experienced working with <strong>RESTful APIs</strong>, lazy loading & SEO</li>
            <li>Realtime communication with <strong>Socket.IO</strong> (chat, notifications)</li>
          </ul>

          <ul className="space-y-2 list-disc list-inside">
            <li>Backend development with <strong>Node.js</strong>, <strong>Express.js</strong></li>
            <li>Authentication & Authorization using <strong>JWT</strong>, <strong>bcrypt</strong></li>
            <li>Used <strong>Tailwind CSS</strong>, <strong>MongoDB</strong>, <strong>SQL Server</strong>, <strong>MySQL</strong></li>
            <li>Deploy using <strong>Vercel</strong>, <strong>Render</strong>, GitHub</li>
            <li>Experience with <strong>Webpack</strong>, <strong>Vite</strong>, <strong>ESLint</strong></li>
            <li>Proficient with Git</li>
            <li>Strong in clean code principles and performance optimization</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

// src/pages/AboutPage.tsx
import { motion } from 'framer-motion';
import React from 'react';

export default function AboutPage() {
  return (
    <section className="relative text-white py-16 px-6 min-h-screen overflow-hidden" id="about">
      {/* GIF Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src="/GIF/giphy.gif" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>
      {/* Overlay để text dễ đọc */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      <div className="relative z-20 max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-cyan-400 text-center mb-12"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Soft Skills & Experience */}
        <motion.div
          className="mb-12 text-white text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4">
            • <strong>Fullstack Developer</strong> with experience in developing web applications from frontend to backend.
          </p>
          <p className="mb-4">
            • Develop responsive, pixel-perfect website interfaces using <strong>ReactJS, Tailwind CSS, HTML, CSS</strong> based on designs from Figma, Photoshop.
          </p>
          <p className="mb-4">
            • Build and develop backend with <strong>Node.js, NestJS</strong>, experienced with <strong>PHP</strong> and gateway configuration.
          </p>
          <p className="mb-4">
            • Design and develop <strong>RESTful API</strong> with full <strong>CRUD</strong> operations.
          </p>
          <p className="mb-4">
            • Understand and apply <strong>microservices</strong> architecture in real-world projects.
          </p>
          <p className="mb-4">
            • Work with databases: <strong>MySQL</strong> (schema design, query optimization, migration), <strong>SQL Server</strong>.
          </p>
          <p className="mb-4">
            • Deploy applications using <strong>Docker, Vercel, Render</strong> and cloud platforms such as <strong>AWS, Cloudinary</strong>.
          </p>
          <p>
            • <strong>TOEIC 485</strong> - Capable of reading and understanding technical English documentation.
          </p>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 text-white text-base md:text-lg"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ul className="space-y-2 list-disc list-inside">
            <li><strong>Frontend:</strong> <strong>ReactJS</strong>, <strong>Tailwind CSS</strong>, <strong>HTML</strong>, <strong>CSS</strong></li>
            <li>Proficient in <strong>HTML5, CSS3, JavaScript (ES6+)</strong></li>
            <li>Understand SPA architecture & component-based design</li>
            <li>Responsive design and UI/UX from Figma</li>
            <li>Skilled in <strong>TypeScript</strong> and <strong>framer-motion</strong></li>
            <li>Experienced working with <strong>RESTful APIs</strong>, lazy loading & SEO</li>
            <li>Realtime communication with <strong>Socket.IO</strong> (chat, notifications)</li>
          </ul>

          <ul className="space-y-2 list-disc list-inside">
            <li><strong>Backend:</strong> <strong>Node.js</strong>, <strong>NestJS</strong></li>
            <li>Experienced with <strong>PHP</strong> and gateway configuration</li>
            <li>Authentication & Authorization using <strong>JWT</strong>, <strong>bcrypt</strong></li>
            <li><strong>Databases:</strong> <strong>MySQL</strong> (schema design, query optimization, migration), <strong>SQL Server</strong></li>
            <li><strong>Cloud Platforms:</strong> <strong>AWS</strong>, <strong>Cloudinary</strong></li>
            <li>Deploy using <strong>Docker</strong>, <strong>Vercel</strong>, <strong>Render</strong></li>
            <li>Understand <strong>microservices</strong> architecture</li>
            <li>Proficient with Git and clean code principles</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

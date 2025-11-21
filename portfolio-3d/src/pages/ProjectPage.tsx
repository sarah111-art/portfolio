import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { mockProjects } from '../project';

export default function ProjectsPage() {
  return (
    <section
      id="projects"
      className="relative text-white py-20 px-6 min-h-screen overflow-hidden"
    >
      <Helmet>
        <title>My Projects | Portfolio</title>
        <meta name="description" content="Explore real-world projects I've built using MERN stack, React, and realtime technologies." />
      </Helmet>

      {/* GIF Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src="/GIF/giphy.gif" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>
      {/* Overlay để text dễ đọc */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <div className="relative z-20 max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-cyan-400 text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-[#1e293b] rounded-lg shadow-lg p-6 border border-cyan-500 hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-sm text-cyan-400 mb-2">{project.technologies.join(', ')}</p>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>

              <Link to={`/projects/${project.id}`} className="text-sm text-blue-400 hover:underline block mb-2">
                View Detail →
              </Link>
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:underline">
                Live Demo →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

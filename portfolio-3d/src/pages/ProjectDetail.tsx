import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { mockProjects, Project } from '../../src/project';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const found = mockProjects.find((p) => p.id === id);
    setProject(found || null);
  }, [id]);

  if (!project) return <div className="text-white text-center py-20">Project not found</div>;

  const currentIndex = mockProjects.findIndex((p) => p.id === id);
  const prevProject = mockProjects[currentIndex - 1];
  const nextProject = mockProjects[currentIndex + 1];

  return (
    <section className="bg-slate-900 text-white min-h-screen py-16 px-6">
      <Helmet>
        <title>{project.title} | My Portfolio</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <div className="text-sm mb-6 text-gray-400">
          <Link to="/" className="hover:underline text-cyan-400">Home</Link> /{" "}
          <Link to="/projects" className="hover:underline text-cyan-400">Projects</Link> /{" "}
          <span className="text-gray-300">{project.title}</span>
        </div>

        {/* Title */}
        <motion.h1
          className="text-4xl font-extrabold text-cyan-400 mb-6 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {project.title}
        </motion.h1>

        {/* Image */}
        <motion.img
          src={project.imageUrl}
          alt={project.title}
          className="w-full max-h-[400px] object-cover rounded-xl shadow-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        />

        {/* Description */}
        <motion.p
          className="text-lg text-gray-300 mb-8 leading-relaxed text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {project.description}
        </motion.p>

        {/* Tech Stack */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-cyan-300 mb-3">Tech Stack</h2>
          <ul className="list-disc list-inside grid grid-cols-2 gap-2 text-gray-200">
            {project.technologies.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {/* Frontend Demo */}
          {project.demoUrl && (
            <div className="bg-[#1e293b] p-5 rounded-lg shadow border border-cyan-500">
              <h3 className="text-lg font-semibold text-cyan-300 mb-2">Live Demo (Frontend)</h3>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm text-blue-400 underline hover:text-blue-300"
              >
                {project.demoUrl}
              </a>
            </div>
          )}

          {/* Admin Demo */}
          {project.demoUrlAdmin && (
            <div className="bg-[#1e293b] p-5 rounded-lg shadow border border-cyan-500">
              <h3 className="text-lg font-semibold text-cyan-300 mb-2">Admin Panel</h3>
              <a
                href={project.demoUrlAdmin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm text-blue-400 underline hover:text-blue-300 mb-2"
              >
                {project.demoUrlAdmin}
              </a>
              <div className="mt-3 text-gray-400 text-sm space-y-1">
                <p>👤 <strong>Username: admin@foodsun.com</strong> {project.username}</p>
                <p>🔒 <strong>Password: admin123</strong> {project.pass}</p>
              </div>
            </div>
          )}
        </motion.div>

        {/* Source Code & Back */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          {project.sourceCode && (
            <a
              href={project.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 px-5 py-2 rounded hover:bg-gray-600"
            >
              View Source Code
            </a>
          )}
          <Link to="/projects" className="text-cyan-300 underline hover:text-cyan-400">
            ← Back to Projects
          </Link>
        </div>

        {/* Prev/Next */}
        <div className="flex justify-between mt-12 text-cyan-300 text-sm">
          {prevProject ? (
            <button onClick={() => navigate(`/projects/${prevProject.id}`)} className="hover:underline">
              ← {prevProject.title}
            </button>
          ) : <div />}
          {nextProject ? (
            <button onClick={() => navigate(`/projects/${nextProject.id}`)} className="hover:underline">
              {nextProject.title} →
            </button>
          ) : <div />}
        </div>
      </div>
    </section>
  );
}

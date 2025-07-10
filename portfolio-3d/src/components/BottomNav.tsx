import React from "react"
import {
  FaHome,
  FaUserAlt,
  FaProjectDiagram,
  FaEnvelope
} from "react-icons/fa"

export default function BottomNav() {
  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-[#0f172a] border border-cyan-500 rounded-full shadow-lg px-6 py-3 flex gap-6 items-center justify-center backdrop-blur-md">
        <a href="/" className="text-white hover:text-cyan-400 text-xl transition duration-300">
          <FaHome />
        </a>
        <a href="/about" className="text-white hover:text-cyan-400 text-xl transition duration-300">
          <FaUserAlt />
        </a>
        <a href="/project" className="text-white hover:text-cyan-400 text-xl transition duration-300">
          <FaProjectDiagram />
        </a>
        <a href="/contact" className="text-white hover:text-cyan-400 text-xl transition duration-300">
          <FaEnvelope />
        </a>
      </div>
    </nav>
  )
}

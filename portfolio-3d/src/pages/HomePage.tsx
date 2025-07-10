// src/pages/HomePage.tsx
import { FaLinkedinIn, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa'
import avatar from '../assets/avatar/avatar.png'
import Star from '../components/icon/Star'

export default function HomePage() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] bg-[length:400%_400%] animate-[bg-pan_10s_infinite] text-white flex items-center justify-center px-6 py-10">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT: Info */}
        <div className="space-y-6 text-center md:text-left">
          <p className="text-xl">Hello I’m</p>
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 leading-tight">
            Quy <span className="text-blue-500 ">Nguyen</span>
          </h1>
          <h2 className="text-xl font-semibold text-gray-100">Frontend Developer</h2>
          <p className="text-gray-300 text-sm max-w-md mx-auto md:mx-0">
            I specialize in building beautiful and performant web interfaces. Passionate about clean code and responsive design.
          </p>

          <div className="flex flex-wrap md:justify-start justify-center items-center gap-4">
        <button className="bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2 rounded-full shadow-lg hover:scale-105 transition relative overflow-hidden">
          <span className="animate-pulse">Download CV</span>
          <span className="absolute -top-5 right-2 text-[10px] text-yellow-300 animate-ping">Click me</span>
        </button>


            {/* Social icons */}
            <div className="flex gap-3 text-cyan-400 text-4xl">
              <a href="#"><FaGithub /></a>
            </div>
          </div>
        </div>
     {/* RIGHT: Avatar */}
<div className="relative w-full flex justify-center">
  <img
    src={avatar}
    alt="Avatar"
    className="w-[300px] sm:w-[350px] md:w-[400px] lg:w-[500px] object-cover rounded drop-shadow-xl transition-all duration-300"
  />

  {/* Các ngôi sao blink blink */}
  <Star top="20px" left="20px" delay="0s" />
  <Star top="10%" left="80%" delay="0.5s" />
  <Star top="70%" left="10%" delay="1s" />
  <Star top="90%" left="90%" delay="1.3s" />
</div>

        
      </div>
    </section>
  )
}

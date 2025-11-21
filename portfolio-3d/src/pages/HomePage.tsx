// src/pages/HomePage.tsx
import { FaLinkedinIn, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa'
import { motion } from 'framer-motion'
import avatar from '../assets/avatar/1.png'
import Star from '../components/icon/Star'

export default function HomePage() {
  return (
    <section className="relative w-full min-h-screen text-white flex items-center justify-center px-6 py-10 overflow-hidden">
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
      
      <div className="relative z-20 max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT: Info */}
        <div className="space-y-6 text-center md:text-left">
          <motion.p 
            className="text-2xl md:text-3xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hello I'm
          </motion.p>
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-cyan-400 leading-tight"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Quy <span className="text-blue-500">Nguyen</span>
          </motion.h1>
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Fullstack Developer
          </motion.h2>
          <motion.p 
            className="text-base md:text-lg text-gray-300 max-w-md mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            I specialize in building full-stack web applications with ReactJS, Node.js, and NestJS. Passionate about clean code, microservices architecture, and cloud deployment.
          </motion.p>

          <motion.div 
            className="flex flex-wrap md:justify-start justify-center items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-full shadow-lg hover:scale-105 transition relative overflow-hidden text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="animate-pulse">Download CV</span>
              <span className="absolute -top-5 right-2 text-[10px] text-yellow-300 animate-ping">Click me</span>
            </motion.button>

            {/* Social icons */}
            <motion.div 
              className="flex gap-3 text-cyan-400 text-4xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.a 
                href="https://github.com/sarah111-art/"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
     {/* RIGHT: Avatar */}
<motion.div 
  className="relative w-full flex justify-center"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.3 }}
>
  <motion.img
    src={avatar}
    alt="Avatar"
    className="w-[400px] sm:w-[500px] md:w-[600px] lg:w-[700px] xl:w-[800px] object-cover rounded drop-shadow-xl transition-all duration-300"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  />

  {/* Blinking stars */}
  <Star top="20px" left="20px" delay="0s" />
  <Star top="10%" left="80%" delay="0.5s" />
  <Star top="70%" left="10%" delay="1s" />
  <Star top="90%" left="90%" delay="1.3s" />
</motion.div>

        
      </div>
    </section>
  )
}

"use client";
import { motion } from "framer-motion";
import { Github, Mail, Twitter, Linkedin, MessageCircle, ExternalLink } from "lucide-react";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="relative text-white text-center overflow-x-hidden">
      <Navbar />

      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6">
        <div className="absolute w-[600px] h-[600px] bg-[#000000] opacity-20 blur-[120px] rounded-full pointer-events-none"></div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-6xl md:text-8xl leading-[1.15] py-2 font-bold bg-gradient-to-r from-white via-[#268c67] to-white text-transparent bg-clip-text"
        >
          Nigam Vaghani
        </motion.h1>

        <p className="relative z-10 mt-6 text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
          Full stack developer building products that matter
        </p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative z-10 flex gap-6 mt-10"
        >
          <button className="px-7 py-3 bg-[#268c67] rounded-full font-medium hover:scale-110 hover:bg-[#2ea878] transition-all duration-300">
            View Projects
          </button>

          <button className="px-7 py-3 border border-gray-500 rounded-full hover:border-white hover:scale-110 transition-all duration-300">
            Connect
          </button>
        </motion.div>
      </section>

      <section id="projects" className="min-h-screen flex flex-col items-center justify-center px-6 py-24">

  <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-white to-[#268c67] text-transparent bg-clip-text py-1.5">
  Projects
</h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">

    <div className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-[0_0_25px_rgba(38,140,103,0.12)] hover:border-[#268c67] hover:scale-105 hover:shadow-[0_0_35px_rgba(38,140,103,0.28)] transition duration-300">
      <h3 className="text-xl font-semibold mb-3">Gesture Controlled Presentation</h3>
      <p className="text-gray-400 text-sm">
        Control presentations using hand gestures with OpenCV and computer vision.
      </p>
      <a
        href="https://github.com/Nigam-Vaghani/gesture-controlled-presentation"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2 text-sm text-gray-300 hover:text-[#268c67] transition"
      >
        <Github size={16} />
        View Repo
      </a>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-[0_0_25px_rgba(38,140,103,0.12)] hover:border-[#268c67] hover:scale-105 hover:shadow-[0_0_35px_rgba(38,140,103,0.28)] transition duration-300">
      <h3 className="text-xl font-semibold mb-3">AI Route Optimizer</h3>
      <p className="text-gray-400 text-sm">
        AI-powered delivery route optimization using graph algorithms and machine learning.
      </p>
      <a
        href="https://github.com/Nigam-Vaghani/ai-route-optimizer"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2 text-sm text-gray-300 hover:text-[#268c67] transition"
      >
        <Github size={16} />
        View Repo
      </a>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-[0_0_25px_rgba(38,140,103,0.12)] hover:border-[#268c67] hover:scale-105 hover:shadow-[0_0_35px_rgba(38,140,103,0.28)] transition duration-300">
      <h3 className="text-xl font-semibold mb-3">Codeforces CLI</h3>
      <p className="text-gray-400 text-sm">
        Command line tool to fetch problems, track progress and practice competitive programming.
      </p>
      <a
        href="https://github.com/Nigam-Vaghani/codeforces_cli"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2 text-sm text-gray-300 hover:text-[#268c67] transition"
      >
        <Github size={16} />
        View Repo
      </a>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-[0_0_25px_rgba(38,140,103,0.12)] hover:border-[#268c67] hover:scale-105 hover:shadow-[0_0_35px_rgba(38,140,103,0.28)] transition duration-300">
      <h3 className="text-xl font-semibold mb-3">NovaOS</h3>
      <p className="text-gray-400 text-sm">
        Experimental operating system project focused on automation and developer productivity.
      </p>
      <a
        href="https://github.com/Nigam-Vaghani/novaos"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2 text-sm text-gray-300 hover:text-[#268c67] transition"
      >
        <Github size={16} />
        View Repo
      </a>
    </div>

  </div>

</section>

<section id="skills" className="min-h-screen flex flex-col items-center justify-center px-6 py-24">

  <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-white to-[#268c67] text-transparent bg-clip-text">
    Skills
  </h2>

  <div className="max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

    <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 whitespace-nowrap hover:border-[#268c67] hover:scale-105 transition">Python</div>
    <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 whitespace-nowrap hover:border-[#268c67] hover:scale-105 transition">Java</div>
    <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 whitespace-nowrap hover:border-[#268c67] hover:scale-105 transition">C</div>
    <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 whitespace-nowrap hover:border-[#268c67] hover:scale-105 transition">Next.js</div>

    <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 whitespace-nowrap hover:border-[#268c67] hover:scale-105 transition">Flask</div>
    <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 whitespace-nowrap hover:border-[#268c67] hover:scale-105 transition">Django</div>
    <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 whitespace-nowrap hover:border-[#268c67] hover:scale-105 transition">MongoDB</div>
    <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 whitespace-nowrap hover:border-[#268c67] hover:scale-105 transition">PostgreSQL</div>

    <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 whitespace-nowrap hover:border-[#268c67] hover:scale-105 transition">AI / ML</div>
    <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 whitespace-nowrap hover:border-[#268c67] hover:scale-105 transition">Blockchain</div>

  </div>

</section>

<section id="connect" className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-left">

  <h2 className="text-center text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-white to-[#268c67] text-transparent bg-clip-text">
    Let&apos;s Connect...
  </h2>

  <div className="w-full max-w-6xl rounded-2xl border border-white/10 bg-black/20 backdrop-blur-sm overflow-hidden">
    <a
      href="mailto:vaghaninigam2003@gmail.com"
      className="flex items-center justify-between gap-6 px-6 md:px-8 py-6 border-b border-white/10 hover:bg-white/5 transition"
    >
      <span className="flex items-center gap-4 text-gray-300">
        <Mail size={22} className="text-gray-400" />
        <span className="text-2xl">Email</span>
      </span>
      <span className="flex items-center gap-3 text-xl md:text-2xl font-semibold text-white">
        vaghaninigam2003@gmail.com
        <ExternalLink size={20} className="text-gray-400" />
      </span>
    </a>

    <a
      href="https://github.com/Nigam-Vaghani"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between gap-6 px-6 md:px-8 py-6 border-b border-white/10 hover:bg-white/5 transition"
    >
      <span className="flex items-center gap-4 text-gray-300">
        <Github size={22} className="text-gray-400" />
        <span className="text-2xl">GitHub</span>
      </span>
      <span className="flex items-center gap-3 text-xl md:text-2xl font-semibold text-white">
        @Nigam-Vaghani
        <ExternalLink size={20} className="text-gray-400" />
      </span>
    </a>

    <a
      href="#"
      className="flex items-center justify-between gap-6 px-6 md:px-8 py-6 border-b border-white/10 hover:bg-white/5 transition"
    >
      <span className="flex items-center gap-4 text-gray-300">
        <Twitter size={22} className="text-gray-400" />
        <span className="text-2xl">Twitter</span>
      </span>
      <span className="flex items-center gap-3 text-xl md:text-2xl font-semibold text-white">
        @nigam
        <ExternalLink size={20} className="text-gray-400" />
      </span>
    </a>

    <a
      href="https://www.linkedin.com/in/nigam-vaghani-4a5086260/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between gap-6 px-6 md:px-8 py-6 border-b border-white/10 hover:bg-white/5 transition"
    >
      <span className="flex items-center gap-4 text-gray-300">
        <Linkedin size={22} className="text-gray-400" />
        <span className="text-2xl">LinkedIn</span>
      </span>
      <span className="flex items-center gap-3 text-xl md:text-2xl font-semibold text-white">
        nigam-vaghani
        <ExternalLink size={20} className="text-gray-400" />
      </span>
    </a>

    <a
      href="#"
      className="flex items-center justify-between gap-6 px-6 md:px-8 py-6 hover:bg-white/5 transition"
    >
      <span className="flex items-center gap-4 text-gray-300">
        <MessageCircle size={22} className="text-gray-400" />
        <span className="text-2xl">Discord</span>
      </span>
      <span className="flex items-center gap-3 text-xl md:text-2xl font-semibold text-white">
        Join Server
        <ExternalLink size={20} className="text-gray-400" />
      </span>
    </a>
  </div>

</section>

    </main>
  );
}
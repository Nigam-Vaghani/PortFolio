"use client";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="relative bg-black text-white text-center overflow-x-hidden">
      <Navbar />

      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6">
        <div className="absolute w-[600px] h-[600px] bg-[#268c67] opacity-20 blur-[120px] rounded-full"></div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl leading-[1.15] py-2 font-bold bg-gradient-to-r from-white via-[#268c67] to-white text-transparent bg-clip-text"
        >
          Nigam Vaghani
        </motion.h1>

        <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
          Full stack developer building products that matter
        </p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex gap-6 mt-10"
        >
          <button className="px-7 py-3 bg-[#268c67] rounded-full font-medium hover:scale-110 hover:bg-[#2ea878] transition-all duration-300">
            View Projects
          </button>

          <button className="px-7 py-3 border border-gray-500 rounded-full hover:border-white hover:scale-110 transition-all duration-300">
            Contact
          </button>
        </motion.div>
      </section>

      <section id="projects" className="min-h-screen flex flex-col items-center justify-center px-6 py-24">

  <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-white to-[#268c67] text-transparent bg-clip-text py-1.5">
  Projects
</h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl p-2 rounded-2xl shadow-[0_0_70px_rgba(38,140,103,0.18)]">

    <div className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-[0_0_25px_rgba(38,140,103,0.12)] hover:border-[#268c67] hover:scale-105 hover:shadow-[0_0_35px_rgba(38,140,103,0.28)] transition duration-300">
      <h3 className="text-xl font-semibold mb-3">Gesture Controlled Presentation</h3>
      <p className="text-gray-400 text-sm">
        Control presentations using hand gestures with OpenCV and computer vision.
      </p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-[0_0_25px_rgba(38,140,103,0.12)] hover:border-[#268c67] hover:scale-105 hover:shadow-[0_0_35px_rgba(38,140,103,0.28)] transition duration-300">
      <h3 className="text-xl font-semibold mb-3">AI Route Optimizer</h3>
      <p className="text-gray-400 text-sm">
        AI-powered delivery route optimization using graph algorithms and machine learning.
      </p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-[0_0_25px_rgba(38,140,103,0.12)] hover:border-[#268c67] hover:scale-105 hover:shadow-[0_0_35px_rgba(38,140,103,0.28)] transition duration-300">
      <h3 className="text-xl font-semibold mb-3">Codeforces CLI</h3>
      <p className="text-gray-400 text-sm">
        Command line tool to fetch problems, track progress and practice competitive programming.
      </p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-[0_0_25px_rgba(38,140,103,0.12)] hover:border-[#268c67] hover:scale-105 hover:shadow-[0_0_35px_rgba(38,140,103,0.28)] transition duration-300">
      <h3 className="text-xl font-semibold mb-3">NovaOS</h3>
      <p className="text-gray-400 text-sm">
        Experimental operating system project focused on automation and developer productivity.
      </p>
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

<section id="contact" className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center">

  <h2 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-white to-[#268c67] text-transparent bg-clip-text">
    Contact
  </h2>

  <p className="text-gray-400 max-w-xl mb-10">
    I&apos;m always open to discussing new projects, ideas, or opportunities to build something impactful.
  </p>

  <a
  href="mailto:nigamvaghani@gmail.com"
  className="px-8 py-4 bg-[#268c67] rounded-full hover:scale-110 hover:bg-[#2ea878] transition-all duration-300"
>
  Email Me
</a>

  <div className="flex gap-8 mt-12 text-gray-400">

    <a
  href="https://github.com/Nigam-Vaghani"
  target="_blank"
  className="hover:text-[#268c67] transition"
>
  GitHub
</a>

    <a href="https://www.linkedin.com/in/nigam-vaghani-4a5086260/" className="hover:text-[#268c67] transition">
      LinkedIn
    </a>

    <a href="#" className="hover:text-[#268c67] transition">
      Twitter
    </a>

  </div>

</section>

    </main>
  );
}
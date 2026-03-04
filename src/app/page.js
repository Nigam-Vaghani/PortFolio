"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Sparkles,
  Twitter,
} from "lucide-react";
import Navbar from "../components/Navbar";

const projects = [
  {
    title: "Gesture Controlled Presentation",
    summary:
      "Real-time hand-tracking system to control slide decks with natural gestures.",
    impact: "Turns presentations into a touchless, intuitive interaction model.",
    stack: ["Python", "OpenCV", "Computer Vision"],
    repo: "https://github.com/Nigam-Vaghani/gesture-controlled-presentation",
  },
  {
    title: "AI Route Optimizer",
    summary:
      "Intelligent route planner that balances speed, distance, and delivery constraints.",
    impact: "Improves delivery decisions with algorithmic optimization.",
    stack: ["ML", "Graph Algorithms", "Optimization"],
    repo: "https://github.com/Nigam-Vaghani/ai-route-optimizer",
  },
  {
    title: "Codeforces CLI",
    summary:
      "Developer CLI for discovering problems, tracking progress, and focused practice.",
    impact: "Builds consistency for competitive programmers through automation.",
    stack: ["Python", "CLI", "Automation"],
    repo: "https://github.com/Nigam-Vaghani/codeforces_cli",
  },
  {
    title: "NovaOS",
    summary:
      "Experimental systems project exploring low-level architecture and OS behavior.",
    impact: "Sharpens systems thinking and deep engineering fundamentals.",
    stack: ["Systems", "Kernel Concepts", "R&D"],
    repo: "https://github.com/Nigam-Vaghani/novaos",
  },
];

const skills = [
  "Python",
  "Java",
  "C",
  "Next.js",
  "Flask",
  "Django",
  "MongoDB",
  "PostgreSQL",
  "AI / ML",
  "Blockchain",
];

const principles = [
  {
    title: "Think",
    body: "Start from the problem, not the trend. I break complexity into clear decisions.",
  },
  {
    title: "Design",
    body: "Every interface should communicate intent instantly and feel crafted, not assembled.",
  },
  {
    title: "Develop",
    body: "Ship performant, maintainable code with strong structure and measurable outcomes.",
  },
];

const contactLinks = [
  {
    label: "Email",
    value: "vaghaninigam2003@gmail.com",
    href: "mailto:vaghaninigam2003@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "@Nigam-Vaghani",
    href: "https://github.com/Nigam-Vaghani",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "nigam-vaghani",
    href: "https://www.linkedin.com/in/nigam-vaghani-4a5086260/",
    icon: Linkedin,
  },
  {
    label: "Twitter",
    value: "@nigam",
    href: "#",
    icon: Twitter,
  },
  {
    label: "Discord",
    value: "Join Server",
    href: "#",
    icon: MessageCircle,
  },
];

const rise = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="relative overflow-x-hidden text-white">
      <Navbar />

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-44 h-80 w-80 -translate-x-1/2 rounded-full bg-[#2ea878]/10 blur-3xl" />
      </div>

      <section id="home" className="mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 pt-24">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            variants={rise}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#2ea878]/40 bg-[#2ea878]/10 px-4 py-2 text-xs tracking-wide text-[#bce6d4]">
              
              KEEP IT SIMPLE
            </div>

            <h1 className="bg-linear-to-r from-white via-[#b7e6d3] to-[#2ea878] bg-clip-text py-2 text-5xl font-black leading-[1.14] text-transparent md:text-7xl">
              Nigam Vaghani
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
              Full-Stack developer building product that matters
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-[#2ea878] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#37bc86]"
              >
                View My Work
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </a>
              <a
                href="#connect"
                className="rounded-xl border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#2ea878] hover:bg-[#2ea878]/10"
              >
                Let&apos;s Connect
              </a>
            </div>
          </motion.div>

          <motion.aside
            variants={rise}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.55, delay: 0.12 }}
            className="rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur-md"
          >
            <p className="text-xs tracking-[0.22em] text-[#a8d9c5]">DEVELOPER SNAPSHOT</p>
            <div className="mt-5 space-y-4 text-sm text-gray-300">
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-gray-400">Focus</p>
                <p className="mt-1 text-base text-white">Product engineering + full stack execution</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-gray-400">Strength</p>
                <p className="mt-1 text-base text-white">Turning complex ideas into clean user experiences</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-gray-400">Standard</p>
                <p className="mt-1 text-base text-white">Fast, maintainable, and high signal craftsmanship</p>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      <section id="approach" className="mx-auto w-full max-w-6xl px-6 py-24">
        <h2 className="bg-linear-to-r from-white to-[#2ea878] bg-clip-text py-1 text-center text-4xl font-bold leading-[1.15] text-transparent md:text-5xl">
          My Approach
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-400">
          More animation doesn&apos;t mean better. Clear thinking, intentional design, and strong engineering do.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {principles.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-2xl border border-white/10 bg-linear-to-b from-white/8 to-white/3 p-6"
            >
              <p className="text-xs tracking-[0.2em] text-[#9fd8c2]">0{index + 1}</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-gray-300">{item.body}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-24">
        <h2 className="bg-linear-to-r from-white to-[#2ea878] bg-clip-text py-1 text-center text-4xl font-bold leading-[1.15] text-transparent md:text-5xl">
          Selected Work
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-400">
          Projects built with practical impact, not demo-only polish.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.42, delay: index * 0.07 }}
              className="group rounded-2xl border border-white/10 bg-black/30 p-7 transition hover:border-[#2ea878]/70"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs tracking-[0.2em] text-[#9fd8c2]">PROJECT {String(index + 1).padStart(2, "0")}</span>
              </div>

              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-gray-300">{project.summary}</p>
              <p className="mt-3 text-sm text-[#c7e8da]">{project.impact}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <span
                    key={`${project.title}-${tag}`}
                    className="rounded-md border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/20 px-3.5 py-2 text-sm font-medium text-gray-200 transition hover:border-[#2ea878] hover:text-[#bce6d4]"
              >
                <Github size={15} />
                View Repository
              </a>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto w-full max-w-6xl px-6 py-24">
        <h2 className="bg-linear-to-r from-white to-[#2ea878] bg-clip-text py-1 text-center text-4xl font-bold leading-[1.15] text-transparent md:text-5xl">
          Technical Range
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-400">
          A balanced stack across systems, backend, and product-driven frontend.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.26, delay: index * 0.02 }}
              className="rounded-xl border border-white/12 bg-white/4 px-5 py-3 text-sm font-medium text-gray-100 transition hover:border-[#2ea878]/70 hover:bg-[#2ea878]/10"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </section>

      <section id="connect" className="mx-auto w-full max-w-6xl px-6 pb-24 pt-24">
        <h2 className="bg-linear-to-r from-white to-[#2ea878] bg-clip-text py-1 text-center text-4xl font-bold leading-[1.15] text-transparent md:text-5xl">
          Let&apos;s Connect
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-400">
          Building something meaningful? Let&apos;s talk.
        </p>

        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-black/25 backdrop-blur-md">
          {contactLinks.map((item, index) => {
            const Icon = item.icon;
            const external = item.href.startsWith("http");
            return (
              <a
                key={item.label}
                href={item.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className={`flex items-center justify-between gap-4 px-6 py-5 transition hover:bg-white/4 md:px-8 ${
                  index !== contactLinks.length - 1 ? "border-b border-white/10" : ""
                }`}
              >
                <span className="flex items-center gap-4 text-base text-gray-300 md:text-xl">
                  <Icon size={20} className="text-gray-400" />
                  {item.label}
                </span>
                <span className="flex items-center gap-2 text-sm font-semibold text-white md:text-lg">
                  {item.value}
                  <ExternalLink size={16} className="text-gray-400" />
                </span>
              </a>
            );
          })}
        </div>
      </section>
    </main>
  );
}

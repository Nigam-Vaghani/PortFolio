"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  Coffee,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowRight,
  Code2,
  Server,
  Cpu,
  Layers,
  Terminal,
  Zap,
  Database,
  Globe,
  Activity,
  Check,
  Copy,
  ChevronRight,
  Star,
  Sparkles
} from "lucide-react";
import Navbar from "../components/Navbar";
import EmailModal from "../components/EmailModal";

// ─── Animated Counter ─────────────────────────────────────────────────────────
function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1800;
          const step = target / (duration / 16);
          const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(start));
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// ─── Section Wrapper with scroll reveal ───────────────────────────────────────
function Section({ id, className = "", children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        } ${className}`}
    >
      {children}
    </section>
  );
}

// ─── Project Showcases ─────────────────────────────────────────────────────────
const NovaGatewayDemo = () => (
  <div className="h-full w-full rounded-2xl overflow-hidden border border-[var(--border)] bg-[#1c120a] font-mono text-xs flex flex-col">
    <div className="flex items-center gap-2 border-b border-white/10 bg-black/30 px-4 py-3">
      <div className="flex gap-1.5">
        <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
      </div>
      <span className="ml-2 text-[11px] text-white/40 font-medium">nova-gateway — prod</span>
      <span className="ml-auto inline-flex items-center gap-1.5 text-[10px] text-emerald-400 font-semibold">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
        LIVE
      </span>
    </div>

    <div className="flex-1 p-4 space-y-2 text-[11px]">
      <div className="text-white/30 mb-3">// Gateway routing log — real-time</div>
      {[
        { color: "text-[var(--gold)]", tag: "ROUTE", msg: "GET /api/v1/auth → upstream-auth", time: "0.4ms" },
        { color: "text-emerald-400", tag: "LIMIT", msg: "IP 192.168.1.1 → token-bucket 98/100", time: "0.2ms" },
        { color: "text-blue-400", tag: "CACHE", msg: "Redis HIT [session_tenant_772]", time: "0.1ms" },
        { color: "text-[var(--gold)]", tag: "ROUTE", msg: "POST /api/v1/sync → upstream-core", time: "0.7ms" },
      ].map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.3, duration: 0.4 }}
          className="flex items-center gap-2 text-white/70"
        >
          <span className={`${line.color} font-bold text-[9px] bg-white/5 px-1.5 py-0.5 rounded`}>{line.tag}</span>
          <span className="flex-1 truncate">{line.msg}</span>
          <span className="text-white/30 shrink-0">{line.time}</span>
        </motion.div>
      ))}
    </div>

    {/* Traffic flow */}
    <div className="border-t border-white/10 px-4 py-3 flex items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <div className="rounded-lg bg-white/10 p-1.5"><Globe size={12} className="text-white/60" /></div>
        <span className="text-[10px] text-white/40">Client</span>
      </div>
      <div className="flex-1 relative h-px bg-white/10 mx-2">
        <motion.div
          animate={{ x: ["0%", "100%"] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-[var(--gold)] shadow-[0_0_6px_rgba(200,133,58,0.8)]"
        />
      </div>
      <div className="flex items-center gap-2">
        <div className="rounded-lg bg-[var(--caramel)]/20 border border-[var(--caramel)]/30 p-1.5"><Layers size={12} className="text-[var(--gold)]" /></div>
        <span className="text-[10px] text-[var(--gold)] font-semibold">NovaGateway</span>
      </div>
      <div className="flex-1 relative h-px bg-white/10 mx-2">
        <motion.div
          animate={{ x: ["0%", "100%"] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: 0.9 }}
          className="absolute top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_6px_rgba(96,165,250,0.8)]"
        />
      </div>
      <div className="flex items-center gap-2">
        <div className="rounded-lg bg-white/10 p-1.5"><Database size={12} className="text-white/60" /></div>
        <span className="text-[10px] text-white/40">Services</span>
      </div>
    </div>
  </div>
);

const EvidenceAIDemo = () => (
  <div className="h-full w-full rounded-2xl overflow-hidden border border-[var(--border)] bg-white flex flex-col">
    <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--cream)] px-4 py-3">
      <div className="flex items-center gap-2">
        <Zap size={14} className="text-[var(--caramel)]" />
        <span className="text-xs font-semibold text-[var(--espresso)]">EvidenceAI — RAG Interface</span>
      </div>
      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[var(--caramel)]/10 text-[var(--caramel)] border border-[var(--caramel)]/20">
        0% Hallucination
      </span>
    </div>

    <div className="flex-1 p-4 flex flex-col gap-3 bg-[var(--cream)]/30">
      <div className="self-end max-w-[80%] rounded-2xl rounded-tr-sm bg-[var(--espresso)] px-3.5 py-2.5 text-white text-xs leading-relaxed shadow-sm">
        What's our hardware procurement policy?
      </div>

      <div className="self-start max-w-[90%] rounded-2xl rounded-tl-sm bg-white border border-[var(--border)] p-3.5 text-xs text-[var(--espresso)] shadow-sm leading-relaxed">
        Employees are entitled to a{" "}
        <strong className="font-semibold">$500 annual stipend</strong> for approved home office ergonomics, reimbursable upon invoice submission
        <sup className="text-[var(--caramel)] font-bold cursor-pointer ml-0.5">[1]</sup>.

        <div className="mt-2.5 pt-2.5 border-t border-[var(--border)] flex items-center justify-between">
          <span className="text-[10px] bg-[var(--cream)] text-[var(--muted)] px-2 py-0.5 rounded-md border border-[var(--border)] flex items-center gap-1">
            <ExternalLink size={9} /> Employee_Handbook_v2.pdf (pg 12)
          </span>
          <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
            <Check size={10} /> Verified
          </span>
        </div>
      </div>
    </div>
  </div>
);

const InvoiceDemo = () => (
  <div className="h-full w-full rounded-2xl overflow-hidden border border-[var(--border)] bg-white flex flex-col">
    <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--cream)] px-4 py-3">
      <div className="flex items-center gap-2">
        <Activity size={14} className="text-emerald-500" />
        <span className="text-xs font-semibold text-[var(--espresso)]">Financial Ledger Engine</span>
      </div>
      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60">
        Live DB
      </span>
    </div>

    <div className="flex-1 p-4 grid grid-cols-2 gap-3 content-start">
      {[
        { label: "Gross Invoiced", value: "$45,231", change: "+12.5%", up: true },
        { label: "Pending", value: "12 Inv.", change: "$4,300 due", up: null },
      ].map((item) => (
        <div key={item.label} className="rounded-xl border border-[var(--border)] bg-[var(--cream)]/50 p-3">
          <div className="text-[10px] font-mono text-[var(--muted)] uppercase tracking-wider">{item.label}</div>
          <div className="text-lg font-bold text-[var(--espresso)] mt-1">{item.value}</div>
          <div className={`text-[10px] mt-1 font-medium ${item.up === true ? "text-emerald-600" : "text-[var(--caramel)]"}`}>
            {item.up === true ? "↑" : item.up === false ? "↓" : "●"} {item.change}
          </div>
        </div>
      ))}

      <div className="col-span-2 rounded-xl border border-[var(--border)] bg-[var(--cream)]/50 p-3">
        <div className="text-[10px] font-mono text-[var(--muted)] uppercase tracking-wider mb-2">Cash Velocity</div>
        <div className="flex items-end gap-1.5 h-10">
          {[25, 40, 30, 55, 38, 65, 80, 50, 88, 60, 75].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.04, ease: "easeOut" }}
              className="flex-1 rounded-sm bg-[var(--espresso)] hover:bg-[var(--caramel)] transition-colors cursor-default"
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const AutomationDemo = () => (
  <div className="h-full w-full rounded-2xl overflow-hidden border border-[var(--border)] bg-[#0f0a05] font-mono text-xs flex flex-col">
    <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
      <div className="flex gap-1.5">
        <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
      </div>
      <span className="ml-2 text-[11px] text-white/40">ai-test-runner — end_to_end</span>
    </div>

    <div className="flex-1 p-4 space-y-2 text-[11px] text-white/70">
      <div className="flex items-center gap-2">
        <span className="text-[var(--gold)]">❯</span>
        <span className="text-white/50">ai-test run --flow=end_to_end --headless</span>
      </div>
      <div className="pl-4 border-l border-white/10 space-y-1.5 py-1">
        {[
          "Initializing autonomous driver...",
          "Synthesizing boundary edge inputs...",
          "Validating transaction idempotency...",
          "Running regression sweep..."
        ].map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.4 }}
            className="flex items-center gap-2"
          >
            <span className="text-[var(--gold)]">✓</span>
            <span>{line}</span>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="flex items-center gap-2 text-emerald-400 bg-emerald-950/30 border border-emerald-900/40 px-3 py-1.5 rounded-lg"
      >
        <Check size={12} />
        <span className="font-semibold">All tests passed — 0 errors detected</span>
      </motion.div>
    </div>
  </div>
);

// ─── Data ─────────────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: "nova",
    tag: "Distributed Systems",
    title: "NovaGateway",
    subtitle: "High-Performance Reverse Proxy & API Gateway",
    description:
      "Built for high-concurrency microservices. Handles traffic routing, token-bucket rate limiting, Redis caching, and full observability with sub-millisecond latency overhead.",
    metrics: [
      { label: "Routing Latency", value: "< 0.8ms" },
      { label: "Rate Limiting", value: "Token-Bucket" },
      { label: "Architecture", value: "Non-blocking" },
    ],
    stack: ["FastAPI", "PostgreSQL", "Redis", "Docker", "AsyncIO"],
    repo: "https://github.com/Nigam-Vaghani/NovaGateway",
    demo: null,
    Demo: NovaGatewayDemo,
  },
  {
    id: "evidence",
    tag: "Applied AI & RAG",
    title: "EvidenceAI",
    subtitle: "Citation-Grounded Enterprise Document Intelligence",
    description:
      "RAG conversational engine transforming enterprise knowledge bases into verifiable, citation-backed answers — eliminating hallucinations through mathematical vector embeddings.",
    metrics: [
      { label: "Hallucinations", value: "0% Grounded" },
      { label: "Retrieval", value: "Vector DB" },
      { label: "Citations", value: "Page-Level" },
    ],
    stack: ["Python", "Vector Search", "Embeddings", "RAG", "LLM APIs"],
    repo: "https://github.com/Nigam-Vaghani/EvidenceAI",
    demo: null,
    Demo: EvidenceAIDemo,
  },
  {
    id: "invoice",
    tag: "Business Platform",
    title: "InvoiceApp",
    subtitle: "Automated Financial Accounting & Revenue Suite",
    description:
      "Replaces manual spreadsheets with a local database engine, automated invoice sync, and real-time revenue analytics — ACID-compliant SQLite backend.",
    metrics: [
      { label: "Ledger Sync", value: "Real-time" },
      { label: "Database", value: "ACID SQLite" },
      { label: "Analytics", value: "Cash Velocity" },
    ],
    stack: ["Python", "SQLite", "Desktop UI", "Data Analytics"],
    repo: "https://github.com/Nigam-Vaghani/InvoiceApp",
    demo: null,
    Demo: InvoiceDemo,
  },
  {
    id: "qa",
    tag: "Developer Tooling",
    title: "AI Test Automation",
    subtitle: "Autonomous Exploratory Software Testing Framework",
    description:
      "Intelligent validation platform executing autonomous user journeys, dynamically uncovering edge-case regressions, and verifying production invariants — self-healing locators included.",
    metrics: [
      { label: "Edge Discovery", value: "Autonomous" },
      { label: "Locators", value: "Self-healing" },
      { label: "Test Rigor", value: "Idempotent" },
    ],
    stack: ["TypeScript", "Playwright", "AI Heuristics", "E2E Testing"],
    repo: "https://github.com/Nigam-Vaghani/ai-test-automation",
    demo: null,
    Demo: AutomationDemo,
  },
];

const SKILLS = [
  {
    label: "Backend & Systems",
    subtitle: "Dark Roast",
    icon: Server,
    items: ["Python", "FastAPI", "Django", "TypeScript", "Node.js", "Java", "C", "AsyncIO", "REST APIs"],
  },
  {
    label: "Data & Infrastructure",
    subtitle: "The Extraction",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "Redis", "Docker", "System Design", "Microservices", "Kafka"],
  },
  {
    label: "Applied AI & ML",
    subtitle: "The Secret Blend",
    icon: Cpu,
    items: ["LLM Engineering", "RAG Pipelines", "Vector Search", "Embeddings", "Agentic Workflows", "OpenAI"],
  },
  {
    label: "Frontend & UI",
    subtitle: "Latte Art",
    icon: Layers,
    items: ["React", "Next.js", "TailwindCSS", "Framer Motion", "TypeScript", "UI Systems"],
  },
];

const STATS = [
  { value: 4, suffix: "+", label: "Projects Built" },
  { value: 3, suffix: "+", label: "Years Coding" },
  { value: 5, suffix: "+", label: "Tech Stacks" },
  { value: 100, suffix: "%", label: "Coffee-Powered" },
];

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function Home() {
  const [activeProject, setActiveProject] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("hello@nigamvaghani.dev");
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const Project = PROJECTS[activeProject];
  const DemoComponent = Project.Demo;

  return (
    <main className="relative min-h-screen overflow-x-hidden" style={{ background: "var(--cream)" }}>
      {/* Background ambient blobs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(180,140,100,0.25) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
        {/* Color blobs */}
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[var(--caramel)]/8 blur-[120px]" />
        <div className="absolute top-1/3 -right-32 h-[500px] w-[500px] rounded-full bg-orange-200/15 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[500px] rounded-full bg-amber-100/20 blur-[100px]" />
      </div>

      <Navbar onOpenEmailModal={() => setIsEmailModalOpen(true)} />

      <div className="relative z-10">

        {/* ═══════════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════════ */}
        <section
          id="about"
          className="mx-auto max-w-5xl px-5 sm:px-8 pt-36 pb-24 min-h-[95vh] flex items-center"
        >
          <div className="w-full grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">

            {/* Left — Text */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-col"
            >
              {/* Status badge */}
              <div className="mb-6 flex items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-white border border-[var(--border)] px-4 py-1.5 text-xs font-medium text-[var(--mocha)] shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  Major - COMPUTER SCIENCE
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[var(--border)] px-3.5 py-1.5 text-xs font-medium text-[var(--mocha)] shadow-sm">
                  <Coffee size={12} className="text-[var(--caramel)]" />
                  Minor - ADAPTIVE AI
                </span>
              </div>

              {/* Name & headline */}
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.02] text-[var(--ink)]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Nigam
                <br />
                <span className="gradient-text">Vaghani</span>
              </h1>

              <p
                className="mt-3 text-sm font-semibold tracking-[0.2em] uppercase text-[var(--muted)]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                SOFTWARE ENGINEER · BACKEND · AI SYSTEMS
              </p>

              <p className="mt-5 max-w-xl text-base text-[var(--muted)] leading-relaxed">
                | ... Building things that matter ... |
              </p>

              {/* Philosophy card */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-7 max-w-md rounded-2xl bg-white border border-[var(--border)] shadow-sm overflow-hidden"
              >
                <div className="flex items-center gap-2 border-b border-[var(--border)] bg-[var(--cream)] px-4 py-2.5">
                  <div className="flex gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-[var(--latte)]" />
                    <div className="h-2 w-2 rounded-full bg-[var(--latte)]" />
                    <div className="h-2 w-2 rounded-full bg-[var(--latte)]" />
                  </div>
                  <span className="ml-1 text-[11px] font-mono text-[var(--muted)]">$ whoami</span>
                  <span className="ml-auto text-xs">☕</span>
                </div>
                <div className="p-4 sm:p-5 space-y-3">
                  <p className="text-xs font-mono text-[var(--muted)] border-l-2 border-[var(--latte)] pl-3 leading-relaxed">
                    Building systems,
                  </p>
                  <div className="pl-3">
                    <ArrowRight size={14} className="rotate-90 text-[var(--caramel)] mb-1" />
                  </div>
                  <p className="text-sm font-bold text-[var(--espresso)] pl-3 leading-snug">
                    not just projects.
                  </p>
                </div>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-xl bg-[var(--espresso)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[var(--mocha)] hover:shadow-[0_4px_20px_rgba(60,30,10,0.2)] hover:-translate-y-0.5"
                >
                  View My Work
                  <ArrowRight size={15} />
                </a>
                <button
                  onClick={() => setIsEmailModalOpen(true)}
                  className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--espresso)] shadow-sm transition-all duration-300 hover:border-[var(--caramel)]/40 hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
                >
                  <Mail size={14} />
                  Get in Touch
                </button>
                {/* Socials */}
                <div className="flex items-center gap-2 pl-1">
                  {[
                    { href: "https://github.com/Nigam-Vaghani", Icon: Github, label: "GitHub" },
                    { href: "https://www.linkedin.com/in/nigam-vaghani-4a5086260/", Icon: Linkedin, label: "LinkedIn" },
                  ].map(({ href, Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      title={label}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-white text-[var(--muted)] shadow-sm transition-all duration-200 hover:text-[var(--espresso)] hover:border-[var(--caramel)]/30 hover:-translate-y-0.5"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right — Coffee Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="relative flex items-center justify-center lg:justify-end"
            >
              {/* Multi-layer ambient glow */}
              <div className="absolute h-96 w-96 rounded-full bg-[var(--caramel)]/10 blur-3xl -z-10 pointer-events-none" />
              <div className="absolute h-64 w-64 rounded-full bg-amber-300/8 blur-2xl -z-10 pointer-events-none" />

              <div className="relative">
                {/* Floating badge — top left */}
                {/* <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-5 -left-4 z-20 flex items-center gap-2 rounded-xl bg-white border border-[var(--border)] px-3.5 py-2 text-xs font-semibold text-[var(--espresso)] shadow-[0_4px_16px_rgba(60,30,10,0.1)]"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  Backend & AI Builder
                </motion.div> */}

                {/* Floating badge — bottom right */}
                {/* <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                  className="absolute -bottom-5 -right-3 z-20 flex items-center gap-2 rounded-xl bg-[var(--espresso)] px-3.5 py-2 text-xs font-semibold text-white shadow-[0_4px_16px_rgba(60,30,10,0.25)]"
                >
                  <Coffee size={12} className="text-[var(--gold)]" />
                  Fueled by Coffee
                </motion.div> */}

                {/* Decorative outer ring */}
                <div className="absolute -inset-3 rounded-[2rem] border border-[var(--caramel)]/15 pointer-events-none" />
                <div className="absolute -inset-6 rounded-[2.5rem] border border-[var(--latte)]/40 pointer-events-none" />

                {/* Coffee image frame */}
                <motion.div
                  whileHover={{ scale: 1.025, rotate: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative h-72 w-72 sm:h-80 sm:w-80 lg:h-[340px] lg:w-[340px] rounded-[1.75rem] overflow-hidden"
                  style={{
                    boxShadow:
                      "0 0 0 2px rgba(200,133,58,0.15), 0 0 0 6px rgba(200,133,58,0.06), 0 24px 64px rgba(60,30,10,0.14)",
                  }}
                >
                  {/* Inner vignette overlay for depth */}
                  <div className="absolute inset-0 z-10 pointer-events-none rounded-[1.75rem]"
                    style={{
                      background:
                        "radial-gradient(ellipse at center, transparent 55%, rgba(28,18,10,0.18) 100%)",
                    }}
                  />
                  {/* Subtle warm tint overlay */}
                  <div className="absolute inset-0 z-10 pointer-events-none rounded-[1.75rem] bg-[var(--caramel)]/5" />

                  <img
                    src="/hero_image.jpg"
                    alt="A perfectly crafted latte — Nigam's fuel"
                    className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                </motion.div>

                {/* Coffee bean accent — decorative small dot */}
                <div className="absolute -bottom-1 -left-2 h-3 w-3 rounded-full bg-[var(--espresso)] shadow-sm z-20" />
                <div className="absolute -top-1 -right-2 h-2 w-2 rounded-full bg-[var(--caramel)] shadow-sm z-20" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            STATS BAR
        ═══════════════════════════════════════════════ */}
        {/* <Section className="border-y border-[var(--border)] bg-white/60">
          <div className="mx-auto max-w-5xl px-5 sm:px-8 py-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {STATS.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl sm:text-4xl font-black text-[var(--espresso)]">
                    <Counter target={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-xs font-medium text-[var(--muted)] mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Section> */}

        {/* ═══════════════════════════════════════════════
            CAPABILITIES
        ═══════════════════════════════════════════════ */}
        <Section id="capabilities" className="mx-auto max-w-5xl px-5 sm:px-8 py-20">
          <div className="mb-12 text-center">
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--caramel)]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              What I Bring
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black tracking-tight text-[var(--espresso)]">
              Core Expertise
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: Server,
                title: "Distributed Architecture",
                body: "High-throughput reverse proxies, API gateways, rate limiting, and zero-downtime microservice communication.",
                color: "bg-amber-50 text-[var(--caramel)] border-amber-200/60",
              },
              {
                icon: Cpu,
                title: "Applied AI & RAG",
                body: "Strictly grounded LLM workflows, mathematical vector embeddings, and citation-backed knowledge pipelines.",
                color: "bg-blue-50 text-blue-700 border-blue-200/60",
              },
              {
                icon: Terminal,
                title: "Developer Tooling",
                body: "Automated exploratory testing frameworks, custom CLI tools, and resilient CI/CD pipelines.",
                color: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
              },
              {
                icon: Layers,
                title: "Full-Stack Interfaces",
                body: "End-to-end type safety, modern responsive web applications, and frictionless user experiences.",
                color: "bg-purple-50 text-purple-700 border-purple-200/60",
              },
            ].map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="card-glow rounded-2xl bg-white border border-[var(--border)] p-5 sm:p-6"
                >
                  <div className={`inline-flex rounded-xl border p-2.5 mb-4 ${cap.color}`}>
                    <Icon size={18} />
                  </div>
                  <h3 className="text-sm font-bold text-[var(--espresso)] mb-2">{cap.title}</h3>
                  <p className="text-xs text-[var(--muted)] leading-relaxed">{cap.body}</p>
                </div>
              );
            })}
          </div>
        </Section>

        {/* ═══════════════════════════════════════════════
            PROJECTS
        ═══════════════════════════════════════════════ */}
        <Section id="projects" className="border-t border-[var(--border)]">
          <div className="mx-auto max-w-5xl px-5 sm:px-8 py-20">
            {/* Header */}
            <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div>
                <span
                  className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--caramel)] flex items-center gap-2"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  <Code2 size={13} /> Flagship Creations
                </span>
                <h2 className="mt-2 text-3xl sm:text-4xl font-black tracking-tight text-[var(--espresso)]">
                  Projects That Matter
                </h2>
                <p className="mt-1.5 text-sm text-[var(--muted)] max-w-md">
                  Select any system to inspect its architecture, metrics, and a live interactive demo.
                </p>
              </div>

              {/* Tab selector */}
              <div className="flex flex-wrap gap-2 bg-[var(--cream-dark)] p-1.5 rounded-2xl border border-[var(--border)]">
                {PROJECTS.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setActiveProject(idx)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${activeProject === idx
                      ? "bg-white text-[var(--espresso)] shadow-sm border border-[var(--border)]"
                      : "text-[var(--muted)] hover:text-[var(--espresso)]"
                      }`}
                  >
                    {String(idx + 1).padStart(2, "0")} {p.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Project Stage */}
            <div className="rounded-3xl bg-white border border-[var(--border)] shadow-[0_8px_40px_rgba(60,30,10,0.05)] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={Project.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="grid lg:grid-cols-[1.1fr_0.9fr] gap-0"
                >
                  {/* Info */}
                  <div className="p-7 sm:p-10 space-y-5 border-b lg:border-b-0 lg:border-r border-[var(--border)]">
                    <div className="flex items-center gap-2.5">
                      <span
                        className="text-[10px] font-bold uppercase tracking-widest text-[var(--caramel)] bg-[var(--caramel)]/10 px-2.5 py-1 rounded-lg border border-[var(--caramel)]/20"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {Project.tag}
                      </span>
                      <span className="text-xs text-[var(--muted)] font-mono">
                        SYS / {String(activeProject + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-[var(--espresso)] tracking-tight">
                        {Project.title}
                      </h3>
                      <p className="text-sm font-semibold text-[var(--caramel)] mt-1">{Project.subtitle}</p>
                    </div>

                    <p className="text-sm text-[var(--muted)] leading-relaxed">{Project.description}</p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-2.5">
                      {Project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="rounded-xl bg-[var(--cream)] border border-[var(--border)] p-3 text-center"
                        >
                          <div className="text-[9px] font-mono font-bold uppercase tracking-wider text-[var(--muted)]">
                            {m.label}
                          </div>
                          <div className="text-xs sm:text-sm font-bold text-[var(--espresso)] mt-1">{m.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Stack */}
                    <div className="flex flex-wrap gap-1.5">
                      {Project.stack.map((t) => (
                        <span
                          key={t}
                          className="skill-tag"
                          style={{ borderRadius: "8px" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 pt-1">
                      {Project.repo !== "PRIVATE" ? (
                        <a
                          href={Project.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl bg-[var(--espresso)] px-5 py-2.5 text-xs font-semibold text-white transition-all duration-200 hover:bg-[var(--mocha)] hover:-translate-y-0.5 shadow-sm"
                        >
                          <Github size={14} /> Source Code
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-2 rounded-xl bg-[var(--cream-dark)] px-5 py-2.5 text-xs font-medium text-[var(--muted)]">
                          <Github size={14} /> Private
                        </span>
                      )}
                      {Project.demo && (
                        <a
                          href={Project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--border)] bg-white px-5 py-2.5 text-xs font-semibold text-[var(--espresso)] transition-all duration-200 hover:border-[var(--caramel)]/30 hover:-translate-y-0.5 shadow-sm"
                        >
                          <ExternalLink size={13} /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Demo */}
                  <div className="p-6 sm:p-8 bg-[var(--cream)]/40">
                    <div className="h-[320px] sm:h-[380px]">
                      <DemoComponent />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Section>

        {/* ═══════════════════════════════════════════════
            SKILLS
        ═══════════════════════════════════════════════ */}
        <Section id="skills" className="border-t border-[var(--border)]">
          <div className="mx-auto max-w-5xl px-5 sm:px-8 py-20">
            <div className="mb-12">
              <span
                className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--caramel)] flex items-center gap-2"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                <Terminal size={13} /> Technical Arsenal
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black tracking-tight text-[var(--espresso)]">
                The Engineering Toolkit
              </h2>
              <p className="mt-2 text-sm text-[var(--muted)] max-w-lg">
                Languages, runtime environments, and intelligent systems — deployed in daily production.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {SKILLS.map((group) => {
                const Icon = group.icon;
                return (
                  <div
                    key={group.label}
                    className="card-glow rounded-2xl bg-white border border-[var(--border)] p-5 sm:p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center h-9 w-9 rounded-xl bg-[var(--cream-dark)] border border-[var(--border)] text-[var(--mocha)]">
                          <Icon size={16} />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-[var(--espresso)]">{group.label}</h3>
                          <p
                            className="text-[11px] text-[var(--muted)] font-medium"
                            style={{ fontFamily: "'JetBrains Mono', monospace" }}
                          >
                            // {group.subtitle}
                          </p>
                        </div>
                      </div>
                      <span className="text-[11px] text-[var(--muted)] font-mono bg-[var(--cream)] px-2 py-0.5 rounded-md border border-[var(--border)]">
                        {group.items.length} tools
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <span key={skill} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Section>

        {/* ═══════════════════════════════════════════════
            CONNECT
        ═══════════════════════════════════════════════ */}
        <Section id="connect" className="border-t border-[var(--border)]">
          <div className="mx-auto max-w-4xl px-5 sm:px-8 py-20">
            <div className="relative overflow-hidden rounded-3xl bg-[var(--espresso)] p-10 sm:p-16 text-center shadow-[0_20px_60px_rgba(60,30,10,0.2)]">
              {/* Decorative elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[var(--caramel)]/10 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-amber-400/8 blur-3xl" />
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                    backgroundSize: "24px 24px",
                  }}
                />
              </div>

              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-2 text-xs font-bold text-white/80 backdrop-blur-sm">
                    <Coffee size={13} className="text-[var(--gold)]" />
                    Let's Grab a Coffee
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                  Let's build something
                  <br />
                  <span className="text-[var(--gold)]">exceptional.</span>
                </h2>

                <p className="mx-auto mt-4 max-w-lg text-sm sm:text-base text-white/60 leading-relaxed">
                  Whether you have a backend challenge, an AI integration need, or simply
                  want to talk distributed systems over a cup of coffee — I'm always available.
                </p>

                {/* Email buttons */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => setIsEmailModalOpen(true)}
                    className="group inline-flex items-center gap-2.5 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[var(--espresso)] shadow-sm transition-all duration-300 hover:bg-[var(--gold)] hover:text-[var(--espresso)] hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                  >
                    <Mail size={16} className="text-[var(--caramel)] group-hover:text-[var(--espresso)]" />
                    Send Email (hello@nigamvaghani.dev)
                    <Sparkles size={14} className="text-[var(--gold)] group-hover:text-[var(--espresso)]" />
                  </button>
                  <button
                    onClick={copyEmail}
                    title="Copy Email Address"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3.5 text-xs font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 cursor-pointer"
                  >
                    {copied ? (
                      <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                        <Check size={14} /> Copied!
                      </span>
                    ) : (
                      <>
                        <Copy size={14} /> Copy Address
                      </>
                    )}
                  </button>
                </div>

                {/* Social links */}
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <button
                    onClick={() => setIsEmailModalOpen(true)}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/8 px-4 py-2.5 text-xs font-semibold text-white/70 backdrop-blur-sm transition-all duration-200 hover:bg-white/15 hover:text-white hover:border-white/25 cursor-pointer"
                  >
                    <Mail size={13} /> Send Email
                  </button>
                  <a
                    href="https://github.com/Nigam-Vaghani"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/8 px-4 py-2.5 text-xs font-semibold text-white/70 backdrop-blur-sm transition-all duration-200 hover:bg-white/15 hover:text-white hover:border-white/25"
                  >
                    <Github size={13} /> @Nigam-Vaghani
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nigam-vaghani-4a5086260/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/8 px-4 py-2.5 text-xs font-semibold text-white/70 backdrop-blur-sm transition-all duration-200 hover:bg-white/15 hover:text-white hover:border-white/25"
                  >
                    <Linkedin size={13} /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* ═══════════════════════════════════════════════
            FOOTER
        ═══════════════════════════════════════════════ */}
        <footer className="border-t border-[var(--border)] bg-white/40 py-8">
          <div className="mx-auto max-w-5xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--muted)]">
            <div className="flex items-center gap-2 font-medium text-[var(--mocha)]">
              <Coffee size={13} className="text-[var(--caramel)]" />
              <span>Nigam Vaghani &copy; {new Date().getFullYear()}</span>
            </div>
            <p
              className="text-[11px]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Roasted & built with Next.js, Framer Motion & TailwindCSS ☕
            </p>
          </div>
        </footer>

      </div>

      {/* Email Popup Modal */}
      <EmailModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
      />
    </main>
  );
}

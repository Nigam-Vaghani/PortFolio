"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Server,
  Database,
  Layers,
  Zap,
  Activity,
  Code,
  Terminal,
  Cpu,
  Globe
} from "lucide-react";
import Navbar from "../components/Navbar";

// --- Light Theme Mock UI Components for Product Showcases ---

const NovaGatewayShowcase = () => (
  <div className="relative h-full w-full overflow-hidden rounded-xl border border-gray-200 bg-white font-mono shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
    <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50/50 px-4 py-3">
      <div className="flex gap-1.5">
        <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f56] shadow-sm border border-black/10"></div>
        <div className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e] shadow-sm border border-black/10"></div>
        <div className="h-2.5 w-2.5 rounded-full bg-[#27c93f] shadow-sm border border-black/10"></div>
      </div>
      <span className="ml-3 text-[10px] font-medium text-gray-500">nova-gateway-prod</span>
    </div>
    <div className="p-5 text-xs lg:text-sm">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="mb-3 text-emerald-600 font-medium"
      >
        [NovaGateway] System active. Listening on :8000
      </motion.div>
      
      <div className="space-y-2">
        <motion.div initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="text-gray-600">
          <span className="text-blue-500 font-semibold">INFO</span>: Routing GET /api/v1/users to upstream-1
        </motion.div>
        <motion.div initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.5 }} className="text-gray-600">
          <span className="text-blue-500 font-semibold">INFO</span>: Rate limit checked for ip=192.168.1.1. Remaining: 95
        </motion.div>
        <motion.div initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 2.2 }} className="text-gray-600">
          <span className="text-blue-500 font-semibold">INFO</span>: Routing POST /api/v1/data to upstream-2
        </motion.div>
        <motion.div initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 3.0 }} className="text-gray-600">
          <span className="text-amber-500 font-semibold">WARN</span>: Cache miss for key=user_stats_442
        </motion.div>
      </div>
      
      {/* Animated Traffic Diagram */}
      <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-6 px-4 relative">
        <div className="flex flex-col items-center gap-2 z-10">
          <div className="rounded-lg border border-gray-200 bg-white p-2 shadow-sm"><Globe size={16} className="text-gray-600" /></div>
          <span className="text-[10px] font-medium text-gray-500">Client</span>
        </div>
        
        <div className="flex-1 relative h-px bg-gray-200 mx-3">
          <motion.div 
            animate={{ x: ["0%", "100%"] }} 
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-0 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"
          />
        </div>
        
        <div className="flex flex-col items-center gap-2 z-10">
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-2 shadow-sm"><Layers size={16} className="text-blue-600" /></div>
          <span className="text-[10px] font-medium text-blue-600">NovaGateway</span>
        </div>
        
        <div className="flex-1 relative h-px bg-gray-200 mx-3">
           <motion.div 
            animate={{ x: ["0%", "100%"] }} 
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.75 }}
            className="absolute top-1/2 left-0 h-1 w-1 -translate-y-1/2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.6)]"
          />
        </div>
        
        <div className="flex flex-col items-center gap-2 z-10">
           <div className="flex gap-1.5">
             <div className="rounded-lg border border-gray-200 bg-white p-1.5 shadow-sm"><Database size={12} className="text-gray-600" /></div>
             <div className="rounded-lg border border-gray-200 bg-white p-1.5 shadow-sm"><Database size={12} className="text-gray-600" /></div>
           </div>
          <span className="text-[10px] font-medium text-gray-500">Backends</span>
        </div>
      </div>
    </div>
    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
  </div>
);

const EvidenceAIShowcase = () => (
  <div className="relative h-full w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col">
     <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50/50 px-4 py-3">
        <span className="text-xs font-semibold text-gray-800 flex items-center gap-2"><Zap size={14} className="text-purple-500"/> EvidenceAI</span>
     </div>
     <div className="p-5 flex flex-col gap-4 flex-1 text-sm bg-gray-50/30">
        <div className="self-end rounded-2xl rounded-tr-sm bg-blue-500 px-4 py-3 text-white max-w-[80%] shadow-sm">
          What is our policy on remote work setup?
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="self-start rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-gray-700 max-w-[90%] border border-gray-100 shadow-sm"
        >
          <div className="mb-3 leading-relaxed">Based on the Employee Handbook, employees are eligible for a $500 home office stipend to purchase approved equipment <sup className="text-purple-600 font-medium cursor-pointer hover:underline">[1]</sup>.</div>
          <div className="border-t border-gray-100 pt-3 flex flex-wrap gap-2">
            <span className="text-[10px] bg-purple-50 px-2 py-1 rounded-md text-purple-700 border border-purple-100 flex items-center gap-1 font-medium transition hover:bg-purple-100 cursor-pointer"><ExternalLink size={10}/> Employee_Handbook_v2.pdf (pg 12)</span>
          </div>
        </motion.div>
     </div>
  </div>
);

const InvoiceAppShowcase = () => (
  <div className="relative h-full w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col">
      <div className="flex items-center gap-3 border-b border-gray-100 bg-gray-50/50 px-4 py-3">
        <Activity size={14} className="text-emerald-500"/>
        <span className="text-xs font-semibold text-gray-800">Revenue Dashboard</span>
     </div>
     <div className="p-5 grid grid-cols-2 gap-4 flex-1 content-start bg-gray-50/30">
        <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-md">
          <div className="text-[11px] text-gray-500 uppercase tracking-wider font-semibold">Total Revenue</div>
          <div className="text-2xl font-bold text-gray-900 mt-2">$45,231.89</div>
          <div className="text-[11px] text-emerald-600 mt-2 flex items-center gap-1 font-medium">↑ 12.5% vs last month</div>
        </div>
        <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-md">
          <div className="text-[11px] text-gray-500 uppercase tracking-wider font-semibold">Pending Invoices</div>
          <div className="text-2xl font-bold text-gray-900 mt-2">12</div>
          <div className="text-[11px] text-amber-600 mt-2 flex items-center gap-1 font-medium">● $4,300 awaiting payment</div>
        </div>
        <div className="col-span-2 rounded-xl border border-gray-100 bg-white p-4 mt-2 h-32 relative overflow-hidden flex flex-col justify-end shadow-sm">
           <div className="text-[11px] text-gray-500 uppercase tracking-wider font-semibold absolute top-4 left-4">Cash Flow</div>
           <div className="w-full flex justify-between items-end h-[70%] gap-2 px-1">
             {[30, 45, 25, 60, 40, 70, 85, 55, 90, 65, 80].map((h, i) => (
                <motion.div 
                  key={i} 
                  initial={{ height: 0 }} 
                  whileInView={{ height: `${h}%` }} 
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.04, ease: "easeOut" }}
                  className="w-full bg-emerald-400 rounded-t-sm" 
                />
             ))}
           </div>
        </div>
     </div>
  </div>
);

const AutomationShowcase = () => (
  <div className="relative h-full w-full overflow-hidden rounded-xl border border-gray-200 bg-[#1e1e1e] shadow-[0_12px_40px_rgb(0,0,0,0.12)] font-mono text-sm">
    <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
      <div className="flex gap-1.5">
        <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f56] border border-black/10"></div>
        <div className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e] border border-black/10"></div>
        <div className="h-2.5 w-2.5 rounded-full bg-[#27c93f] border border-black/10"></div>
      </div>
      <span className="ml-3 text-xs text-gray-400">test-runner-ai</span>
    </div>
    <div className="p-5 space-y-3">
      <div className="text-gray-300"><span className="text-blue-400 font-bold">➜</span> ai-test execute --suite=e2e_checkout</div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="text-gray-400">Initializing AI-driven exploratory test...</motion.div>
      <div className="pl-4 border-l-2 border-white/10 space-y-2 py-2">
        <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.8 }} className="text-gray-300"><span className="text-green-400 mr-2">✓</span> Navigated to /checkout</motion.div>
        <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 1.3 }} className="text-gray-300"><span className="text-green-400 mr-2">✓</span> Generated mock user payload</motion.div>
        <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 1.8 }} className="text-gray-300"><span className="text-green-400 mr-2">✓</span> Detected dynamic stripe iframe</motion.div>
        <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 2.3 }} className="text-gray-300"><span className="text-green-400 mr-2">✓</span> Injected test card token</motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 2.8 }} className="text-green-400 font-medium mt-4 bg-green-500/10 px-3 py-2 rounded border border-green-500/20 inline-block">
        Suite Passed: 4/4 Steps. Coverage +2%.
      </motion.div>
    </div>
  </div>
);

// --- Data ---

const projects = [
  {
    title: "NovaGateway",
    summary: "Enterprise-grade API Gateway and Reverse Proxy built for modern backend infrastructures.",
    impact: "Manages traffic routing, rate limiting, and observability for distributed services with sub-millisecond latency overhead.",
    stack: ["FastAPI", "PostgreSQL", "Redis", "React", "Docker"],
    repo: "PRIVATE",
    demo: "#",
    showcase: <NovaGatewayShowcase />
  },
  {
    title: "EvidenceAI",
    summary: "RAG-powered AI platform transforming corporate knowledge bases into trustworthy, citation-backed AI assistants.",
    impact: "Eliminates hallucinations by strictly grounding LLM responses in verifiable enterprise documents using advanced vector search.",
    stack: ["Python", "RAG", "Embeddings", "Vector Search", "AI"],
    repo: "https://github.com/Nigam-Vaghani/EvidenceAI",
    demo: "#",
    showcase: <EvidenceAIShowcase />
  },
  {
    title: "InvoiceApp",
    summary: "Professional invoicing and business management platform featuring automated revenue tracking.",
    impact: "Streamlines financial workflows, replacing manual spreadsheet management with a robust local database and dynamic dashboard.",
    stack: ["Python", "Desktop Application", "SQLite", "Business Systems"],
    repo: "https://github.com/Nigam-Vaghani/InvoiceApp",
    demo: "#",
    showcase: <InvoiceAppShowcase />
  },
  {
    title: "AI Test Automation",
    summary: "Intelligent software validation platform executing AI-driven exploratory tests.",
    impact: "Reduces manual QA overhead by autonomously discovering edge cases and asserting application state.",
    stack: ["TypeScript", "AI", "Automation", "Testing"],
    repo: "https://github.com/Nigam-Vaghani/ai-test-automation",
    demo: "#",
    showcase: <AutomationShowcase />
  }
];

const domains = [
  {
    title: "AI Systems",
    description: "Building production-ready AI applications involving RAG, agentic workflows, and robust LLM integrations.",
    icon: Cpu
  },
  {
    title: "Developer Tools",
    description: "Creating CLI tools, testing frameworks, and automation pipelines that multiply developer productivity.",
    icon: Terminal
  },
  {
    title: "Backend Infrastructure",
    description: "Designing scalable gateways, microservices, and databases optimized for high-throughput environments.",
    icon: Server
  },
  {
    title: "Business Applications",
    description: "Developing comprehensive ERP integrations and full-stack SaaS solutions that drive measurable business value.",
    icon: Layers
  }
];

// Color mapping for skills to give that horizontal distinct colored look
const skillColors = {
  Python: "bg-blue-100 text-blue-700 border-blue-200",
  FastAPI: "bg-teal-100 text-teal-700 border-teal-200",
  Django: "bg-green-100 text-green-700 border-green-200",
  "Node.js": "bg-lime-100 text-lime-700 border-lime-200",
  Java: "bg-red-100 text-red-700 border-red-200",
  C: "bg-gray-200 text-gray-700 border-gray-300",
  PostgreSQL: "bg-indigo-100 text-indigo-700 border-indigo-200",
  MongoDB: "bg-emerald-100 text-emerald-700 border-emerald-200",
  Redis: "bg-rose-100 text-rose-700 border-rose-200",
  Docker: "bg-sky-100 text-sky-700 border-sky-200",
  "System Design": "bg-slate-100 text-slate-700 border-slate-200",
  "LLM Engineering": "bg-purple-100 text-purple-700 border-purple-200",
  RAG: "bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200",
  "Vector Search": "bg-violet-100 text-violet-700 border-violet-200",
  Blockchain: "bg-amber-100 text-amber-700 border-amber-200",
  React: "bg-cyan-100 text-cyan-700 border-cyan-200",
  "Next.js": "bg-neutral-800 text-neutral-100 border-neutral-700",
  TailwindCSS: "bg-sky-100 text-sky-700 border-sky-200",
  TypeScript: "bg-blue-100 text-blue-700 border-blue-200",
};

const skillDomains = [
  {
    title: "Backend & Systems",
    skills: ["Python", "FastAPI", "Django", "Node.js", "Java", "C"]
  },
  {
    title: "Infrastructure & Data",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Docker", "System Design"]
  },
  {
    title: "AI & Modern Tech",
    skills: ["LLM Engineering", "RAG", "Vector Search", "Blockchain"]
  },
  {
    title: "Frontend & Product",
    skills: ["React", "Next.js", "TailwindCSS", "TypeScript"]
  }
];

const contactLinks = [
  { label: "Email", value: "vaghaninigam2003@gmail.com", href: "mailto:vaghaninigam2003@gmail.com", icon: Mail },
  { label: "GitHub", value: "@Nigam-Vaghani", href: "https://github.com/Nigam-Vaghani", icon: Github },
  { label: "LinkedIn", value: "nigam-vaghani", href: "https://www.linkedin.com/in/nigam-vaghani-4a5086260/", icon: Linkedin }
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#fdfdfd] font-sans selection:bg-blue-200 selection:text-black overflow-x-hidden">
      
      {/* Soft Light Background Glows */}
      <div className="pointer-events-none fixed inset-0 z-0 flex justify-center">
        <div className="absolute top-[-10%] left-[-10%] h-[50vh] w-[50vw] rounded-full bg-blue-100/50 blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] h-[40vh] w-[40vw] rounded-full bg-purple-100/40 blur-[100px]" />
      </div>

      <Navbar />

      <div className="relative z-10">
        {/* --- HERO SECTION --- */}
        <section id="home" className="mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 pt-24 pb-12">
          <div className="grid w-full gap-16 lg:grid-cols-[1.2fr_1fr] items-center">
            <motion.div variants={fadeUp} initial="hidden" animate="show">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/60 px-3 py-1.5 text-xs font-medium text-gray-600 shadow-sm backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                Available for new opportunities
              </div>

              {/* Reduced font size for elegance */}
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl leading-[1.15]">
                Software Engineer building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">AI systems</span>, developer tools, and backend infrastructure.
              </h1>

              <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center text-sm text-gray-500">
                <div className="flex items-center gap-3">
                  <Github size={18} className="text-gray-700" />
                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-900">1.2k+ Contributions</span>
                    <span className="text-xs">in the last year</span>
                  </div>
                </div>
                <div className="hidden h-8 w-px bg-gray-300 sm:block"></div>
                <div className="flex gap-3 items-center">
                   <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">Stack</span>
                   <div className="flex gap-2">
                     {["Python", "FastAPI", "React", "Docker"].map(tech => (
                       <span key={tech} className="rounded-md border border-gray-200 bg-white px-2 py-1 text-[11px] font-medium text-gray-700 shadow-sm">{tech}</span>
                     ))}
                   </div>
                </div>
              </div>

              <div className="mt-10 flex gap-4">
                <a href="#projects" className="group flex h-11 items-center gap-2 rounded-lg bg-gray-900 px-5 text-sm font-medium text-white shadow-[0_4px_14px_rgba(0,0,0,0.15)] transition hover:bg-gray-800 hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)]">
                  View Products
                  <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                </a>
                <a href="#connect" className="flex h-11 items-center rounded-lg border border-gray-200 bg-white px-5 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50 hover:text-gray-900">
                  Contact Me
                </a>
              </div>
            </motion.div>

            {/* Right Side Hero Showcase */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="relative hidden lg:block h-[420px] w-full"
            >
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-100 to-purple-100 blur-2xl opacity-60"></div>
              <NovaGatewayShowcase />
            </motion.div>
          </div>
        </section>

        {/* --- WHAT I BUILD SECTION --- */}
        <section id="domains" className="mx-auto w-full max-w-6xl px-6 py-20 md:py-28">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">What I Build</h2>
            <p className="mt-3 max-w-2xl text-gray-500 text-base md:text-lg">Engineering solutions across the full stack, prioritizing architecture, performance, and user experience.</p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {domains.map((domain, i) => {
              const Icon = domain.icon;
              return (
                <motion.div 
                  key={domain.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group rounded-2xl border border-gray-200 bg-white/60 backdrop-blur-sm p-6 shadow-sm transition-all hover:shadow-md hover:border-gray-300 hover:bg-white"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-blue-50 p-3 text-blue-600 transition-colors group-hover:bg-blue-100">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">{domain.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{domain.description}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-20 md:py-28">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-16">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">Selected Products</h2>
            <p className="mt-3 max-w-2xl text-gray-500 text-base md:text-lg">Real software built to solve real problems. Showcasing architecture, design, and impact.</p>
          </motion.div>

          <div className="flex flex-col gap-24 md:gap-32">
            {projects.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={project.title} className={`flex flex-col gap-10 lg:items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Text Content */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex-1 space-y-5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">0{index + 1}</span>
                      <div className="h-px w-8 bg-gray-300"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">{project.title}</h3>
                    <p className="text-base text-gray-600 leading-relaxed">{project.summary}</p>
                    
                    <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-2">Impact & Architecture</h4>
                      <p className="text-sm text-gray-700 leading-relaxed">{project.impact}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.stack.map(tech => (
                        <span key={tech} className="rounded-md border border-gray-200 bg-white px-2.5 py-1 text-[11px] font-medium text-gray-600 shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-3">
                      {project.repo !== "PRIVATE" ? (
                        <a href={project.repo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold text-gray-700 transition hover:text-black">
                          <Github size={18} /> View Source
                        </a>
                      ) : (
                        <span className="flex items-center gap-2 text-sm font-semibold text-gray-400">
                          <Github size={18} /> Private Repository
                        </span>
                      )}
                      {project.demo !== "#" && (
                        <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700">
                          <ExternalLink size={18} /> Live Demo
                        </a>
                      )}
                    </div>
                  </motion.div>

                  {/* Visual Showcase */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex-1 w-full h-[360px] lg:h-[420px] rounded-2xl p-1.5 bg-gradient-to-b from-gray-200 to-gray-50 shadow-sm"
                  >
                    <div className="w-full h-full rounded-xl bg-gray-100 overflow-hidden">
                      {project.showcase}
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </section>

        {/* --- ENGINEERING ARSENAL (SKILLS) --- */}
        <section id="skills" className="mx-auto w-full max-w-6xl px-6 py-20 md:py-28 border-t border-gray-200">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">Engineering Arsenal</h2>
            <p className="mt-3 max-w-2xl text-gray-500 text-base md:text-lg">Technology, frameworks, and domains in my toolkit.</p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:gap-12">
            {skillDomains.map((domain, i) => (
              <motion.div 
                key={domain.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <h3 className="mb-4 text-sm font-bold tracking-wide text-gray-900 uppercase">{domain.title}</h3>
                <div className="flex flex-wrap gap-2.5">
                  {domain.skills.map(skill => {
                    // Fallback style if skill color is missing
                    const colorClasses = skillColors[skill] || "bg-gray-100 text-gray-700 border-gray-200";
                    return (
                      <span 
                        key={skill} 
                        className={`inline-flex items-center px-3 py-1.5 rounded-lg border text-xs font-semibold shadow-sm transition hover:scale-105 ${colorClasses}`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- CONNECT SECTION --- */}
        <section id="connect" className="mx-auto w-full max-w-4xl px-6 py-20 md:py-28">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] md:p-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">Ready to build something?</h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-500 text-lg">
              I&apos;m currently open to new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              {contactLinks.map(link => {
                const Icon = link.icon;
                return (
                  <a 
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-white hover:text-gray-900 hover:shadow-md"
                  >
                    <Icon size={18} />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-gray-50/50 py-10 text-center text-sm font-medium text-gray-400">
          <p>© {new Date().getFullYear()} Nigam Vaghani. Built with Next.js & Framer Motion.</p>
        </footer>
      </div>
    </main>
  );
}

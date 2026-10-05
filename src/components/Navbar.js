"use client";

import { useState, useEffect } from "react";
import { Coffee } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Arsenal", href: "#skills" },
  { label: "Connect", href: "#connect" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["about", "projects", "skills", "connect"];
      let current = "about";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div
          className={`mx-auto max-w-5xl px-5 sm:px-8 transition-all duration-500 ${
            scrolled
              ? "rounded-none"
              : ""
          }`}
        >
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              scrolled
                ? "bg-white/90 backdrop-blur-xl border border-[var(--border)] rounded-2xl px-5 py-3 shadow-[0_4px_24px_rgba(60,30,10,0.07)]"
                : "bg-transparent px-0 py-0"
            }`}
          >
            {/* Logo */}
            <a
              href="#about"
              className="group flex items-center gap-2.5"
              aria-label="Home"
            >
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--espresso)] text-[var(--gold)] shadow-sm transition-all duration-300 group-hover:shadow-[0_4px_16px_rgba(200,133,58,0.3)] group-hover:scale-105">
                <Coffee size={16} />
                {/* Steam */}
                <span className="absolute -top-1.5 left-2.5 h-2 w-0.5 rounded-full bg-[var(--gold)]/60 animate-steam opacity-0 group-hover:opacity-100" />
                <span className="absolute -top-1.5 left-4 h-2.5 w-0.5 rounded-full bg-[var(--gold)]/50 animate-steam-2 opacity-0 group-hover:opacity-100" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-sm font-bold text-[var(--ink)] tracking-tight">
                  Nigam Vaghani
                </span>
                <span
                  className="font-mono-custom text-[10px] text-[var(--muted)] tracking-wider font-medium"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  coffee & code
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeSection === link.href.slice(1)
                      ? "text-[var(--espresso)] bg-[var(--cream-dark)]"
                      : "text-[var(--muted)] hover:text-[var(--espresso)] hover:bg-[var(--cream-dark)]/60"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Nigam-Vaghani"
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl border border-[var(--border)] bg-white text-[var(--espresso)] transition-all duration-200 hover:border-[var(--caramel)]/40 hover:shadow-sm"
              >
                GitHub ↗
              </a>
              <a
                href="#connect"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-[var(--espresso)] text-white transition-all duration-300 hover:bg-[var(--mocha)] hover:shadow-[0_4px_16px_rgba(60,30,10,0.2)] hover:-translate-y-0.5"
              >
                <Coffee size={12} className="text-[var(--gold)]" />
                Hire Me
              </a>

              {/* Mobile toggle */}
              <button
                className="md:hidden flex flex-col gap-1.5 p-2"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                <span
                  className={`block h-0.5 w-5 bg-[var(--espresso)] rounded-full transition-all duration-300 ${
                    mobileOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 bg-[var(--espresso)] rounded-full transition-all duration-300 ${
                    mobileOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 bg-[var(--espresso)] rounded-full transition-all duration-300 ${
                    mobileOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-20 left-4 right-4 bg-white rounded-2xl border border-[var(--border)] shadow-xl p-4 transition-all duration-300 ${
            mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center py-3 px-4 text-sm font-medium text-[var(--espresso)] rounded-xl hover:bg-[var(--cream-dark)] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 pt-2 border-t border-[var(--border)] flex gap-2">
            <a
              href="https://github.com/Nigam-Vaghani"
              target="_blank"
              rel="noreferrer"
              className="flex-1 text-center py-2.5 text-xs font-semibold rounded-xl border border-[var(--border)] text-[var(--espresso)]"
            >
              GitHub ↗
            </a>
            <a
              href="#connect"
              onClick={() => setMobileOpen(false)}
              className="flex-1 text-center py-2.5 text-xs font-semibold rounded-xl bg-[var(--espresso)] text-white"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
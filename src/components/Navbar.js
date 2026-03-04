"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex justify-center z-50">

      <div className="mt-6 px-8 py-3 rounded-full backdrop-blur-md bg-white/5 border border-white/10 flex gap-8 text-sm">

        <a href="#home" className="hover:text-[#268c67] transition">
          Home
        </a>

        <a href="#projects" className="hover:text-[#268c67] transition">
          Projects
        </a>

        <a href="#skills" className="hover:text-[#268c67] transition">
          Skills
        </a>

        <a href="#connect" className="hover:text-[#268c67] transition">
          Connect
        </a>

      </div>

    </nav>
  );
}
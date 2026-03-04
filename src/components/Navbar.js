"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full px-4 md:px-6">
      <div className="mx-auto mt-4 flex w-full max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-xl md:px-6">
        <a href="#home" className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-white">
          <span className="h-2 w-2 rounded-full bg-[#21adc9] shadow-[0_0_12px_rgba(33,173,201,0.9)]" />
          NIGAM
        </a>

        <div className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
          <a href="#home" className="transition hover:text-[#89def0]">Home</a>
          <a href="#approach" className="transition hover:text-[#89def0]">Approach</a>
          <a href="#projects" className="transition hover:text-[#89def0]">Projects</a>
          <a href="#skills" className="transition hover:text-[#89def0]">Skills</a>
          <a href="#connect" className="transition hover:text-[#89def0]">Connect</a>
        </div>

        <a
          href="#connect"
          className="rounded-lg border border-[#21adc9]/50 bg-[#21adc9]/10 px-3 py-1.5 text-xs font-medium text-[#bcecf4] transition hover:bg-[#21adc9]/20"
        >
          Let&apos;s Talk
        </a>
        
      </div>
    </nav>
  );
}
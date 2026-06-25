"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full px-4 md:px-6">
      <div className="mx-auto mt-4 flex w-full max-w-6xl items-center justify-between rounded-2xl border border-black/[0.04] bg-white/70 px-4 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.02)] backdrop-blur-xl md:px-6">
        <a href="#home" className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-gray-900">
          <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
          NIGAM
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-gray-500 md:flex">
          <a href="https://github.com/Nigam-Vaghani" className="transition hover:text-gray-900">GitHub</a>
          {/* <a href="#home" className="transition hover:text-gray-900">Home</a> */}
          <a href="#domains" className="transition hover:text-gray-900">What I Build</a>
          <a href="#projects" className="transition hover:text-gray-900">Products</a>
          <a href="#skills" className="transition hover:text-gray-900">Skills</a>
          <a href="#connect" className="transition hover:text-gray-900">Connect</a>
        </div>

        <a
          href="#connect"
          className="rounded-lg bg-gray-900 px-4 py-1.5 text-xs font-medium text-white shadow-sm transition hover:bg-gray-800"
        >
          Let&apos;s Talk
        </a>
      </div>
    </nav>
  );
}
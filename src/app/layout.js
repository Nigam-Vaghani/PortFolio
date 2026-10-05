import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://nigamvaghani.dev"),
  title: "Nigam Vaghani — Full-Stack Engineer & AI Builder",
  description:
    "Full-stack engineer specializing in distributed systems, applied AI, and high-throughput backend platforms. Fueled by great coffee.",
  keywords: ["Nigam Vaghani", "Full Stack Developer", "Distributed Systems", "FastAPI", "AI Engineering", "RAG", "Portfolio"],
  authors: [{ name: "Nigam Vaghani" }],
  openGraph: {
    title: "Nigam Vaghani — Full-Stack Engineer",
    description: "I build high-throughput backend platforms, reliable RAG integrations, and clean software architectures that scale.",
    url: "https://nigamvaghani.dev",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=DM+Serif+Display:ital@0;1&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

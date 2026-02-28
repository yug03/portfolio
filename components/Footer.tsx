"use client";

import { Zap, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-soft border border-cyan-accent/30 flex items-center justify-center">
              <Zap size={14} className="text-cyan-accent" />
            </div>
            <div>
              <p className="font-display font-600 text-sm text-text-primary">
                Yug Pratap Gupta
              </p>
              <p className="text-xs text-text-muted font-mono">
                AI Automation & Business Systems Engineer
              </p>
            </div>
          </div>

          {/* Center: Nav */}
          <div className="flex items-center gap-6">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() =>
                  document
                    .getElementById(item.toLowerCase())
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-xs font-mono text-text-muted hover:text-text-secondary transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 glass border border-border rounded-lg text-xs font-mono text-text-muted hover:text-text-secondary hover:border-border/80 transition-all"
          >
            <ArrowUp size={12} />
            Back to top
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-border/40 text-center">
          <p className="text-xs font-mono text-text-muted">
            © {new Date().getFullYear()} Yug Pratap Gupta. Built with Next.js 14 + Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}

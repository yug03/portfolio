"use client";

import { Sparkles, ArrowUp, Mail, Linkedin } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const links = [
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Solutions", id: "solutions" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="relative border-t border-border/70 py-10 md:py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="glass rounded-3xl border border-border/70 px-6 py-8 md:px-8 md:py-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="space-y-3 max-w-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-soft border border-cyan-accent/25 flex items-center justify-center">
                  <Sparkles size={16} className="text-cyan-accent" />
                </div>
                <div>
                  <p className="font-display font-600 text-base text-text-primary">
                    Yug Pratap Gupta
                  </p>
                  <p className="text-xs text-text-muted font-mono uppercase tracking-[0.18em]">
                    AI Automation Architect
                  </p>
                </div>
              </div>

              <p className="text-sm text-text-secondary leading-relaxed">
                I design AI systems, automation workflows, and integration architectures that help businesses eliminate manual work and operate with more speed, intelligence, and scale.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
              <div className="space-y-3">
                <p className="text-xs font-mono uppercase tracking-widest text-text-muted">
                  Navigate
                </p>
                <div className="flex flex-col gap-2">
                  {links.map((item) => (
                    <button
                      key={item.id}
                      onClick={() =>
                        document
                          .getElementById(item.id)
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="text-sm text-left text-text-secondary hover:text-text-primary transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs font-mono uppercase tracking-widest text-text-muted">
                  Connect
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href="mailto:yugpratapgupta00@gmail.com"
                    className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    <Mail size={14} />
                    Email
                  </a>
                  <a
                    href="https://www.linkedin.com/in/iamyug/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    <Linkedin size={14} />
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs font-mono uppercase tracking-widest text-text-muted">
                  Action
                </p>
                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-sm text-text-secondary hover:text-text-primary hover:bg-panel transition-all duration-200"
                >
                  <ArrowUp size={14} />
                  Back to top
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs font-mono text-text-muted text-center md:text-left">
              © {new Date().getFullYear()} Yug Pratap Gupta. Built with Next.js, Tailwind CSS, and Framer Motion.
            </p>
            <p className="text-[11px] text-text-muted text-center md:text-right">
              AI Automation · Agentic Systems · Business Transformation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

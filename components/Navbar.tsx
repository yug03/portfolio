"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Solutions", href: "#solutions" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActiveSection(id);
          break;
        }
      }

      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6"
      >
        <div
          className={`max-w-6xl mx-auto mt-4 transition-all duration-500 ${
            scrolled
              ? "glass border border-border/70 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
              : "bg-transparent"
          }`}
        >
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              scrolled ? "px-4 sm:px-5 py-3" : "px-0 py-3"
            }`}
          >
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-3 group"
              aria-label="Go to top"
            >
              <div className="w-9 h-9 rounded-xl bg-cyan-soft border border-cyan-accent/25 flex items-center justify-center group-hover:border-cyan-accent/50 transition-all duration-300">
                <Sparkles size={15} className="text-cyan-accent" />
              </div>
              <div className="text-left">
                <div className="font-display font-600 text-sm text-text-primary tracking-tight">
                  Yug Pratap Gupta
                </div>
                <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-text-muted">
                  AI Automation Architect
                </div>
              </div>
            </button>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className={`relative px-4 py-2 text-sm rounded-xl transition-all duration-200 ${
                      isActive
                        ? "text-cyan-accent"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-xl bg-cyan-soft border border-cyan-accent/20"
                        transition={{ type: "spring", bounce: 0.18, duration: 0.45 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </button>
                );
              })}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href="/resume-yug-pratap-gupta.pdf"
                download
                className="px-4 py-2 text-sm rounded-xl border border-border text-text-secondary hover:text-text-primary hover:bg-panel transition-all duration-200"
              >
                Resume
              </a>
              <button
                onClick={() => scrollTo("#contact")}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-xl bg-cyan-accent text-canvas hover:bg-cyan-accent/90 transition-all duration-200"
              >
                Let&apos;s Talk
                <ArrowRight size={14} />
              </button>
            </div>

            <button
              className="lg:hidden w-10 h-10 rounded-xl border border-border text-text-secondary hover:text-text-primary hover:bg-panel transition-all duration-200 flex items-center justify-center"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
              className="fixed top-20 left-4 right-4 z-50 glass border border-border rounded-2xl p-4 lg:hidden"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link, i) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <motion.button
                      key={link.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      onClick={() => scrollTo(link.href)}
                      className={`text-left px-4 py-3 rounded-xl text-sm transition-all ${
                        isActive
                          ? "bg-cyan-soft border border-cyan-accent/20 text-cyan-accent"
                          : "text-text-secondary hover:text-text-primary hover:bg-panel"
                      }`}
                    >
                      {link.label}
                    </motion.button>
                  );
                })}

                <div className="grid grid-cols-2 gap-3 pt-3">
                  <a
                    href="/resume-yug-pratap-gupta.pdf"
                    download
                    className="px-4 py-3 rounded-xl border border-border text-sm text-center text-text-secondary hover:text-text-primary hover:bg-panel transition-all duration-200"
                  >
                    Resume
                  </a>
                  <button
                    onClick={() => scrollTo("#contact")}
                    className="px-4 py-3 rounded-xl bg-cyan-accent text-canvas text-sm hover:bg-cyan-accent/90 transition-all duration-200"
                  >
                    Let&apos;s Talk
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  ChevronDown,
  Sparkles,
} from "lucide-react";

const stagger = {
  container: {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  },
};

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center dot-grid overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-accent/8 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-radial from-gold-accent/6 to-transparent rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-20 text-center relative z-10">
        <motion.div
          variants={stagger.container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-6"
        >
          {/* Status badge */}
          <motion.div variants={stagger.item}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-border text-xs font-mono text-text-secondary">
              <Sparkles size={12} className="text-cyan-accent" />
              Building AI automation systems for modern businesses
              <span className="text-text-muted">·</span>
              <MapPin size={11} className="text-text-muted" />
              <span>Gurgaon, India</span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.div variants={stagger.item} className="space-y-2">
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-700 tracking-tight leading-none">
              <span className="text-text-primary">Yug Pratap</span>
              <br />
              <span className="gradient-text-cyan">Gupta</span>
            </h1>
          </motion.div>

          {/* Title */}
          <motion.div variants={stagger.item}>
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <span className="font-mono text-xs tracking-widest text-text-muted uppercase">
                //
              </span>
              <p className="font-body text-lg md:text-xl font-400 text-text-secondary">
                AI Automation Architect · Agentic AI Systems · Business Transformation
              </p>
              <span className="font-mono text-xs tracking-widest text-text-muted uppercase">
                //
              </span>
            </div>
          </motion.div>

          {/* Value proposition */}
          <motion.div
            variants={stagger.item}
            className="max-w-4xl space-y-4"
          >
            <p className="text-base md:text-xl text-text-secondary leading-relaxed font-300">
              I build{" "}
              <span className="text-text-primary font-medium">
                production-grade AI systems, voice agents, and workflow automations
              </span>{" "}
              that help businesses reduce manual work, qualify leads faster,
              support customers at scale, and connect fragmented operations
              across CRM, ERP, APIs, and cloud platforms.
            </p>

            <p className="text-sm md:text-base text-text-muted max-w-3xl mx-auto leading-relaxed">
              Trusted across real-world operational environments spanning{" "}
              <span className="text-text-primary">fintech, pharma, and SaaS-style systems</span>{" "}
              — with experience building automation architectures, LLM-powered
              workflows, executive intelligence pipelines, and AI-led business systems
              designed for measurable impact.
            </p>
          </motion.div>

          {/* Proof / stats row */}
          <motion.div
            variants={stagger.item}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-3 w-full max-w-4xl"
          >
            {[
              { value: "250+", label: "Branches Monitored" },
              { value: "60%", label: "Manual Effort Reduced" },
              { value: "500+", label: "Automation Test Runs" },
              { value: "24/7", label: "AI System Availability" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-2xl px-4 py-4 border border-border text-center"
              >
                <div className="font-display text-2xl md:text-3xl font-700 gradient-text-cyan">
                  {stat.value}
                </div>
                <div className="text-[11px] md:text-xs text-text-muted mt-1 font-mono uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={stagger.item}
            className="flex flex-wrap gap-4 justify-center pt-4"
          >
            <button
              onClick={scrollToProjects}
              className="group flex items-center gap-2 px-6 py-3 bg-cyan-accent text-canvas font-display font-600 text-sm rounded-xl hover:bg-cyan-accent/90 transition-all duration-200 glow-cyan"
            >
              View AI Systems
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>

            <button
              onClick={scrollToContact}
              className="group flex items-center gap-2 px-6 py-3 glass border border-gold-accent/30 text-gold-accent font-display font-500 text-sm rounded-xl hover:bg-gold-soft hover:border-gold-accent/50 transition-all duration-200"
            >
              <Mail size={16} />
              Book a Conversation
            </button>

            <a
              href="/resume-yug-pratap-gupta.pdf"
              download
              className="group flex items-center gap-2 px-6 py-3 glass border border-border text-text-primary font-display font-500 text-sm rounded-xl hover:border-border/80 hover:bg-surface/80 transition-all duration-200"
            >
              <Download
                size={16}
                className="text-text-secondary group-hover:text-text-primary transition-colors"
              />
              Download Resume
            </a>
          </motion.div>

          {/* Trust note */}
          <motion.p
            variants={stagger.item}
            className="text-xs md:text-sm text-text-muted max-w-2xl leading-relaxed"
          >
            Best fit for founders, ops teams, sales teams, and businesses looking to
            deploy AI automation, lead qualification systems, customer support agents,
            or end-to-end workflow orchestration.
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted"
        >
          <span className="text-xs font-mono tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ChevronDown size={18} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

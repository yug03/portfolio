"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Workflow, BarChart3, Target } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "AI Integration",
    description:
      "Embedding LLMs, document parsers, and intelligent agents into enterprise workflows to automate decision-heavy processes.",
    color: "cyan",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description:
      "End-to-end workflow automation using n8n, Make, and custom Python pipelines — from data ingestion to ERP sync.",
    color: "gold",
  },
  {
    icon: BarChart3,
    title: "Finance Systems",
    description:
      "Deep domain expertise in NBFC operations, reconciliation workflows, KPI dashboards, and compliance automation.",
    color: "cyan",
  },
  {
    icon: Target,
    title: "Business Impact",
    description:
      "Every system I build is measured against business outcomes — reduced headcount dependency, faster cycles, higher accuracy.",
    color: "gold",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-cyan-accent tracking-widest uppercase">
                  01 — About
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>

              <h2 className="font-display text-3xl md:text-4xl font-700 tracking-tight leading-tight">
                Engineering systems that{" "}
                <span className="gradient-text-cyan">think,</span> so your
                teams{" "}
                <span className="gradient-text-gold">don&apos;t have to.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4 text-text-secondary leading-relaxed"
            >
              <p>
                I&apos;m Yug — a Business Systems Engineer with a focus on
                making AI work inside real-world financial and operational
                environments. I bridge the gap between advanced AI tooling and
                the messy reality of enterprise workflows.
              </p>
              <p>
                My background spans{" "}
                <span className="text-text-primary font-medium">
                  NBFC operations, SaaS platforms, and fintech infrastructure
                </span>{" "}
                — which means I understand both the technical architecture and
                the business pain behind manual processes. I don&apos;t just
                automate tasks; I redesign the systems around them.
              </p>
              <p>
                Currently based in{" "}
                <span className="text-text-primary font-medium">
                  Gurgaon, India
                </span>{" "}
                — working with finance-heavy companies that need scalable,
                reliable automation that integrates with their existing CRM, ERP,
                and cloud infrastructure.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-2"
            >
              {[
                "Finance Automation",
                "AI Systems",
                "NBFC Domain",
                "Cloud Architecture",
                "Python",
                "Workflow Design",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-mono glass border border-border text-text-secondary rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Pillars grid */}
          <div className="grid grid-cols-2 gap-4">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="glass glass-hover rounded-2xl p-5 space-y-3"
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    pillar.color === "cyan"
                      ? "bg-cyan-soft border border-cyan-accent/20"
                      : "bg-gold-soft border border-gold-accent/20"
                  }`}
                >
                  <pillar.icon
                    size={18}
                    className={
                      pillar.color === "cyan" ? "text-cyan-accent" : "text-gold-accent"
                    }
                  />
                </div>
                <h3 className="font-display font-600 text-sm text-text-primary">
                  {pillar.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

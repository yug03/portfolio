"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Workflow, Mic, Target } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "Agentic AI Systems",
    description:
      "I design production-grade AI systems that combine LLMs, retrieval, reasoning, and decision workflows to automate high-value operational work.",
    color: "cyan",
  },
  {
    icon: Workflow,
    title: "Automation Architecture",
    description:
      "From lead routing and CRM sync to ERP updates and executive reporting, I build event-driven workflows that reduce manual effort and failure points.",
    color: "gold",
  },
  {
    icon: Mic,
    title: "Voice & Conversational AI",
    description:
      "I create AI-powered chat and voice experiences for lead qualification, customer support, and business interactions that need speed, context, and scale.",
    color: "cyan",
  },
  {
    icon: Target,
    title: "Business Outcome Focus",
    description:
      "Every implementation is designed around ROI — faster turnaround, lower operational dependency, better customer experience, and measurable efficiency gains.",
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
                I build <span className="gradient-text-cyan">AI automation systems</span> that
                eliminate manual work, accelerate decisions, and help teams{" "}
                <span className="gradient-text-gold">operate at scale.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="space-y-4 text-text-secondary leading-relaxed"
            >
              <p>
                I&apos;m Yug Pratap Gupta — an{" "}
                <span className="text-text-primary font-medium">
                  AI Automation Architect
                </span>{" "}
                specializing in agentic AI systems, voice AI agents, and
                end-to-end automation architectures for businesses that want to
                move faster without adding operational complexity.
              </p>

              <p>
                My work sits at the intersection of{" "}
                <span className="text-text-primary font-medium">
                  AI, workflows, APIs, CRM/ERP integrations, and business
                  operations
                </span>
                . I build systems that can qualify leads, support customers,
                generate executive insights, automate repetitive processes, and
                orchestrate decisions across the tools companies already use.
              </p>

              <p>
                With experience across{" "}
                <span className="text-text-primary font-medium">
                  fintech, pharma, and SaaS-style automation environments
                </span>
                , I understand both the technical architecture and the business
                pressure behind manual operations, slow response cycles, and
                disconnected systems. My focus is not just shipping automation —
                it&apos;s building automation that is reliable, scalable, and commercially useful.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-wrap gap-2"
            >
              {[
                "Agentic AI Workflows",
                "Voice AI Agents",
                "LLM Orchestration",
                "CRM / ERP Integration",
                "n8n & API Automation",
                "Business Transformation",
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
                      pillar.color === "cyan"
                        ? "text-cyan-accent"
                        : "text-gold-accent"
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

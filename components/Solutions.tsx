"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Workflow,
  Bot,
  Headphones,
  Mic,
  Plug,
  Database,
  BarChart2,
  MessageSquareMore,
} from "lucide-react";

const solutions = [
  {
    icon: Workflow,
    title: "AI Workflow Automation",
    description:
      "I build end-to-end automation systems that replace repetitive manual workflows with event-driven pipelines, branching logic, alerts, retries, and full execution visibility.",
    tags: ["n8n", "Make", "APIs"],
    color: "cyan",
  },
  {
    icon: Bot,
    title: "AI Lead Qualification Systems",
    description:
      "Conversational lead qualification bots that engage prospects instantly, score intent, enrich lead data, update CRM automatically, and route hot opportunities to the right rep.",
    tags: ["FastAPI", "OpenAI", "HubSpot"],
    color: "gold",
  },
  {
    icon: Headphones,
    title: "RAG Customer Support Agents",
    description:
      "Deploy AI support agents that answer questions from your knowledge base, maintain context across conversations, detect sentiment, and escalate to humans with full handoff summaries.",
    tags: ["ChromaDB", "LLMs", "CRM Sync"],
    color: "cyan",
  },
  {
    icon: Mic,
    title: "Voice AI Agents",
    description:
      "Human-like voice systems for business inquiries, appointment flows, qualification calls, and repetitive phone interactions that need speed, consistency, and scale.",
    tags: ["ElevenLabs", "Speech APIs", "Automation"],
    color: "gold",
  },
  {
    icon: Plug,
    title: "CRM · ERP · API Integrations",
    description:
      "Connect your operational stack across CRM, ERP, forms, databases, messaging tools, and internal systems so data moves automatically and reliably between teams.",
    tags: ["Webhooks", "REST APIs", "Middleware"],
    color: "cyan",
  },
  {
    icon: Database,
    title: "Executive Intelligence Pipelines",
    description:
      "AI-powered monitoring and reporting architectures that ingest business data, surface anomalies, generate summaries, and provide leadership with decision-ready intelligence.",
    tags: ["Python", "SQL", "LLM APIs"],
    color: "gold",
  },
  {
    icon: BarChart2,
    title: "AI-Driven Reporting Automation",
    description:
      "Transform raw operational data into automated KPI dashboards, executive narratives, and delivery workflows so reporting moves from manual effort to decision support.",
    tags: ["Dashboards", "Reporting", "Automation"],
    color: "cyan",
  },
  {
    icon: MessageSquareMore,
    title: "Custom AI Business Systems",
    description:
      "Need something beyond a standard workflow? I design tailored AI systems for revenue operations, support, internal ops, and business processes that need more than off-the-shelf automation.",
    tags: ["Custom Build", "Architecture", "Consulting"],
    color: "gold",
  },
];

export default function Solutions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="solutions" className="section-padding bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="space-y-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-cyan-accent tracking-widest uppercase">
                06 — Solutions
              </span>
              <div className="h-px flex-1 max-w-20 bg-border" />
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-3 max-w-3xl">
                <h2 className="font-display text-3xl md:text-4xl font-700 tracking-tight leading-tight">
                  Systems I Can <span className="gradient-text-cyan">Build For Your Business</span>
                </h2>
                <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                  These are the high-impact AI and automation solutions I design for businesses
                  looking to reduce manual work, improve response speed, connect disconnected tools,
                  and operate with smarter systems.
                </p>
              </div>

              <div className="rounded-2xl glass px-4 py-3 border border-border max-w-xs">
                <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">
                  Engagement Style
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Strategy, architecture, implementation, and optimization — built around real operational workflows, not generic demos.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Solutions grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {solutions.map((solution, i) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.55,
                  delay: i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="glass glass-hover rounded-2xl p-5 space-y-4 group"
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                    solution.color === "cyan"
                      ? "bg-cyan-soft border border-cyan-accent/20"
                      : "bg-gold-soft border border-gold-accent/20"
                  }`}
                >
                  <solution.icon
                    size={18}
                    className={
                      solution.color === "cyan"
                        ? "text-cyan-accent"
                        : "text-gold-accent"
                    }
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-600 text-sm text-text-primary leading-snug">
                    {solution.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {solution.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {solution.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-panel border border-border text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center pt-4"
          >
            <p className="text-text-secondary text-sm mb-4 max-w-2xl mx-auto">
              If you already know the process you want to automate — or you just know your team is wasting time on manual work — I can help map the right AI system for it.
            </p>
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-soft border border-cyan-accent/30 text-cyan-accent font-display font-500 text-sm rounded-xl hover:bg-cyan-accent/15 hover:border-cyan-accent/50 transition-all duration-200"
            >
              Discuss Your Use Case
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

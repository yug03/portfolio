"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Brain,
  Workflow,
  Database,
  Cloud,
  BarChart3,
  Building2,
} from "lucide-react";

const skillCategories = [
  {
    icon: Brain,
    label: "AI & Agent Systems",
    color: "cyan",
    skills: [
      { name: "Agentic AI Workflows", level: 92 },
      { name: "GPT-4o / Gemini API Integrations", level: 90 },
      { name: "Prompt Engineering", level: 88 },
      { name: "RAG with ChromaDB", level: 84 },
      { name: "Voice AI Systems", level: 82 },
      { name: "LLM Orchestration", level: 86 },
    ],
  },
  {
    icon: Workflow,
    label: "Automation & Integrations",
    color: "gold",
    skills: [
      { name: "n8n", level: 90 },
      { name: "Make", level: 84 },
      { name: "Zapier", level: 80 },
      { name: "REST APIs & Webhooks", level: 92 },
      { name: "CRM–ERP–DB Integration", level: 88 },
      { name: "Error Handling & Retry Logic", level: 86 },
    ],
  },
  {
    icon: Database,
    label: "Data & Analytics Engineering",
    color: "cyan",
    skills: [
      { name: "Python (Pandas, NumPy)", level: 90 },
      { name: "Advanced SQL & CTEs", level: 92 },
      { name: "ETL Pipelines", level: 88 },
      { name: "Forecasting & Predictive Models", level: 84 },
      { name: "Random Forest & Applied ML", level: 80 },
      { name: "Executive Reporting Automation", level: 87 },
    ],
  },
  {
    icon: Cloud,
    label: "Systems & Cloud Stack",
    color: "gold",
    skills: [
      { name: "GCP", level: 84 },
      { name: "Cloud SQL", level: 82 },
      { name: "Flask / FastAPI", level: 86 },
      { name: "Google Apps Script", level: 88 },
      { name: "Git", level: 82 },
      { name: "Deployment-Ready API Architectures", level: 84 },
    ],
  },
  {
    icon: BarChart3,
    label: "Business Intelligence & Decision Support",
    color: "cyan",
    skills: [
      { name: "Power BI", level: 92 },
      { name: "Tableau", level: 76 },
      { name: "KPI Dashboard Design", level: 90 },
      { name: "Executive Insight Generation", level: 86 },
      { name: "Competitive Intelligence", level: 82 },
      { name: "Operational Monitoring Systems", level: 88 },
    ],
  },
  {
    icon: Building2,
    label: "Business & Domain Expertise",
    color: "gold",
    skills: [
      { name: "Revenue Operations", level: 86 },
      { name: "Business Process Automation", level: 92 },
      { name: "AI Implementation", level: 88 },
      { name: "Executive Decision Support", level: 84 },
      { name: "Fintech / Pharma / SaaS Workflows", level: 85 },
      { name: "Process Transformation Thinking", level: 90 },
    ],
  },
];

interface SkillBarProps {
  name: string;
  level: number;
  color: string;
  delay: number;
  isInView: boolean;
}

function SkillBar({ name, level, color, delay, isInView }: SkillBarProps) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center gap-4">
        <span className="text-sm text-text-secondary">{name}</span>
        <span className="text-xs font-mono text-text-muted">{level}%</span>
      </div>
      <div className="h-1.5 bg-border rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
          className={`h-full rounded-full ${
            color === "cyan"
              ? "bg-gradient-to-r from-cyan-accent/70 to-cyan-accent"
              : "bg-gradient-to-r from-gold-accent/70 to-gold-accent"
          }`}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="section-padding bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-cyan-accent tracking-widest uppercase">
                02 — Capabilities
              </span>
              <div className="h-px flex-1 max-w-20 bg-border" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-700 tracking-tight leading-tight">
              Technical Depth Meets <span className="gradient-text-cyan">Business Systems Thinking</span>
            </h2>
            <p className="text-text-secondary text-base leading-relaxed">
              My work combines AI systems, workflow automation, APIs, analytics, and operational architecture.
              These capability areas reflect the kinds of systems I design and implement for businesses — not just tools I&apos;ve experimented with.
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, catIdx) => (
              <motion.div
                key={category.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: catIdx * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="glass glass-hover rounded-2xl p-6 space-y-5"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                      category.color === "cyan"
                        ? "bg-cyan-soft border border-cyan-accent/20"
                        : "bg-gold-soft border border-gold-accent/20"
                    }`}
                  >
                    <category.icon
                      size={16}
                      className={
                        category.color === "cyan"
                          ? "text-cyan-accent"
                          : "text-gold-accent"
                      }
                    />
                  </div>
                  <h3 className="font-display font-600 text-sm text-text-primary leading-snug">
                    {category.label}
                  </h3>
                </div>

                <div className="space-y-3.5">
                  {category.skills.map((skill, skillIdx) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={category.color}
                      delay={catIdx * 0.1 + skillIdx * 0.07 + 0.3}
                      isInView={isInView}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

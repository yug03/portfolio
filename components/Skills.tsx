"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Settings, Cloud, PieChart, Building2, Brain } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    label: "Programming & Scripting",
    color: "cyan",
    skills: [
      { name: "Python", level: 88 },
      { name: "SQL", level: 92 },
      { name: "Google Apps Script", level: 90 },
      { name: "DAX (Power BI)", level: 88 },
      { name: "JavaScript", level: 70 },
      { name: "R", level: 65 },
    ],
  },
  {
    icon: Settings,
    label: "Automation & Workflow Tools",
    color: "gold",
    skills: [
      { name: "Google Apps Script + Triggers", level: 92 },
      { name: "n8n", level: 85 },
      { name: "Make (Integromat)", level: 83 },
      { name: "Zapier", level: 80 },
      { name: "UiPath", level: 72 },
      { name: "Excel Macros / VBA", level: 78 },
    ],
  },
  {
    icon: PieChart,
    label: "BI, Analytics & Visualization",
    color: "cyan",
    skills: [
      { name: "Power BI + Power Query", level: 94 },
      { name: "Advanced Excel", level: 92 },
      { name: "Google Looker Studio", level: 85 },
      { name: "Tableau", level: 72 },
      { name: "SAP Analytics Cloud", level: 68 },
    ],
  },
  {
    icon: Cloud,
    label: "Cloud & Data Infrastructure",
    color: "gold",
    skills: [
      { name: "Google Cloud Platform (GCP)", level: 82 },
      { name: "Cloud SQL / BigQuery", level: 80 },
      { name: "MS SQL Server", level: 85 },
      { name: "REST APIs / Webhooks", level: 88 },
      { name: "AWS (Lambda, S3, EC2)", level: 70 },
    ],
  },
  {
    icon: Brain,
    label: "AI & Machine Learning",
    color: "cyan",
    skills: [
      { name: "Predictive & Prescriptive Analytics", level: 85 },
      { name: "NLP / Sentiment Analysis", level: 78 },
      { name: "Scikit-learn", level: 75 },
      { name: "OpenAI API / Prompt Engineering", level: 82 },
      { name: "HuggingFace Transformers", level: 72 },
    ],
  },
  {
    icon: Building2,
    label: "Domain & Business Expertise",
    color: "gold",
    skills: [
      { name: "NBFC KPIs, PAR & Collections", level: 92 },
      { name: "Manufacturing OEE & MIS", level: 90 },
      { name: "CRM / ERP / SAP Systems", level: 85 },
      { name: "Finance Ops & Reconciliation", level: 88 },
      { name: "Supply Chain & Procurement", level: 82 },
      { name: "Project Management (Agile/Scrum)", level: 80 },
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
      <div className="flex justify-between items-center">
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
          <div className="space-y-4 max-w-xl">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-cyan-accent tracking-widest uppercase">
                02 — Skills
              </span>
              <div className="h-px flex-1 max-w-20 bg-border" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-700 tracking-tight">
              Technical{" "}
              <span className="gradient-text-cyan">Arsenal</span>
            </h2>
            <p className="text-text-secondary text-base">
              6 years of hands-on experience across programming, automation, BI, cloud,
              AI/ML, and deep domain knowledge in NBFC and manufacturing operations.
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
                {/* Category header */}
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

                {/* Skill bars */}
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
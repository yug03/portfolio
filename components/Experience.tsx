"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, MapPin, Briefcase, ArrowUpRight } from "lucide-react";

const experiences = [
  {
    role: "Assistant Manager — BIU",
    company: "Satin Creditcare Network Limited",
    type: "Full-time",
    location: "Gurgaon, India",
    period: "Sep 2025 — May 2026",
    current: false,
    color: "cyan",
    summary:
      "Designed AI-driven operational intelligence systems for large-scale NBFC workflows — combining predictive models, executive reporting, monitoring pipelines, and branch-level visibility across 250+ locations.",
    bullets: [
      "Architected AI-driven operational monitoring systems across 250+ branches, integrating predictive risk models with automated decision workflows for collections and performance optimization",
      "Engineered API-driven ingestion pipelines processing millions of KYC, disbursement, PAR, and branch performance records for near real-time analytics",
      "Built centralized dashboards enabling leadership visibility into branch-level KPIs, asset quality, and portfolio risk",
      "Developed state-wise KYC and disbursement forecasting models incorporating geography, seasonality, festivals, political factors, and crop cycles",
      "Designed and deployed ARIA (Autonomous Real-time Intelligence Architecture) — a multi-agent AI system prototype for real-time business intelligence, agentic monitoring, and executive insight generation",
      "Conducted competitive intelligence analytics assessing growth, asset quality, and operational efficiency benchmarks",
    ],
  },
  {
    role: "Data Analyst",
    company: "Nectar Lifesciences Ltd.",
    type: "Full-time",
    location: "Chandigarh, India",
    period: "Feb 2024 — Aug 2025",
    current: false,
    color: "gold",
    summary:
      "Built automation pipelines and AI-enabled reporting systems across pharma operations — connecting Sheets, SQL, n8n, CRM, ERP, and cloud workflows to reduce manual effort and improve decision speed.",
    bullets: [
      "Managed 50K+ engineering items, 1000+ vendors, and 1000+ pharma raw materials across integrated IMS and PMS ecosystems",
      "Designed and deployed automation pipelines across Google Sheets, n8n, SQL, CRM, ERP, and cloud systems — reducing manual effort by ~60%",
      "Built autonomous event-driven workflows with branching logic, monitoring, and failure handling",
      "Developed churn prediction, CLTV, and demand-forecasting models integrated into automated decision workflows, improving retention metrics by 6%",
      "Implemented LLM-powered analytics pipelines using Gemini API for automated executive summaries",
      "Built Power BI dashboards for real-time KPI tracking",
      "Led A/B testing initiatives improving engagement metrics by 8%",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="section-padding bg-surface/20">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-4 max-w-3xl"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-cyan-accent tracking-widest uppercase">
                04 — Experience
              </span>
              <div className="h-px flex-1 max-w-20 bg-border" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-700 tracking-tight leading-tight">
              Experience That Built My <span className="gradient-text-gold">Systems Thinking</span>
            </h2>
            <p className="text-text-secondary text-base leading-relaxed">
              My professional background combines analytics, automation, AI implementation, and business process transformation across fintech and pharma environments.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-accent/30 via-border to-gold-accent/30" />

            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.company + exp.role}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative pl-10"
                >
                  <div
                    className={`absolute left-0 top-2 w-6 h-6 rounded-full border flex items-center justify-center ${
                      exp.color === "cyan"
                        ? "border-cyan-accent/50 bg-cyan-soft"
                        : "border-gold-accent/50 bg-gold-soft"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        exp.color === "cyan" ? "bg-cyan-accent" : "bg-gold-accent"
                      }`}
                    />
                  </div>

                  <div className="glass glass-hover rounded-3xl p-6 md:p-8 space-y-6">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-5">
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-panel border border-border text-text-muted">
                            <Briefcase size={11} />
                            {exp.type}
                          </span>
                        </div>

                        <div>
                          <h3 className="font-display font-700 text-lg md:text-xl text-text-primary leading-snug">
                            {exp.role}
                          </h3>
                          <p className="text-sm md:text-base text-text-secondary mt-1">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 lg:items-end text-xs text-text-muted">
                        <div className="inline-flex items-center gap-2">
                          <Calendar size={12} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="inline-flex items-center gap-2">
                          <MapPin size={12} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`rounded-2xl border px-4 py-4 ${
                        exp.color === "cyan"
                          ? "bg-cyan-soft border-cyan-accent/15"
                          : "bg-gold-soft border-gold-accent/15"
                      }`}
                    >
                      <p
                        className={`text-sm leading-relaxed ${
                          exp.color === "cyan"
                            ? "text-cyan-accent/90"
                            : "text-gold-accent/90"
                        }`}
                      >
                        {exp.summary}
                      </p>
                    </div>

                    <div className="grid gap-3">
                      {exp.bullets.map((bullet, bi) => (
                        <div
                          key={bi}
                          className="flex items-start gap-3 rounded-2xl bg-panel/50 border border-border/60 px-4 py-3"
                        >
                          <ArrowUpRight
                            size={14}
                            className={`mt-0.5 flex-shrink-0 ${
                              exp.color === "cyan"
                                ? "text-cyan-accent"
                                : "text-gold-accent"
                            }`}
                          />
                          <p className="text-sm text-text-secondary leading-relaxed">
                            {bullet}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

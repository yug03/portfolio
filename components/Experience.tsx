"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Assistant Manager — Business Intelligence Unit",
    company: "Satin Creditcare Network Limited",
    type: "Full-time",
    location: "Gurgaon, India",
    period: "Aug 2025 — Present",
    current: true,
    color: "cyan",
    summary:
      "Leading BI operations for 250+ NBFC branches — building AI-driven monitoring systems, ETL pipelines, and executive dashboards that track KYC, disbursement, PAR, run rate, conversion ratios, and 20+ branch-level KPIs daily.",
    bullets: [
      "Architect and maintain daily consolidated performance reports for 250+ mirror branches — covering employee status, targets, daily run rate, KYC completion, conversion ratio, and portfolio risk KPIs communicated directly to Business Heads",
      "Architected AI-driven operational monitoring systems integrating predictive risk models with automated decision workflows for collections and branch performance optimization",
      "Engineered ETL Excel pipelines processing millions of KYC, disbursement, PAR, and branch performance records for near real-time analytics and leadership visibility",
      "Built centralized dashboards giving leadership real-time visibility into branch-level KPIs, asset quality metrics, and portfolio risk across all geographies",
      "Developed state-wise KYC and disbursement forecasting models incorporating geography, seasonality, festivals, political factors, and crop cycles for data-backed target allocation",
      "Conducted competitive intelligence analytics benchmarking growth, asset quality, and operational efficiency against industry peers",
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
      "Built and automated 4 core management systems (HRMS, PMS, IMS, SMS) using Google Sheets, Apps Script, SQL Server, and Power BI — saving ₹83.7 lakhs in 9 months and eliminating 30+ hours/week of manual data work.",
    bullets: [
      "Streamlined HRMS, PMS, IMS, SMS, and FMS — increased data processing efficiency by 34% and reduced data entry errors by 47% with automated Email/WhatsApp notifications",
      "Automated daily data transfer from Google Sheets to SQL Server via Apps Script, overcoming the 10M cell limit using 15-day archiving across 20+ PMS and 40+ IMS systems",
      "Designed 10+ Power BI dashboards tracking OEE, yield, downtime, defect rate, and inventory turnover across production, inventory, CRM, and HRMS for executive reporting",
      "Built Google Apps Script system tracking entire company order-to-dispatch workflow — from sales inquiry through purchase, production, inventory, and delivery",
      "Implemented rule-based vendor selection algorithm (L1/L2/L3 ranking) saving ₹13.7 lakhs in 2 months by eliminating procurement bias",
      "Applied prescriptive analytics for disengaged customer detection with automated marketing notifications — increased customer retention by 28%",
      "Automated HR feedback forms and employee greeting templates — reduced attrition by 4.3 percentage points",
      "Total cost savings of ₹83.7 lakhs in 9 months and reporting accuracy improved by 26% through end-to-end system automation",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="section-padding bg-surface/30">
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
                04 — Experience
              </span>
              <div className="h-px flex-1 max-w-20 bg-border" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-700 tracking-tight">
              Where I&apos;ve Made{" "}
              <span className="gradient-text-gold">Impact</span>
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative pl-10">
            {/* Timeline line */}
            <div className="timeline-line" />

            <div className="space-y-10">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute -left-10 mt-2 w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      exp.current
                        ? "border-cyan-accent bg-cyan-soft"
                        : "border-gold-accent/60 bg-gold-soft"
                    }`}
                  >
                    {exp.current && (
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-accent animate-pulse-slow" />
                    )}
                  </div>

                  {/* Card */}
                  <div className="glass glass-hover rounded-2xl p-6 md:p-8 space-y-5">

                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-display font-700 text-base md:text-lg text-text-primary">
                            {exp.role}
                          </h3>
                          {exp.current && (
                            <span className="px-2 py-0.5 text-xs font-mono rounded-full bg-cyan-soft border border-cyan-accent/30 text-cyan-accent">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-text-secondary mt-0.5 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1 flex-shrink-0">
                        <div className="flex items-center gap-1.5 text-xs text-text-muted">
                          <Calendar size={11} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-text-muted">
                          <MapPin size={11} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Summary */}
                    <p
                      className={`text-sm px-4 py-3 rounded-xl border leading-relaxed ${
                        exp.color === "cyan"
                          ? "bg-cyan-soft border-cyan-accent/15 text-cyan-accent/90"
                          : "bg-gold-soft border-gold-accent/15 text-gold-accent/90"
                      }`}
                    >
                      {exp.summary}
                    </p>

                    {/* Divider */}
                    <div className="h-px bg-border/50" />

                    {/* Impact bullets */}
                    <ul className="space-y-3">
                      {exp.bullets.map((bullet, bi) => (
                        <li key={bi} className="flex items-start gap-3">
                          <div
                            className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                              exp.color === "cyan"
                                ? "bg-cyan-accent"
                                : "bg-gold-accent"
                            }`}
                          />
                          <span className="text-sm text-text-secondary leading-relaxed">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>

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
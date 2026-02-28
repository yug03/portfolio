"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Business Systems & Automation Engineer",
    company: "Fintech Operations Consultancy",
    type: "Full-time",
    location: "Gurgaon, India",
    period: "2023 — Present",
    current: true,
    color: "cyan",
    bullets: [
      "Architected end-to-end AI reconciliation systems for 3 NBFC clients, cutting daily reconciliation time by 70–80%",
      "Deployed n8n and Make workflows connecting Salesforce, SAP, and internal ERPs — eliminating 30+ hrs/week of manual data entry",
      "Owned KPI dashboard infrastructure in Power BI for executive reporting, serving finance and operations leadership",
      "Built AI-powered document classification pipeline processing 1,000+ PDFs/day with 97% extraction accuracy",
    ],
  },
  {
    role: "Data & Automation Analyst",
    company: "NBFC — Financial Services",
    type: "Full-time",
    location: "Delhi NCR, India",
    period: "2022 — 2023",
    current: false,
    color: "gold",
    bullets: [
      "Automated monthly MIS reports using Python and SQL, reducing preparation time from 2 days to 90 minutes",
      "Integrated Zoho CRM with internal loan management system via custom API, syncing 15K+ records weekly",
      "Created compliance and disbursement dashboards in Google Looker Studio used by 3 departments",
      "Reduced data discrepancy rate in collections module by 40% through automated validation scripts",
    ],
  },
  {
    role: "Operations & Systems Analyst",
    company: "SaaS Platform — B2B",
    type: "Contract",
    location: "Remote",
    period: "2021 — 2022",
    current: false,
    color: "cyan",
    bullets: [
      "Built lead scoring automation in HubSpot using behavioral triggers, improving SDR efficiency by 35%",
      "Designed onboarding workflow automation that cut customer time-to-value from 14 days to 4 days",
      "Implemented Zapier-based integration mesh connecting 8 SaaS tools, replacing fragmented manual processes",
      "Created SQL-based churn prediction model that identified 68% of churned accounts 30 days in advance",
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
                  transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute -left-10 mt-1.5 w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      exp.current
                        ? "border-cyan-accent bg-cyan-soft"
                        : exp.color === "gold"
                        ? "border-gold-accent/60 bg-gold-soft"
                        : "border-border bg-panel"
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
                        <p className="text-sm text-text-secondary mt-0.5">
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

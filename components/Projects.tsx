"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import {
  TrendingUp,
  Brain,
  GitMerge,
  ChevronDown,
  ExternalLink,
  Layers,
} from "lucide-react";

const projects = [
  {
    id: 1,
    icon: TrendingUp,
    tag: "Finance Automation",
    color: "cyan",
    title: "AI Finance Reconciliation Automation",
    subtitle: "End-to-end automated reconciliation for NBFC back-office",
    problem:
      "A mid-size NBFC was spending 6+ hours daily on manual reconciliation across 4 data sources — bank statements, internal ledger, Zoho CRM, and Excel dumps. The process had a 12–15% error rate, causing compliance delays and audit backlogs.",
    solution:
      "Built a Python-based pipeline that ingests data from all 4 sources via APIs and file parsers, runs AI-driven fuzzy matching (with OpenAI embeddings for document classification), flags anomalies, auto-reconciles matching entries, and pushes a clean report to Google Sheets and Power BI. Deployed on GCP with daily scheduled triggers.",
    stack: ["Python", "OpenAI API", "GCP Cloud Functions", "BigQuery", "Pandas", "Power BI", "Zoho API"],
    impact: [
      "Reduced reconciliation time from 6 hrs to 18 minutes daily",
      "Error rate dropped from 15% to under 1%",
      "Freed 2 FTEs for higher-value finance tasks",
      "Automated compliance report generation — zero manual effort",
    ],
    architecture: "Event-driven pipeline with cron triggers, multi-source ingestion, AI entity resolution, and layered validation checkpoints.",
  },
  {
    id: 2,
    icon: Brain,
    tag: "AI / ML System",
    color: "gold",
    title: "Sales & Marketing Recommendation System",
    subtitle: "Intelligent lead scoring and campaign optimization engine",
    problem:
      "A B2B SaaS company had 80,000+ leads in their CRM with no prioritization logic. Sales reps were manually picking leads, resulting in a 3% conversion rate and high CAC. Marketing campaigns were sent to static lists with no behavioral signals.",
    solution:
      "Designed a recommendation engine using Python and scikit-learn that scores leads on 22 behavioral and demographic features. Integrated directly with HubSpot via API to push scores in real time. Built a campaign personalization layer that segments users into 5 tiers and triggers tailored email workflows via Make (Integromat) based on score thresholds and product usage data.",
    stack: ["Python", "scikit-learn", "HubSpot API", "Make", "PostgreSQL", "Google Looker Studio", "Pandas"],
    impact: [
      "Conversion rate improved from 3% to 9.4% in 60 days",
      "CAC reduced by 38% through intelligent campaign targeting",
      "Sales cycle shortened by 22% with high-priority lead routing",
      "Real-time dashboard showing model confidence and lead velocity",
    ],
    architecture: "ML scoring microservice + CRM sync layer + campaign orchestration via Make with conditional branching on score bands.",
  },
  {
    id: 3,
    icon: GitMerge,
    tag: "Workflow Integration",
    color: "cyan",
    title: "CRM to ERP Workflow Automation",
    subtitle: "Seamless deal-to-invoice automation across business systems",
    problem:
      "A finance consulting firm was losing 15+ hours per week re-entering customer and contract data between Salesforce CRM and their SAP ERP system. Discrepancies caused invoice delays, revenue leakage, and repeated client escalations.",
    solution:
      "Architected a bi-directional sync engine using n8n with custom JavaScript transformation nodes. Deals closed in Salesforce automatically trigger contract generation, approval routing (via Slack bot), and invoice creation in SAP. Added an anomaly layer that detects value mismatches and routes to a human-in-the-loop review queue before final sync.",
    stack: ["n8n", "Salesforce API", "SAP REST API", "Slack API", "JavaScript", "PostgreSQL", "Webhooks"],
    impact: [
      "Eliminated 15 hrs/week of manual data re-entry",
      "Invoice generation time: 3 days → same-day automation",
      "Zero revenue leakage incidents in 6 months post-deployment",
      "Audit trail with full sync logs and anomaly history",
    ],
    architecture: "Event-driven n8n workflow with webhook triggers, transformation layer, approval orchestration, and rollback-safe sync checkpoints.",
  },
];

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  isInView: boolean;
}

function ProjectCard({ project, index, isInView }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className={`glass glass-hover rounded-2xl overflow-hidden group transition-all duration-300 ${
        expanded ? "border-cyan-accent/20" : ""
      }`}
    >
      {/* Card header */}
      <div className="p-6 md:p-8 space-y-5">
        {/* Top row */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                project.color === "cyan"
                  ? "bg-cyan-soft border border-cyan-accent/25"
                  : "bg-gold-soft border border-gold-accent/25"
              }`}
            >
              <project.icon
                size={20}
                className={
                  project.color === "cyan" ? "text-cyan-accent" : "text-gold-accent"
                }
              />
            </div>
            <div>
              <span
                className={`text-xs font-mono tracking-wide ${
                  project.color === "cyan" ? "text-cyan-accent" : "text-gold-accent"
                }`}
              >
                {project.tag}
              </span>
              <div className="text-xs text-text-muted mt-0.5">Case Study 0{project.id}</div>
            </div>
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
            <ExternalLink size={16} className="text-text-muted" />
          </div>
        </div>

        <div>
          <h3 className="font-display font-700 text-lg md:text-xl text-text-primary leading-snug">
            {project.title}
          </h3>
          <p className="text-sm text-text-secondary mt-1">{project.subtitle}</p>
        </div>

        {/* Tech stack pills */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-mono bg-panel border border-border text-text-muted rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Impact preview */}
        <div className="grid grid-cols-2 gap-3">
          {project.impact.slice(0, 2).map((item, i) => (
            <div
              key={i}
              className={`px-3 py-2.5 rounded-xl text-xs ${
                project.color === "cyan"
                  ? "bg-cyan-soft border border-cyan-accent/15 text-cyan-accent"
                  : "bg-gold-soft border border-gold-accent/15 text-gold-accent"
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-xs text-text-secondary hover:text-text-primary transition-colors group/btn"
        >
          <span>{expanded ? "Hide details" : "View full case study"}</span>
          <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown size={14} />
          </motion.div>
        </button>
      </div>

      {/* Expanded content */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-8 pb-8 space-y-6 border-t border-border/50 pt-6">
              {/* Problem */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  <h4 className="text-xs font-mono text-text-muted uppercase tracking-widest">
                    Problem
                  </h4>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed pl-3.5 border-l border-red-400/30">
                  {project.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <h4 className="text-xs font-mono text-text-muted uppercase tracking-widest">
                    Solution
                  </h4>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed pl-3.5 border-l border-emerald-400/30">
                  {project.solution}
                </p>
              </div>

              {/* Architecture */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Layers size={12} className="text-text-muted" />
                  <h4 className="text-xs font-mono text-text-muted uppercase tracking-widest">
                    Architecture
                  </h4>
                </div>
                <div className="px-4 py-3 rounded-xl bg-canvas border border-border font-mono text-xs text-text-secondary">
                  {project.architecture}
                </div>
              </div>

              {/* Full impact */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${
                      project.color === "cyan" ? "bg-cyan-accent" : "bg-gold-accent"
                    }`}
                  />
                  <h4 className="text-xs font-mono text-text-muted uppercase tracking-widest">
                    Business Impact
                  </h4>
                </div>
                <div className="space-y-2 pl-3.5">
                  {project.impact.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span
                        className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${
                          project.color === "cyan" ? "bg-cyan-accent" : "bg-gold-accent"
                        }`}
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="section-padding">
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
                03 — Projects
              </span>
              <div className="h-px flex-1 max-w-20 bg-border" />
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <h2 className="font-display text-3xl md:text-4xl font-700 tracking-tight">
                Case Studies &{" "}
                <span className="gradient-text-cyan">System Builds</span>
              </h2>
              <p className="text-text-secondary text-sm max-w-xs">
                Each project is a documented architecture — problem, solution, and measured results.
              </p>
            </div>
          </motion.div>

          {/* Project cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

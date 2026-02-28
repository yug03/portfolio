"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import {
  ReceiptText,
  RefreshCw,
  FileSearch,
  BarChart2,
  GitBranch,
  Bot,
  Plug,
  TrendingUp,
} from "lucide-react";

const solutions = [
  {
    icon: ReceiptText,
    title: "Finance Reconciliation Automation",
    description:
      "Multi-source reconciliation pipelines that auto-match transactions, flag anomalies, and generate audit-ready reports — daily, without human intervention.",
    tags: ["Python", "GCP", "OpenAI API"],
    color: "cyan",
  },
  {
    icon: RefreshCw,
    title: "CRM Workflow Optimization",
    description:
      "Automate lead routing, deal stage progressions, follow-up sequences, and CRM-to-ERP sync to keep your sales engine running without manual ops overhead.",
    tags: ["HubSpot", "Salesforce", "n8n"],
    color: "gold",
  },
  {
    icon: FileSearch,
    title: "AI Document Parsing",
    description:
      "Intelligent extraction from invoices, loan agreements, statements, and contracts — structured, validated, and routed to the right system automatically.",
    tags: ["OpenAI", "Python", "Webhooks"],
    color: "cyan",
  },
  {
    icon: BarChart2,
    title: "KPI Dashboard Automation",
    description:
      "Auto-refreshing executive dashboards connected to your live data sources — no manual exports, no stale reports, no spreadsheet gymnastics.",
    tags: ["Power BI", "BigQuery", "SQL"],
    color: "gold",
  },
  {
    icon: GitBranch,
    title: "CRM to ERP Integration",
    description:
      "Bidirectional sync between your CRM and ERP with transformation logic, approval gates, and error handling — ensuring data consistency across all departments.",
    tags: ["SAP API", "Zapier", "Make"],
    color: "cyan",
  },
  {
    icon: Bot,
    title: "AI Workflow Agents",
    description:
      "Custom LLM-powered agents that handle classification, routing, summarization, and decision support inside your existing business workflows.",
    tags: ["LangChain", "OpenAI", "Python"],
    color: "gold",
  },
  {
    icon: Plug,
    title: "SaaS Integration Architecture",
    description:
      "Design and implement integration meshes connecting your core SaaS stack — from ingestion to transformation to output — with full logging and monitoring.",
    tags: ["REST APIs", "n8n", "Webhooks"],
    color: "cyan",
  },
  {
    icon: TrendingUp,
    title: "Sales Intelligence Automation",
    description:
      "Lead scoring, behavioral tracking, and campaign personalization engines that connect your data to real-time CRM actions for higher conversion rates.",
    tags: ["ML", "Python", "HubSpot API"],
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
              <h2 className="font-display text-3xl md:text-4xl font-700 tracking-tight">
                Systems I Can{" "}
                <span className="gradient-text-cyan">Build For You</span>
              </h2>
              <p className="text-sm text-text-secondary max-w-xs">
                Ready-to-deploy automation solutions for finance, ops, and growth teams.
              </p>
            </div>
          </motion.div>

          {/* Solutions grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {solutions.map((solution, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="glass glass-hover rounded-2xl p-5 space-y-4 group"
              >
                {/* Icon */}
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
                      solution.color === "cyan" ? "text-cyan-accent" : "text-gold-accent"
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

                {/* Tags */}
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
            <p className="text-text-secondary text-sm mb-4">
              Have a specific automation challenge in mind?
            </p>
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-soft border border-cyan-accent/30 text-cyan-accent font-display font-500 text-sm rounded-xl hover:bg-cyan-accent/15 hover:border-cyan-accent/50 transition-all duration-200"
            >
              Discuss Your Project
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

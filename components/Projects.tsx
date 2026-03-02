"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import {
  BarChart3,
  Globe,
  ShoppingCart,
  Users,
  Bot,
  TrendingUp,
  ChevronDown,
  ExternalLink,
  Layers,
} from "lucide-react";

const projects = [
  {
    id: 1,
    icon: BarChart3,
    tag: "Manufacturing / Operations",
    color: "cyan",
    title: "Enterprise Manufacturing OEE Intelligence System",
    subtitle: "Real-time machine-level performance monitoring for production units",
    problem:
      "The manufacturing unit had zero real-time machine visibility, no structured tracking of productive vs outage hours, and no root cause analysis for downtime. Manual Excel-based reporting caused delayed insights, no machine-level drilldown, and reactive maintenance instead of proactive scheduling.",
    solution:
      "Built a Power BI OEE Intelligence System integrating production, downtime, and rejection data across all machines. Designed a full Star Schema data model with dynamic DAX measures calculating OEE = Availability × Performance × Quality. Enabled machine-wise and reason-wise breakdown with monthly, daily, and yearly slicing for executive-ready dashboards.",
    stack: ["Power BI", "DAX", "Power Query", "SQL", "Star Schema", "ERP Integration"],
    impact: [
      "Enabled machine-level bottleneck detection across all production units",
      "Reduced downtime diagnosis time with reason-coded root cause analysis",
      "Improved preventive maintenance scheduling — shifted from reactive to proactive",
      "Centralized production performance monitoring for executive leadership",
    ],
    architecture:
      "ERP exports (CSV/Excel) + SQL tables → Power Query ETL (null handling, normalization) → Star Schema (Fact_Production, Fact_Downtime, Fact_Rejection + Dim_Date, Dim_Machine, Dim_Reason, Dim_Product) → Power BI dashboards with dynamic slicers",
  },
  {
    id: 2,
    icon: Globe,
    tag: "Export / Sales Strategy",
    color: "gold",
    title: "Global Export Market Intelligence & Competitive Benchmarking",
    subtitle: "Multi-page Power BI system for export strategy and competitor analysis",
    problem:
      "Management had no market share tracking, region-wise export distribution, or competitor benchmarking capability. Manual reports lacked consolidation, comparative analysis, and market share calculation logic — making strategic export decisions rely on guesswork.",
    solution:
      "Developed a multi-page Power BI analytics system integrating export sales data, competitor benchmarking datasets, region classification logic, and product segmentation models. Connected public trade data APIs for automated updates and built DAX measures for market share %, top 5 product ranking, and region contribution %.",
    stack: ["Power BI", "DAX", "Power Query", "Market Trade APIs", "Star Schema"],
    impact: [
      "Enabled data-backed export strategy decisions for leadership",
      "Identified high-growth markets — APAC and MENA regions prioritized",
      "Provided product portfolio optimization insights by region",
      "Supported competitive positioning strategy with live benchmarking",
    ],
    architecture:
      "Sales export reports + API market database + product master → Power Query (country-to-region mapping, currency normalization) → Star Schema (Fact_Sales, Dim_Product, Dim_Region, Dim_Country, Dim_Company) → Multi-page Power BI with dynamic year slicer",
  },
  {
    id: 3,
    icon: ShoppingCart,
    tag: "Sales / Purchase / Production",
    color: "cyan",
    title: "Enterprise Commercial Performance & Operations Intelligence",
    subtitle: "Unified BI dashboard covering sales, purchase, and production traceability",
    problem:
      "Leadership had no unified view of sales broken down by segment (Export / Domestic / Interunit), no purchase-to-sales alignment, and no production-to-sales traceability. Existing MIS was manual, time-consuming, error-prone, and offered no drilldown capability.",
    solution:
      "Built an interactive Power BI dashboard integrating sales database, purchase data, production reports, customer master, and product master. Created calculated columns for segment classification, YoY growth tracking, monthly trend analysis, and top customer/product ranking via DAX RANKX.",
    stack: ["Power BI", "DAX", "SQL", "ERP Integration", "Power Query", "Google Sheets"],
    impact: [
      "Automated monthly MIS — eliminated manual report preparation",
      "Significantly reduced reporting turnaround time across departments",
      "Improved financial visibility with Export %, Domestic %, and Interunit split",
      "Enabled faster commercial decisions with YoY and MTD trend comparisons",
    ],
    architecture:
      "Raw ERP exports → Power Query (type normalization, document classification) → Unified sales model → Relationships across Fact_Sales + Dim_Customer + Dim_Product + Dim_Date → Interactive Power BI dashboard",
  },
  {
    id: 4,
    icon: Users,
    tag: "CRM / Customer Lifecycle",
    color: "gold",
    title: "CRM Revenue & Customer Intelligence Dashboard",
    subtitle: "Full customer lifecycle analytics — funnel, retention, CLV, and churn",
    problem:
      "No centralized visibility into sales pipeline health, inquiry-to-order conversion, customer retention, repeat order patterns, or pocket size (average order value). Sales data was scattered across CRM with no funnel analytics, no retention tracking, and no cohort-based behavior analysis.",
    solution:
      "Built a CRM-driven analytics system consolidating sales, inquiries, and customer master data. Implemented full sales funnel tracking, CLV measurement, cohort analysis by first-purchase month, and retention scoring. Built DAX measures for Repeat Purchase Rate, Retention Rate, Churn Rate, Customer Lifetime Value, and Pocket Size analysis.",
    stack: ["Power BI", "DAX", "CRM Integration", "SQL", "Power Query", "Star Schema"],
    impact: [
      "Identified revenue concentration — top 20% customers driving 80% revenue",
      "Discovered and fixed drop-off stage in inquiry → proposal → closure pipeline",
      "Detected retention gaps by region — enabled proactive churn management",
      "Reduced manual CRM reporting and enabled data-driven growth strategy",
    ],
    architecture:
      "CRM export + inquiry log + order history + customer master → Power Query ETL (customer ID standardization, stage normalization, cohort tagging) → Star Schema (Fact_Inquiries, Fact_Orders, Fact_Sales + 5 dimension tables) → Power BI revenue intelligence dashboards",
  },
  {
    id: 5,
    icon: Bot,
    tag: "AI / Cloud Automation",
    color: "cyan",
    title: "AI-Driven CRM & Supplier Management System",
    subtitle: "Automated customer and supplier analytics using AI/ML on Google Cloud",
    problem:
      "No unified customer and supplier analytics — procurement and sales workflows were entirely manual and unoptimized. Customer behavior was invisible, supplier performance was tracked in disconnected spreadsheets, and there was no real-time visibility into procurement decisions.",
    solution:
      "Built an AI/ML-powered system on Google Cloud integrating CRM data, supplier performance metrics, and procurement workflows. Used Cloud SQL for real-time data storage, Python for ML-based behavior pattern analysis, and Power BI for live dashboards. Automated customer birthday/anniversary communications, supplier TAT analysis, and raw material quality scoring (L1/L2/L3 vendor ranking).",
    stack: ["Google Cloud", "Cloud SQL", "Python", "Power BI", "Apps Script", "ML"],
    impact: [
      "Real-time tracking of customer and supplier behavior patterns",
      "Automated vendor ranking system — eliminated procurement bias",
      "Integrated CRM automation: birthday wishes, retention alerts, buying pattern recognition",
      "Optimized procurement workflows with automated purchase order generation",
    ],
    architecture:
      "CRM + supplier data → Cloud SQL (GCP) → Python ML pipeline (behavior scoring) → Apps Script triggers → Power BI live dashboards → Automated notification system (Email/WhatsApp)",
  },
  {
    id: 6,
    icon: TrendingUp,
    tag: "AI / NLP / Finance",
    color: "gold",
    title: "Stock Market Analyzer — NLP & Sentiment Analysis",
    subtitle: "News-based stock movement prediction using NLP Transformers",
    problem:
      "No systematic way to gauge market sentiment from financial news for stock movement prediction. Traders and analysts were reading news manually with no structured sentiment scoring, making it impossible to quantify market mood or correlate news sentiment with price movement.",
    solution:
      "Developed a news-based stock market prediction model using HuggingFace Transformers for NLP sentiment analysis and BeautifulSoup for live news scraping. Extracted sentiment scores (positive/negative/neutral) from news articles for selected stocks and correlated scores with historical price movement data using Scikit-learn models.",
    stack: ["Python", "HuggingFace Transformers", "BeautifulSoup", "Scikit-learn", "NLP", "Pandas"],
    impact: [
      "Automated sentiment extraction from live financial news feeds",
      "Provided directional signals (bullish/bearish/neutral) for selected stocks",
      "Eliminated manual news reading — full pipeline runs automatically",
      "Built foundation for quantitative sentiment-driven trading signals",
    ],
    architecture:
      "BeautifulSoup news scraper → text preprocessing → HuggingFace Transformer (sentiment classification) → Scikit-learn correlation model → sentiment score output with directional stock signal",
  },
];

interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
  isInView: boolean;
}

function ProjectCard({ project, index, isInView }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`glass glass-hover rounded-2xl overflow-hidden group transition-all duration-300 ${
        expanded ? "border-cyan-accent/20" : ""
      }`}
    >
      {/* Card header */}
      <div className="p-6 md:p-7 space-y-4">
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
              <div className="text-xs text-text-muted mt-0.5">
                Case Study 0{project.id}
              </div>
            </div>
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
            <ExternalLink size={15} className="text-text-muted" />
          </div>
        </div>

        <div>
          <h3 className="font-display font-700 text-base md:text-lg text-text-primary leading-snug">
            {project.title}
          </h3>
          <p className="text-xs text-text-secondary mt-1 leading-relaxed">
            {project.subtitle}
          </p>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-mono bg-panel border border-border text-text-muted rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Impact preview — top 2 */}
        <div className="grid grid-cols-1 gap-2">
          {project.impact.slice(0, 2).map((item, i) => (
            <div
              key={i}
              className={`px-3 py-2 rounded-xl text-xs leading-relaxed ${
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
          className="flex items-center gap-2 text-xs text-text-secondary hover:text-text-primary transition-colors"
        >
          <span>{expanded ? "Hide details" : "View full case study"}</span>
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
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
            <div className="px-6 md:px-7 pb-7 space-y-5 border-t border-border/50 pt-5">

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
                <div className="px-4 py-3 rounded-xl bg-canvas border border-border font-mono text-xs text-text-secondary leading-relaxed">
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
                    <div
                      key={i}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <span
                        className={`mt-2 w-1 h-1 rounded-full flex-shrink-0 ${
                          project.color === "cyan"
                            ? "bg-cyan-accent"
                            : "bg-gold-accent"
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
                6 real-world systems built across manufacturing, finance, CRM, AI,
                and export intelligence.
              </p>
            </div>
          </motion.div>

          {/* Projects grid — 2 columns on large screens */}
          <div className="grid md:grid-cols-2 gap-6">
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
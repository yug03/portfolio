"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Bot,
  Workflow,
  Headphones,
  Mic,
  Database,
  BarChart3,
  Briefcase,
  ChevronDown,
  ExternalLink,
  Layers,
  IndianRupee,
  PlayCircle,
  CheckCircle2,
} from "lucide-react";

const projects = [
  {
    id: 1,
    icon: Workflow,
    tag: "Workflow Automation",
    color: "cyan",
    title: "Business Workflow Automation System",
    subtitle:
      "End-to-end business process automation — 11 steps in 8 seconds, zero human touch",
    problem:
      "Many businesses still rely on fragmented, manual workflows across email, spreadsheets, internal teams, and disconnected tools. This creates delays, human errors, poor visibility, and unnecessary headcount dependency for repeatable operational processes.",
    solution:
      "Built an intelligent event-driven automation engine that transforms multi-step business processes into fully automated workflows. The system handles order intake, validation, inventory checks, payment verification, AI-based prioritization, notifications, tracking updates, feedback loops, and monitoring — all without manual intervention.",
    stack: [
      "n8n",
      "OpenAI GPT-4o-mini",
      "Google Sheets API",
      "Gmail API",
      "Slack API",
      "Twilio",
      "Webhooks",
      "REST APIs",
    ],
    impact: [
      "11 automated steps per order executed in under 10 seconds",
      "Replaces 30–45 minutes of manual processing per order",
      "97% success rate across 500+ test executions",
      "Scales to thousands of transactions without additional headcount",
    ],
    architecture:
      "Webhook trigger → validation layer → inventory + payment checks → GPT-4o-mini priority classification → notification orchestration (email / Slack / SMS) → shipping + feedback workflows → audit trail + real-time monitoring dashboard",
    pricing: "₹75K–3L setup + ₹20K–75K/month",
    bestFor: "Operations teams, e-commerce, onboarding workflows, loan processing, HR ops",
    demoLink: "[PLACEHOLDER — add actual link]",
    videoLink: "[PLACEHOLDER — add actual link]",
  },
  {
    id: 2,
    icon: Bot,
    tag: "AI Sales Automation",
    color: "gold",
    title: "AI Lead Qualification & Enrichment Bot",
    subtitle:
      "Convert more leads by talking to fewer — AI-powered lead qualification in real time",
    problem:
      "Sales teams waste time talking to low-intent leads, manually qualifying prospects, and responding too slowly to inbound demand. Traditional forms create friction, while unqualified leads clog the pipeline and reduce sales productivity.",
    solution:
      "Built a conversational AI lead qualification system that engages leads dynamically, asks adaptive qualifying questions, scores them using weighted business criteria, enriches company information from external data sources, updates CRM automatically, and routes leads to the right next step.",
    stack: [
      "Python FastAPI",
      "OpenAI GPT-4o-mini",
      "n8n",
      "HubSpot CRM",
      "Apollo.io API",
      "Slack",
      "Gmail",
      "Streamlit",
    ],
    impact: [
      "40–60% increase in sales team productivity",
      "2–3x faster speed-to-lead with instant bot engagement",
      "15–30% improvement in conversion rate",
      "Reduces SDR workload and manual qualification overhead",
    ],
    architecture:
      "Lead capture trigger → AI chat qualification flow → weighted scoring engine → external enrichment APIs → CRM sync with score, transcript, summary, and tags → sales notification / nurture workflow / calendar booking",
    pricing: "₹75K–3L setup + ₹30K–80K/month",
    bestFor: "B2B services, SaaS, agencies, consulting firms, inbound sales teams",
    demoLink: "[PLACEHOLDER]",
    videoLink: "[PLACEHOLDER]",
  },
  {
    id: 3,
    icon: Headphones,
    tag: "AI Support Systems",
    color: "cyan",
    title: "AI Customer Support Agent",
    subtitle:
      "RAG-powered AI support — 80% ticket deflection, 24/7, under 2 seconds",
    problem:
      "Support teams face repetitive queries, slow first-response times, inconsistent agent answers, and rising ticket volumes. Knowledge bases exist, but customers still depend on human agents because information is hard to retrieve quickly and consistently.",
    solution:
      "Built a production-grade RAG customer support agent that uses semantic retrieval across company knowledge bases, handles multi-turn conversations with memory, classifies user intent, detects sentiment, escalates intelligently with full context, and logs everything back to CRM.",
    stack: [
      "Python FastAPI",
      "OpenAI GPT-4o-mini",
      "ChromaDB",
      "OpenAI Embeddings",
      "n8n",
      "HubSpot",
      "Slack",
      "Gmail",
      "Streamlit",
      "HTML/CSS/JS",
    ],
    impact: [
      "60–80% ticket deflection without human intervention",
      "70% reduction in average first-response time",
      "24/7 support availability with context-aware responses",
      "Improves escalation quality with AI-generated handoff summaries",
    ],
    architecture:
      "Embeddable chat widget → FastAPI service → embeddings + ChromaDB retrieval → LLM response generation with session memory → intent + sentiment classification → CRM logging + escalation workflow + analytics dashboard",
    pricing: "₹1L–4L setup + ₹30K–1L/month",
    bestFor: "SaaS, product companies, service businesses, internal support desks",
    demoLink: "[PLACEHOLDER]",
    videoLink: "[PLACEHOLDER]",
  },
  {
    id: 4,
    icon: Mic,
    tag: "Voice AI",
    color: "gold",
    title: "Voice AI Appointment & Inquiry Agent",
    subtitle:
      "Human-like voice AI for inbound inquiries, appointment handling, and business call automation",
    problem:
      "Businesses lose leads and create poor customer experiences when calls go unanswered, appointments are handled manually, or teams spend valuable time on repetitive phone interactions that should be automated.",
    solution:
      "Built a voice AI agent capable of handling inbound inquiries, answering common questions, collecting customer details, qualifying intent, and supporting appointment workflows using speech interfaces and AI-driven conversational logic.",
    stack: [
      "ElevenLabs",
      "Web Speech API",
      "OpenAI API",
      "n8n",
      "Webhooks",
      "Calendar Integration",
      "REST APIs",
    ],
    impact: [
      "Automates repetitive inquiry handling without sacrificing responsiveness",
      "Improves lead capture outside business hours",
      "Reduces front-desk or sales coordination overhead",
      "Creates faster and more consistent customer interactions",
    ],
    architecture:
      "Voice input layer → transcription / speech processing → LLM conversation logic → intent handling + workflow triggers → booking / CRM update / follow-up actions → voice response delivery",
    pricing: "₹1L–3.5L setup + ₹25K–90K/month",
    bestFor: "Clinics, agencies, service businesses, consulting firms, sales teams",
    demoLink: "[PLACEHOLDER]",
    videoLink: "[PLACEHOLDER]",
  },
  {
    id: 5,
    icon: Database,
    tag: "Data + AI Infrastructure",
    color: "cyan",
    title: "Executive Intelligence & Multi-Agent Monitoring System",
    subtitle:
      "Agentic business intelligence for operational monitoring, anomaly detection, and executive decision support",
    problem:
      "Leadership teams often operate with delayed reporting, fragmented KPIs, and no intelligent system to monitor anomalies, summarize risk, or surface decision-ready insights from live business data.",
    solution:
      "Designed a multi-agent AI monitoring architecture for operational intelligence that ingests large-scale business records, tracks branch and portfolio KPIs, identifies performance risks, and generates executive-level insights through autonomous monitoring workflows.",
    stack: [
      "Python",
      "SQL",
      "GCP",
      "Cloud SQL",
      "LLM APIs",
      "Agentic Workflows",
      "Dashboards",
      "APIs",
    ],
    impact: [
      "Supports centralized visibility across 250+ branches",
      "Processes high-volume KYC, disbursement, PAR, and branch performance records",
      "Improves leadership response speed with executive-ready intelligence",
      "Demonstrates scalable AI-driven monitoring for real-world operations",
    ],
    architecture:
      "API-driven data ingestion → centralized storage and KPI layer → forecasting + anomaly workflows → multi-agent monitoring logic → executive insight generation → dashboards and alerting interfaces",
    pricing: "₹2L–6L setup + ₹50K–1.5L/month",
    bestFor: "Fintech, NBFCs, multi-branch businesses, operations leadership teams",
    demoLink: "[PLACEHOLDER]",
    videoLink: "[PLACEHOLDER]",
  },
  {
    id: 6,
    icon: BarChart3,
    tag: "AI Analytics Automation",
    color: "gold",
    title: "LLM-Powered Executive Summary & Reporting Pipeline",
    subtitle:
      "Automated reporting pipelines that turn operational data into executive-ready summaries",
    problem:
      "Leaders spend too much time reading raw reports and teams waste hours preparing summaries manually. Even when dashboards exist, decision-makers still need concise narratives, highlights, and anomaly explanations.",
    solution:
      "Built an LLM-powered reporting workflow that transforms structured business data into concise executive summaries, trend analysis, and action-oriented narratives. The system integrates data sources, automates preprocessing, generates summaries, and distributes them through operational channels.",
    stack: [
      "Gemini API",
      "Python",
      "SQL",
      "n8n",
      "Google Sheets",
      "Dashboards",
      "Email Automation",
    ],
    impact: [
      "Reduces manual reporting effort for business teams",
      "Improves executive consumption of data-heavy reports",
      "Creates faster reporting cycles with more actionable summaries",
      "Bridges analytics outputs with decision-making workflows",
    ],
    architecture:
      "Operational data sources → preprocessing + business logic layer → LLM summary generation → formatted narrative outputs → automated delivery via email / sheets / dashboard-connected workflows",
    pricing: "₹60K–2L setup + ₹15K–50K/month",
    bestFor: "Leadership teams, BI teams, ops reporting functions, founders",
    demoLink: "[PLACEHOLDER]",
    videoLink: "[PLACEHOLDER]",
  },
  {
    id: 7,
    icon: Briefcase,
    tag: "Business Transformation",
    color: "cyan",
    title: "Custom CRM–ERP–AI Automation Stack",
    subtitle:
      "Connected systems architecture for businesses stuck with disconnected tools and manual handoffs",
    problem:
      "Many growing businesses suffer from fragmented data across CRM, ERP, spreadsheets, forms, support tools, and messaging apps. Teams manually move data between systems, causing delays, inconsistency, and operational blind spots.",
    solution:
      "Built custom automation stacks that connect CRM, ERP, databases, dashboards, APIs, and AI-powered workflows into a single operational architecture. These systems centralize data movement, trigger downstream actions automatically, and create end-to-end visibility.",
    stack: [
      "n8n",
      "Make",
      "Zapier",
      "REST APIs",
      "Webhooks",
      "CRM Integrations",
      "ERP Integrations",
      "FastAPI",
    ],
    impact: [
      "Eliminates repetitive cross-tool manual work",
      "Creates reliable sync between customer, operational, and reporting systems",
      "Reduces delays caused by disconnected handoffs",
      "Establishes scalable infrastructure for future AI implementations",
    ],
    architecture:
      "Forms / CRM / ERP / database / support tools → webhook + API orchestration layer → validation and business rules → AI / automation triggers → reporting + notifications + synchronized records across systems",
    pricing: "₹1L–5L setup + ₹25K–1L/month",
    bestFor: "Scaling businesses with fragmented operations and multiple internal tools",
    demoLink: "[PLACEHOLDER]",
    videoLink: "[PLACEHOLDER]",
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
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`glass glass-hover rounded-2xl overflow-hidden group transition-all duration-300 ${
        expanded ? "border-cyan-accent/20" : ""
      }`}
    >
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
                  project.color === "cyan"
                    ? "text-cyan-accent"
                    : "text-gold-accent"
                }
              />
            </div>
            <div>
              <span
                className={`text-xs font-mono tracking-wide ${
                  project.color === "cyan"
                    ? "text-cyan-accent"
                    : "text-gold-accent"
                }`}
              >
                {project.tag}
              </span>
              <div className="text-xs text-text-muted mt-0.5">
                System Build 0{project.id}
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

        {/* Meta info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="px-3 py-2 rounded-xl bg-panel border border-border">
            <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">
              Best For
            </div>
            <div className="text-xs text-text-secondary leading-relaxed">
              {project.bestFor}
            </div>
          </div>
          <div className="px-3 py-2 rounded-xl bg-panel border border-border">
            <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">
              <IndianRupee size={11} />
              Pricing
            </div>
            <div className="text-xs text-text-secondary leading-relaxed">
              {project.pricing}
            </div>
          </div>
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

        {/* Impact preview */}
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

        {/* CTA row */}
        <div className="flex flex-wrap gap-2 pt-1">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium bg-cyan-accent text-canvas hover:opacity-90 transition-opacity"
          >
            <ExternalLink size={13} />
            Demo
          </a>
          <a
            href={project.videoLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium border border-border text-text-primary hover:bg-panel transition-colors"
          >
            <PlayCircle size={13} />
            Walkthrough
          </a>
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

              {/* Business impact */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={12}
                    className={
                      project.color === "cyan"
                        ? "text-cyan-accent"
                        : "text-gold-accent"
                    }
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

              {/* Commercial fit */}
              <div className="grid md:grid-cols-2 gap-3">
                <div className="rounded-xl bg-panel border border-border p-4">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">
                    Best Fit
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {project.bestFor}
                  </p>
                </div>
                <div className="rounded-xl bg-panel border border-border p-4">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">
                    Typical Engagement
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {project.pricing}
                  </p>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="pt-1 flex flex-wrap gap-2">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium bg-cyan-accent text-canvas hover:opacity-90 transition-opacity"
                >
                  <ExternalLink size={13} />
                  Open Demo
                </a>
                <a
                  href={project.videoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium border border-border text-text-primary hover:bg-panel transition-colors"
                >
                  <PlayCircle size={13} />
                  Watch Walkthrough
                </a>
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
              <div className="space-y-3">
                <h2 className="font-display text-3xl md:text-4xl font-700 tracking-tight leading-tight">
                  AI Systems, Automation Workflows &{" "}
                  <span className="gradient-text-cyan">Client-Ready Solutions</span>
                </h2>
                <p className="text-text-secondary text-sm md:text-base max-w-3xl leading-relaxed">
                  These are the core systems I build for businesses looking to
                  automate operations, qualify leads faster, support customers at
                  scale, and connect fragmented processes through AI-driven
                  infrastructure.
                </p>
              </div>

              <div className="rounded-2xl glass px-4 py-3 border border-border max-w-xs">
                <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">
                  Positioning
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Each project below is both a case study and a service model I
                  can adapt to your business workflow.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Projects grid */}
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

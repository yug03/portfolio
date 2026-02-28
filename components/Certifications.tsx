"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Award, BadgeCheck, ExternalLink } from "lucide-react";

const certifications = [
  {
    issuer: "Google Cloud",
    name: "Associate Cloud Engineer",
    fullName: "Google Cloud Associate Cloud Engineer Certification",
    description:
      "Validates ability to deploy applications, monitor cloud operations, and manage enterprise cloud solutions on GCP.",
    date: "2023",
    badge: "GCP",
    color: "cyan",
    credential: "https://cloud.google.com/certification/cloud-engineer",
    skills: ["Cloud Functions", "BigQuery", "Cloud Run", "IAM", "GKE"],
  },
  {
    issuer: "Google",
    name: "Data Analytics Professional Certificate",
    fullName: "Google Data Analytics Professional Certificate",
    description:
      "Comprehensive program covering data cleaning, analysis, visualization, SQL, R, and data-driven business decision-making.",
    date: "2022",
    badge: "GDA",
    color: "gold",
    credential: "https://grow.google/dataanalytics/",
    skills: ["SQL", "Tableau", "R", "Spreadsheets", "BigQuery"],
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" className="section-padding">
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
                05 — Certifications
              </span>
              <div className="h-px flex-1 max-w-20 bg-border" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-700 tracking-tight">
              Credentials &{" "}
              <span className="gradient-text-cyan">Certifications</span>
            </h2>
          </motion.div>

          {/* Cert cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="glass glass-hover rounded-2xl p-7 space-y-5"
              >
                {/* Top row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {/* Badge */}
                    <div
                      className={`w-14 h-14 rounded-2xl flex flex-col items-center justify-center font-display font-800 text-sm ${
                        cert.color === "cyan"
                          ? "bg-cyan-soft border border-cyan-accent/30 text-cyan-accent"
                          : "bg-gold-soft border border-gold-accent/30 text-gold-accent"
                      }`}
                    >
                      <Award size={20} className="mb-0.5" />
                      <span className="text-[10px] font-mono font-500">{cert.badge}</span>
                    </div>

                    <div>
                      <p className="text-xs font-mono text-text-muted">{cert.issuer}</p>
                      <h3 className="font-display font-700 text-base text-text-primary leading-snug mt-0.5">
                        {cert.name}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <span className="text-xs font-mono text-text-muted">{cert.date}</span>
                    <BadgeCheck
                      size={18}
                      className={
                        cert.color === "cyan" ? "text-cyan-accent" : "text-gold-accent"
                      }
                    />
                  </div>
                </div>

                <p className="text-sm text-text-secondary leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills covered */}
                <div className="space-y-2">
                  <p className="text-xs font-mono text-text-muted uppercase tracking-widest">
                    Topics Covered
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2.5 py-1 text-xs font-mono rounded-lg border ${
                          cert.color === "cyan"
                            ? "bg-cyan-soft border-cyan-accent/20 text-cyan-accent/80"
                            : "bg-gold-soft border-gold-accent/20 text-gold-accent/80"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Link */}
                <a
                  href={cert.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-text-muted hover:text-text-secondary transition-colors"
                >
                  <ExternalLink size={12} />
                  View Credential
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Award, BadgeCheck, ExternalLink, GraduationCap, Building } from "lucide-react";

const certifications = [
  {
    issuer: "Google / Coursera",
    name: "Google Project Management",
    badge: "GPM",
    color: "cyan",
    date: "2024",
    credential: "https://coursera.org/share/7f9c4342fb033a70d8ad8434f6235096",
    skills: ["Agile", "Scrum", "Project Planning", "Risk Management", "Change Management"],
    description:
      "Covers Agile/Scrum methodologies, project documentation, stakeholder management, and real-world project lifecycle execution.",
  },
  {
    issuer: "Microsoft / Coursera",
    name: "Microsoft Power BI Data Analyst",
    badge: "PBI",
    color: "gold",
    date: "2024",
    credential: "https://coursera.org/share/b28ee7fbc91ec0b377c31043bfcbc186",
    skills: ["Power BI", "DAX", "Data Modeling", "Star Schema", "Business Intelligence"],
    description:
      "Comprehensive Power BI training — data connection, transformation, DAX, Star Schema modeling, and executive dashboard creation. Prepares for PL-300 certification.",
  },
  {
    issuer: "SAP / Coursera",
    name: "SAP Business Analyst",
    badge: "SAP",
    color: "cyan",
    date: "2024",
    credential: "https://coursera.org/share/cf210bb2991ec50931485f6776f352f1",
    skills: ["SAP Solution Manager", "SAP Signavio", "Business Process Modeling", "Gap Analysis", "Requirements"],
    description:
      "Hands-on experience with SAP enterprise tools — process maps, user stories, business requirements, and implementation validation using industry-standard practices.",
  },
  {
    issuer: "Google Cloud / Coursera",
    name: "Google Cloud: Cloud Data Engineering",
    badge: "GCP",
    color: "gold",
    date: "2023",
    credential: "https://coursera.org/share/83ef86fc9a6239d4d2e4ec47df538af0",
    skills: ["BigQuery", "Cloud SQL", "Dataproc", "Apache Spark", "Data Pipelines", "Data Lakes"],
    description:
      "Prepares for Google Cloud Data Engineer certification — BigQuery analytics, Cloud SQL/Dataproc for Hadoop/Spark migration, and data pipeline architecture on GCP.",
  },
  {
    issuer: "Google / Coursera",
    name: "Google Data Analytics",
    badge: "GDA",
    color: "cyan",
    date: "2023",
    credential: "https://coursera.org/share/4a08ddb86913d4bd1387f2e4e7b2b9b4",
    skills: ["SQL", "Python", "Tableau", "R", "Data Cleaning", "Data Visualization"],
    description:
      "8-course Google professional program covering data cleaning, SQL, Python, Tableau, R, and data-driven decision-making. Industry-recognized entry-level analytics credential.",
  },
  {
    issuer: "Coursera",
    name: "Pre-MBA Statistics",
    badge: "STAT",
    color: "gold",
    date: "2023",
    credential: "https://coursera.org/share/9ddca059f51bbb898fc421d4f95e8b52",
    skills: ["Probability", "Statistical Inference", "Hypothesis Testing", "Probability Distribution", "Data Literacy"],
    description:
      "Covers probability fundamentals, statistical inference, hypothesis testing, and population-level reasoning from sample data — foundation for analytics and data science.",
  },
  {
    issuer: "AWS / Coursera",
    name: "Building Modern Python Apps on AWS",
    badge: "AWS",
    color: "cyan",
    date: "2023",
    credential: "https://coursera.org/share/6587546154975b3393791f9ae17016c8",
    skills: ["AWS Lambda", "Amazon S3", "REST APIs", "IAM", "Serverless", "Microservices"],
    description:
      "Hands-on AWS course building serverless Python applications using Lambda, S3, API Gateway, IAM, and CloudWatch — cloud architecture and microservices design.",
  },
];

const education = [
  {
    degree: "Bachelor of Engineering (Honours)",
    field: "Computer Science & Engineering",
    specialization: "Big Data Analytics (In Association with IBM)",
    institution: "Chandigarh University",
    location: "Gharuan, Punjab, India",
    period: "July 2020 – May 2024",
    cgpa: "7.91",
    division: "First Division with Distinction",
    degreeLink: "https://docs.google.com/document/d/1CFw9pS-v09D0xqvpCB26Ifg3mVPBWN3keB5b-qoJdbY/edit?usp=sharing",
    tools: ["IBM SPSS Modeler", "IBM Watson", "IBM Cognos", "IBM DB2", "IBM Cloud", "IBM Planning Analytics"],
    areas: ["Hadoop", "Spark & Scala", "Predictive Analytics", "Cognitive Analytics", "Big Data Security", "Business Intelligence"],
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="space-y-16">

          {/* ── Education ── */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs text-cyan-accent tracking-widest uppercase">
                  05 — Education
                </span>
                <div className="h-px flex-1 max-w-20 bg-border" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-700 tracking-tight">
                Academic{" "}
                <span className="gradient-text-cyan">Background</span>
              </h2>
            </motion.div>

            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="glass glass-hover rounded-2xl p-7 md:p-8 space-y-6"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-soft border border-cyan-accent/25 flex items-center justify-center flex-shrink-0">
                      <GraduationCap size={22} className="text-cyan-accent" />
                    </div>
                    <div>
                      <h3 className="font-display font-700 text-lg text-text-primary">
                        {edu.degree}
                      </h3>
                      <p className="text-sm text-text-secondary mt-0.5">
                        {edu.field}
                      </p>
                      <p className="text-xs font-mono text-cyan-accent mt-1">
                        Specialization: {edu.specialization}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-1 flex-shrink-0">
                    <span className="text-xs font-mono text-text-muted">
                      {edu.period}
                    </span>
                    <span className="text-xs font-mono text-text-muted flex items-center gap-1">
                      📍 {edu.location}
                    </span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="px-2.5 py-1 text-xs font-mono rounded-lg bg-cyan-soft border border-cyan-accent/25 text-cyan-accent">
                        CGPA: {edu.cgpa}
                      </span>
                      <span className="px-2.5 py-1 text-xs font-mono rounded-lg bg-gold-soft border border-gold-accent/25 text-gold-accent">
                        {edu.division}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-border/50" />

                <div className="grid md:grid-cols-2 gap-6">
                  {/* IBM Tools */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Building size={13} className="text-text-muted" />
                      <p className="text-xs font-mono text-text-muted uppercase tracking-widest">
                        IBM Tools & Platforms
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2.5 py-1 text-xs font-mono rounded-lg bg-cyan-soft border border-cyan-accent/20 text-cyan-accent/80"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Core Areas */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <GraduationCap size={13} className="text-text-muted" />
                      <p className="text-xs font-mono text-text-muted uppercase tracking-widest">
                        Core Specialization Areas
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.areas.map((area) => (
                        <span
                          key={area}
                          className="px-2.5 py-1 text-xs font-mono rounded-lg bg-gold-soft border border-gold-accent/20 text-gold-accent/80"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Degree link */}
                <a
                  href={edu.degreeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-text-muted hover:text-text-secondary transition-colors font-mono"
                >
                  <ExternalLink size={12} />
                  View Degree Certificate
                </a>
              </motion.div>
            ))}

            {/* School */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {[
                { level: "Intermediate (CBSE)", school: "Shealing Public School", location: "Chhatarpur", year: "2019–2020" },
                { level: "Matriculation (ICSE)", school: "Christian English College", location: "Chhatarpur", year: "2017–2018" },
              ].map((s, i) => (
                <div key={i} className="glass rounded-2xl p-5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-panel border border-border flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={18} className="text-text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-text-muted uppercase tracking-wide">
                      {s.level}
                    </p>
                    <p className="text-sm text-text-primary font-medium mt-0.5">
                      {s.school}
                    </p>
                    <p className="text-xs text-text-muted mt-0.5">
                      {s.location} · {s.year}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Certifications ── */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs text-cyan-accent tracking-widest uppercase">
                  05b — Certifications
                </span>
                <div className="h-px flex-1 max-w-20 bg-border" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-700 tracking-tight">
                Professional{" "}
                <span className="gradient-text-gold">Certifications</span>
              </h2>
              <p className="text-text-secondary text-sm mt-2">
                7 industry certifications across cloud, BI, analytics, and project management.
              </p>
            </motion.div>

            {/* Certs grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.55,
                    delay: 0.1 + i * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="glass glass-hover rounded-2xl p-5 space-y-4"
                >
                  {/* Top */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-11 h-11 rounded-xl flex flex-col items-center justify-center gap-0.5 ${
                          cert.color === "cyan"
                            ? "bg-cyan-soft border border-cyan-accent/25"
                            : "bg-gold-soft border border-gold-accent/25"
                        }`}
                      >
                        <Award
                          size={16}
                          className={
                            cert.color === "cyan" ? "text-cyan-accent" : "text-gold-accent"
                          }
                        />
                        <span
                          className={`text-[9px] font-mono font-600 ${
                            cert.color === "cyan" ? "text-cyan-accent" : "text-gold-accent"
                          }`}
                        >
                          {cert.badge}
                        </span>
                      </div>
                      <div>
                        <p className="text-[10px] font-mono text-text-muted">
                          {cert.issuer}
                        </p>
                        <h3 className="font-display font-700 text-sm text-text-primary leading-snug mt-0.5">
                          {cert.name}
                        </h3>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 flex-shrink-0">
                      <span className="text-[10px] font-mono text-text-muted">
                        {cert.date}
                      </span>
                      <BadgeCheck
                        size={16}
                        className={
                          cert.color === "cyan" ? "text-cyan-accent" : "text-gold-accent"
                        }
                      />
                    </div>
                  </div>

                  <p className="text-xs text-text-secondary leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2 py-0.5 text-[10px] font-mono rounded-md border ${
                          cert.color === "cyan"
                            ? "bg-cyan-soft border-cyan-accent/20 text-cyan-accent/80"
                            : "bg-gold-soft border-gold-accent/20 text-gold-accent/80"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href={cert.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] text-text-muted hover:text-text-secondary transition-colors font-mono"
                  >
                    <ExternalLink size={11} />
                    View Certificate
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
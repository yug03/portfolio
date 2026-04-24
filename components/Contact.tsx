"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Linkedin,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await fetch("https://formspree.io/f/mnjbrlwr", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="space-y-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-4 text-center"
          >
            <div className="flex items-center gap-3 justify-center">
              <div className="h-px flex-1 max-w-20 bg-border" />
              <span className="font-mono text-xs text-cyan-accent tracking-widest uppercase">
                07 — Contact
              </span>
              <div className="h-px flex-1 max-w-20 bg-border" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-700 tracking-tight leading-tight">
              Let&apos;s Build an <span className="gradient-text-cyan">AI System That Solves a Real Business Problem</span>
            </h2>
            <p className="text-text-secondary text-base max-w-2xl mx-auto leading-relaxed">
              If you&apos;re exploring AI workflow automation, lead qualification systems,
              customer support agents, voice AI, or CRM–ERP integrations, send me a brief overview
              of your use case. I&apos;ll review it and respond with the best next step.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-10">
            {/* Left: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="space-y-4">
                <a
                  href="mailto:yugpratapgupta00@gmail.com"
                  className="flex items-center gap-4 p-4 glass glass-hover rounded-2xl group"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-soft border border-cyan-accent/25 flex items-center justify-center">
                    <Mail size={18} className="text-cyan-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-text-muted uppercase tracking-wide">
                      Email
                    </p>
                    <p className="text-sm text-text-primary font-medium break-all">
                      yugpratapgupta00@gmail.com
                    </p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="ml-auto text-text-muted group-hover:text-cyan-accent group-hover:translate-x-1 transition-all"
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/iamyug/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass glass-hover rounded-2xl group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold-soft border border-gold-accent/25 flex items-center justify-center">
                    <Linkedin size={18} className="text-gold-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-text-muted uppercase tracking-wide">
                      LinkedIn
                    </p>
                    <p className="text-sm text-text-primary font-medium">
                      linkedin.com/in/iamyug
                    </p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="ml-auto text-text-muted group-hover:text-gold-accent group-hover:translate-x-1 transition-all"
                  />
                </a>

                <a
                  href="tel:+919827794479"
                  className="flex items-center gap-4 p-4 glass glass-hover rounded-2xl group"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-soft border border-cyan-accent/25 flex items-center justify-center">
                    <Phone size={18} className="text-cyan-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-text-muted uppercase tracking-wide">
                      Phone
                    </p>
                    <p className="text-sm text-text-primary font-medium">
                      +91 98277 94479
                    </p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="ml-auto text-text-muted group-hover:text-cyan-accent group-hover:translate-x-1 transition-all"
                  />
                </a>

                <div className="flex items-center gap-4 p-4 glass rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-panel border border-border flex items-center justify-center">
                    <MapPin size={18} className="text-text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-text-muted uppercase tracking-wide">
                      Location
                    </p>
                    <p className="text-sm text-text-primary font-medium">
                      Gurgaon, Haryana, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Availability / fit */}
              <div className="px-5 py-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/15">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wide">
                    Open for Consulting Projects
                  </span>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Best fit for businesses that want to automate operations, deploy AI agents,
                  connect internal systems, or turn manual workflows into scalable AI-driven processes.
                </p>
              </div>

              {/* What to include */}
              <div className="glass rounded-2xl p-5 space-y-3">
                <h3 className="font-display text-sm font-600 text-text-primary">
                  What to include in your message
                </h3>
                <div className="space-y-2 text-xs text-text-secondary leading-relaxed">
                  <p>• What process or workflow you want to automate</p>
                  <p>• Which tools or systems are currently involved</p>
                  <p>• Where your team is losing time, leads, or efficiency</p>
                  <p>• Whether you need strategy, implementation, or both</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass rounded-2xl p-10 flex flex-col items-center justify-center text-center gap-5 min-h-[420px]"
                >
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center">
                    <CheckCircle2 size={28} className="text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-700 text-xl text-text-primary">
                      Inquiry Received
                    </h3>
                    <p className="text-text-secondary text-sm mt-2 max-w-sm leading-relaxed">
                      Thanks for reaching out. I&apos;ll review your message and get back to you
                      within 24 hours with the most relevant next step.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        message: "",
                      });
                    }}
                    className="text-xs text-text-muted hover:text-text-secondary transition-colors font-mono"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="glass rounded-2xl p-7 md:p-8 space-y-5"
                >
                  <div className="space-y-1">
                    <h3 className="font-display text-xl font-600 text-text-primary">
                      Tell me about your use case
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      The more context you share, the better I can understand whether an AI workflow,
                      support agent, lead qualification system, or custom integration stack is the right fit.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-text-muted uppercase tracking-wide">
                        Name <span className="text-cyan-accent">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl bg-panel border border-border text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-cyan-accent/50 focus:ring-1 focus:ring-cyan-accent/20 transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono text-text-muted uppercase tracking-wide">
                        Email <span className="text-cyan-accent">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl bg-panel border border-border text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-cyan-accent/50 focus:ring-1 focus:ring-cyan-accent/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-text-muted uppercase tracking-wide">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company name (optional)"
                      className="w-full px-4 py-3 rounded-xl bg-panel border border-border text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-cyan-accent/50 focus:ring-1 focus:ring-cyan-accent/20 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-text-muted uppercase tracking-wide">
                      Message <span className="text-cyan-accent">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Describe the workflow, support process, lead pipeline, or system challenge you want to solve..."
                      className="w-full px-4 py-3 rounded-xl bg-panel border border-border text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-cyan-accent/50 focus:ring-1 focus:ring-cyan-accent/20 transition-all resize-none"
                    />
                  </div>

                  <div className="rounded-xl bg-panel border border-border px-4 py-3">
                    <p className="text-xs text-text-secondary leading-relaxed">
                      Typical inquiries include AI workflow automation, RAG support agents,
                      lead qualification bots, voice AI use cases, CRM/ERP integrations,
                      and operational reporting automation.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-cyan-accent text-canvas font-display font-600 text-sm rounded-xl hover:bg-cyan-accent/90 disabled:opacity-70 disabled:cursor-not-allowed transition-all glow-cyan"
                  >
                    {loading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            repeat: Infinity,
                            duration: 0.8,
                            ease: "linear",
                          }}
                          className="w-4 h-4 border-2 border-canvas/30 border-t-canvas rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Inquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

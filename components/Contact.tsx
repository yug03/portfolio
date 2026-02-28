"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Mail, Linkedin, MapPin, Send, CheckCircle2, ArrowRight } from "lucide-react";

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
    // Simulate submission — replace with your API endpoint
    await new Promise((resolve) => setTimeout(resolve, 1200));
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
            <h2 className="font-display text-3xl md:text-4xl font-700 tracking-tight">
              Let&apos;s Build Something{" "}
              <span className="gradient-text-cyan">Meaningful</span>
            </h2>
            <p className="text-text-secondary text-base max-w-xl mx-auto">
              If you&apos;re looking to automate a finance workflow, integrate your systems, or
              deploy an AI-powered business tool — I&apos;d like to hear about it.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-10">
            {/* Left: Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Contact links */}
              <div className="space-y-4">
                <a
                  href="mailto:yug@example.com"
                  className="flex items-center gap-4 p-4 glass glass-hover rounded-2xl group"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-soft border border-cyan-accent/25 flex items-center justify-center">
                    <Mail size={18} className="text-cyan-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-text-muted uppercase tracking-wide">
                      Email
                    </p>
                    <p className="text-sm text-text-primary font-medium">
                      yug@yugpratapgupta.dev
                    </p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="ml-auto text-text-muted group-hover:text-cyan-accent group-hover:translate-x-1 transition-all"
                  />
                </a>

                <a
                  href="https://linkedin.com/in/yugpratapgupta"
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
                      /in/yugpratapgupta
                    </p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="ml-auto text-text-muted group-hover:text-gold-accent group-hover:translate-x-1 transition-all"
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

              {/* Availability note */}
              <div className="px-5 py-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/15">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wide">
                    Available for Projects
                  </span>
                </div>
                <p className="text-xs text-text-secondary">
                  Open to full-time roles, consulting engagements, and
                  project-based contracts with fintech, SaaS, and operations-heavy companies.
                </p>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass rounded-2xl p-10 flex flex-col items-center justify-center text-center gap-5 min-h-[380px]"
                >
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center">
                    <CheckCircle2 size={28} className="text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-700 text-xl text-text-primary">
                      Message Sent!
                    </h3>
                    <p className="text-text-secondary text-sm mt-2 max-w-xs">
                      Thanks for reaching out. I&apos;ll review your message and get back
                      to you within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", company: "", message: "" });
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
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
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

                    {/* Email */}
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

                  {/* Company */}
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

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-text-muted uppercase tracking-wide">
                      Message <span className="text-cyan-accent">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Describe what you're trying to automate or solve..."
                      className="w-full px-4 py-3 rounded-xl bg-panel border border-border text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-cyan-accent/50 focus:ring-1 focus:ring-cyan-accent/20 transition-all resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-cyan-accent text-canvas font-display font-600 text-sm rounded-xl hover:bg-cyan-accent/90 disabled:opacity-70 disabled:cursor-not-allowed transition-all glow-cyan"
                  >
                    {loading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                          className="w-4 h-4 border-2 border-canvas/30 border-t-canvas rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
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

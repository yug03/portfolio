"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Solutions from "@/components/Solutions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[32rem] h-[32rem] bg-cyan-accent opacity-[0.035] rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-[10%] w-[26rem] h-[26rem] bg-gold-accent opacity-[0.025] rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-1/3 w-[24rem] h-[24rem] bg-cyan-accent opacity-[0.025] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Solutions />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

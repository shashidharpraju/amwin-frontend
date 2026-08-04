"use client";

import React from "react";
import { motion, Variants, TargetAndTransition } from "framer-motion";
import {
  Shield,
  Lock,
  Globe,
  Activity,
  Layers,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Network,
  Laptop,
  ArrowRight,
  Server,
} from "lucide-react";

// ==========================================
// ANIMATION VARIANTS
// ==========================================
const customEasing: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: customEasing },
  },
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: customEasing },
  },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: customEasing },
  },
};

const floatingAnimation: TargetAndTransition = {
  y: ["-10px", "10px"],
  transition: {
    duration: 4,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  },
};

export default function NetworkSecurityPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200 overflow-hidden">
      <main>
        {/* =========================================
            1. HERO SECTION (Dark Mode - 30% of theme)
            ========================================= */}
        <section className="relative min-h-[90vh] flex items-center pt-32 pb-24 bg-slate-900 overflow-hidden">
          {/* Glowing Background Elements */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>

          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="max-w-2xl"
              >
                <div className="mb-8 inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/30 text-blue-400 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase backdrop-blur-sm">
                  <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
                  Zero-Trust Architecture
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-8">
                  Bulletproof Your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                    Network & Endpoints
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed mb-10 max-w-xl">
                  Safeguard your enterprise from evolving cyber threats with our
                  Unified Threat Management (UTM) and Endpoint Security matrix.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-600/30 hover:-translate-y-0.5">
                    Request Security Audit
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md px-8 py-4 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5">
                    Explore Architecture
                  </button>
                </div>
              </motion.div>

              <motion.div
                className="hidden lg:flex justify-end items-center"
                initial="hidden"
                animate="visible"
                variants={slideInRight}
              >
                <motion.div
                  animate={floatingAnimation}
                  className="relative w-full max-w-[500px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 rounded-3xl blur-2xl transform rotate-3"></div>
                  <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-slate-800 shadow-2xl p-2">
                    <img
                      src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop"
                      alt="Cybersecurity Network"
                      className="w-full h-[400px] object-cover rounded-2xl opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

                    {/* Floating Status Badge */}
                    <div className="absolute bottom-8 left-8 bg-slate-900/90 backdrop-blur-md border border-slate-700 px-6 py-4 rounded-2xl shadow-xl flex items-center gap-4">
                      <ShieldCheck className="w-8 h-8 text-blue-400" />
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          Network Status
                        </p>
                        <p className="text-sm font-extrabold text-white">
                          Encrypted & Secured
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================
            2. VENDOR PARTNERS BANNER (Light Mode)
            ========================================= */}
        <section className="py-10 bg-white border-b border-slate-200">
          <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
              Powered By Industry Leaders
            </span>
            <div className="flex gap-12 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-slate-800">
                SEQRITE
              </h2>
              <div className="h-8 w-px bg-slate-300"></div>
              <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-slate-800">
                SONICWALL
              </h2>
            </div>
          </div>
        </section>

        {/* =========================================
            3. CORE CAPABILITIES (Z-Pattern Light Mode - 70% of theme)
            ========================================= */}
        <section className="py-24 relative bg-slate-50">
          <div className="container mx-auto px-6 max-w-7xl space-y-32">
            {/* Feature 1: UTM */}
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <motion.div
                className="lg:w-1/2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideInLeft}
              >
                <div className="relative w-full aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 bg-blue-100/60 rounded-full blur-3xl"></div>
                  <div className="relative h-full w-full bg-white border border-slate-200 shadow-xl rounded-3xl p-8 flex flex-col justify-center items-center text-center transition-transform hover:-translate-y-2 duration-500">
                    <Shield className="w-20 h-20 text-blue-600 mb-6" />
                    <h4 className="text-slate-900 font-bold text-xl mb-2">
                      UTM Gateway Firewall
                    </h4>
                    <p className="text-slate-500 text-sm">
                      Active Intrusion Prevention System (IPS)
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="lg:w-1/2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideInRight}
              >
                <div className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4">
                  First Line of Defense
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                  Unified Threat Management
                </h3>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  A complete security appliance that serves as the ultimate
                  gateway for your enterprise. We integrate high-grade intrusion
                  prevention to ensure your network remains impenetrable while
                  employees focus solely on productivity.
                </p>
                <ul className="space-y-4">
                  {[
                    "Gateway Level Antivirus & Spam Protection",
                    "Protection against DDoS Attacks",
                    "Advanced Application Control",
                    "Remote & Site-to-Site VPN Connectivity",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-slate-700 font-medium"
                    >
                      <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Feature 2: EPS (Reversed Layout) */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
              <motion.div
                className="lg:w-1/2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideInRight}
              >
                <div className="relative w-full aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 bg-indigo-100/60 rounded-full blur-3xl"></div>
                  <div className="relative h-full w-full bg-white border border-slate-200 shadow-xl rounded-3xl p-8 flex flex-col justify-center items-center text-center transition-transform hover:-translate-y-2 duration-500">
                    <Laptop className="w-20 h-20 text-indigo-600 mb-6" />
                    <h4 className="text-slate-900 font-bold text-xl mb-2">
                      Edge Device Control
                    </h4>
                    <p className="text-slate-500 text-sm">
                      Windows, macOS & Linux Support
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="lg:w-1/2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideInLeft}
              >
                <div className="text-indigo-600 font-bold uppercase tracking-widest text-xs mb-4">
                  Granular Protection
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                  Endpoint Security (EPS)
                </h3>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Secure every node on your network. Our EPS solutions provide
                  360-degree data security for businesses of all sizes,
                  featuring proactive scanning and centralized patch management.
                </p>
                <ul className="space-y-4">
                  {[
                    "Auto-disconnection of Infected Endpoints",
                    "Hardware Media Control (USB, CD, DVD)",
                    "Centralized Patch Management Strategy",
                    "Uninterrupted Phishing & Malware Defense",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-slate-700 font-medium"
                    >
                      <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================
            4. THREAT PROTECTION MATRIX (Light Grid)
            ========================================= */}
        <section className="py-24 bg-white border-y border-slate-200">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Active Threat Mitigation
              </h2>
              <p className="text-lg text-slate-500">
                Identify, isolate, and eliminate vulnerabilities instantly with
                our comprehensive security toolkit.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Globe />,
                  title: "Web Protection",
                  desc: "Block malicious websites and prevent drive-by downloads.",
                },
                {
                  icon: <AlertTriangle />,
                  title: "Zero-Day Defense",
                  desc: "Proactive scanning for unforeseen software vulnerabilities.",
                },
                {
                  icon: <Lock />,
                  title: "ADS Integration",
                  desc: "Seamless Active Directory integration for access control.",
                },
                {
                  icon: <Activity />,
                  title: "Live Monitoring",
                  desc: "Web-based graphical dashboard with SMS/Email alerts.",
                },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="bg-slate-50 border border-slate-200 p-8 rounded-3xl hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 group"
                >
                  <div className="mb-6 text-slate-400 group-hover:text-blue-600 transition-colors bg-white w-14 h-14 rounded-2xl flex items-center justify-center border border-slate-200 shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================
            5. CTA SECTION (Dark Box on Light Background)
            ========================================= */}
        <section className="py-32 bg-slate-50">
          <div className="container mx-auto px-6 max-w-5xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-slate-800"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-blue-950"></div>
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>

              <div className="relative z-10 p-16 text-center">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                  Secure Your Infrastructure
                </h2>
                <p className="text-blue-100 text-lg font-medium max-w-2xl mx-auto mb-10">
                  Do not leave your enterprise data vulnerable. Let our network
                  engineers assess your infrastructure and deploy a bulletproof
                  security matrix today.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button className="w-full sm:w-auto bg-blue-600 text-white hover:bg-blue-500 px-8 py-4 rounded-xl font-bold text-sm transition-colors shadow-lg">
                    Contact Network Engineers
                  </button>
                  <button className="w-full sm:w-auto bg-transparent border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-sm transition-all">
                    View Technical Specs
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}

"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Server,
  Cpu,
  Activity,
  Layers,
  Zap,
  Network,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Database,
  ThermometerSnowflake,
  TerminalSquare,
} from "lucide-react";

// ==========================================
// ANIMATION VARIANTS
// ==========================================
const customEasing: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: customEasing },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: customEasing },
  },
};

export default function HPCServicePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200 overflow-hidden">
      <main>
        {/* =========================================
            1. HERO SECTION
            ========================================= */}
        <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-900">
          {/* Abstract Tech Background */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>

          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="max-w-2xl"
              >
                <motion.div variants={fadeInUp} className="mb-6">
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-widest border border-blue-400/30 bg-blue-500/10 px-4 py-2 rounded-full backdrop-blur-sm">
                    Enterprise Infrastructure
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6"
                >
                  High-Performance Computing Clusters
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg text-slate-300 font-medium leading-relaxed mb-10 max-w-xl"
                >
                  We consult, design, customize & offer the latest technologies
                  in Servers, Processors, GPUs, and Storage to give you the Best
                  Performing Cluster for your applications—within your budget.
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap items-center gap-4"
                >
                  <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-600/30 hover:-translate-y-0.5">
                    Consult an Engineer
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md px-8 py-4 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5">
                    Download Brochure
                  </button>
                </motion.div>
              </motion.div>

              <motion.div
                className="hidden lg:block relative"
                initial="hidden"
                animate="visible"
                variants={slideInRight}
              >
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-800/50 backdrop-blur-sm p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-slate-900/80 p-6 rounded-2xl border border-white/5">
                      <Layers className="w-8 h-8 text-blue-400 mb-4" />
                      <h4 className="text-white font-bold mb-2">
                        Scalable Nodes
                      </h4>
                      <p className="text-slate-400 text-sm">
                        Scale seamlessly from 4 to 128+ nodes based on your
                        workload.
                      </p>
                    </div>
                    <div className="bg-slate-900/80 p-6 rounded-2xl border border-white/5 translate-y-8">
                      <Cpu className="w-8 h-8 text-blue-400 mb-4" />
                      <h4 className="text-white font-bold mb-2">CPU & GPGPU</h4>
                      <p className="text-slate-400 text-sm">
                        Hybrid support tailored to your specific application
                        needs.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================
            2. KEY ADVANTAGES (From Website Bullets)
            ========================================= */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Why Choose Amwin HPC Solutions?
              </h2>
              <p className="text-lg text-slate-500 font-medium">
                Our clusters are built on Open-Source standards and COTS
                (Commercial Off-The-Shelf) hardware, eliminating dependency on
                proprietary ecosystems.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              {[
                {
                  icon: <Zap />,
                  title: "Instant Deployment",
                  desc: "Ready-to-use environments with complete hardware & software integration from a single vendor.",
                },
                {
                  icon: <ShieldCheck />,
                  title: "No Vendor Lock-in",
                  desc: "Zero dependency on proprietary hardware or software. Built purely on open-source tools.",
                },
                {
                  icon: <Activity />,
                  title: "Workload Management",
                  desc: "Pre-configured with open-source workload managers and comprehensive monitoring tools.",
                },
                {
                  icon: <Server />,
                  title: "Hardware Agnostic",
                  desc: "Full support for both legacy systems and the absolute latest hardware architectures.",
                },
                {
                  icon: <Network />,
                  title: "Cost-Effective",
                  desc: "Enterprise-grade reliability and massive scalability without the premium enterprise price tag.",
                },
                {
                  icon: <TerminalSquare />,
                  title: "End-to-End Support",
                  desc: "We supply, install, configure, maintain, and upgrade your entire HPC cluster stack.",
                },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
                >
                  <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-sm border border-slate-100 mb-6 text-blue-600">
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
            </motion.div>
          </div>
        </section>

        {/* =========================================
            3. HARDWARE & ARCHITECTURE (Bento Grid)
            ========================================= */}
        <section className="py-24 bg-slate-900 text-white overflow-hidden">
          <div className="container mx-auto px-6 max-w-7xl relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-center">
                Cluster Components & Architecture
              </h2>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {/* Processors & Accelerators - Span 2 */}
              <motion.div
                variants={fadeInUp}
                className="md:col-span-2 bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm p-10 rounded-[2rem]"
              >
                <Cpu className="w-10 h-10 text-blue-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Processing Power</h3>
                <div className="grid sm:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="text-blue-300 text-sm font-bold uppercase tracking-wider mb-3">
                      Processors
                    </h4>
                    <ul className="space-y-2 text-slate-300 font-medium">
                      <li>• Intel Xeon Scalable</li>
                      <li>• AMD EPYC Series</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-blue-300 text-sm font-bold uppercase tracking-wider mb-3">
                      Accelerators
                    </h4>
                    <ul className="space-y-2 text-slate-300 font-medium">
                      <li>• NVIDIA Tesla</li>
                      <li>• AMD Instinct</li>
                      <li>• Xilinx Alveo</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Interconnects */}
              <motion.div
                variants={fadeInUp}
                className="bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm p-10 rounded-[2rem]"
              >
                <Network className="w-10 h-10 text-blue-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Interconnects</h3>
                <p className="text-slate-300 font-medium mb-4">
                  Ultra-low latency networking for parallel processing.
                </p>
                <ul className="space-y-2 text-slate-300 font-medium">
                  <li>• NVIDIA-Mellanox</li>
                  <li>• InfiniBand (400/200/100Gbps)</li>
                </ul>
              </motion.div>

              {/* Server Hardware */}
              <motion.div
                variants={fadeInUp}
                className="bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm p-10 rounded-[2rem]"
              >
                <Server className="w-10 h-10 text-blue-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Base Hardware</h3>
                <ul className="space-y-2 text-slate-300 font-medium">
                  <li>• Amwin Customized Nodes</li>
                  <li>• Tyan Servers</li>
                  <li>• Supermicro Infrastructure</li>
                </ul>
              </motion.div>

              {/* Cooling & Environment */}
              <motion.div
                variants={fadeInUp}
                className="bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm p-10 rounded-[2rem]"
              >
                <ThermometerSnowflake className="w-10 h-10 text-blue-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Cooling Solutions</h3>
                <ul className="space-y-2 text-slate-300 font-medium">
                  <li>• High-flow Air Cooled Servers</li>
                  <li>• Direct-to-Chip Liquid Cooling</li>
                </ul>
              </motion.div>

              {/* OS & Software */}
              <motion.div
                variants={fadeInUp}
                className="bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm p-10 rounded-[2rem]"
              >
                <Database className="w-10 h-10 text-blue-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Software Stack</h3>
                <ul className="space-y-2 text-slate-300 font-medium">
                  <li>• Rocky Linux / RHEL / Ubuntu</li>
                  <li>• Open Source Cluster Suites</li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* =========================================
            4. HPC VERTICALS (Industry Use Cases)
            ========================================= */}
        <section className="py-24 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Industry Verticals
              </h2>
              <p className="text-lg text-slate-500 font-medium">
                Our high-performance clusters are accelerating breakthroughs and
                heavy computations across diverse global industries.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                "Computational Fluid Dynamics (CFD)",
                "Computer Aided Engineering (CAE)",
                "Finite Element Analysis (FEA)",
                "Electronic Design Automation (EDA)",
                "Bio-Informatics & Molecular Dynamics",
                "Space Research",
                "Oil & Gas Explorations",
                "Climate & Ocean Modelling",
                "Digital Content Creation (DCC) / VFX",
                "Security & Encryption",
              ].map((industry, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="bg-white border border-slate-200 shadow-sm px-6 py-3 rounded-full flex items-center gap-2 hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-default"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span className="font-semibold text-slate-700 text-sm">
                    {industry}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* =========================================
            5. CTA SECTION
            ========================================= */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] p-12 text-center shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
                  Ready to Accelerate Your Compute?
                </h2>
                <p className="text-blue-100 text-lg font-medium max-w-2xl mx-auto mb-10">
                  Whether you are starting with a 4-node cluster or scaling up
                  to 128+ nodes, our engineering team is ready to design your
                  perfect HPC environment.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button className="w-full sm:w-auto bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-sm transition-transform shadow-lg hover:-translate-y-1">
                    Request an Architecture Quote
                  </button>
                  <button className="w-full sm:w-auto bg-transparent border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-sm transition-all">
                    Contact Sales Team
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

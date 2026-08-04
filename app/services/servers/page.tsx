"use client";

import React from "react";
import { motion, Variants, TargetAndTransition } from "framer-motion";
import {
  Server,
  Cpu,
  Fan,
  Activity,
  Box,
  HardDrive,
  CheckCircle2,
  Zap,
  Layers,
  Download, // <-- Added Download icon
  FileText, // <-- Added FileText icon
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
    transition: { duration: 0.8, ease: customEasing },
  },
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: customEasing },
  },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: customEasing },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const floatingAnimation: TargetAndTransition = {
  y: ["-8px", "8px"],
  transition: {
    duration: 3.5,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  },
};

export default function ServersPage() {
  return (
    <div className="bg-slate-50 text-slate-900 font-sans selection:bg-blue-200 overflow-hidden">
      <main>
        {/* =========================================
            1. HERO SECTION 
            ========================================= */}
        <section className="relative w-full min-h-[calc(100vh-5rem)] lg:h-[calc(100vh-5rem)] flex items-center bg-slate-900 overflow-hidden py-12 lg:py-0">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] mix-blend-screen pointer-events-none"></div>
          <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="container mx-auto px-6 max-w-7xl relative z-10 h-full flex flex-col justify-center">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="max-w-2xl z-20"
              >
                <motion.div variants={fadeInUp} className="mb-6">
                  <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700/50 text-blue-400 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-sm">
                    <Server className="w-4 h-4" />
                    Custom-Built Hardware
                  </div>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-6"
                >
                  Amwin CPU <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    + GPU Servers.
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed mb-10 max-w-lg"
                >
                  Reliable, scalable, and custom-built General Purpose & GPU
                  Servers powered by the latest AMD EPYC, Intel Xeon, NVIDIA &
                  AMD accelerators.
                </motion.p>

                {/* UPDATED: Only Brochure Download Button */}
                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap items-center gap-4"
                >
                  <a
                    href="#brochures"
                    className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-600/20 hover:-translate-y-0.5 inline-flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" /> Download Brochures
                  </a>
                </motion.div>
              </motion.div>

              <motion.div
                className="relative w-full h-full min-h-[350px] lg:min-h-[500px] flex items-center justify-center"
                initial="hidden"
                animate="visible"
                variants={slideInRight}
              >
                <motion.div
                  animate={floatingAnimation}
                  className="relative w-full max-w-lg mx-auto aspect-square lg:aspect-auto lg:h-[80%] rounded-[2rem] p-3 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 shadow-2xl shadow-blue-900/20"
                >
                  <div className="absolute inset-0 bg-blue-500/10 rounded-[2rem] blur-xl"></div>
                  <div className="relative w-full h-full rounded-3xl overflow-hidden bg-slate-950 border border-slate-800">
                    <img
                      src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop"
                      alt="High Performance GPU Server Rack"
                      className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

                    <div className="absolute bottom-6 left-6 right-6 bg-slate-900/80 backdrop-blur-md border border-slate-700 p-4 rounded-2xl flex items-center justify-between">
                      <div>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                          Architecture
                        </p>
                        <p className="text-white text-sm font-extrabold">
                          256-Core Multi-GPU
                        </p>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <Activity className="w-5 h-5 text-blue-400" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================
            2. SPECIFICATION MARQUEE BAR
            ========================================= */}
        <section className="bg-blue-600 border-y border-blue-700 relative z-20 py-4 overflow-hidden flex shadow-md">
          <div className="flex gap-16 items-center whitespace-nowrap animate-[marquee_20s_linear_infinite] px-8">
            {[...Array(3)].map((_, i) => (
              <React.Fragment key={i}>
                <div className="flex items-center gap-3 text-white font-bold tracking-wider text-sm uppercase">
                  <Cpu className="w-5 h-5 opacity-80" /> Up to 256-Core Support
                </div>
                <div className="w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
                <div className="flex items-center gap-3 text-white font-bold tracking-wider text-sm uppercase">
                  <Activity className="w-5 h-5 opacity-80" /> Multi-GPU Ready
                </div>
                <div className="w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
                <div className="flex items-center gap-3 text-white font-bold tracking-wider text-sm uppercase">
                  <Fan className="w-5 h-5 opacity-80" /> Liquid & Air Cooling
                </div>
                <div className="w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
                <div className="flex items-center gap-3 text-white font-bold tracking-wider text-sm uppercase">
                  <CheckCircle2 className="w-5 h-5 opacity-80" /> 3-Year Onsite
                  Warranty
                </div>
                <div className="w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* =========================================
            3. HARDWARE PILLARS
            ========================================= */}
        <section className="py-24 bg-slate-50 relative">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Optimized for Any Workload
              </h2>
              <p className="text-lg text-slate-500 font-medium">
                From simple file servers to massive AI/ML rendering clusters,
                our systems are highly customizable, scalable, and reliable.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Box />,
                  title: "Tower Servers",
                  desc: "Ideal for small to medium businesses requiring robust, standalone computing power without server racks.",
                  features: [
                    "Quiet Operation",
                    "High Storage Capacity",
                    "Easy Expansion",
                  ],
                },
                {
                  icon: <Layers />,
                  title: "Rack Mount Servers",
                  desc: "High-density 1U, 2U, 3U, 4U, and 5U configurations designed for enterprise datacenters.",
                  features: [
                    "Hot-Swappable Drives",
                    "Redundant Platinum PSUs",
                    "Maximum Density",
                  ],
                },
                {
                  icon: <Zap />,
                  title: "GPU Supercomputers",
                  desc: "Extreme parallel processing nodes powered by multiple NVIDIA or AMD GPUs for HPC.",
                  features: [
                    "AI & Machine Learning",
                    "Liquid Cooling Options",
                    "Massive TFLOPS",
                  ],
                },
              ].map((pillar, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeInUp}
                  className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col hover:shadow-xl hover:border-blue-300 transition-all duration-300 group"
                >
                  <div className="bg-slate-50 text-blue-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {React.cloneElement(pillar.icon, { className: "w-7 h-7" })}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-500 text-sm mb-8 leading-relaxed flex-grow">
                    {pillar.desc}
                  </p>
                  <div className="space-y-3 pt-6 border-t border-slate-100">
                    {pillar.features.map((feat, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-sm font-bold text-slate-700"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        {feat}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================
            4. TECHNICAL FEATURES
            ========================================= */}
        <section className="py-24 bg-white border-y border-slate-200">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInLeft}
                className="space-y-8"
              >
                <div className="text-blue-600 font-bold uppercase tracking-widest text-xs">
                  Hardware Specifications
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
                  Built on Elite Architecture
                </h3>

                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
                  {[
                    {
                      icon: <Cpu />,
                      title: "Processors",
                      desc: "Support for the latest AMD EPYC and Intel Xeon Scalable processors.",
                    },
                    {
                      icon: <Activity />,
                      title: "Hardware Management",
                      desc: "Integrated IPMI for seamless remote server management.",
                    },
                    {
                      icon: <HardDrive />,
                      title: "Storage Controllers",
                      desc: "Enterprise RAID and HBA controllers for data integrity.",
                    },
                    {
                      icon: <MonitorPlay />,
                      title: "OS Agnostic",
                      desc: "Full support for Windows Server, Linux distributions, and hypervisors.",
                    },
                  ].map((feat, i) => (
                    <div key={i}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-slate-50 border border-slate-100 w-10 h-10 flex justify-center items-center rounded-xl text-blue-600 shadow-sm">
                          {React.cloneElement(feat.icon, {
                            className: "w-5 h-5",
                          })}
                        </div>
                        <h4 className="font-bold text-slate-900">
                          {feat.title}
                        </h4>
                      </div>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInRight}
                className="relative w-full max-w-lg mx-auto"
              >
                <div className="absolute inset-0 bg-blue-100 rounded-3xl transform rotate-3 scale-105"></div>
                <div className="relative bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl">
                  <div className="flex gap-2 mb-6 border-b border-slate-800 pb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="font-mono text-sm text-slate-300 space-y-4">
                    <p>
                      <span className="text-blue-400">system.status</span>{" "}
                      <span className="text-slate-500">==</span>{" "}
                      <span className="text-emerald-400">"ONLINE"</span>
                    </p>
                    <p>
                      <span className="text-blue-400">cpu.cores</span>{" "}
                      <span className="text-slate-500">=</span> 256
                    </p>
                    <p>
                      <span className="text-blue-400">gpu.array</span>{" "}
                      <span className="text-slate-500">=</span> ["NVIDIA A100",
                      "AMD Instinct"]
                    </p>
                    <p>
                      <span className="text-blue-400">cooling.method</span>{" "}
                      <span className="text-slate-500">=</span> "LIQUID_COOLED"
                    </p>
                    <p className="text-slate-500 pt-4">
                      # Initializing Hardware RAID...
                    </p>
                    <p className="text-slate-500">
                      # Establishing Remote Management Link...
                    </p>
                    <p className="text-emerald-400 font-bold mt-4 animate-pulse">
                      _ READY FOR COMPUTE
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================
            5. INDUSTRY VERTICALS
            ========================================= */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6 max-w-7xl text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-12"
            >
              <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Proven Across Verticals
              </h2>
              <p className="text-slate-500 font-medium">
                Our servers drive the core operations for a multitude of
                advanced industries.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto"
            >
              {[
                "High Performance Computing",
                "AI & Machine Learning",
                "Cloud Computing",
                "Database & Analytics",
                "HCI & Virtualization",
                "File Servers",
                "Storage Nodes",
                "Scientific Rendering",
                "Data Processing",
              ].map((vertical, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="bg-white px-5 py-3 rounded-xl shadow-sm border border-slate-200 text-slate-700 text-sm md:text-base font-bold hover:border-blue-300 hover:text-blue-600 transition-colors cursor-default flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  {vertical}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* =========================================
            6. BROCHURE DOWNLOAD SECTION (Light Theme)
            ========================================= */}
        <section
          id="brochures"
          className="py-24 bg-white border-t border-slate-200 relative overflow-hidden"
        >
          <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Download Technical Brochures
              </h2>
              <p className="text-slate-500 text-lg font-medium mx-auto max-w-2xl">
                Get comprehensive technical specifications, configuration
                options, and deployment guides for our enterprise server lineup.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-6"
            >
              {/* AMD Brochure Card */}
              <motion.a
                variants={fadeInUp}
                href="#"
                target="_blank"
                className="group bg-slate-50 border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-600/10 rounded-3xl p-8 text-left transition-all flex flex-col h-full"
              >
                <div className="bg-blue-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <FileText className="w-7 h-7 text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  AMD EPYC™ Servers
                </h3>
                <p className="text-sm text-slate-500 mb-8 flex-grow">
                  Explore our complete lineup of 4th & 5th Gen AMD EPYC
                  configurations built for raw performance.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:text-blue-700 bg-blue-50 px-4 py-2 rounded-lg border border-blue-100">
                  <Download className="w-4 h-4" /> Download PDF (2.4 MB)
                </span>
              </motion.a>

              {/* Intel Brochure Card */}
              <motion.a
                variants={fadeInUp}
                href="#"
                target="_blank"
                className="group bg-slate-50 border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-600/10 rounded-3xl p-8 text-left transition-all flex flex-col h-full"
              >
                <div className="bg-blue-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <FileText className="w-7 h-7 text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Intel® Xeon® Servers
                </h3>
                <p className="text-sm text-slate-500 mb-8 flex-grow">
                  Detailed specs for our Intel Xeon Scalable architectures
                  optimized for enterprise workloads.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:text-blue-700 bg-blue-50 px-4 py-2 rounded-lg border border-blue-100">
                  <Download className="w-4 h-4" /> Download PDF (2.1 MB)
                </span>
              </motion.a>

              {/* GPU Brochure Card */}
              <motion.a
                variants={fadeInUp}
                href="#"
                target="_blank"
                className="group bg-slate-50 border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-600/10 rounded-3xl p-8 text-left transition-all flex flex-col h-full"
              >
                <div className="bg-blue-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <FileText className="w-7 h-7 text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  GPU Supercomputers
                </h3>
                <p className="text-sm text-slate-500 mb-8 flex-grow">
                  Configuration limits and cooling solutions for multi-GPU AI/ML
                  training clusters.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:text-blue-700 bg-blue-50 px-4 py-2 rounded-lg border border-blue-100">
                  <Download className="w-4 h-4" /> Download PDF (3.8 MB)
                </span>
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}

// Custom Icon for OS Agnostic Feature
function MonitorPlay(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <path d="M12 17v4" />
      <path d="M8 21h8" />
      <path d="m10 8 6 4-6 4Z" />
    </svg>
  );
}

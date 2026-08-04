"use client";

import React from "react";
import { motion, Variants, TargetAndTransition } from "framer-motion";
import {
  Layers,
  Server,
  Cloud,
  Zap,
  Activity,
  Maximize,
  MonitorSmartphone,
  CheckCircle2,
  ArrowRight,
  Cpu,
  ArrowUpRight,
  ShieldCheck,
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

// Custom animation for the floating virtual layers
const layerFloat1: TargetAndTransition = {
  y: ["-10px", "10px"],
  transition: {
    duration: 4,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  },
};
const layerFloat2: TargetAndTransition = {
  y: ["10px", "-10px"],
  transition: {
    duration: 5,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  },
};
const layerFloat3: TargetAndTransition = {
  y: ["-5px", "15px"],
  transition: {
    duration: 4.5,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  },
};

export default function VirtualizationPage() {
  return (
    <div className="bg-slate-50 text-slate-900 font-sans selection:bg-blue-200 overflow-hidden">
      <main>
        {/* =========================================
            1. HERO SECTION (Perfect Viewport Fit)
            Calculates 100vh minus a ~5rem header
            ========================================= */}
        <section className="relative w-full min-h-[calc(100vh-5rem)] lg:h-[calc(100vh-5rem)] flex items-center bg-slate-900 overflow-hidden py-12 lg:py-0">
          {/* Subtle Grid & Amwin Blue Glow Background */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] mix-blend-screen pointer-events-none"></div>
          <div className="absolute top-[-10%] left-[-5%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-indigo-600/15 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="container mx-auto px-6 max-w-7xl relative z-10 h-full flex flex-col justify-center">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column: Typography */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="max-w-2xl z-20"
              >
                <motion.div variants={fadeInUp} className="mb-6">
                  <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700/50 text-blue-400 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-sm">
                    <Layers className="w-4 h-4" />
                    Resource Consolidation
                  </div>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-6"
                >
                  Abstract. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    Consolidate. Scale.
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed mb-10 max-w-lg"
                >
                  Transform your physical hardware into highly available,
                  scalable virtual environments. Maximize efficiency and
                  drastically reduce your datacenter footprint.
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap items-center gap-4"
                >
                  <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-600/25 hover:-translate-y-0.5">
                    Plan a Migration
                  </button>
                  <button className="bg-slate-800/80 hover:bg-slate-700 text-white border border-slate-700 backdrop-blur-md px-8 py-4 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5 shadow-sm">
                    Explore Hypervisors
                  </button>
                </motion.div>
              </motion.div>

              {/* Right Column: Custom CSS 3D Layered Visual */}
              <motion.div
                className="relative w-full h-full min-h-[350px] lg:min-h-[500px] flex items-center justify-center perspective-1000 hidden md:flex"
                initial="hidden"
                animate="visible"
                variants={slideInRight}
              >
                <div className="relative w-full max-w-md aspect-square transform-gpu rotate-x-12 -rotate-y-12">
                  {/* Layer 3: Application Layer (Top) */}
                  <motion.div
                    animate={layerFloat1}
                    className="absolute inset-0 bg-blue-500/20 backdrop-blur-md border border-blue-400/50 rounded-3xl shadow-[0_20px_50px_rgba(59,130,246,0.3)] transform translate-y-[-80px] translate-x-[40px] flex items-center justify-center z-30"
                  >
                    <div className="text-center">
                      <Cloud className="w-16 h-16 text-blue-300 mx-auto mb-2" />
                      <p className="text-blue-200 font-bold tracking-widest uppercase text-sm">
                        Virtual Machines
                      </p>
                    </div>
                  </motion.div>

                  {/* Layer 2: Hypervisor (Middle) */}
                  <motion.div
                    animate={layerFloat2}
                    className="absolute inset-0 bg-indigo-500/10 backdrop-blur-md border border-indigo-400/30 rounded-3xl shadow-[0_20px_50px_rgba(99,102,241,0.2)] flex items-center justify-center z-20"
                  >
                    <div className="text-center">
                      <Layers className="w-16 h-16 text-indigo-300 mx-auto mb-2" />
                      <p className="text-indigo-200 font-bold tracking-widest uppercase text-sm">
                        Hypervisor OS
                      </p>
                    </div>
                  </motion.div>

                  {/* Layer 1: Physical Hardware (Bottom) */}
                  <motion.div
                    animate={layerFloat3}
                    className="absolute inset-0 bg-slate-800/80 backdrop-blur-md border border-slate-700/80 rounded-3xl shadow-2xl transform translate-y-[80px] translate-x-[-40px] flex items-center justify-center z-10"
                  >
                    <div className="text-center">
                      <Server className="w-16 h-16 text-slate-400 mx-auto mb-2" />
                      <p className="text-slate-400 font-bold tracking-widest uppercase text-sm">
                        Physical Hardware
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================
            2. THE 80% SAVINGS STATS BAR
            ========================================= */}
        <section className="bg-white border-y border-slate-200 relative z-20 py-12">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              {[
                { value: "80%", label: "Hardware & Maintenance\nCost Savings" },
                {
                  value: "80%",
                  label: "Reduction in Electricity\n& UPS Investment",
                },
                { value: "80%", label: "Utilization of\nPhysical Resources" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="flex flex-col items-center justify-center text-center px-6 py-4 md:py-0"
                >
                  <h4 className="text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
                    {stat.value}
                  </h4>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-widest whitespace-pre-line leading-relaxed">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================
            3. CORE BENEFITS (Asymmetrical Focus Grid)
            ========================================= */}
        <section className="py-24 md:py-32 bg-slate-50 relative">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="text-blue-600 font-bold uppercase tracking-widest text-xs block mb-4">
                Enterprise Consolidation
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                The Ultimate Money-Saving Initiative.
              </h2>
              <p className="text-lg text-slate-500 font-medium">
                Industry analysts report that up to 80% of IT departments are
                pursuing server consolidation. By reducing the number of
                physical machines, your enterprise unlocks massive efficiency
                and agility.
              </p>
            </motion.div>

            {/* Asymmetrical Grid */}
            <div className="grid md:grid-cols-12 gap-6">
              {/* Large Focus Feature - Span 8 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="md:col-span-8 bg-white border border-slate-200 rounded-[2.5rem] p-10 lg:p-14 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-100 transition-colors"></div>
                <div className="relative z-10">
                  <div className="bg-slate-50 text-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-slate-100 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Activity className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-slate-900 mb-4">
                    High Availability & Zero Downtime
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed max-w-xl mb-8">
                    Virtualization abstracts the OS from the hardware. Combined
                    with Distributed Resource Management (DRS), you achieve live
                    migration of workloads and true fault tolerance without ever
                    shutting down systems.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-blue-500" />{" "}
                      Non-Disruptive Capacity Expansion
                    </li>
                    <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-blue-500" />{" "}
                      Automated Load Balancing
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Smaller Feature - Span 4 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="md:col-span-4 bg-slate-900 border border-slate-800 rounded-[2.5rem] p-10 text-white hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-transparent"></div>
                <div className="relative z-10">
                  <Maximize className="w-12 h-12 text-blue-400 mb-6" />
                  <h3 className="text-2xl font-extrabold mb-4">
                    Instant Provisioning
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    Deploy new servers in minutes instead of weeks. Utilize thin
                    and over-provisioning benefits to maximize storage
                    efficiency instantly.
                  </p>
                </div>
              </motion.div>

              {/* Smaller Feature - Span 4 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="md:col-span-4 bg-white border border-slate-200 rounded-[2.5rem] p-10 hover:shadow-xl transition-all duration-300"
              >
                <MonitorSmartphone className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Centralized Management
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  Control dozens of virtual machines, monitor hardware health,
                  and orchestrate backups all from a single, unified pane of
                  glass.
                </p>
              </motion.div>

              {/* Smaller Feature - Span 8 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="md:col-span-8 bg-white border border-slate-200 rounded-[2.5rem] p-10 flex flex-col sm:flex-row items-center justify-between gap-8 hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="bg-indigo-50 text-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Legacy Hardware Support
                  </h3>
                  <p className="text-slate-500 max-w-md leading-relaxed">
                    Keep older, critical business applications running smoothly
                    by virtualizing their legacy operating systems onto modern,
                    secure hardware.
                  </p>
                </div>
                <div className="shrink-0 bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-center gap-4">
                  <div className="text-center">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                      Physical
                    </p>
                    <p className="text-slate-800 font-bold">Old Server</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-blue-400" />
                  <div className="text-center">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                      Virtual
                    </p>
                    <p className="text-blue-600 font-bold">New VM</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================
            4. EXPERTISE & SERVICES (Split List Layout)
            ========================================= */}
        <section className="py-24 md:py-32 bg-white border-y border-slate-200 overflow-hidden">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Left Column: Visual Representation */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInLeft}
                className="relative order-2 lg:order-1"
              >
                <div className="absolute inset-0 bg-blue-100 rounded-[3rem] transform -rotate-3 scale-105"></div>
                <div className="relative bg-slate-900 rounded-[3rem] p-10 md:p-14 border-4 border-white shadow-2xl flex flex-col gap-6">
                  {/* Visualizing P2V Migration */}
                  <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <Server className="w-8 h-8 text-slate-400" />
                      <div>
                        <p className="text-white font-bold">Physical Host</p>
                        <p className="text-xs text-slate-400">
                          Datacenter Rack 4
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-500">
                      Source
                    </span>
                  </div>

                  <div className="flex justify-center -my-2 relative z-10">
                    <div className="bg-blue-600 text-white p-2 rounded-full shadow-lg">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-blue-500/30 p-6 rounded-2xl flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <Cloud className="w-8 h-8 text-blue-300" />
                      <div>
                        <p className="text-white font-bold">Virtual Cluster</p>
                        <p className="text-xs text-blue-300">
                          VMware ESXi Node
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-blue-400">
                      Destination
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Services List */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInRight}
                className="order-1 lg:order-2"
              >
                <div className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4">
                  End-to-End Execution
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
                  Comprehensive Virtualization Services
                </h3>
                <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                  We offer Planning, Migration, Consolidation & Deployment
                  services for Datacenter, Server and Desktop Virtualization
                  solutions.
                </p>

                <div className="space-y-4">
                  {[
                    "Physical to Virtual (P2V) Migration Services",
                    "Virtual to Virtual (V2V) Migration Services",
                    "Complete hardware & software solutions from a single vendor",
                    "High Availability, Fault Tolerance & DRS implementation",
                    "Server consolidation strategies",
                    "Open Source virtualization solutions",
                    "VDI (Virtual Desktop Infrastructure) deployment",
                    "Annual maintenance & remote/on-site services by certified staff",
                  ].map((service, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="bg-blue-100 p-1.5 rounded-lg text-blue-600 shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <p className="text-slate-700 font-medium leading-relaxed">
                        {service}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================
            5. VENDOR PARTNERS (Simple Centered)
            ========================================= */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6 max-w-7xl text-center">
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-10">
              Platform Partnerships
            </h4>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-slate-800">
                VMware
              </h2>
              <div className="hidden md:block h-10 w-px bg-slate-300"></div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-slate-800">
                CiTRIX
              </h2>
              <div className="hidden md:block h-10 w-px bg-slate-300"></div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-slate-800">
                Open-Source
              </h2>
            </div>
          </div>
        </section>

        {/* =========================================
            6. CTA SECTION (Dark Theme Base)
            ========================================= */}
        <section className="py-24 md:py-32 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Ready to consolidate your servers?
              </h2>
              <p className="text-blue-200 text-lg font-medium mb-10 mx-auto max-w-2xl">
                Contact our certified technical staff to assess your current
                datacenter and map out a flawless Physical-to-Virtual migration
                plan.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto bg-blue-600 text-white hover:bg-blue-500 px-8 py-4 rounded-xl font-bold text-sm transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:-translate-y-1">
                  Schedule Datacenter Assessment
                </button>
                <button className="w-full sm:w-auto bg-slate-800 border border-slate-700 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-bold text-sm transition-all">
                  Contact Support Team
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}

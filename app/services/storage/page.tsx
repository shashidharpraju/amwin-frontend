"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Database,
  HardDrive,
  Cloud,
  Server,
  Archive,
  CheckCircle2,
  Activity,
  Network,
  ShieldAlert,
} from "lucide-react";

// ==========================================
// ANIMATION VARIANTS
// ==========================================
const customEasing = [0.25, 0.1, 0.25, 1] as const;

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
    transition: { staggerChildren: 0.1 },
  },
};

// ... rest of your component
export default function StorageBackupPage() {
  return (
    <div className=" h-240 bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 overflow-hidden">
      <main>
        {/* 1. HERO SECTION */}
        {/* =========================================
    1. HERO SECTION (Perfect Viewport Fit)
    Calculates 100vh minus a ~5rem header
    ========================================= */}
        <section className="relative w-full h-[calc(100vh-5rem)] flex items-center bg-slate-900 overflow-hidden">
          {/* Abstract Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/50 to-slate-900"></div>
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-600/20 rounded-[100%] blur-[120px] pointer-events-none"></div>

          <div className="container mx-auto px-6 max-w-5xl relative z-10 flex flex-col justify-center items-center text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="flex flex-col items-center"
            >
              <motion.div variants={fadeInUp} className="mb-8">
                <span className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase backdrop-blur-md">
                  <Database className="w-4 h-4" />
                  High Availability Infrastructure
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-8"
              >
                Enterprise Data <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
                  Storage & Backup
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed mb-10 max-w-2xl"
              >
                High-performance, scalable, and affordable storage systems built
                for intensive workloads. Protect your critical data with
                industry-leading disaster recovery architectures.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap items-center justify-center gap-4"
              >
                <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-bold text-sm transition-all shadow-lg shadow-indigo-600/30 hover:-translate-y-0.5">
                  Configure Storage
                </button>
                <button className="bg-white/5 hover:bg-white/10 text-white border border-white/20 backdrop-blur-md px-8 py-4 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5">
                  Consult Data Experts
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>
        {/* 2. SHOWCASE IMAGE */}
        {/* 3. CORE CAPABILITIES (Bento Grid) */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div
                variants={fadeInUp}
                className="md:col-span-2 bg-white border border-slate-200 rounded-[2rem] p-10 shadow-sm hover:shadow-md transition-all"
              >
                <Server className="w-10 h-10 text-indigo-600 mb-6" />
                <h3 className="text-3xl font-extrabold mb-4">
                  SAN, NAS & DAS Systems
                </h3>
                <p className="text-slate-600 mb-6">
                  Highly available customized storage arrays ensuring zero
                  bottlenecks for intensive workflows.
                </p>
                <div className="flex gap-4 text-sm font-bold text-slate-700">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500" /> OEM
                    Solutions
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500" />{" "}
                    Scalable
                  </span>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-slate-900 rounded-[2rem] p-10 text-white flex flex-col justify-between"
              >
                <ShieldAlert className="w-10 h-10 text-blue-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Disaster Recovery</h3>
                <p className="text-slate-400">
                  Data protection solutions from NAKIVO, Acronis & Veritas for
                  all server types.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="md:col-span-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-[2rem] p-10"
              >
                <Archive className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-2xl font-extrabold mb-2">
                  Deep Archival & Tape
                </h3>
                <p className="text-slate-600 max-w-xl">
                  Secure, long-term data retention using LTO Tape drives and
                  automated libraries.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
        {/* 4. TECHNICAL SPECIFICATIONS */}
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-3xl font-extrabold mb-12">
              Infrastructure Specifications
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Network,
                  title: "High-Speed Links",
                  desc: "SAS, Fibre Channel, InfiniBand.",
                },
                {
                  icon: Activity,
                  title: "High Availability",
                  desc: "Redundant architectures.",
                },
                {
                  icon: Cloud,
                  title: "Hybrid Cloud",
                  desc: "On-prem to cloud bridging.",
                },
                {
                  icon: HardDrive,
                  title: "Media Diversity",
                  desc: "NVMe, SSD, HDD, LTO.",
                },
              ].map((feat, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-slate-50 border border-slate-100 p-8 rounded-3xl"
                >
                  <feat.icon className="w-8 h-8 text-indigo-600 mb-4" />
                  <h4 className="font-bold mb-1">{feat.title}</h4>
                  <p className="text-sm text-slate-500">{feat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

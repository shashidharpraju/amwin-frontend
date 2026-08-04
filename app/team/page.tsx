"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  Zap,
  Coffee,
  ShieldCheck,
  GraduationCap,
  Send,
  ChevronRight,
  Server,
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

// ==========================================
// MOCK DATA: OPEN POSITIONS & BENEFITS
// ==========================================
const openPositions = [
  {
    id: "eng-01",
    title: "Senior HPC Systems Engineer",
    department: "Engineering",
    location: "Bengaluru, India (Hybrid)",
    type: "Full-Time",
  },
  {
    id: "eng-02",
    title: "Linux Kernel Specialist",
    department: "Engineering",
    location: "Bengaluru, India",
    type: "Full-Time",
  },
  {
    id: "sales-01",
    title: "Enterprise Account Executive",
    department: "Sales",
    location: "Remote / Pan-India",
    type: "Full-Time",
  },
  {
    id: "supp-01",
    title: "L3 Data Center Support Technician",
    department: "Technical Support",
    location: "Bengaluru, India (On-Site)",
    type: "Full-Time",
  },
];

const benefits = [
  {
    icon: <ShieldCheck />,
    title: "Comprehensive Health",
    desc: "Premium medical, dental, and vision coverage for you and your dependents.",
  },
  {
    icon: <GraduationCap />,
    title: "Continuous Learning",
    desc: "Annual budgets for certifications (RedHat, NVIDIA, VMware) and conferences.",
  },
  {
    icon: <Coffee />,
    title: "Flexible Work",
    desc: "Hybrid schedules and generous paid time off to maintain a healthy work-life balance.",
  },
  {
    icon: <Zap />,
    title: "Performance Bonuses",
    desc: "Competitive base salaries paired with aggressive performance and profit-sharing bonuses.",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200">
      <main>
        {/* =========================================
            1. PAGE HEADER
            ========================================= */}
        <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-900 text-center">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] mix-blend-screen pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/4 pointer-events-none"></div>

          <div className="container mx-auto px-6 max-w-4xl relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest border border-blue-400/30 bg-blue-500/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  Join Our Team
                </span>
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight"
              >
                Build the infrastructure of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  tomorrow.
                </span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10"
              >
                We are actively looking for visionaries, problem-solvers, and
                hardware enthusiasts to help us push the boundaries of
                enterprise computing.
              </motion.p>

              <motion.div variants={fadeInUp}>
                <a
                  href="#openings"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-600/30 hover:-translate-y-0.5"
                >
                  View Open Positions <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* =========================================
            2. PERKS & BENEFITS
            ========================================= */}
        <section className="py-24 bg-white relative z-20">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              className="text-center max-w-2xl mx-auto mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Why Work With Us?
              </h2>
              <p className="text-slate-500 font-medium leading-relaxed">
                We invest heavily in our team's growth, health, and happiness.
                When you join Amwin System, you get more than just a job—you get
                a career path.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-200 transition-all duration-300"
                >
                  <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 mb-6 text-blue-600">
                    {React.cloneElement(benefit.icon, { className: "w-6 h-6" })}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* =========================================
            3. OPEN POSITIONS
            ========================================= */}
        <section
          id="openings"
          className="py-24 bg-slate-50 border-t border-slate-200"
        >
          <div className="container mx-auto px-6 max-w-5xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4"
            >
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">
                  Current Openings
                </h2>
                <p className="text-slate-500 font-medium">
                  Find your next role in Engineering, Sales, or Support.
                </p>
              </div>
              <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
                <Briefcase className="w-4 h-4" /> {openPositions.length} Open
                Roles
              </div>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              {openPositions.map((job) => (
                <motion.a
                  key={job.id}
                  href={`mailto:careers@amwinsystems.in?subject=Application for ${job.title}`}
                  variants={fadeInUp}
                  className="group block bg-white border border-slate-200 hover:border-blue-400 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>

                  <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-700 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">
                          {job.department}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">
                          {job.type}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-4 text-slate-500 text-sm font-medium">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" /> {job.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" /> Full-Time
                        </span>
                      </div>
                    </div>

                    <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-slate-50 text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* =========================================
            4. GENERAL APPLICATION CTA
            ========================================= */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6 max-w-5xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-slate-900 rounded-[2.5rem] p-12 md:p-16 text-center shadow-2xl relative overflow-hidden border border-slate-800"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px]"></div>

              <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
                <div className="bg-slate-800 border border-slate-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Server className="w-8 h-8 text-blue-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                  Don't see your perfect role?
                </h2>
                <p className="text-lg text-slate-400 mb-8 font-medium leading-relaxed">
                  We are always eager to meet talented professionals. Send us
                  your resume and a brief introduction, and we'll keep you in
                  mind for future opportunities.
                </p>
                <a
                  href="mailto:careers@amwinsystems.in?subject=General Application"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-sm transition-colors shadow-lg"
                >
                  <Send className="w-4 h-4" /> Submit General Application
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}

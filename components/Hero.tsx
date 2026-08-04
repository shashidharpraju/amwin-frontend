"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Cpu, Activity } from "lucide-react";

// Container animations to orchestrate the children fading in sequentially
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Animation settings for individual elements like text and buttons
const childVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
    } as const, // Ensures "spring" is typed as a literal rather than a general string
  },
};

export default function HeroModern() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-40 pb-28 text-white">
      {/* 1. Modern Animated Gradients Backdrop */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-950 to-slate-950" />
        <div className="absolute -bottom-1/2 left-1/4 h-full w-full rounded-full bg-indigo-950/20 blur-[120px] mix-blend-color-dodge" />
        <div className="absolute top-1/3 -left-1/4 h-full w-full rounded-full bg-blue-950/20 blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-16">
        <motion.div
          className="max-w-4xl space-y-7"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* 2. Dynamic Live Status Badge */}
          <motion.div
            className="inline-flex items-center gap-3 rounded-full border border-blue-500/30 bg-blue-950/40 px-5 py-2 text-sm font-medium text-blue-400 backdrop-blur-lg"
            variants={childVariants}
          >
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <Activity className="relative inline-flex h-3 w-3 text-blue-300" />
            </div>
            Custom High-Performance Architecture Engineering
          </motion.div>

          {/* 3. High-Contrast Typographic Headline */}
          <motion.h1
            className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95]"
            variants={childVariants}
          >
            Compute. Scale.
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
              Built to Order.
            </span>
          </motion.h1>

          {/* 4. Value Proposition */}
          <motion.p
            className="max-w-2xl text-lg text-slate-400 sm:text-xl font-light leading-relaxed pt-2"
            variants={childVariants}
          >
            Amwin Systems optimizes mission-critical datacenters with custom
            built servers, highly tailored HPC clusters, and advanced storage
            arrays engineered for maximum performance density and absolute
            hardware integrity.
          </motion.p>

          {/* 5. Primary and Secondary Action Buttons */}
          <motion.div
            className="flex flex-wrap gap-5 pt-6"
            variants={childVariants}
          >
            {/* Primary Blue Shadow Glow CTA */}
            <motion.a
              href="#contact"
              className="group inline-flex items-center gap-2.5 rounded-xl bg-blue-600 px-8 py-4.5 font-semibold text-white transition-all hover:bg-blue-500"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 30px -5px rgba(37, 99, 235, 0.5)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              Configure Your Infrastructure
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1.5" />
            </motion.a>

            {/* Glassmorphism Secondary Button */}
            <motion.a
              href="#solutions"
              className="inline-flex items-center gap-2.5 rounded-xl border border-slate-800 bg-slate-900/50 px-8 py-4.5 font-semibold text-slate-300 backdrop-blur-lg transition-all hover:bg-slate-900 hover:text-white"
              whileHover={{
                scale: 1.03,
                borderColor: "rgba(100, 116, 139, 0.4)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              <Cpu className="h-5 w-5 text-indigo-400" />
              View Ecosystems
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import LeadReceivableForm from "@/components/LeadReceivableForm";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Building2,
  Headset,
  Send,
  AlertCircle,
  CheckCircle2,
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

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200">
      <main>
        {/* =========================================
            1. PAGE HEADER
            ========================================= */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-slate-900 text-center">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] mix-blend-screen pointer-events-none"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="container mx-auto px-6 max-w-4xl relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="mb-4">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest border border-blue-400/30 bg-blue-500/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  Get In Touch
                </span>
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6"
              >
                Contact Our Engineering Team
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto"
              >
                Whether you need a custom HPC cluster quote, enterprise
                deployment support, or general inquiries, our specialists are
                ready to assist you.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* =========================================
            2. CONTACT FORM & INFO GRID
            ========================================= */}
        <section className="py-20 -mt-10 relative z-20">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
              {/* LEFT COLUMN: Contact Information */}
              <motion.div
                className="lg:col-span-2 space-y-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {/* Global Headquarters Card */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Global Headquarters
                    </h3>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                      <p className="text-slate-600 text-sm leading-relaxed">
                        New No.141, Old No.15/2, 2nd Floor 4th Main, Mandovi
                        Motors Road, Rajajinagar Industrial Town
                        <br />
                        Bengaluru – 560 079, India
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="w-5 h-5 text-slate-400 shrink-0" />
                      <p className="text-slate-600 text-sm font-medium">
                        +91 80 23409191{" "}
                        <span className="text-slate-300 mx-1">|</span> +91 80
                        41140033
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail className="w-5 h-5 text-slate-400 shrink-0" />
                      <a
                        href="mailto:sales@amwinsystems.in"
                        className="text-blue-600 hover:text-blue-700 text-sm font-bold transition-colors"
                      >
                        sales@amwinsystems.in
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Direct Departments Card */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-slate-900 mb-6">
                    Direct Departments
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-slate-50 border border-slate-100 p-2.5 rounded-lg text-slate-500">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">
                          Enterprise Sales
                        </h4>
                        <p className="text-xs text-slate-500">
                          Quotes & Custom Builds
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-slate-50 border border-slate-100 p-2.5 rounded-lg text-slate-500">
                        <Headset className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">
                          Technical Support
                        </h4>
                        <p className="text-xs text-slate-500">
                          Existing Customer Assistance
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-slate-50 border border-slate-100 p-2.5 rounded-lg text-slate-500">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">
                          Business Hours
                        </h4>
                        <p className="text-xs text-slate-500">
                          Mon - Fri, 9:00 AM - 6:00 PM (IST)
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* RIGHT COLUMN: Lead Receivable Form */}
              <motion.div
                className="lg:col-span-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <LeadReceivableForm />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

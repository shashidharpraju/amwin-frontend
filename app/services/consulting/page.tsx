"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { submitEnquiry } from "@/app/actions/enquiry";
import {
  BrainCircuit,
  Settings2,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  Cloud,
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

export default function ConsultingPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [assignedRep, setAssignedRep] = useState("");

  const handleFormSubmit = async (formData: FormData) => {
    const result = await submitEnquiry(formData);
    if (result.success) {
      setAssignedRep(result.assignedTo || "our lead consultant");
      setIsSubmitted(true);
    } else {
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200">
      <main>
        {/* HERO SECTION */}
        <section className="relative w-full h-[calc(100vh-5rem)] flex items-center bg-slate-900 overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
          <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="flex flex-col items-center"
            >
              <span className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/30 text-blue-400 px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase mb-8">
                <BrainCircuit className="w-4 h-4" /> Strategic IT Consulting
              </span>
              <h1 className="text-4xl md:text-7xl font-extrabold text-white tracking-tight mb-8">
                Architecting Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  Digital Future
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
                Expert guidance on infrastructure mapping, cloud migration, and
                technology scaling to drive business efficiency.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CONSULTING AREAS */}
        <section className="py-24">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Infrastructure Mapping",
                  icon: <Settings2 />,
                  desc: "Optimize your existing hardware footprint for maximum ROI.",
                },
                {
                  title: "Cloud Migration",
                  icon: <Cloud />,
                  desc: "Seamless transition from on-prem to hybrid cloud environments.",
                },
                {
                  title: "Scaling Strategy",
                  icon: <BarChart3 />,
                  desc: "Future-proof your IT architecture for projected business growth.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm"
                >
                  <div className="text-blue-600 mb-6">
                    {React.cloneElement(item.icon, { className: "w-10 h-10" })}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONSULTATION CONTACT SECTION */}
        <section id="contact" className="py-24 bg-slate-900 text-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-extrabold mb-8">
                  Ready to Consult?
                </h2>
                <p className="text-slate-400 text-lg mb-8">
                  Let's discuss your requirements and create a roadmap for your
                  digital transformation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-slate-300">
                    <Phone className="text-blue-400" /> +91 80 23409191
                  </div>
                  <div className="flex items-center gap-4 text-slate-300">
                    <Mail className="text-blue-400" /> sales@amwinsystems.in
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 rounded-[2.5rem] p-10 shadow-2xl">
                {isSubmitted ? (
                  <div className="text-center py-10">
                    <CheckCircle2 className="w-16 h-16 text-blue-400 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold mb-3">
                      Consultation Request Received!
                    </h3>
                    <p className="text-slate-400">
                      Our senior consultant ({assignedRep}) will contact you
                      shortly to schedule your session.
                    </p>
                  </div>
                ) : (
                  <form action={handleFormSubmit} className="space-y-6">
                    <input
                      name="fullName"
                      required
                      placeholder="Full Name"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
                    />
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="Email"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
                    />
                    <textarea
                      name="message"
                      required
                      placeholder="Describe your IT challenges"
                      rows={4}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500 resize-none"
                    />
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-500 py-4 rounded-xl font-bold transition-all"
                    >
                      Request Consultation
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

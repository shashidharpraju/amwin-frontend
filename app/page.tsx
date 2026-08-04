"use client";

import React, { useState } from "react";
import { submitEnquiry } from "@/app/actions/enquiry";
import { motion, Variants, TargetAndTransition } from "framer-motion";
import {
  Star,
  Users,
  Cpu,
  Server,
  Database,
  Lock,
  Layers,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import Link from "next/link"; // Next.js routing

// ==========================================
// ENHANCED ANIMATION VARIANTS
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

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: customEasing },
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

const floatingAnimation: TargetAndTransition = {
  y: ["-8px", "8px"],
  transition: {
    duration: 3,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  },
};

export default function AmwinFullPage() {
  const currentYear = new Date().getFullYear();
  const foundingYear = 2012;
  const yearsOfExperience = currentYear - foundingYear;

  // Added state for form submission
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [assignedRep, setAssignedRep] = useState("");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-200 overflow-hidden font-sans">
      <main>
        {/* =========================================
            1. HERO SECTION
            ========================================= */}
        <section className="relative min-h-[90vh] flex items-center pt-20 pb-20 overflow-hidden bg-gradient-to-b from-blue-50/50 to-slate-50">
          <div className="absolute top-0 right-0 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-blue-200/30 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-indigo-100/40 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                className="max-w-2xl"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.div variants={fadeInUp} className="mb-8">
                  <div className="inline-flex items-center gap-2 bg-white border border-blue-100 shadow-sm text-blue-700 px-4 py-2 rounded-full text-xs font-bold tracking-wide">
                    <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
                    Trusted by 500+ Enterprise Customers
                  </div>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl sm:text-5xl md:text-[4rem] font-extrabold tracking-tight text-slate-900 leading-[1.05] mb-6"
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    Premium
                  </span>{" "}
                  Computer Systems & IT Solutions
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg md:text-xl text-slate-500 font-medium max-w-xl leading-relaxed mb-10"
                >
                  Discover cutting-edge architecture with Amwin System—from
                  high-performance computing clusters to secure enterprise
                  networks.
                </motion.p>

                {/* UPDATED: Functional Next.js Links */}
                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap items-center gap-4 mb-10"
                ></motion.div>
              </motion.div>

              <motion.div
                className="relative hidden lg:flex justify-end items-center"
                initial="hidden"
                animate="visible"
                variants={slideInRight}
              >
                <motion.div
                  animate={floatingAnimation}
                  className="relative w-full max-w-[520px] h-[380px]"
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-indigo-100 opacity-50 rounded-3xl blur-lg transform rotate-2"></div>
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/60 bg-white group">
                    <video
                      src="https://www.image2url.com/r2/default/videos/1783670028119-d692270b-9dee-4a10-bc0f-9fc605f4487c.mp4"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-transparent to-transparent pointer-events-none"></div>

                    <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-5 py-3 rounded-xl shadow-xl flex items-center gap-4 transform transition-transform duration-500 hover:-translate-y-1">
                      <div className="bg-blue-50 p-2 rounded-lg">
                        <Server className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          Status
                        </p>
                        <p className="text-sm font-extrabold text-slate-900">
                          Systems Online
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
            2. ELEVATED STATS BAR
            ========================================= */}
        <section className="relative z-20 -mt-10 mb-20">
          <div className="container mx-auto px-6 max-w-5xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                {[
                  { stat: "500+", label: "Enterprise\nClients" },
                  { stat: "10k+", label: "Systems\nDeployed" },
                  {
                    stat: `${yearsOfExperience}+`,
                    label: "Years of\nExcellence",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="flex items-center justify-center gap-6 px-4"
                  >
                    <h4 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                      {item.stat}
                    </h4>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider leading-relaxed whitespace-pre-line">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================
            3. SERVICES GRID
            ========================================= */}
        <section id="services" className="py-24 bg-slate-50">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              className="text-center max-w-2xl mx-auto mb-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4 block">
                Enterprise Infrastructure
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Complete IT Solutions
              </h2>
              <p className="text-lg text-slate-500 font-medium">
                End-to-end technology services tailored for scalability,
                security, and uncompromising performance.
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
                  icon: <Server />,
                  title: "Enterprise Servers",
                  desc: "Custom built, highly available rack and pedestal servers designed for heavy workloads.",
                  href: "/services/servers",
                },
                {
                  icon: <Cpu />,
                  title: "HPC Clusters",
                  desc: "Cost-effective, open-standard High Performance Computing architectures for data analysis.",
                  href: "/services/HPC",
                },
                {
                  icon: <Lock />,
                  title: "Network Security",
                  desc: "Unified Threat Management and strict endpoint security to protect your assets.",
                  href: "/services/security",
                },
                {
                  icon: <Database />,
                  title: "Storage & Backup",
                  desc: "Scalable SAN, NAS, and DAS storage solutions ensuring zero data loss and fast recovery.",
                  href: "/services/storage",
                },
                {
                  icon: <Layers />,
                  title: "Virtualization",
                  desc: "VMware & Citrix integration to maximize hardware efficiency across your datacenter.",
                  href: "/services/virtualization",
                },
                {
                  icon: <Users />,
                  title: "IT Consulting",
                  desc: "Expert guidance on infrastructure mapping, cloud migration, and technology scaling.",
                  href: "/services/consulting",
                },
              ].map((service, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <Link
                    href={service.href}
                    className="block h-full bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>

                    <div className="relative z-10">
                      <div className="bg-blue-50 text-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        {React.cloneElement(service.icon, {
                          className: "w-8 h-8",
                        })}
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        {service.title}
                      </h3>

                      <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        {service.desc}
                      </p>

                      <div className="inline-flex items-center text-sm font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
                        Learn More{" "}
                        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* =========================================
            4. CUSTOM SOLUTION CTA 
            ========================================= */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-slate-900 rounded-[2.5rem] p-12 md:p-20 text-center shadow-2xl relative overflow-hidden border border-slate-800"
            >
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3"></div>

              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                  Require a Custom Architecture?
                </h2>
                <p className="text-lg text-slate-300 mb-10 font-medium">
                  Speak with our engineering team to design, configure, and
                  deploy a system perfectly calibrated to your operational
                  requirements.
                </p>

                {/* UPDATED: Functional Next.js Links */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/products"
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-sm transition-colors shadow-lg text-center"
                  >
                    Request Custom Quote
                  </Link>
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-sm transition-colors backdrop-blur-sm text-center"
                  >
                    Schedule Consultation
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================
            5. ABOUT AMWIN SYSTEM SECTION
            ========================================= */}
        <section id="about" className="py-28 bg-white overflow-hidden">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              {/* LEFT SIDE: Text Content */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={slideInLeft}
              >
                <span className="text-[13px] font-[700] text-[#2563eb] bg-blue-100/60 px-5 py-2 rounded-full mb-8 inline-block tracking-wide">
                  About Amwin System
                </span>

                <h2 className="text-[2.5rem] md:text-[3.2rem] font-[800] text-slate-900 mb-8 leading-[1.15] tracking-tight">
                  Your Trusted Technology Partner Since {foundingYear}
                </h2>

                <p className="text-[1.15rem] text-slate-600 font-[400] mb-6 leading-relaxed">
                  Leading provider of premium computer systems, custom builds,
                  and IT solutions for businesses and enthusiasts.
                </p>

                <p className="text-slate-500 mb-10 leading-relaxed text-[15px]">
                  With over {yearsOfExperience} years of experience in the
                  technology industry, we have established ourselves as a
                  leading provider of computer systems and IT solutions. Our
                  commitment to quality, innovation, and customer satisfaction
                  has earned us the trust of thousands of customers across
                  various industries.
                </p>

                <h3 className="text-[1.5rem] font-[800] text-slate-900 mb-6 tracking-tight">
                  Why Choose Amwin System?
                </h3>

                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-5 mb-10">
                  {[
                    "Premium quality components from trusted brands",
                    "Custom configurations tailored to your needs",
                    "Professional installation and setup services",
                    "Comprehensive warranty and support",
                    "Competitive pricing with transparent quotes",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-[14px] font-[500] leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* UPDATED: Functional Next.js Link */}
              </motion.div>

              {/* RIGHT SIDE: Video & Stats Card */}
              <motion.div
                className="relative h-full min-h-[550px] w-full rounded-[2.5rem] bg-slate-900 overflow-hidden shadow-2xl flex flex-col justify-end group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={slideInRight}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-700"
                >
                  <source
                    src="https://www.image2url.com/r2/default/videos/1783670028119-d692270b-9dee-4a10-bc0f-9fc605f4487c.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
                <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-[80px] transition-transform duration-700 group-hover:scale-125"></div>

                <div
                  className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
                  style={{
                    backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                  }}
                />

                <div className="relative z-10 m-8 bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-10 transform transition-transform duration-500 hover:-translate-y-2">
                  <h3 className="text-[1.75rem] font-[800] text-white mb-3 tracking-tight">
                    Excellence in Technology
                  </h3>
                  <p className="text-blue-200 font-[400] mb-10 text-[15px]">
                    Building the future, one system at a time.
                  </p>

                  <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                    <div>
                      <div className="text-[2.5rem] font-[800] text-white mb-1">
                        {yearsOfExperience}+
                      </div>
                      <div className="text-[11px] font-[700] text-blue-300 uppercase tracking-widest">
                        Years Experience
                      </div>
                    </div>
                    <div>
                      <div className="text-[2.5rem] font-[800] text-white mb-1">
                        500+
                      </div>
                      <div className="text-[11px] font-[700] text-blue-300 uppercase tracking-widest">
                        Happy Customers
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================
            6. TESTIMONIALS
            ========================================= */}
        <section className="py-28 bg-[#0f172a] text-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <p className="text-blue-400 font-[700] mb-4 uppercase tracking-widest text-[13px]">
                Customer Reviews
              </p>
              <h2 className="text-[2.75rem] md:text-5xl font-[800] mb-6 tracking-tight">
                What Our Customers Say
              </h2>
              <p className="text-slate-400 text-[1.15rem] font-[400] leading-relaxed">
                Don't just take our word for it. Here's what our satisfied
                corporate customers have to say about their experience with
                Amwin System.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              {[
                {
                  name: "Rajesh Kumar",
                  role: "Tech Solutions Ltd",
                  quote:
                    "Excellent service and quality products. Our server rack setup was completed professionally and on time.",
                },
                {
                  name: "Priya Sharma",
                  role: "Data Analytics Firm",
                  quote:
                    "Amazing HPC cluster deployment! The parallel processing performance is outstanding and customer service is top-notch.",
                },
                {
                  name: "Amit Patel",
                  role: "Design Studio",
                  quote:
                    "Perfect NAS storage solution for our creative needs. Fast deployment and excellent hardware redundancy.",
                },
              ].map((review, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="bg-slate-800/40 border border-slate-700/50 p-10 rounded-3xl hover:border-slate-500 transition-colors backdrop-blur-sm"
                >
                  <div className="flex text-yellow-400 mb-8">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-300 italic mb-10 text-[15px] leading-relaxed">
                    "{review.quote}"
                  </p>
                  <div>
                    <h4 className="font-[800] text-white text-[17px] mb-1">
                      {review.name}
                    </h4>
                    <p className="text-[13px] text-slate-400 font-[500]">
                      {review.role} • Verified Customer
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      {/* =========================================
          7. FOOTER & CONTACT
          ========================================= */}
      <motion.footer
        id="contact"
        className="bg-[#0b1120] text-slate-300 pt-28 pb-12 border-t border-slate-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 mb-24 border-b border-slate-800/80 pb-20">
            <div>
              <p className="text-blue-500 font-[700] mb-4 uppercase tracking-widest text-[13px]">
                Get In Touch
              </p>
              <h2 className="text-[2.5rem] md:text-5xl font-[800] text-white mb-8 tracking-tight">
                Contact Us Today
              </h2>
              <p className="text-slate-400 mb-12 font-[400] text-[1.1rem] leading-relaxed">
                Ready to upgrade your datacenter? Contact our team of experts
                and let us help you map out the perfect technology solution for
                your workload.
              </p>

              <div className="space-y-8">
                <div className="flex gap-5 group">
                  <div className="bg-slate-900 p-5 rounded-2xl text-blue-500 h-fit border border-slate-800 group-hover:bg-[#2563eb] group-hover:text-white transition-all duration-300">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-[700] text-white mb-1.5 text-[17px]">
                      Phone
                    </h4>
                    <p className="text-slate-400 text-[15px] font-[400]">
                      +91 80 23409191 | +91 80 41140033
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 group">
                  <div className="bg-slate-900 p-5 rounded-2xl text-blue-500 h-fit border border-slate-800 group-hover:bg-[#2563eb] group-hover:text-white transition-all duration-300">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-[700] text-white mb-1.5 text-[17px]">
                      Email
                    </h4>
                    <p className="text-slate-400 text-[15px] font-[400]">
                      sales@amwinsystems.in
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 group">
                  <div className="bg-slate-900 p-5 rounded-2xl text-blue-500 h-fit border border-slate-800 group-hover:bg-[#2563eb] group-hover:text-white transition-all duration-300">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-[700] text-white mb-1.5 text-[17px]">
                      Address
                    </h4>
                    <p className="text-slate-400 text-[15px] max-w-sm leading-relaxed font-[400]">
                      New No.141, Old No.15/2, 2nd Floor 4th Main, Mandovi
                      Motors Road, Rajajinagar Industrial Town Bengaluru – 560
                      079
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-[2.5rem] p-10 border border-slate-800 shadow-2xl">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-10">
                  <div className="bg-blue-600/20 p-4 rounded-full mb-6">
                    <CheckCircle2 className="w-12 h-12 text-blue-400" />
                  </div>
                  <h3 className="text-[1.75rem] font-[800] text-white mb-3">
                    Thank you for contacting us!
                  </h3>
                  <p className="text-slate-400 font-[400] leading-relaxed">
                    Our team will reach out to you shortly.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-[1.75rem] font-[800] mb-8 text-white tracking-tight">
                    Send us a Message
                  </h3>
                  <form
                    action={async (formData) => {
                      const result = await submitEnquiry(formData);
                      if (result.success) {
                        setAssignedRep(result.assignedTo || "our team");
                        setIsSubmitted(true);
                      } else {
                        alert("Error submitting form.");
                      }
                    }}
                    className="space-y-6"
                  >
                    <input
                      name="fullName"
                      required
                      placeholder="Full Name"
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-500"
                    />
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="Email Address"
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-500"
                    />
                    <input
                      name="phone"
                      type="tel"
                      required
                      placeholder="Phone Number"
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-500"
                    />
                    <textarea
                      name="message"
                      required
                      placeholder="Your Message"
                      rows={4}
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-500 resize-none"
                    />
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-500 transition-colors py-4 rounded-2xl text-white font-bold"
                    >
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* UPDATED: Functional Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div>
              <h4 className="font-[800] text-white mb-6 text-[17px]">
                Solutions
              </h4>
              <ul className="space-y-4 text-[14px] text-slate-400 font-[400]">
                <li>
                  <Link
                    href="/services/servers"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Enterprise Servers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/HPC"
                    className="hover:text-blue-400 transition-colors"
                  >
                    HPC Clusters
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/storage"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Storage Arrays
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/security"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Network Security
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-[800] text-white mb-6 text-[17px]">
                Services
              </h4>
              <ul className="space-y-4 text-[14px] text-slate-400 font-[400]">
                <li>
                  <Link
                    href="/products"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Custom Configuration
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/servers"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Enterprise Deployment
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Technical Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/consulting"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Architecture Consultation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-[800] text-white mb-6 text-[17px]">
                Company
              </h4>
              <ul className="space-y-4 text-[14px] text-slate-400 font-[400]">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-blue-400 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/team"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-[800] text-white mb-6 text-[17px]">
                Support
              </h4>
              <ul className="space-y-4 text-[14px] text-slate-400 font-[400]">
                <li>
                  <Link
                    href="/support"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/requirements"
                    className="hover:text-blue-400 transition-colors"
                  >
                    System Requirements
                  </Link>
                </li>
                <li>
                  <Link
                    href="/manuals"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Product Manuals
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Live Chat
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-900 text-[13px] text-slate-500 font-[500]">
            <p>© {currentYear} Amwin System Pvt LTD. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="hover:text-slate-300 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-slate-300 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="hover:text-slate-300 transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

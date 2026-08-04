// app/products/[modelNumber]/ConfiguratorForm.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { submitQuoteRequest } from "@/app/actions/quote";
import {
  Cpu,
  MemoryStick,
  HardDrive,
  Database,
  MonitorPlay,
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
  Home,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type ProductProps = {
  modelNumber: string;
  name: string;
  category: string;
  platform: string;
  briefConfig: string;
};

export default function ConfiguratorForm({
  product,
}: {
  product: ProductProps;
}) {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const isRyzen5 = /Ryzen 5/i.test(product.name);
  const isRyzen7 = /Ryzen 7/i.test(product.name);
  const isRyzen9 = /Ryzen 9/i.test(product.name);
  const isCorei5 = /i5/i.test(product.name);
  const isCorei7 = /i7/i.test(product.name);
  const isCorei9 = /i9/i.test(product.name);

  const isConsumerCPU =
    isRyzen5 || isRyzen7 || isRyzen9 || isCorei5 || isCorei7 || isCorei9;

  const isDesktopTier =
    product.category === "Desktop" ||
    (product.category === "Workstation" && isConsumerCPU);

  const isHEDTWorkstation =
    product.category === "Workstation" && !isConsumerCPU;

  const isServer = !isDesktopTier && !isHEDTWorkstation;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const result = await submitQuoteRequest(formData);

    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  // SUCCESS STATE COMPONENT
  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white p-12 md:p-16 rounded-3xl border border-slate-200 shadow-xl text-center max-w-3xl mx-auto"
      >
        <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-8 border border-emerald-100">
          <CheckCircle2 className="w-12 h-12 text-emerald-500" />
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Configuration Received
        </h2>

        <p className="text-slate-500 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
          Thank you for requesting a quote for the{" "}
          <strong className="text-slate-800">{product.modelNumber}</strong>. One
          of our enterprise hardware specialists is reviewing your requirements
          and will reach out to you shortly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-md"
          >
            <Home className="w-4 h-4" /> Return to Home
          </Link>
          <button
            onClick={() => setStatus("idle")}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto bg-slate-50 text-slate-700 font-bold rounded-xl border border-slate-200 hover:bg-slate-100 hover:text-slate-900 transition-colors shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Configure Another
          </button>
        </div>
      </motion.div>
    );
  }

  // FORM COMPONENT
  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl relative"
    >
      <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b pb-4">
        Customize Your System
      </h2>

      <input type="hidden" name="modelNumber" value={product.modelNumber} />
      <input type="hidden" name="platform" value={product.platform} />
      <input type="hidden" name="category" value={product.category} />

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-6">
          <h3 className="font-bold text-blue-600 uppercase tracking-widest text-xs mb-4">
            Hardware Specifications
          </h3>

          {/* CPU Cores Selection */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
              <Cpu className="w-4 h-4 text-blue-500" /> CPU Cores Needed
            </label>
            <select
              name="cpuCores"
              required
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 text-slate-900"
            >
              <option value="">Select Core Count...</option>
              {isDesktopTier && (
                <>
                  {isRyzen5 && <option value="6 Cores">6 Cores (AMD Ryzen 5)</option>}
                  {isRyzen7 && <option value="8 Cores">8 Cores (AMD Ryzen 7)</option>}
                  {isRyzen9 && (
                    <>
                      <option value="12 Cores">12 Cores (AMD Ryzen 9)</option>
                      <option value="16 Cores">16 Cores (AMD Ryzen 9 Max)</option>
                    </>
                  )}
                  {isCorei5 && (
                    <>
                      <option value="10 Cores">10 Cores (Intel Core i5)</option>
                      <option value="14 Cores">14 Cores (Intel Core i5 Max)</option>
                    </>
                  )}
                  {isCorei7 && (
                    <>
                      <option value="16 Cores">16 Cores (Intel Core i7)</option>
                      <option value="20 Cores">20 Cores (Intel Core i7 Max)</option>
                    </>
                  )}
                  {isCorei9 && <option value="24 Cores">24 Cores (Intel Core i9 Max)</option>}
                </>
              )}
              {isHEDTWorkstation && (
                <>
                  <option value="16 Cores">16 Cores</option>
                  <option value="24 Cores">24 Cores</option>
                  <option value="32 Cores">32 Cores</option>
                  <option value="64 Cores">64 Cores (Threadripper / Xeon W)</option>
                  <option value="96 Cores">96 Cores (Threadripper Pro Max)</option>
                </>
              )}
              {isServer && (
                <>
                  <option value="16 Cores">16 Cores</option>
                  <option value="32 Cores">32 Cores</option>
                  <option value="64 Cores">64 Cores</option>
                  <option value="128 Cores">128 Cores (Dual Socket)</option>
                  <option value="256 Cores">256 Cores (Dual Socket Max)</option>
                </>
              )}
            </select>
          </div>

          {/* Memory Selection */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
              <MemoryStick className="w-4 h-4 text-blue-500" /> RAM (Memory)
            </label>
            <select
              name="ram"
              required
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 text-slate-900"
            >
              <option value="">Select RAM Size...</option>
              {isDesktopTier && (
                <>
                  <option value="16">16 GB Non-ECC</option>
                  <option value="32">32 GB Non-ECC</option>
                  <option value="64">64 GB Non-ECC (Max Desktop Capacity)</option>
                </>
              )}
              {isHEDTWorkstation && (
                <>
                  <option value="64">64 GB ECC</option>
                  <option value="128">128 GB ECC</option>
                  <option value="256">256 GB ECC</option>
                  <option value="512">512 GB ECC (Max Workstation Capacity)</option>
                </>
              )}
              {isServer && (
                <>
                  <option value="64">64 GB ECC</option>
                  <option value="128">128 GB ECC</option>
                  <option value="256">256 GB ECC</option>
                  <option value="512">512 GB ECC</option>
                  <option value="1024">1 TB+ ECC</option>
                </>
              )}
            </select>
          </div>

          {/* GPU Selection */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
              <MonitorPlay className="w-4 h-4 text-blue-500" /> GPU Accelerator Options
            </label>
            <select
              name="gpu"
              required
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 text-slate-900"
            >
              <option value="">Select Video Card Configuration...</option>
              {isDesktopTier && (
                <>
                  <option value="No Dedicated Graphics">Integrated / No Dedicated GPU</option>
                  <option value="NVIDIA GeForce RTX 4060 8GB">NVIDIA GeForce RTX 4060 8GB</option>
                  <option value="NVIDIA GeForce RTX 4070 Super 12GB">NVIDIA GeForce RTX 4070 Super 12GB</option>
                  <option value="NVIDIA GeForce RTX 4080 Super 16GB">NVIDIA GeForce RTX 4080 Super 16GB</option>
                  <option value="NVIDIA GeForce RTX 4090 24GB">NVIDIA GeForce RTX 4090 24GB (Ultimate Desktop Performance)</option>
                </>
              )}
              {isHEDTWorkstation && (
                <>
                  <option value="NVIDIA RTX 4000 Ada Generation 20GB">NVIDIA RTX 4000 Ada Generation 20GB</option>
                  <option value="NVIDIA RTX 4500 Ada Generation 24GB">NVIDIA RTX 4500 Ada Generation 24GB</option>
                  <option value="NVIDIA RTX 5000 Ada Generation 32GB">NVIDIA RTX 5000 Ada Generation 32GB</option>
                  <option value="NVIDIA RTX 6000 Ada Generation 48GB">NVIDIA RTX 6000 Ada Generation 48GB</option>
                  <option value="Dual NVIDIA RTX 6000 Ada 96GB VRAM">2x NVIDIA RTX 6000 Ada Generation 96GB Combined VRAM</option>
                </>
              )}
              {isServer && (
                <>
                  <option value="Integrated Server Graphics (No Compute Accel)">Standard IPMI VGA Graphics Only</option>
                  <option value="NVIDIA L4 Tensor Core 24GB (PCIe)">NVIDIA L4 Tensor Core 24GB (Energy Efficient Inference)</option>
                  <option value="NVIDIA L40S Accelerator 48GB (PCIe)">NVIDIA L40S Accelerator 48GB (Omniverse & Generative AI)</option>
                  <option value="NVIDIA A100 Tensor Core 80GB HBM2e">NVIDIA A100 Tensor Core 80GB HBM2e (HPC / Deep Learning)</option>
                  <option value="NVIDIA H100 Tensor Core 80GB HBM3">NVIDIA H100 Tensor Core 80GB HBM3 (Enterprise LLM Training)</option>
                  <option value="NVIDIA H200 NVL 141GB HBM3e">NVIDIA H200 NVL 141GB HBM3e (Maximum Data Center Bandwidth)</option>
                </>
              )}
            </select>
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
              <HardDrive className="w-4 h-4 text-blue-500" /> SSD Storage
            </label>
            <input type="text" name="ssd" required placeholder="e.g. 2TB NVMe Gen4" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 text-slate-900" />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
              <Database className="w-4 h-4 text-blue-500" /> HDD Storage
            </label>
            <input type="text" name="hdd" placeholder="e.g. 4TB SATA (Optional)" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 text-slate-900" />
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="font-bold text-blue-600 uppercase tracking-widest text-xs mb-4">Contact Information</h3>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Full Name *</label>
            <input type="text" name="fullName" required placeholder="John Doe" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 text-slate-900" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Email Address *</label>
            <input type="email" name="email" required placeholder="john@company.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 text-slate-900" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Phone Number *</label>
            <input type="tel" name="phone" required placeholder="+91 XXXXX XXXXX" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 text-slate-900" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Additional Requirements</label>
            <textarea name="additionalNotes" rows={3} placeholder="Any specific networking cards, OS requirements, or deployment timelines?" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 resize-none text-slate-900"></textarea>
          </div>
        </div>
      </div>

      {status === "error" && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl flex items-center gap-3 font-medium">
          <AlertCircle className="w-5 h-5 shrink-0" />
          An error occurred while submitting your request. Please try again.
        </div>
      )}

      <button type="submit" disabled={status === "submitting"} className="w-full bg-blue-700 hover:bg-blue-600 text-white font-bold text-lg py-4 rounded-xl transition flex items-center justify-center gap-2 disabled:opacity-50">
        {status === "submitting" ? "Processing Configuration..." : <><Send className="w-5 h-5" /> Request Custom Quote</>}
      </button>
    </motion.form>
  );
}

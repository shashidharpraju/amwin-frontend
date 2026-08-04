"use client";

import React, { useState } from "react";
import { submitEnquiryToBackend } from "@/lib/api";
import { submitEnquiry } from "@/app/actions/enquiry";
import { Send, CheckCircle2, AlertCircle, UserCheck, Shield, Sparkles, Building, Phone, Mail, User } from "lucide-react";

export default function LeadReceivableForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [assignmentInfo, setAssignmentInfo] = useState<{ assignedTo: string; assignedEmail: string } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const fullName = formData.get("fullName")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    let result;
    try {
      result = await submitEnquiryToBackend({ fullName, email, phone, message });
    } catch (err) {
      // Fallback to server action if direct API call fails
      result = await submitEnquiry(formData);
    }

    if (result.success) {
      setStatus("success");
      setAssignmentInfo({
        assignedTo: result.assignedTo || "Sales Specialist",
        assignedEmail: result.assignedEmail || "",
      });
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus("error");
      setErrorMessage(result.error || "An error occurred during submission.");
    }
  };

  return (
    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-200 shadow-xl relative overflow-hidden">
      <div className="flex items-center gap-3 mb-2">
        <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-wider rounded-full border border-blue-100 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" /> Direct Sales Routing
        </span>
      </div>

      <h2 className="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">
        Send us a Requirement
      </h2>
      <p className="text-slate-500 mb-8 font-medium text-sm">
        Fill out the form below. Your request is automatically routed to our next available sales engineer via Round-Robin.
      </p>

      {/* SUCCESS BANNER WITH ROUND ROBIN ASSIGNMENT DETAILS */}
      {status === "success" && assignmentInfo && (
        <div className="mb-8 p-6 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-3">
          <div className="flex items-center gap-3 text-emerald-800 font-bold text-base">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
            <span>Enquiry Received Successfully!</span>
          </div>
          <p className="text-xs text-emerald-700 leading-relaxed pl-9">
            Your inquiry has been automatically dispatched to our sales team via automated Round-Robin distribution.
          </p>
          <div className="ml-9 p-3 bg-white/90 rounded-xl border border-emerald-200/80 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-emerald-600" />
              <span className="font-semibold text-slate-700">Assigned Sales Executive:</span>
            </div>
            <span className="font-extrabold text-emerald-700 bg-emerald-100/60 px-3 py-1 rounded-lg">
              {assignmentInfo.assignedTo} ({assignmentInfo.assignedEmail})
            </span>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="mb-6 p-4 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl flex items-center gap-3 text-sm font-medium">
          <AlertCircle className="w-5 h-5 text-rose-500 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
              Full Name *
            </label>
            <div className="relative">
              <User className="w-5 h-5 absolute left-4 top-3.5 text-slate-400" />
              <input
                type="text"
                name="fullName"
                required
                placeholder="John Doe"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3.5 text-slate-900 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-sm"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
              Work Email Address *
            </label>
            <div className="relative">
              <Mail className="w-5 h-5 absolute left-4 top-3.5 text-slate-400" />
              <input
                type="email"
                name="email"
                required
                placeholder="john@company.com"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3.5 text-slate-900 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-sm"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
            Phone Number *
          </label>
          <div className="relative">
            <Phone className="w-5 h-5 absolute left-4 top-3.5 text-slate-400" />
            <input
              type="tel"
              name="phone"
              required
              placeholder="+91 98765 43210"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3.5 text-slate-900 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-sm"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
            Project Description / Infrastructure Requirement *
          </label>
          <textarea
            name="message"
            required
            rows={4}
            placeholder="Please detail your hardware specifications, server configurations, or project timelines..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-sm resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-base py-4 rounded-xl transition flex items-center justify-center gap-2.5 disabled:opacity-50 shadow-lg shadow-blue-500/20 active:scale-[0.99]"
        >
          {status === "submitting" ? (
            <span>Routing Lead via Round-Robin...</span>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Submit & Dispatch Lead</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}

import React from "react";
import { Shield } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white px-6 lg:px-16 border-t border-slate-200"
    >
      <div className="container mx-auto grid gap-12 lg:grid-cols-2 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Reliable. Scalable. Affordable.
          </h2>
          <p className="text-slate-600 leading-relaxed font-light">
            Amwin Systems Pvt. Ltd. delivers robust IT hardware architecture
            from our engineering headquarters in Bengaluru. We specialize in
            eliminating data throughput bottlenecks, configuring resilient
            storage patterns, and providing bare-metal computing hardware
            optimized for precise enterprise calculations.
          </p>
          <div className="border-l-4 border-blue-600 pl-4 py-2 bg-slate-50 rounded-r-xl">
            <p className="text-sm italic font-medium text-slate-700">
              "All vendor deployments adhere strictly to rigorous
              high-availability validation loops before shipping out to live
              production server environments."
            </p>
          </div>
        </div>
        <div className="bg-slate-950 rounded-2xl p-8 text-white relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-blue-600/10 blur-3xl" />
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <Shield className="h-5 w-5 text-blue-400" /> Infrastructure
            Integration Mandates
          </h3>
          <ul className="space-y-4 text-sm text-slate-400 font-light">
            <li className="flex items-start gap-2">
              ✓{" "}
              <span className="text-slate-200 font-normal">
                Component Isolation Tracking:
              </span>{" "}
              Validating server thermals under 100% compute load spikes.
            </li>
            <li className="flex items-start gap-2">
              ✓{" "}
              <span className="text-slate-200 font-normal">
                Redundant Routing Schemes:
              </span>{" "}
              Configuring physical storage arrays to bypass drive crashes.
            </li>
            <li className="flex items-start gap-2">
              ✓{" "}
              <span className="text-slate-200 font-normal">
                Hypervisor Uniformity:
              </span>{" "}
              Seamless out-of-the-box configurations for enterprise private
              clouds.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

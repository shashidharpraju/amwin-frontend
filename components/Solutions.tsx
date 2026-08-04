import React from "react";
import {
  Server,
  Cpu,
  Database,
  ShieldAlert,
  Layers,
  Laptop,
  ChevronRight,
} from "lucide-react";

const solutions = [
  {
    icon: <Server className="h-6 w-6 text-blue-500" />,
    title: "Custom Built Servers",
    description:
      "Pedestal and rack-mount form factors engineered for high availability, maximum density, and intensive enterprise compute cycles.",
  },
  {
    icon: <Cpu className="h-6 w-6 text-indigo-500" />,
    title: "HPC Clusters",
    description:
      "Resilient, open-source High-Performance Computing architectures custom tailored for parallel processing and advanced research workloads.",
  },
  {
    icon: <Database className="h-6 w-6 text-cyan-500" />,
    title: "Storage & Backup Systems",
    description:
      "Highly redundant SAN, NAS, and DAS custom storage arrays keeping mission-critical enterprise telemetry securely backed up.",
  },
  {
    icon: <ShieldAlert className="h-6 w-6 text-emerald-500" />,
    title: "Network & Endpoint Security",
    description:
      "Unified Threat Management (UTM) and cutting-edge endpoint defense protocols deployed to proactively safeguard critical networks.",
  },
  {
    icon: <Layers className="h-6 w-6 text-purple-500" />,
    title: "Datacenter Virtualization",
    description:
      "Industry-standard VMware and Citrix bare-metal hypervisor architectures engineered to optimize computing resource distribution.",
  },
  {
    icon: <Laptop className="h-6 w-6 text-orange-500" />,
    title: "End-Point Computing",
    description:
      "High-performance specialized engineering workstations built to process intensive graphical rendering and CAD calculations.",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-28 px-6 lg:px-16 bg-slate-50">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-20 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">
            Engineered Architecture Catalogs
          </h2>
          <p className="text-lg text-slate-600 font-light">
            Custom hardware configurations built on open industry standards,
            balancing scale, efficiency, and computational density.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
            >
              <div className="mb-5 inline-flex rounded-xl bg-slate-50 p-3.5 transition-colors group-hover:bg-blue-50">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-950 mb-3">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 font-light">
                {item.description}
              </p>
              <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                Review Blueprints <ChevronRight className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Server, Cpu, Monitor, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Product = {
  id: string;
  modelNumber: string;
  name: string;
  category: string;
  platform: string;
  briefConfig: string;
  basePrice?: number;
};

export default function CatalogClient({ products }: { products: Product[] }) {
  const [searchQuery, setSearchQuery] = useState("");

  // Real-time Search Filtering Logic
  const filteredProducts = useMemo(() => {
    if (!searchQuery) return products;
    const lowerQuery = searchQuery.toLowerCase();
    return products.filter(
      (p) =>
        p.modelNumber.toLowerCase().includes(lowerQuery) ||
        p.name.toLowerCase().includes(lowerQuery) ||
        p.category.toLowerCase().includes(lowerQuery) ||
        p.platform.toLowerCase().includes(lowerQuery)
    );
  }, [searchQuery, products]);

  // Dynamic Icon Helper based on category
  const getCategoryIcon = (category: string) => {
    if (category.includes("Server") || category.includes("Storage"))
      return <Server className="w-4 h-4" />;
    if (category.includes("Desktop")) return <Monitor className="w-4 h-4" />;
    return <Cpu className="w-4 h-4" />; // Workstations & GPUs
  };

  return (
    // Slightly darker background (bg-slate-100) to make the white cards and glow stand out
    <main className="min-h-screen bg-slate-100 font-sans selection:bg-indigo-200 pb-24">
      {/* =========================================
          MINIMAL HERO & INTEGRATED SEARCH 
          ========================================= */}
      <section className="relative pt-16 pb-24 px-6 overflow-hidden flex flex-col items-center">
        {/* Adjusted Background Glows to blend with slate-100 */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-100/40 to-slate-100 pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/10 rounded-[100%] blur-[80px] pointer-events-none"></div>

        <div className="w-full max-w-4xl relative z-10 text-center mt-8">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-8 text-slate-900 tracking-tight">
            Enterprise{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
              Hardware Catalog
            </span>
          </h1>

          {/* Integrated Search Bar */}
          <div className="relative w-full max-w-2xl mx-auto group">
            <div className="absolute inset-0 bg-indigo-500/15 rounded-2xl blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"></div>

            <div className="relative flex items-center bg-white/90 backdrop-blur-xl border border-slate-200 rounded-2xl p-2 shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden transition-all group-focus-within:border-indigo-300 group-focus-within:bg-white group-focus-within:shadow-[0_8px_30px_rgb(79,70,229,0.15)]">
              <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />

              <input
                type="text"
                placeholder="Search models (e.g. T9410, Ryzen, Server)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-none outline-none text-slate-900 placeholder-slate-400 text-base py-2.5 px-4"
              />

              {/* Integrated Results Badge */}
              <div className="flex items-center gap-3 shrink-0 mr-2 border-l border-slate-200 pl-4 py-1">
                <span className="hidden sm:inline-block text-[10px] font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 border border-indigo-100 px-3 py-1.5 rounded-full">
                  {filteredProducts.length} Systems
                </span>

                {/* Clear Button */}
                <button
                  onClick={() => setSearchQuery("")}
                  className={`p-1.5 rounded-full transition-all duration-200 ${
                    searchQuery
                      ? "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                      : "text-transparent pointer-events-none"
                  }`}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          PRODUCT GRID SECTION 
          ========================================= */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-3xl p-16 text-center border border-slate-200 shadow-sm">
            <Server className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              No systems found
            </h3>
            <p className="text-slate-500 text-sm">
              We couldn't find any hardware matching "{searchQuery}".
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-6 text-indigo-600 font-bold hover:text-indigo-700 text-sm"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredProducts.map((p) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  key={p.id}
                  // White cards create sharp contrast against the slate-100 background
                  // Increased shadow opacity on hover to boost the glowing effect
                  className="group relative bg-white border border-slate-200 rounded-2xl p-6 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.25)] hover:border-indigo-300 overflow-hidden flex flex-col justify-between h-full"
                >
                  {/* Intensified the Light Glow Effect on Hover (from-indigo-200 to-cyan-100) */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-indigo-200/80 to-cyan-100/80 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700 ease-out z-0 opacity-0 group-hover:opacity-100"></div>

                  <div className="relative z-10 flex-grow">
                    <div className="flex justify-between items-center mb-5">
                      <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest text-indigo-700 bg-indigo-50 border border-indigo-100 px-2.5 py-1 rounded-full">
                        {getCategoryIcon(p.category)}
                        {p.category}
                      </div>
                      <span
                        className={`text-[9px] font-bold uppercase px-2.5 py-1 rounded-full border ${
                          p.platform === "AMD"
                            ? "bg-red-50 text-red-600 border-red-100"
                            : "bg-blue-50 text-blue-600 border-blue-100"
                        }`}
                      >
                        {p.platform}
                      </span>
                    </div>

                    <h2 className="text-xl font-extrabold text-slate-900 mb-2 tracking-tight group-hover:text-indigo-600 transition-colors">
                      {p.modelNumber}
                    </h2>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2">
                      {p.name}
                    </p>
                  </div>

                  <div className="relative z-10 mt-auto pt-5 border-t border-slate-100 group-hover:border-indigo-100 transition-colors">
                    <Link
                      href={`/products/${p.modelNumber}`}
                      className="w-full flex items-center justify-center gap-2 text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 py-2.5 rounded-xl group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-blue-600 group-hover:text-white group-hover:border-transparent transition-all shadow-sm"
                    >
                      Configure System <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </section>
    </main>
  );
}

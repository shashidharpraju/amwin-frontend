"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // During SSR and the initial hydration phase, we render the 'default' state
  // to ensure it matches the server-rendered HTML.
  const headerClasses =
    isMounted && isScrolled
      ? "bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm py-4"
      : "bg-white py-4";

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${headerClasses}`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center group">
          <div className="relative h-10 md:h-12 flex shrink-0 transition-transform group-hover:scale-105">
            <img
              src="https://www.image2url.com/r2/default/images/1783687034216-faca8242-6e17-47e2-a985-ffea91c1cd3a.jpg"
              alt="Amwin Logo"
              className="h-full w-auto object-contain"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-semibold text-slate-600 text-[15px]">
          <Link
            href="/"
            className="text-slate-900 hover:text-blue-600 transition"
          >
            Home
          </Link>
          <Link href="/products" className="hover:text-blue-600 transition">
            Products
          </Link>
          <Link href="/#services" className="hover:text-blue-600 transition">
            Services
          </Link>
          <Link href="/#about" className="hover:text-blue-600 transition">
            About
          </Link>
        </nav>

        <div className="hidden md:flex">
          <Link
            href="/#contact"
            className="bg-[#3b82f6] hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-semibold transition-all shadow-sm hover:shadow-blue-500/25 hover:-translate-y-0.5"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>
    </header>
  );
}

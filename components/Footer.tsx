import React from "react";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-slate-950 text-white pt-24 pb-12 border-t border-slate-800"
    >
      <div className="container mx-auto px-6 lg:px-16 grid gap-12 md:grid-cols-2 lg:grid-cols-3 mb-16">
        <div className="space-y-6">
          <h3 className="text-lg font-bold tracking-wider text-slate-200 uppercase">
            Sales & Procurement
          </h3>
          <p className="text-slate-400 text-sm font-light">
            Connect directly with infrastructure estimation teams to generate
            hardware configurations, multi-node compute setups, or custom
            component licensing agreements.
          </p>
          <div className="space-y-3 text-sm">
            <a
              href="tel:+919845078286"
              className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors"
            >
              <Phone className="h-4 w-4" /> +91 98450 78286
            </a>
            <a
              href="mailto:sales@amwinsystems.in"
              className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors"
            >
              <Mail className="h-4 w-4" /> sales@amwinsystems.in
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-bold tracking-wider text-slate-200 uppercase">
            Technical Support Desk
          </h3>
          <p className="text-slate-400 text-sm font-light">
            Active post-sale hardware field engineers standing by to handle
            server hardware configuration queries, hypervisor routing issues, or
            network layer adjustments.
          </p>
          <div className="space-y-3 text-sm">
            <a
              href="tel:+919538099191"
              className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors"
            >
              <Phone className="h-4 w-4" /> +91 95380 99191
            </a>
            <a
              href="mailto:support@amwinsystems.in"
              className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors"
            >
              <Mail className="h-4 w-4" /> support@amwinsystems.in
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-bold tracking-wider text-slate-200 uppercase">
            Headquarters
          </h3>
          <div className="flex gap-3 text-sm text-slate-400 leading-relaxed font-light">
            <MapPin className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
            <p>
              Amwin Systems Pvt. Ltd.
              <br />
              New No.141, Old No.15/2, 2nd Floor
              <br />
              4th Main, Mandovi Motors Road, <br />
              Rajajinagar Industrial Town, Bengaluru – 560 079
            </p>
          </div>
          <div className="pt-2">
            <a
              href="https://goo.gl/maps/G1nA6JSjR6VZ9vdb7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold rounded-lg bg-slate-900 border border-slate-800 px-4 py-2 text-blue-400 hover:bg-slate-800 transition-colors"
            >
              Open Navigation Maps <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Legal Sub-Footer Row */}
      <div className="container mx-auto px-6 lg:px-16 pt-12 border-t border-slate-900 flex flex-wrap gap-6 justify-between text-xs text-slate-500 font-light">
        <p>© 2026 Amwin Systems Pvt. Ltd. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-slate-300 transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-slate-300 transition-colors">
            Privacy Policy
          </a>
        </div>
        <p className="max-w-md text-justify md:text-right text-[10px] text-slate-600 leading-normal">
          Disclaimer: Core brand trademarks including Intel, AMD, NVIDIA,
          VMware, and Citrix featured across this platform remain the properties
          of their respective corporate owners, leveraged solely here for
          equipment specification visibility.
        </p>
      </div>
    </footer>
  );
}

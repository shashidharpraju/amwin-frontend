import React from "react";

const partners = [
  "Intel",
  "AMD",
  "NVIDIA",
  "VMware",
  "Citrix",
  "Asus",
  "Gigabyte",
  "Supermicro",
];

export default function PartnerCarousel() {
  return (
    <section
      id="partners"
      className="border-y border-slate-200 bg-white py-10 overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-16 mb-6">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
          Integrated Ecosystem Tier Providers
        </p>
      </div>
      <div className="flex space-x-16 overflow-hidden group">
        <div className="flex space-x-16 animate-marquee whitespace-nowrap py-2 text-xl font-bold tracking-wider text-slate-300">
          {partners.concat(partners).map((partner, index) => (
            <span
              key={index}
              className="hover:text-slate-600 transition-colors cursor-default"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

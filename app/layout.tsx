import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amwin Systems | Premium IT Solutions",
  description: "Enterprise servers, HPC clusters, and IT architecture.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-[#f8fafc]`}>
        {/* Navbar must be inside the body tag */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}

"use client";

import { PERSONAL_INFO } from "@/constants";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export const Footer = () => {
  const year = new Date().getFullYear(); // ✅ dynamic year

  return (
    <footer className="relative mt-24 border-t border-white/10">

      {/* 🌌 Glow Background */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[500px] h-[300px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">

        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">

          {/* 🔷 Brand */}
          <div className="flex items-center gap-4 group">
            <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center font-bold text-lg shadow-lg shadow-blue-500/20 group-hover:scale-110 transition">
              S
            </div>

            <div>
              <p className="font-semibold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </p>
              <p className="text-xs text-white/40">
                © {year} All rights reserved
              </p>
            </div>
          </div>

          {/* 🔗 Links */}
          <div className="flex items-center gap-6 text-sm">

            <FooterLink href={PERSONAL_INFO.github} icon={<FaGithub />}>
              GitHub
            </FooterLink>

            <FooterLink href={PERSONAL_INFO.linkedin} icon={<FaLinkedin />}>
              LinkedIn
            </FooterLink>

            <a
              href="#"
              className="text-white/50 hover:text-white transition relative group"
            >
              Top ↑
              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all group-hover:w-full" />
            </a>

          </div>

        </div>

        {/* 🔻 Bottom Divider */}
        <div className="mt-12 pt-6 border-t border-white/5 text-center text-xs text-white/30">
          Built with ❤️ using React, Next.js & Tailwind CSS
        </div>

      </div>
    </footer>
  );
};

/* 🔹 Reusable Link */
function FooterLink({ href, icon, children }: any) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-white/50 hover:text-white transition group"
    >
      <span className="text-lg group-hover:scale-110 transition">
        {icon}
      </span>
      {children}
      <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all group-hover:w-full" />
    </a>
  );
}
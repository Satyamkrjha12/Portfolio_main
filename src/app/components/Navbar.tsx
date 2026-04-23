"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Navbar = () => {
  const name = "Satyam Kumar Jha";
  const email = "satyam@example.com";

  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("About");

  // 👇 Detect scroll for glass effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex justify-center px-4 w-full max-w-5xl"
    >
      <div  className={`w-full flex items-center justify-between px-4 py-3 rounded-full transition-all duration-500 ${  scrolled ? "bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]" : "bg-transparent border border-transparent"  }`} >
        {/* 🔷 Logo */}
        <div className="flex items-center gap-3 group cursor-pointer pl-2">
          <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-lg text-white  bg-gradient-to-br from-blue-500 to-purple-500  shadow-[0_0_20px_rgba(59,130,246,0.6)] group-hover:scale-110 transition duration-300">
            <img src="/photo.jpeg" className="w-10 h-10 rounded-3xl" />
          </div>

          <span className="font-semibold text-white tracking-tight hidden sm:block group-hover:text-blue-400 transition">
            {name}
          </span>
        </div>

        {/* 🔗 Links */}
        <ul className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-full px-2 py-1">
          {["About", "Experience", "Projects", "Contact"].map((item) => (
            <li key={item} className="relative">
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setActive(item)}
                className={`relative z-10 px-4 py-2 text-sm font-medium transition-colors duration-300 ${ active === item ? "text-white" : "text-gray-400 hover:text-white" }`}
              >
                {item}
              </a>
              {active === item && (
                <motion.div
                  layoutId="active-nav-pill"
                  className="absolute inset-0 bg-white/10 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>

        {/* 💬 CTA */}
        <a
          href={`mailto:${email}`}
          className="relative inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 overflow-hidden group hover:scale-105 transition-all duration-300"
        >
          <span className="relative z-10">Say Hello</span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="absolute inset-0 rounded-full blur-xl opacity-40 bg-blue-500 group-hover:opacity-70 transition" />
        </a>
      </div>
    </motion.nav>
  );
};
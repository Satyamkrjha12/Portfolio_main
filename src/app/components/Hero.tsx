"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Cpu,
  Globe
} from "lucide-react";

import { PERSONAL_INFO } from "@/constants";
import TechMarquee from "./TechMarquee";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero(){
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#050505] text-white pt-28 pb-16">

      {/* 🌌 Animated Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[40%] -right-[10%] w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full"
        />

        {/* grid */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:60px_60px]" style={{ maskImage: "radial-gradient(ellipse at center, black, transparent 80%)", WebkitMaskImage: "radial-gradient(ellipse at center, black, transparent 80%)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm mb-8 backdrop-blur-md shadow-lg"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            Available for new opportunities
          </motion.div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight">
            Hi, I'm <br />
            <span className="text-gradient">
              {PERSONAL_INFO.name}
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-xl leading-relaxed">
            I'm a{" "}
            <span className="text-white font-semibold">
              {PERSONAL_INFO.role}
            </span>{" "}
            specializing in building scalable, high-performance, and beautifully designed web applications.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-5 mb-12">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 bg-white text-black px-8 py-3.5 rounded-full font-bold overflow-hidden hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            <div className="flex gap-4">
              <SocialIcon href={PERSONAL_INFO.github} icon={<FaGithub size={22} />} />
              <SocialIcon href={PERSONAL_INFO.linkedin} icon={<FaLinkedin size={22} />} />
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 pt-8 border-t border-white/10">
            <Feature icon={<Code size={20} className="text-blue-400" />} label="Clean Code" />
            <Feature icon={<Cpu size={20} className="text-purple-400" />} label="Modern UI" />
            <Feature icon={<Globe size={20} className="text-pink-400" />} label="Scalable" />
          </div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center group perspective-1000"
        >

          {/* glow */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-[340px] h-[340px] bg-gradient-to-tr from-blue-500/40 to-purple-500/40 blur-3xl rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-500"
          />

          {/* image container */}
          <motion.div
            whileHover={{ y: -10, rotateX: 5, rotateY: -5 }}
            className="relative w-[300px] sm:w-[360px] h-[400px] sm:h-[480px] rounded-[2rem] overflow-hidden border-2 border-white/10 glass shadow-2xl transition-transform duration-500 ease-out"
          >
            <img
              src="/photo.jpeg"
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

        </motion.div>

      </div>

      {/* TECH MARQUEE */}
      <div className="mt-20">
        <TechMarquee />
      </div>

    </section>
  );
}

/* Feature */
function Feature({ icon, label }: any) {
  return (
    <div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300">
      <div className="p-2 bg-white/5 rounded-lg border border-white/10">
        {icon}
      </div>
      <span className="font-medium text-sm tracking-wide">{label}</span>
    </div>
  );
}

/* Social Icon */
function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3.5 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 text-white/80 hover:text-white"
    >
      {icon}
    </a>
  );
}
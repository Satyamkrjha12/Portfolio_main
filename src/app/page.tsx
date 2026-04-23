"use client";

import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { motion, useScroll, useSpring } from "framer-motion";
import { PERSONAL_INFO, SKILLS } from "@/constants"; // ✅ FIX
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { SkillsAndEducation } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.2
  });

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">

      {/* 🔥 Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px]  bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500  origin-left z-[60] shadow-[0_0_12px_rgba(59,130,246,0.6)]"
        style={{ scaleX }}
      />

      <Navbar />

      <main >

        {/* HERO */}
        <Hero />

        {/* 🔥 BANNER */}
        <section className="hidden md:flex justify-center py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 blur-3xl opacity-40"></div>

          <div className="relative w-full max-w-6xl px-6">
            <div className="group rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl p-4">
              <img
                src="/Banner.png"
                alt="Tech Banner"
                className="w-full h-auto rounded-2xl object-cover transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]"
              />
            </div>
          </div>
        </section>

        {/* 🔥 ABOUT */}
        <section id="about" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/10">

          <div className="grid lg:grid-cols-[1fr,2fr] gap-16">

            {/* LEFT */}
            <div className="space-y-4">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest">
                Identity
              </span>

              <h3 className="text-4xl font-extrabold tracking-tight">
                The Vision.
              </h3>
            </div>

            {/* RIGHT */}
            <div className="space-y-10">

              <p className="text-lg md:text-xl leading-relaxed text-white/70 max-w-2xl">
                {PERSONAL_INFO.summary}
              </p>

              {/* STATS */}
              <div className="flex flex-wrap gap-12 pt-6">

                <Stat value="1+" label="Years of Impact" color="text-blue-400" />

                <Stat value="15+" label="Major Projects" color="text-purple-400" />

                <Stat value="500+" label="GitHub Commits" color="text-cyan-400" />

              </div>
            </div>

          </div>
        </section>

        <Experience />
        <Projects />
        <SkillsAndEducation />
        <Contact />
        <Footer />

      </main>
    </div>
  );
}

/* 🔹 Stat Component */
function Stat({ value, label, color }: any) {
  return (
    <div className="group">
      <p className={`text-5xl font-black tracking-tight ${color} group-hover:scale-110 transition`}>
        {value}
      </p>
      <p className="text-[10px] uppercase tracking-widest text-white/40 mt-2">
        {label}
      </p>
    </div>
  );
}
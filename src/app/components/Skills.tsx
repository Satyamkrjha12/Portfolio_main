"use client";

import { motion } from "framer-motion";
import { SKILLS, EDUCATION } from "@/constants";
import {
  GraduationCap,
  Code2,
  Database,
  Terminal,
  Wrench,
  Layout
} from "lucide-react";

export const SkillsAndEducation = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-[1.5fr,1fr] gap-16">

      {/* 🔥 SKILLS */}
      <div className="space-y-12">
        <Header badge="Capabilities" title="Technical Arsenal" />

        <div className="grid sm:grid-cols-2 gap-6 mt-8">
          {SKILLS.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 group shadow-lg hover:shadow-[0_15px_30px_-10px_rgba(59,130,246,0.15)] hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3.5 rounded-2xl bg-blue-500/10 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    <SkillIcon category={skillGroup.category} />
                  </div>

                  <h4 className="font-bold text-lg text-white group-hover:text-blue-400 transition">
                    {skillGroup.category}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 bg-white/5 rounded-lg text-xs font-semibold text-white/70 border border-white/5 group-hover:border-white/10 group-hover:text-white transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🎓 EDUCATION */}
      <div className="space-y-12">
        <Header badge="Education" title="Academic Base" />

        <div className="space-y-6 mt-8">
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 group relative overflow-hidden hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4 text-purple-400">
                <GraduationCap size={22} />
                <span className="text-xs font-bold uppercase tracking-widest">
                  {edu.period}
                </span>
              </div>

              <h4 className="text-xl font-bold text-white mb-2">
                {edu.institution}
              </h4>

              <p className="text-sm text-white/60 mb-5">
                {edu.degree}
              </p>

              <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 text-xs text-white/80 font-semibold rounded-lg">
                Score: <span className="text-purple-400">{edu.score}</span>
              </span>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

/* 🔥 Header */
function Header({ badge, title }: any) {
  const words = title.split(" ");
  const lastWord = words.pop();
  const firstWords = words.join(" ");

  return (
    <div className="text-left">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4"
      >
        {badge}
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-extrabold tracking-tight"
      >
        {firstWords}{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
          {lastWord}
        </span>
      </motion.h2>
    </div>
  );
}

/* 🔹 Skill Icon */
function SkillIcon({ category }: { category: string }) {
  switch (category) {
    case "Frontend":
      return <Layout size={20} />;
    case "Backend":
      return <Terminal size={20} />;
    case "Database":
      return <Database size={20} />;
    case "Languages":
      return <Code2 size={20} />;
    case "Tools":
      return <Wrench size={20} />;
    default:
      return <Code2 size={20} />;
  }
}
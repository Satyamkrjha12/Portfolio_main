"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/constants";
import { Calendar } from "lucide-react";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-6 max-w-7xl mx-auto"
    >
      {/* 🔥 Header */}
      <div className="mb-20 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4"
        >
          Experience
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold mt-2 tracking-tight"
        >
          Professional <span className="text-gradient">Journey</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/60 mt-6 max-w-2xl mx-auto text-lg"
        >
          Exploring my path as a builder and collaborator in the tech world.
        </motion.p>
      </div>

      {/* 🔥 Timeline */}
      <div className="space-y-10 relative before:absolute before:inset-0 before:ml-[28px] lg:before:ml-[25%] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
        {EXPERIENCE.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative flex flex-col lg:flex-row lg:items-center justify-between lg:odd:flex-row-reverse lg:odd:text-right"
          >
            {/* Timeline Dot */}
            <div className="absolute left-[28px] lg:left-1/2 lg:-translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-[3px] border-[#0a0a0a] shadow-[0_0_10px_rgba(59,130,246,0.6)] z-10 group-hover:scale-150 transition-transform duration-300" />

            {/* Left/Right Container */}
            <div className="w-full lg:w-[45%] pl-16 lg:pl-0">
              <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 group-hover:-translate-y-1 shadow-xl hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.5)]">
                
                {/* Meta */}
                <div className={`flex items-center gap-2 mb-4 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} text-sm text-blue-400 font-bold uppercase tracking-widest`}>
                  <Calendar size={14} />
                  <span>{exp.period}</span>
                </div>

                {/* Title */}
                <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {exp.company}
                </h4>
                <p className="text-white/60 font-medium mb-6 text-lg">
                  {exp.role}
                </p>

                {/* Points */}
                <ul className="space-y-3 text-left">
                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="text-white/70 flex gap-3 text-sm leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-blue-400/50 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
          </motion.div>
        ))}
      </div>
    </section>
  );
};
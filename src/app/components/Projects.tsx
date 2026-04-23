"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code, Layout, Smartphone } from "lucide-react";
import { PROJECTS } from "@/constants";
import { FaGithub } from "react-icons/fa6";
import React, { useRef, useState } from "react";

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">

      {/* Header */}
      <div className="text-center mb-20">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4"
        >
          Case Studies
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold mt-2 tracking-tight"
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/60 mt-6 max-w-2xl mx-auto text-lg"
        >
          A collection of full-stack engineering work designed with scale, performance, and user experience in mind.
        </motion.p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

/* Project Card with Spotlight */
function ProjectCard({ project, index }: { project: any, index: number }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative flex flex-col rounded-[2rem] overflow-hidden bg-[#0a0a0a] border border-white/5 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.2)]"
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Spotlight effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-0 rounded-[2rem]"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Preview Area */}
        <div className="relative aspect-video flex items-center justify-center bg-gradient-to-br from-white/[0.03] to-white/[0.01] border-b border-white/5 overflow-hidden">

          <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition duration-500" />
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />

          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="p-5 rounded-2xl bg-white/5 border border-white/10 glass shadow-2xl z-10"
          >
            <img src={`/${project.title}.jpg`} />
            {/* {getIcon(project.title)} */}
          </motion.div>

          {/* Tag */}
          <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest z-10 shadow-lg text-white/90">
            {project.tech?.[0] || "Tech"}
          </div>
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col flex-1">
          <h4 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
            {project.title}
          </h4>

          <p className="text-sm text-white/60 mb-8 flex-1 leading-relaxed">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t: string) => (
              <span
                key={t}
                className="text-[11px] font-semibold px-3 py-1.5 bg-white/[0.03] border border-white/10 rounded-lg text-white/70 shadow-sm"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-auto">

            {/* 🔥 Primary CTA */}
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex-1 flex items-center justify-center gap-2  bg-gradient-to-r from-blue-500 to-purple-500  text-white py-3 rounded-xl text-sm font-semibold  shadow-lg shadow-blue-500/20  hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]  transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              View Live
              <ExternalLink
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />

              {/* Glow */}
              <span className="absolute inset-0 rounded-xl bg-blue-500 blur-xl opacity-20 group-hover:opacity-40 transition" />
            </a>

            {/* 🔗 GitHub Button */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center p-3 rounded-xl  bg-white/5 border border-white/10  text-white backdrop-blur  hover:bg-white/10 hover:border-white/20 hover:scale-[1.05]  transition-all duration-300  focus:outline-none focus:ring-2 focus:ring-white/20"
              >
                <FaGithub
                  size={20}
                  className="transition-transform group-hover:scale-110"
                />
              </a>
            )}

          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* 🔥 Smarter icon logic */
function getIcon(title: string) {
  const name = title.toLowerCase();

  if (name.includes("doctor")) {
    return <Smartphone className="text-blue-400 w-10 h-10" />;
  }

  if (name.includes("workflix")) {
    return <Layout className="text-purple-400 w-10 h-10" />;
  }

  return <Code className="text-cyan-400 w-10 h-10" />;
}
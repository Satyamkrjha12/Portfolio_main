"use client";

import { FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiAngular,
  SiMysql,
  SiReact
} from "react-icons/si";

export default function TechMarquee() {
  const icons = [
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "Angular", icon: <SiAngular />, color: "#DD0031" },
    { name: "React Native", icon: <SiReact />, color: "#61DAFB" },
    { name: "MySQL", icon: <SiMysql />, color: "#00758F" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" }
  ];

  const duplicated = [...icons, ...icons]; // seamless loop

  return (
    <div className="relative w-full mt-24 py-14 overflow-hidden">

      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute right-1/4 bottom-0 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-10" />

      {/* 🚀 Marquee */}
      <div className="group flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">

        {duplicated.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="relative flex flex-col items-center justify-center min-w-[130px] h-[130px] rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:-translate-y-2"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-xl" />

            {/* Icon */}
            <div
              className="text-4xl mb-2 z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
              style={{ color: item.color }}
            >
              {item.icon}
            </div>

            {/* Label */}
            <span className="text-sm text-white/70 z-10 group-hover:text-white transition">
              {item.name}
            </span>
          </div>
        ))}

      </div>
    </div>
  );
}
"use client";
import Header from "./ui/header";
import { experiences } from "../lib/data";
import { useSectionInView, useWindowSizeHook } from "../lib/hooks";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Experience() {
  const width = useWindowSizeHook();
  const isMobile = width < 700;
  const { ref } = useSectionInView("Experience", width > 700 ? 0.5 : 0.3);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section ref={ref} id="experience" className="scroll-mt-24">
      <Header>Experience</Header>
      <div className="w-full mt-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.subtitle + i}
            initial={{ opacity: 0, x: isMobile ? 0 : i % 2 === 0 ? -200 : 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-2"
          >
            <button
              // Make sure to define --card-rgb in your CSS for both light and dark themes
              style={{
                background: "rgba(var(--card-rgb), 0.85)",
              }}
              className={`w-full flex items-center gap-4 px-6 py-5 text-left transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-[var(--accent)]
                hover:bg-[var(--card-hover)] active:scale-[0.98] border-2 border-[var(--card-border)] rounded-xl
                ${
                  openIndex === i
                    ? "bg-[var(--card-hover)] shadow-lg z-9 relative"
                    : ""
                }`}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              aria-expanded={openIndex === i}
              aria-controls={`exp-panel-${i}`}
            >
              <span
                className={`flex-shrink-0 w-14 h-14 rounded-full border-2 border-[var(--accent)] bg-[var(--card)] shadow-md flex items-center justify-center overflow-hidden transition-transform duration-300 ${
                  openIndex === i ? "scale-105 ring-2 ring-[var(--accent)]" : ""
                }`}
              >
                <Image
                  src={exp.image}
                  alt={exp.subtitle}
                  width={56}
                  height={56}
                  className="object-cover rounded-full"
                />
              </span>
              <span className="flex flex-col flex-1 min-w-0">
                <span className="font-bold text-lg text-[var(--text)] truncate">
                  {exp.title}
                </span>
                <span className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium text-[var(--subtext)] mt-0.5 truncate">
                  <span>@ {exp.subtitle}</span>
                  <span className="mx-1">|</span>
                  <span>{exp.location}</span>
                  <span className="mx-1">|</span>
                  <span className="font-mono font-normal">{exp.dates}</span>
                </span>
              </span>
              <span
                className={`ml-4 text-[var(--accent)] text-xl transform transition-transform duration-300 ${
                  openIndex === i ? "rotate-90 scale-125" : ""
                }`}
                aria-hidden="true"
              >
                ▶
              </span>
            </button>
            <div
              id={`exp-panel-${i}`}
              className={`overflow-hidden transition-all duration-500 bg-[var(--card)] ${
                openIndex === i
                  ? "max-h-[1000px] px-8 pb-6 pt-0 border-l-4 border-[var(--accent)]"
                  : "max-h-0 p-0 border-l-4 border-transparent"
              }`}
              tabIndex={openIndex === i ? 0 : -1}
            >
              <ul className="list-disc pl-5 text-[var(--text)] space-y-2 mt-6 w-full">
                {exp.description.map((desc, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

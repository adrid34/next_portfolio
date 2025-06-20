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
    <section id="experience" className="py-8">
      <Header>Experience</Header>
      <p className="text-lg text-gray-400 mb-6">Professional roles and achievements from my career journey.</p>
      <div className="timeline flex flex-col gap-8 mt-8">
        {experiences.map((exp, idx) => (
          <div key={exp.subtitle} className="relative pl-8 border-l-4 border-[var(--accent)]">
            <div className="absolute left-0 top-2 w-4 h-4 bg-[var(--accent)] rounded-full -ml-2"></div>
            <h3 className="text-xl font-bold">{exp.title} @ {exp.subtitle}</h3>
            <p className="text-sm text-gray-400">{exp.dates} | {exp.location}</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              {exp.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

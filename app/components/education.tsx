import { educations } from "../lib/data";
import { useSectionInView } from "../lib/hooks";
import Header from "./ui/header";
import Image from "next/image";
import { motion } from "framer-motion";
import parkerLogo from "@/public/eduaction/parker_logo.png";
import texasLogo from "@/public/eduaction/texas_logo.png";

const schoolImages: Record<string, string> = {
  "Parker University": "/eduaction/parker_logo.png",
  "South Texas College": "/eduaction/texas_logo.png",
};

const schoolBgImages: Record<string, string> = {
  "Parker University": "/eduaction/parker_bg.png",
  "South Texas College": "/eduaction/texas_bg.png",
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },
  animate: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.15 * index,
    },
  }),
};

export default function Education() {
  const { ref } = useSectionInView("Education", 0.2);

  return (
    <section ref={ref} id="education" className="scroll-mt-24">
      <Header>Education</Header>
      <p className="text-lg text-gray-400 mb-6">My academic background and degrees from respected institutions.</p>
      <div className="flex flex-col gap-8 mt-8">
        {educations.map((edu, idx) => (
          <div key={edu.school} className="flex items-center gap-6 bg-[var(--card)] p-6 rounded-xl shadow-md">
            <Image
              src={edu.school === 'Parker University' ? parkerLogo : texasLogo}
              alt={edu.school + ' logo'}
              width={56}
              height={56}
              className="rounded-full border border-[var(--accent)] bg-white"
            />
            <div>
              <h3 className="text-lg font-bold">{edu.school}</h3>
              <p className="text-sm text-gray-400">{edu.degree} ({edu.startDate} - {edu.endDate})</p>
              <p className="mt-1">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

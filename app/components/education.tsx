import { educations } from "../lib/data";
import { useSectionInView } from "../lib/hooks";
import Header from "./ui/header";
import Image from "next/image";
import { motion } from "framer-motion";

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
      <div className="flex flex-col lg:flex-row gap-6 justify-center items-stretch w-full">
        {educations.map((edu, i) => (
          <motion.div
            key={edu.school}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={i}
            whileHover={{
              boxShadow: "0 8px 32px 0 rgba(0,0,0,0.25)",
            }}
            transition={{ type: "spring" }}
            className="relative cursor-pointer flex-1 flex flex-col items-center gap-4 border border-[var(--card-border)] rounded-2xl shadow-xl p-0 transition-all duration-300 min-w-0 group overflow-hidden hover:shadow-2xl hover:border-sjsu-gold/80 bg-[var(--card)]"
            style={{ perspective: 1000 }}
          >
            {/* Top banner image */}
            {schoolBgImages[edu.school] && (
              <div className="w-full aspect-[1280/440] relative transition-transform duration-300">
                <Image
                  src={schoolBgImages[edu.school]}
                  alt={edu.school + " background"}
                  fill
                  className="object-contain rounded-t-2xl bg-white transition-transform duration-300 group-hover:scale-110"
                  style={{ pointerEvents: "none" }}
                  priority
                />
              </div>
            )}
            {/* Logo and content below banner */}
            <div className="flex flex-row items-center w-full px-6 pb-6 pt-2 z-5 gap-4">
              {/* Logo on the left */}
              {schoolImages[edu.school] && (
                <div className="flex-shrink-0 w-24 h-24 relative rounded-xl overflow-hidden border border-[var(--card-border)] bg-white shadow-md">
                  <Image
                    src={schoolImages[edu.school]}
                    alt={edu.school}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              )}
              {/* Info on the right */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="text-base font-semibold text-[var(--text)] mb-1">
                  {edu.degree}
                </div>
                <div className="text-sm text-[var(--subtext)] mb-1 font-medium">
                  {edu.location}
                </div>
                <div className="text-xs text-[var(--subtext)] mb-2">
                  {edu.startDate} – {edu.endDate}
                </div>
              </div>
            </div>
            {/* Hover overlay for description */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-6">
              <div className="absolute inset-0 bg-[var(--card)] opacity-0 group-hover:opacity-95 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-6 w-4/5 mx-auto flex flex-col items-center px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
                <div className="text-lg font-bold text-[var(--text)] mb-2 text-center">
                  {edu.degree}
                </div>
                <p className="text-[var(--text)] text-base text-center leading-relaxed drop-shadow-sm">
                  {edu.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

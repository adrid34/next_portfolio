"use client";
import { motion } from "framer-motion";
import { bio, socials } from "../lib/data";
import { useSectionInView } from "../lib/hooks";
import { RiStickyNoteLine } from "react-icons/ri";
import Button from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import SocialLinks from "./SocialLinks";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.75);
  const resumeUrl = process.env.NEXT_PUBLIC_RESUME_URL;

  return (
    <section ref={ref} id="home" className="scroll-mt-96 mb-24">
      <motion.div
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <h1 className="md:text-2xl text-xl sm:mb-6 mb-3 font-light tracking-wider text-gray-600 dark:text-gray-300">
          Welcome! I&apos;m
        </h1>
        <h1 className="md:text-7xl text-5xl font-bold sm:mb-2 mb-1 flex items-end text-[var(--text)]">
          Adrian Madrid{" "}
        </h1>
        <h2 className="lg:text-3xl font-medium text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Senior Software Engineer
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.75 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-between gap-2 mb-8"
      >
        <div className="relative w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-2 border-sjsu-gold order-first md:order-last mb-4 md:mb-0">
          <Image
            src="/profile.png"
            alt="Adrian Madrid"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="text-[var(--text)] text-base sm:text-lg w-full md:w-[65%] lg:w-[55%] px-2 sm:px-0">
          {bio.map((text: string, index: number) => (
            <p key={index} className="mb-3">
              {text}
            </p>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 1 }}
        viewport={{ once: true }}
        className="flex items-center lg:gap-2"
      >
        {resumeUrl && (
          <Link href={resumeUrl} target="_blank" rel="noopener noreferrer">
            <Button
              className="px-6 py-2 rounded-full font-bold text-base bg-gradient-to-r mr-6 from-[var(--accent)] to-yellow-300 text-gray-900 dark:text-gray-900 border-2 border-[var(--accent)] shadow-md flex items-center gap-2 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:from-yellow-200 hover:to-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] md:text-lg group"
            >
              Resume
              <RiStickyNoteLine className="transition-transform group-hover:translate-y-1" />
            </Button>
          </Link>
        )}
        <SocialLinks className="md:gap-4 gap-3" />
      </motion.div>
    </section>
  );
}

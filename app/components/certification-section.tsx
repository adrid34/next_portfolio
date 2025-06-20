import { useState } from "react";
import { certifications } from "../lib/data";
import Header from "./ui/header";
import Image from "next/image";
import { CertificationType } from "../lib/types";
import { motion, AnimatePresence } from "framer-motion";
import { useSectionInView } from "../lib/hooks";

const getFramePath = (frameType: number) =>
  `/certificates/frame/${frameType}.png`;

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

export default function CertificationSection() {
  const { ref } = useSectionInView("Certifications", 0.2);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const visibleCerts = certifications;

  return (
    <section ref={ref} id="certifications" className="scroll-mt-24 mt-12">
      <Header>Certifications</Header>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full justify-center">
        {visibleCerts.map((cert, index) => (
          <motion.div
            key={cert.name}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            className="relative cursor-pointer rounded-3xl bg-gradient-to-br from-[var(--card)] to-[var(--card-border)] border border-[var(--card-border)] shadow-xl flex flex-col overflow-hidden group transition-transform duration-300 hover:scale-[1.04] hover:shadow-2xl hover:border-sjsu-gold/80"
            style={{ backdropFilter: "blur(2px)" }}
            onClick={() => setModalImage(cert.image)}
          >
            <div className="relative w-full aspect-[4/3] bg-[var(--bg)]">
              <Image
                src={cert.image}
                alt={cert.name}
                fill
                className="object-contain"
                priority
              />
              {/* Border frame overlay */}
              <Image
                src={getFramePath(cert.frameType)}
                alt="Certificate Frame"
                fill
                className="absolute inset-0 object-cover"
                draggable={false}
                priority
              />
            </div>
            {/* Hover overlay and info, covers whole card */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Mask background with opacity */}
              <div className="absolute inset-0 bg-[var(--card)] opacity-0 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />
              {/* Info text, always fully opaque */}
              <div className="relative z-10 w-4/5 max-w-xs mx-auto flex flex-col items-center px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
                <h2 className="text-2xl font-bold text-[var(--text)] mb-2 tracking-tight drop-shadow-sm text-center">
                  {cert.name}
                </h2>
                <div className="text-lg text-[var(--subtext)] font-medium text-center">
                  {cert.issuer}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Modal with animation */}
      <AnimatePresence>
        {modalImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 transition-opacity duration-300"
            onClick={() => setModalImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.3 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.3 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="relative mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-white text-2xl bg-black/60 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/80 transition"
                onClick={() => setModalImage(null)}
                aria-label="Close"
              >
                &times;
              </button>
              <div className="relative flex items-center justify-center">
                <Image
                  src={modalImage}
                  alt="Certification Full"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto w-auto max-w-full max-h-[90vh] rounded-2xl"
                  priority
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

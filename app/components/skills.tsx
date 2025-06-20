import { skills } from "../lib/data";
import { useSectionInView } from "../lib/hooks";
import Header from "./ui/header";
import IconCard from "./ui/icon-card";
import { motion } from "framer-motion";

// Animation variants for parent and children
const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12, // Adjust for speed of step-by-step
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, type: "spring", stiffness: 60 },
  },
};

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.75);

  const renderedSkills = skills.map((skill, i) => {
    return (
      <motion.li
        key={skill.name}
        variants={itemVariants}
        className="will-change-transform"
      >
        <IconCard {...skill} />
      </motion.li>
    );
  });

  return (
    <section
      ref={ref}
      id="skills"
      className="scroll-mt-24 text-[var(--text)] transition-colors duration-300"
    >
      <Header>Top Skills</Header>
      <motion.ul
        className="flex flex-wrap gap-6 justify-between"
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {renderedSkills}
      </motion.ul>
    </section>
  );
}

import Header from "./ui/header";
import { projects } from "../lib/data";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import Project from "./ui/project";
import { useSectionInView, useWindowSizeHook } from "../lib/hooks";
import { motion } from "framer-motion";
import { Fragment, useState } from "react";

// Card for a single project with animation
function ProjectCard({ project, index, isMobile }: { project: any; index: number; isMobile: boolean }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: isMobile ? -25 : index % 2 === 0 ? -25 : 25 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      viewport={{ once: true }}
      className={isMobile ? "md:hidden block" : "md:block hidden"}
    >
      <Project project={project} />
    </motion.li>
  );
}

// Card for the 'AND MORE ON GITHUB!' link with animation
function MoreOnGithubCard() {
  return (
    <motion.li
      initial={{ opacity: 0, x: 25 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col"
    >
      <Link
        href={"https://github.com/adrid34"}
        className="relative cursor-pointer rounded-3xl bg-gradient-to-br from-[var(--card)] to-[var(--card-border)] border border-[var(--card-border)] shadow-xl flex flex-col min-h-full flex-grow transition-transform duration-300 hover:scale-[1.025] hover:shadow-2xl group overflow-hidden items-center justify-center"
        style={{ backdropFilter: "blur(2px)" }}
      >
        <h2 className="flex items-center gap-1 font-extrabold text-lg text-sjsu-gold hover:text-[var(--text)] transition-colors">
          AND MORE ON GITHUB! <FaGithub />
        </h2>
      </Link>
    </motion.li>
  );
}

export default function Projects() {
  const width = useWindowSizeHook();
  const { ref } = useSectionInView("Projects", width > 700 ? 0.4 : 0.15);
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  // Render all project cards for both desktop and mobile
  const projectCards = visibleProjects.flatMap((project, i) => [
    <ProjectCard key={project.name + "-desktop"} project={project} index={i} isMobile={false} />, 
    <ProjectCard key={project.name + "-mobile"} project={project} index={i} isMobile={true} />
  ]);

  // Add the 'More on Github' card if all projects are shown
  if (showAll) {
    projectCards.push(<MoreOnGithubCard key="more-on-github" />);
  }

  return (
    <section
      id="projects"
      className="scroll-mt-24 text-[var(--text)] transition-colors duration-300"
      ref={ref}
    >
      <Header>Projects</Header>
      <p className="text-lg text-gray-400 mb-6">A selection of my favorite and most impactful projects, demonstrating a range of skills and technologies.</p>
      <ul className="grid md:grid-cols-2 grid-cols-1 gap-2 md:gap-4 md:auto-rows-fr">
        {projectCards}
      </ul>
      {!showAll && projects.length > 2 && (
        <div className="flex justify-center mt-6 md:mt-8">
          <button
            onClick={() => setShowAll(true)}
            className="px-5 py-2 md:px-8 md:py-3 rounded-full font-bold text-sm md:text-base text-white bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}

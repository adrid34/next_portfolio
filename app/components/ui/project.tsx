import { ProjectType } from "@/app/lib/types";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import Button from "./button";

type ProjectProps = {
  project: ProjectType;
};

export default function Project({ project }: ProjectProps) {
  const { name, image, description, tech, link, code } = project;
  return (
    <div
      className="relative cursor-pointer rounded-3xl bg-gradient-to-br from-[var(--card)] to-[var(--card-border)] border border-[var(--card-border)] shadow-xl flex flex-col min-h-full flex-grow transition-transform duration-300 hover:scale-[1.025] hover:shadow-2xl group overflow-hidden"
      style={{ backdropFilter: "blur(2px)" }}
    >
      <div className="relative h-40 md:h-56 lg:h-72 rounded-t-3xl flex items-center overflow-hidden bg-[var(--bg)]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-center object-cover group-hover:scale-105 transition-transform duration-500"
          priority
        />
        {/* Gradient overlay for image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="p-4 md:p-6 flex-col flex flex-grow">
        <h2 className="text-lg md:text-2xl font-bold text-[var(--text)] mb-2 tracking-tight drop-shadow-sm">
          {name}
        </h2>
        <ul className="flex flex-wrap items-center gap-1 md:gap-2 my-2 md:my-4">
          {tech.map((t, i) => (
            <li
              key={i}
              className="flex items-center gap-1 cursor-pointer px-3 py-1 rounded-xl border border-[var(--card-border)] shadow-md transition-all duration-200 hover:scale-105 hover:shadow-md hover:border-sjsu-gold/60"
            >
              <Image
                src={t.src}
                alt={t.alt}
                className="h-4 w-4 md:h-5 md:w-5 mr-1 drop-shadow"
              />
              <span className="text-xs text-[var(--text)]/80 font-semibold whitespace-nowrap tracking-wide">
                {t.alt}
              </span>
            </li>
          ))}
        </ul>
        <p className="text-xs md:text-base text-[var(--text)]/80 font-medium mb-2 md:mb-4 transition-colors duration-300 line-clamp-4">
          {description}
        </p>
        <div className="flex gap-3 mt-auto">
          {link && (
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button className="w-full !py-2 flex justify-center items-center bg-gradient-to-r from-sjsu-gold/80 to-yellow-300 text-gray-900 font-bold shadow-md hover:from-yellow-200 hover:to-sjsu-gold transition-all">
                Website <FaExternalLinkAlt />
              </Button>
            </Link>
          )}
          {code && code !== "#" && (
            <Link
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button className="w-full !py-2 flex justify-center items-center bg-gradient-to-r from-gray-700 to-gray-900 text-sjsu-gold font-bold shadow-md hover:from-sjsu-gold hover:to-yellow-300 hover:text-gray-900 transition-all">
                Code <FaGithub />
              </Button>
            </Link>
          )}
        </div>
      </div>
      {/* Fade-in animation */}
      <style jsx>{`
        .fade-in {
          animation: fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1);
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

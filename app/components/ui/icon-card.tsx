import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { IconType } from "react-icons";

type IconCardProps = {
  name: string;
  image?: StaticImageData | null;
  icon?: IconType | null;
  href?: string;
};

export default function IconCard({
  name,
  icon: Icon,
  image,
  href,
}: IconCardProps) {
  const cardContent = (
    <Fragment>
      <div className="flex justify-center w-full mb-2">
        {image ? (
          <Image
            src={image}
            alt={name}
            className="h-10 w-10 md:h-16 md:w-16 object-contain drop-shadow-xl group-hover:scale-110 group-hover:rotate-[-6deg] transition-transform duration-300"
            priority
          />
        ) : (
          Icon && (
            <Icon className="h-10 w-10 md:h-16 md:w-16 text-sjsu-gold dark:text-sjsu-gold drop-shadow-xl group-hover:scale-110 group-hover:rotate-[-6deg] transition-transform duration-300" />
          )
        )}
      </div>
      <div className="text-[var(--text)] font-bold text-center text-sm md:text-base mt-2 tracking-wide drop-shadow-sm group-hover:text-sjsu-gold transition-colors duration-300 truncate whitespace-nowrap">
        {name}
      </div>
    </Fragment>
  );

  const baseCardClass =
    "group flex flex-col items-center gap-2 p-3 md:p-5 rounded-2xl bg-[var(--card)] border border-[var(--card-border)] shadow-md overflow-x-hidden transition-all duration-300 cursor-pointer w-28 md:w-36 max-w-full relative h-42";
  const hoverClass =
    "hover:scale-105 hover:shadow-lg hover:border-sjsu-gold hover:bg-[var(--card)] hover:text-sjsu-gold";

  return href ? (
    <Link
      href={href}
      target="_blank"
      className={`${baseCardClass} ${hoverClass}`}
      aria-label={name}
    >
      <div className="skill-3d-inner h-24">{cardContent}</div>
    </Link>
  ) : (
    <div
      className={`${baseCardClass} ${hoverClass}`}
      tabIndex={0}
      aria-label={name}
    >
      <div className="skill-3d-inner h-24">{cardContent}</div>
    </div>
  );
}

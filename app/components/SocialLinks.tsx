"use client";
import { socials } from "../lib/data";
import Link from "next/link";

declare global {
  interface Window {
    Calendly: any;
  }
}

export default function SocialLinks({
  className = "",
}: {
  className?: string;
}) {
  return (
    <ul className={`flex gap-3 items-center ${className}`}>
      {socials.map(({ name, icon: Icon, href }) => (
        <li key={name}>
          <Link
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={name}
            className={`
              group
              flex items-center justify-center
              rounded-full
              p-2
              bg-[var(--card)]
              border-2 border-[var(--card-border)]
              shadow
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-[var(--accent)]
              hover:scale-110
            `}
          >
            <span
              className={`
                flex items-center justify-center
                rounded-full
                transition-transform duration-200
                text-[var(--button-icon)] dark:text-[var(--accent)]
              `}
            >
              <Icon className="md:text-3xl text-2xl" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

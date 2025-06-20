'use client'
import { links } from '../lib/data'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useActiveSectionContext } from '../context/section-context'
import { useEffect } from 'react'
import { useWindowSizeHook } from '../lib/hooks'

export default function Navbar() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext()
  const width = useWindowSizeHook()

  useEffect(() => {
    const linksContainer = document.getElementById('links-container')
    const activeLink = document.getElementById(activeSection)
    if (linksContainer && activeLink && width < 700) {
      setTimeout(() => {
        linksContainer.scrollTo({
          left: activeLink.offsetLeft - linksContainer.offsetWidth / 2,
          behavior: 'smooth',
        })
      }, 750) // allow time for section to scroll into view
    }
  }, [activeSection, width])

  const renderedLinks = links.map(({ hash, label }, index) => {
    return (
      <li key={hash}>
        <Link
          href={hash}
          id={label}
          onClick={e => {
            e.preventDefault();
            const section = document.querySelector(hash);
            if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
            }
            setActiveSection(label);
            setTimeOfLastClick(Date.now());
          }}
          className={`${
            index === 0 ? 'ml-2' : index === links.length - 1 && 'mr-2'
          } rounded-full outline-none relative transition-all font-medium px-4 py-1.5 flex
            text-[var(--subtext)]
            text-sm md:text-base
            ${activeSection == label ? 'text-[var(--text)] font-semibold bg-[var(--card-hover)]' : 'hover:bg-[var(--card-hover)] hover:text-[var(--text)]'}
          `}
        >
          {label}
          {label === activeSection && (
            <motion.span
              className="bg-sjsu-gold rounded-full absolute inset-0 -z-10"
              layoutId="activeSection"
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 30,
              }}
            ></motion.span>
          )}
        </Link>
      </li>
    )
  })

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="md:rounded-full md:w-auto w-full max-w-full md:p-2 p-1 py-3 fixed md:top-6 top-0 left-1/2 outline-none transform -translate-x-1/2 bg-[var(--card)] border border-b-2 border-[var(--card-border)] z-10 backdrop-blur-md transition-colors duration-300"
    >
      <ul
        id="links-container"
        className="flex overflow-x-auto scroll-hide items-center sm:gap-2 gap-1"
      >
        <li>
          <a href="#home" className="hover:text-primary transition-colors">Home</a>
        </li>
        {renderedLinks}
      </ul>
    </motion.nav>
  )
}

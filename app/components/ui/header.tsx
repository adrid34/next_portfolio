import { motion } from 'framer-motion'

type HeaderProps = {
  children: React.ReactNode
  animateOpacity?: boolean
  className?: string
}

export default function Header({
  children,
  animateOpacity,
  className,
}: HeaderProps) {
  return (
    <motion.h1
      initial={{ opacity: 0, x: animateOpacity ? 0 : -25 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      viewport={{ once: true }}
      className={`text-2xl md:text-3xl font-semibold mb-8 md:mb-16 tracking-wider text-[var(--text)] transition-colors duration-300 ${className}`}
    >
      {children}
    </motion.h1>
  )
}

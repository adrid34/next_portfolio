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
    <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-[var(--accent)] inline-block animate-fadeIn">
      {children}
    </h2>
  )
}

'use client'

import { ButtonHTMLAttributes, ReactNode } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa6'
import { useTheme } from '../../context/theme-context'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  icon?: ReactNode
  className?: string
}

export default function Button({ children, icon, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={
        'px-3 py-2 md:px-4 md:py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2 bg-[var(--card)] text-[var(--text)] border border-[var(--card-border)] hover:bg-[var(--card-border)] focus:bg-[var(--card-border)] ' +
        (className || '')
      }
    >
      {icon && <span className="text-base md:text-lg">{icon}</span>}
      {children}
    </button>
  )
}

export function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="rounded-full p-2 md:p-3 shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sjsu-gold bg-slate-800 text-sjsu-gold dark:bg-sjsu-gold dark:text-slate-800 hover:bg-slate-700 dark:hover:bg-yellow-400 transition-transform duration-150 hover:scale-105"
      aria-pressed={theme === 'dark'}
    >
      {theme === 'dark' ? <FaSun className="h-4 w-4 md:h-5 md:w-5" /> : <FaMoon className="h-4 w-4 md:h-5 md:w-5" />}
    </button>
  )
}

export { Button }

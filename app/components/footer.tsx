import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer className="w-full py-6 sm:py-12 flex flex-col items-center bg-[var(--card)] border-t border-[var(--card-border)] text-[var(--text)] transition-colors duration-300">
      <div className="flex justify-center items-center mb-4">
        <SocialLinks className="gap-4" />
      </div>
      {new Date().getFullYear()} © Adrian Madrid
    </footer>
  )
}

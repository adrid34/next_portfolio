import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer className="w-full py-4 text-center text-xs text-gray-400" aria-label="Site Footer" role="contentinfo">
      <div>&copy; {new Date().getFullYear()} Adrian Madrid. All rights reserved.</div>
      <div className="flex justify-center items-center mb-4">
        <SocialLinks className="gap-4" />
      </div>
    </footer>
  )
}

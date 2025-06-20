type TextAreaProps = {
  className?: string
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>

export default function TextArea({ className, ...rest }: TextAreaProps) {
  return (
    <textarea
      className={`w-full p-1.5 md:p-2 bg-transparent resize-none h-20 md:h-24 outline-none rounded-none ring-0 border-b-2 font-medium focus:border-b-sjsu-gold border-[var(--card-border)] text-[var(--text)] text-sm md:text-base placeholder:text-[var(--text)]/60 focus:placeholder:text-sjsu-gold transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${className || ''}`}
      {...rest}
    />
  )
}

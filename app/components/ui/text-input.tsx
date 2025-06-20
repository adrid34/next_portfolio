type TextInputProps = {
  className?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export default function TextInput({ className, ...rest }: TextInputProps) {
  return (
    <input
      type="text"
      className={`w-full p-1.5 md:p-2 bg-transparent outline-none rounded-none border-b-2 font-medium focus:border-b-sjsu-gold border-[var(--card-border)] text-[var(--text)] text-sm md:text-base placeholder:text-[var(--text)]/60 focus:placeholder:text-sjsu-gold disabled:opacity-50 disabled:cursor-not-allowed ${className || ''}`}
      {...rest}
    />
  )
}

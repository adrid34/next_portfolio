'use client'
import { useFormStatus } from 'react-dom'
import Button from './button'
import { Fragment } from 'react'
import { AiOutlineLoading } from 'react-icons/ai'

type SubmitButtonProps = {
  children: React.ReactNode
  className?: string
}

export default function SubmitButton({
  children,
  className,
}: SubmitButtonProps) {
  const { pending } = useFormStatus()

  return (
    <Button
      disabled={pending}
      type="submit"
      className={`text-[var(--text)] text-sm md:text-base transition-colors duration-300 ${className}`}
    >
      {pending ? (
        <Fragment>
          Submitting...
          <svg className="animate-spin h-6 w-6 mr-2 inline-block text-[var(--accent)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
          </svg>
        </Fragment>
      ) : (
        children
      )}
    </Button>
  )
}

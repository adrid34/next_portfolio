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
          <AiOutlineLoading className="animate-spin text-lg md:text-xl" />
        </Fragment>
      ) : (
        children
      )}
    </Button>
  )
}

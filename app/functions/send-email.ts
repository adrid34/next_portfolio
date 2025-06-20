'use server'
import React from 'react'
import { Resend } from 'resend'
import ContactFormEmail from '../components/contact-form-email'
import toast from 'react-hot-toast'

const resend = new Resend(process.env.RESEND_API_KEY)

const validateEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

export const sendEmail = async (formData: FormData) => {
  const message = formData.get('message')
  const email = formData.get('email')
  const subject = formData.get('subject')

  // Validate all required fields are present
  if (!message || !email || !subject) {
    return {
      error: 'All fields are required',
    }
  }

  // Convert to strings and trim
  const messageStr = message.toString().trim()
  const emailStr = email.toString().trim()
  const subjectStr = subject.toString().trim()

  // Validate field lengths
  if (messageStr.length < 10) {
    return {
      error: 'Message must be at least 10 characters long',
    }
  }

  if (messageStr.length > 5000) {
    return {
      error: 'Message must be less than 5000 characters',
    }
  }

  if (subjectStr.length < 3) {
    return {
      error: 'Subject must be at least 3 characters long',
    }
  }

  if (subjectStr.length > 200) {
    return {
      error: 'Subject must be less than 200 characters',
    }
  }

  // Validate email format
  if (!validateEmail(emailStr)) {
    return {
      error: 'Please enter a valid email address',
    }
  }

  try {
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'adrianmadrid5245@gmail.com',
      subject: `Portfolio Contact: ${subjectStr}`,
      replyTo: emailStr,
      react: ContactFormEmail({
        subject: subjectStr,
        message: messageStr,
        email: emailStr,
      }),
    })

    return { data }
  } catch (error: any) {
    return {
      error: error?.message || 'Failed to send email. Please try again later.',
    }
  }
}

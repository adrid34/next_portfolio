import React from 'react'
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Link,
} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'

type ContactFormEmailProps = {
  subject: string
  message: string
  email: string
}

export default function ContactFormEmail({
  subject,
  message,
  email,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New Portfolio Contact: {subject}</Preview>
      <Tailwind>
        <Body className="bg-gray-100">
          <Container className="mx-auto py-5 px-5">
            <Section className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Heading className="text-2xl p-5 bg-gradient-to-r from-yellow-500 to-yellow-300 text-black">
                New Contact Form Submission
              </Heading>
              <Section className="px-5 py-4">
                <Heading as="h2" className="text-xl mb-3">
                  {subject}
                </Heading>
                <Text className="text-gray-700 whitespace-pre-wrap">{message}</Text>
                <Hr className="my-4 border-gray-300" />
                <Text className="text-sm text-gray-600">
                  From: <Link href={`mailto:${email}`}>{email}</Link>
                </Text>
                <Hr className="my-4 border-gray-300" />
                <Text className="text-xs text-gray-500 text-center">
                  This email was sent from your portfolio contact form.
                </Text>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

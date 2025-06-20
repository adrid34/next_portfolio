"use client";
import Header from "./ui/header";
import TextInput from "./ui/text-input";
import TextArea from "./ui/textarea";
import toast from "react-hot-toast";
import { sendEmail } from "../functions/send-email";
import {
  FaPaperPlane,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import SubmitButton from "./ui/submit-button";
import { useSectionInView } from "../lib/hooks";
import { motion } from "framer-motion";
import Link from "next/link";
import { useFormStatus } from "react-dom";
import { phoneNumber } from "../lib/data";

function ContactForm() {
  const { pending } = useFormStatus();

  return (
    <form
      id="contact-form"
      className="flex-1 flex flex-col"
      action={async (formData) => {
        try {
          const { error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          const form = document.getElementById(
            "contact-form"
          ) as HTMLFormElement;
          form.reset();
          toast.success(
            "Message sent successfully! I will get back to you soon."
          );
        } catch (error) {
          toast.error("Something went wrong. Please try again later.");
        }
      }}
    >
      <div className="grid grid-cols-2 gap-4 mb-4">
        <TextInput
          placeholder="E-mail"
          type="email"
          name="email"
          required
          max={100}
          disabled={pending}
        />
        <TextInput
          placeholder="Subject"
          name="subject"
          required
          min={3}
          max={200}
          disabled={pending}
        />
      </div>
      <TextArea
        placeholder="Message"
        className="mb-4 flex-1"
        name="message"
        required
        maxLength={5000}
        minLength={10}
        disabled={pending}
      />
      <div className="flex justify-end">
        <SubmitButton className="group px-6 py-2 rounded-full font-bold text-base bg-gradient-to-r from-[var(--accent)] to-yellow-300 text-gray-900 dark:text-gray-900 border-2 border-[var(--accent)] shadow-md flex items-center gap-2 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:from-yellow-200 hover:to-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100">
          Send Message{" "}
          <FaPaperPlane className="group-hover:translate-x-1 group-hover:transform group-hover:-translate-y-1 transition-transform" />
        </SubmitButton>
      </div>
    </form>
  );
}

const ContactInfo = () => (
  <div className="flex-1 space-y-8 max-w-md py-8">
    <Header animateOpacity>Contact Me!</Header>
    <p className="text-lg text-[var(--text)]">
      Have a project in mind or just want to say hi? I&apos;d love to hear from
      you. Fill out the form, and I&apos;ll get back to you as soon as possible.
    </p>
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <FaEnvelope className="text-2xl text-[var(--accent)]" />
        <Link
          href="mailto:adrianmadrid5245@gmail.com"
          className="text-lg hover:text-[var(--accent)] transition-colors text-[var(--text)]"
        >
          adrianmadrid5245@gmail.com
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <FaMapMarkerAlt className="text-2xl text-[var(--accent)]" />
        <p className="text-lg text-[var(--text)]">Midland, TX</p>
      </div>
      <div className="flex items-center gap-4">
        <FaPhone className="text-2xl text-[var(--accent)]" />
        <p className="text-lg text-[var(--text)]">{phoneNumber}</p>
      </div>
    </div>
  </div>
);

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.2);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="scroll-mt-24 py-8 md:py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16 items-stretch justify-center p-2 md:p-8">
          <ContactInfo />
          <div className="w-full max-w-3xl p-3 md:p-8 rounded-2xl bg-[var(--card)] shadow-2xl border border-[var(--card-border)] flex">
            <ContactForm />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

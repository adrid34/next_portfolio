"use client";

import ChatAssistant from "./ChatAssistant";
import { calendlyUrl } from "../lib/data";
import { PopupModal } from "react-calendly";
import { useState, useEffect } from "react";
import Image from "next/image";

const CalendlyButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRootElement(document.body);
    }
  }, []);

  if (!rootElement) {
    return null;
  }

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="transition-transform transform hover:scale-110"
        aria-label="Book a meeting"
      >
        <Image
          src="/booking.png"
          alt="Book a meeting"
          width={44}
          height={44}
          className="w-11 h-11 md:w-[100px] md:h-[100px]"
        />
      </button>
      <PopupModal
        url={calendlyUrl}
        onModalClose={() => setIsOpen(false)}
        open={isOpen}
        rootElement={rootElement}
      />
    </div>
  );
};

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-2 z-50 flex flex-col items-center gap-1 md:gap-2">
      <div className="group relative flex items-center">
        <div className="hidden md:block absolute right-full mr-2 whitespace-nowrap rounded-lg bg-gradient-to-r from-yellow-400 to-amber-500 px-4 py-2 text-white shadow-lg transition-all duration-300 ease-in-out group-hover:scale-105">
          <p className="text-sm font-bold tracking-wider">Book a call here</p>
          <div className="absolute -right-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 bg-amber-500"></div>
        </div>
        <CalendlyButton />
      </div>
      <div className="group relative flex items-center">
        <div className="hidden md:block absolute right-full mr-2 whitespace-nowrap rounded-lg bg-gradient-to-r from-sky-400 to-blue-500 px-4 py-2 text-white shadow-lg transition-all duration-300 ease-in-out group-hover:scale-105">
          <p className="text-sm font-bold tracking-wider">AI chat can help you</p>
          <div className="absolute -right-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 bg-blue-500"></div>
        </div>
        <ChatAssistant />
      </div>
    </div>
  );
};

export default FloatingButtons;

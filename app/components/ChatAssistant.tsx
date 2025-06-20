"use client";
import { useState, useRef, useEffect, useMemo } from "react";
import { useTheme } from "../context/theme-context";
import Image from "next/image";

// Avatar subcomponent
function Avatar({ type }: { type: "assistant" | "user" }) {
  if (type === "assistant") {
    return (
      <Image
        src="/profile.png"
        alt="Assistant Avatar"
        width={36}
        height={36}
        className="rounded-full border border-gray-300"
      />
    );
  }
  return (
    <span className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center border border-gray-400">
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#666"
        strokeWidth="2"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-2.5 3.5-4 8-4s8 1.5 8 4" />
      </svg>
    </span>
  );
}

// Loading dots subcomponent
function LoadingDots() {
  return (
    <span className="inline-block">
      <span className="animate-bounce" style={{ animationDelay: "0ms" }}>
        .
      </span>
      <span className="animate-bounce" style={{ animationDelay: "100ms" }}>
        .
      </span>
      <span className="animate-bounce" style={{ animationDelay: "200ms" }}>
        .
      </span>
    </span>
  );
}

// Chat bubble subcomponent
function ChatBubble({
  role,
  content,
  loading,
  styles,
}: {
  role: "user" | "assistant";
  content: string;
  loading?: boolean;
  styles: ReturnType<typeof getThemeStyles>;
}) {
  return (
    <div
      className={`flex items-end ${
        role === "user" ? "justify-end" : "justify-start"
      }`}
    >
      {role === "assistant" && (
        <div className="mr-2 flex-shrink-0">
          <Avatar type="assistant" />
        </div>
      )}
      <div
        className={`max-w-[75%] px-4 py-2 rounded-2xl shadow-md ${
          role === "user"
            ? styles.userBubble + " rounded-br-sm"
            : styles.assistantBubble + " rounded-bl-sm"
        } relative animate-fade-in`}
        style={{
          borderBottomRightRadius: role === "user" ? 8 : 24,
          borderBottomLeftRadius: role === "assistant" ? 8 : 24,
        }}
      >
        {loading ? (
          <LoadingDots />
        ) : (
          <span className="block whitespace-pre-line">{content}</span>
        )}
      </div>
      {role === "user" && (
        <div className="ml-2 flex-shrink-0">
          <Avatar type="user" />
        </div>
      )}
    </div>
  );
}

// Theme style helper
function getThemeStyles(theme: string) {
  return {
    modalBg:
      theme === "dark"
        ? "bg-neutral-900 bg-opacity-90 backdrop-blur-md border border-neutral-700"
        : "bg-white bg-opacity-90 backdrop-blur-md border border-neutral-200",
    inputBg:
      theme === "dark"
        ? "bg-neutral-900 text-neutral-100 placeholder:text-neutral-400"
        : "bg-white text-neutral-900 placeholder:text-neutral-500",
    userBubble: "bg-blue-600 text-white",
    assistantBubble:
      theme === "dark"
        ? "bg-neutral-800 text-neutral-100 border border-neutral-700"
        : "bg-neutral-200 text-neutral-900 border border-neutral-200",
    closeBtn:
      theme === "dark"
        ? "text-neutral-400 hover:text-neutral-100"
        : "text-neutral-400 hover:text-neutral-900",
    buttonBg:
      theme === "dark"
        ? "bg-neutral-800 text-neutral-100 border border-neutral-700"
        : "bg-neutral-200 text-neutral-900 border border-neutral-200",
    headerText: theme === "dark" ? "text-neutral-100" : "text-neutral-900",
  };
}

export default function ChatAssistant() {
  const { theme } = useTheme();
  const styles = useMemo(() => getThemeStyles(theme), [theme]);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<
    { role: string; content: string; loading?: boolean }[]
  >([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        inputRef.current?.focus();
      }, 100);
    }
  }, [open, messages.length]);

  // Always focus input when chat board is open
  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  });

  // Close chat on ESC key
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  // Show greeting when chat opens and no messages yet
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        { role: "assistant", content: "Hi! How can I help you today?" },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setMessages((msgs) => [
      ...msgs,
      { role: "user", content: input },
      { role: "assistant", content: "", loading: true },
    ]);
    setInput("");
    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });
    const data = await res.json();
    setMessages((msgs) => {
      // Replace the last loading assistant message with the real response
      const newMsgs = [...msgs];
      const idx = newMsgs.findIndex((m) => m.loading);
      if (idx !== -1) {
        newMsgs[idx] = { role: "assistant", content: data.reply };
      }
      return newMsgs;
    });
    setLoading(false);
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Chat Icon Button */}
      <div
        style={{ visibility: open ? "hidden" : "visible" }}
        className={`transition-opacity duration-300 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      >
        <div
          onClick={() => setOpen(true)}
          className="cursor-pointer hover:scale-110 transition-transform duration-300 rounded-full"
        >
          <Image
            src="/bot.gif"
            alt="Open chat"
            width={44}
            height={44}
            className="w-11 h-11 md:w-[100px] md:h-[100px] object-contain rounded-full"
            priority
          />
        </div>
      </div>

      {/* Modal Chat Board */}
      {open && (
        <div className="fixed w-[600px] bottom-2 right-6 z-50 flex items-end justify-end h-auto">
          <div
            className={`relative w-full max-w-md sm:max-w-lg h-[500px] sm:h-[600px] rounded-2xl shadow-2xl flex flex-col ${styles.modalBg} animate-bounce-in-modal`}
            style={{
              boxShadow:
                theme === "dark"
                  ? "0 8px 32px 0 rgba(31, 38, 135, 0.37)"
                  : "0 8px 32px 0 rgba(60, 60, 120, 0.10)",
              borderWidth: 1,
            }}
          >
            <div
              className={`flex items-center justify-between p-4 border-b font-bold text-lg ${styles.headerText}`}
            >
              <span>Let&apos;s talk</span>
              <div className="flex items-center gap-2">
                {/* Delete/Clear Button */}
                <button
                  onClick={() => {
                    setMessages([]);
                    setTimeout(() => inputRef.current?.focus(), 50);
                  }}
                  className={`text-xl font-bold rounded-full p-1 transition ${styles.closeBtn} focus:ring-2 focus:ring-blue-600 focus:outline-none`}
                  aria-label="Clear chat"
                  title="Clear chat"
                >
                  {/* Trash SVG */}
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 6h18" />
                    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                    <path d="M10 11v6" />
                    <path d="M14 11v6" />
                  </svg>
                </button>
                {/* Close Button */}
                <button
                  onClick={() => setOpen(false)}
                  className={`text-2xl font-bold rounded-full p-1 transition ${styles.closeBtn} focus:ring-2 focus:ring-blue-600 focus:outline-none`}
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="flex-1 p-4 overflow-y-auto space-y-3 scroll-hide">
              {messages.map((msg, i) => (
                <ChatBubble
                  key={i}
                  role={msg.role as "user" | "assistant"}
                  content={msg.content}
                  loading={msg.loading}
                  styles={styles}
                />
              ))}
              <div ref={messagesEndRef} />
            </div>
            <div className="flex border-t p-3 bg-transparent">
              <input
                ref={inputRef}
                className={`flex-1 p-3 outline-none text-base rounded-full shadow-sm transition ${styles.inputBg} focus:ring-2 focus:ring-blue-600 focus:outline-none`}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Ask me anything..."
                disabled={loading}
                aria-label="Type your message"
              />
              <button
                className={`ml-2 w-12 h-12 flex items-center justify-center rounded-full transition ${styles.buttonBg} shadow-md hover:scale-105 focus:ring-2 focus:ring-blue-600 focus:outline-none disabled:opacity-60`}
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                aria-label="Send message"
              >
                {loading ? (
                  <svg
                    className="animate-spin"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" strokeOpacity=".25" />
                    <path d="M22 12a10 10 0 0 1-10 10" />
                  </svg>
                ) : (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 2L11 13" />
                    <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ToastContext from "./context/toast-context";
import ActiveSectionContextProvider from "./context/section-context";
import { Analytics } from "@vercel/analytics/react";
import { ThemeToggleButton } from "./components/ui/button";
import { ThemeProvider } from "./context/theme-context";
import FloatingButtons from "./components/FloatingButtons";
import Script from "next/script";
import IpInfoLogger from "./components/IpInfoLogger";

const inter = Inter({ subsets: ["latin"] });

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Adrian Madrid",
  description: "Portfolio website for Adrian Madrid.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body
        className={`relative ${outfit.className} min-h-screen text-gray-50 flex flex-col items-center justify-center overflow-x-hidden w-full`}
      >
        <IpInfoLogger />
        <ThemeProvider>
          {/* Theme Toggle Button */}
          <div className="fixed top-[70px] md:top-6 right-4 z-50">
            <ThemeToggleButton />
          </div>
          <FloatingButtons />
          <ActiveSectionContextProvider>
            <Navbar />
            <ToastContext />
            <main className="w-full max-w-[1100px] px-4 mt-40 mb-10 flex flex-col gap-32">
              {children}
            </main>
            <Footer />
          </ActiveSectionContextProvider>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

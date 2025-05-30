import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/app/components/ui/toaster";
import { Toaster as Sonner } from "@/app/components/ui/sonner";
import { TooltipProvider } from "@/app/components/ui/tooltip";
import { ReactQueryProvider } from "./providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Front-End Developer | React & Tailwind Expert – Shekinah",
  description:
    "Shekinah is a results-driven front-end developer specializing in React and Tailwind CSS. I build lightning-fast, responsive websites that elevate brands and drive real business results.",
  openGraph: {
    title: "Front-End Developer | React & Tailwind Expert – Shekinah",
    description:
      "I create high-performing, visually engaging websites using React and Tailwind. Let’s build something impactful together.",
    url: "https://myportfolio-neon-alpha.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://myportfolio-neon-alpha.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shekinah Front-End Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Front-End Developer | React & Tailwind Expert – Shekinah",
    description:
      "I craft modern, fast websites with React & Tailwind. Let’s build your next digital experience.",
    images: ["https://yourdomain.com/twitter-card.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReactQueryProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {children}
          </TooltipProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}

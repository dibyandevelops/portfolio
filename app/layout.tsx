import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Dibyan Maharjan | Senior Full-Stack Engineer",
  description:
    "Dibyan Maharjan is a senior full-stack engineer and frontend specialist building React, Next.js, TypeScript, Elixir/Phoenix, and AI-augmented product systems.",
  keywords: [
    "Dibyan Maharjan",
    "senior full-stack engineer",
    "frontend engineer",
    "Next.js consultant",
    "React architecture",
    "Elixir Phoenix",
    "AI augmented development",
    "OpenAI Codex",
    "LocoXperts",
    "frontend architect",
    'software developer'
  ],
  authors: [{ name: "Dibyan Maharjan", url: "https://www.linkedin.com/in/dibyansoftwaredev" }],
  openGraph: {
    title: "Dibyan Maharjan · Senior Full-Stack Engineer",
    description:
      "Senior full-stack engineer, frontend specialist, and founder of LocoXperts with 5,000+ commits across production systems.",
    type: "website",
    url: "https://www.dibyan.com.np",
  },
  icons: {
    icon: "/dm-icon.svg",
    shortcut: "/dm-icon.svg",
    apple: "/dm-icon.svg",
  },
  metadataBase: new URL("https://www.dibyan.com.np"),
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
        {children}
      </body>
    </html>
  );
}

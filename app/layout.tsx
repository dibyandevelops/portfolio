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
  title: "Dibyan Maharjan | Frontend Engineer",
  description:
    "Dibyan Maharjan builds reliable frontend systems, leads product engineering teams, and documents the process across talks, writing, and hands-on mentorship.",
  keywords: [
    "Dibyan Maharjan",
    "frontend engineer",
    "Next.js consultant",
    "React architecture",
    "frontend architect",
    'software developer'
  ],
  authors: [{ name: "Dibyan Maharjan", url: "https://www.linkedin.com/in/dibyansoftwaredev" }],
  openGraph: {
    title: "Dibyan Maharjan · Frontend Engineer",
    description:
      "Simple notes on building resilient product teams, performant interfaces, and developer tooling.",
    type: "website",
    url: "https://www.dibyan.com.np",
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

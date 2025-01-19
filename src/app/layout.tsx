import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-spave-grotesk",
  weight: "700",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kunal",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.className} ${geistSans.variable} ${geistMono.variable} relative min-h-screen bg-customShade text-white antialiased`}
      >
        {/* Noisy background image */}
        <div className="fixed inset-0 z-10 bg-[url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')] bg-[length:109px] bg-repeat opacity-[0.06]" />
        {/* Semi-transparent overlay */}
        <div className="relative z-20 opacity-95">{children}</div>
      </body>
    </html>
  );
}

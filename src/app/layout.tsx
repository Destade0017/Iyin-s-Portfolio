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
  title: "Ajayi Enitan Fiyinfoluwa | Front-End Developer",
  description:
    "Personal portfolio of Ajayi Enitan Fiyinfoluwa, a front-end developer passionate about creating responsive, intuitive, and engaging web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth scroll-pt-20`}
    >
      <body className="min-h-full flex flex-col bg-[#FFFFFF] text-[#0B0D12] selection:bg-[#142B4A] selection:text-white">
        {children}
      </body>
    </html>
  );
}

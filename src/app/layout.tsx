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
  title: "Satyam Kumar Jha | Full-Stack Developer",
  description: "Portfolio of Satyam Kumar Jha, Full-Stack Developer",
  icons: {
    icon: "/photo.jpeg",   // 👈 your favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#050505] text-white font-sans selection:bg-blue-500/30">
        {children}
      </body>
    </html>
  );
}

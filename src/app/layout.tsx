import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import { ThemeScript } from "@/components/layout/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Retro Games",
  description: "Play your favorite retro games online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${inter.className} min-h-screen bg-gray-950`}>
        <Header />
        <div className="max-w-7xl mx-auto px-4">
          {children}
        </div>
      </body>
    </html>
  );
}

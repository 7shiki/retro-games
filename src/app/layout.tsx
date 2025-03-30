import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeScript } from "@/components/layout/ThemeToggle";
import GoogleAnalytics from '@/components/GoogleAnalytics'
import GoogleAdsense from '@/components/GoogleAdsense'
import SplashCursorWrapper from "@/components/SplashCursorWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Retro Games",
  description: "Play your favorite retro games online",
  robots: {
    index: true,
    follow: true
  },
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
        <GoogleAdsense CLIENT_ID="ca-pub-4294526989014116" />
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-900`}>
        {children}
        <GoogleAnalytics GA_MEASUREMENT_ID="G-SSG1FNP0LX" />
        <SplashCursorWrapper />
      </body>
    </html>
  );
}

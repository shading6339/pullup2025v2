import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";
import { Cherry_Bomb_One } from "next/font/google";
import { Button } from "@/components/ui/button";

const Cherry = Cherry_Bomb_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-cherry",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PulluP - サークル公式サイト",
  description: "PulluPサークルの公式ランディングページ",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${Cherry.variable} bg-card`}
      >
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
          {/* Footer */}
          <footer className="bg-card pt-4 pb-4 text-xs">
            <div className="mx-auto text-center">
              ©2025 <span className="font-cherry">PulluP</span> Team
            </div>
          </footer>
        </Suspense>
      </body>
    </html>
  );
}

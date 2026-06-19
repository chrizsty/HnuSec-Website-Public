import type React from "react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { AnimatedRouteTransition } from "@/components/animated-route-transition";
import { Providers } from "./providers";
import { PreventInspection } from "@/components/prevent-inspection";
import { InvertColorsToggle } from "@/components/invert-colors-toggle";
import ClickSpark from "@/components/ClickSpark";
// Import the React patch to ensure it runs before any component
import "@/lib/react-patch";

const BRAND = "#6b6bff";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "HNUSEC | Hainan University",
  description: "海南大学网络空间安全团队官方网站",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`} style={{ zoom: 1 }}>
        <Providers>
          <PreventInspection />
          <InvertColorsToggle />
          <ClickSpark sparkColor={BRAND} sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
            <AnimatedRouteTransition>{children}</AnimatedRouteTransition>
          </ClickSpark>
        </Providers>
      </body>
    </html>
  );
}

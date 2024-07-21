import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { NextUIProviders } from "@/utils/providers/next-ui-provider";
import { cn } from "@/utils/others/cn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "📖 Kata Kita Bersama",
  description: "Fullstack Blogging Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <NextUIProviders>
          <Header />
          {children}
        </NextUIProviders>
      </body>
    </html>
  );
}

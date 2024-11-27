import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/logo.svg",
      href: "/logo.svg",
    },
  ],
};

interface childrenProp {
  children: React.ReactNode;
}

export default function RootLayout({ children }: childrenProp) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

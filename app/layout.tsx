import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Planotic",
  description: "Task Management App That Turns Chaos Into Productivity",
  icons: [{
    url: '/logo.svg',
    href: '/logo.svg'
  }]
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

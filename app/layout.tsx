import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Glory Today - Show",
  description: "Listen to the Awesome show by The Glory Today - Show",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-js">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased v-dark dsn-ajax`}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400;500&amp;display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Antonio:wght@100..700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap" />
        <link rel="stylesheet" href="assets/css/plugins.css"/>
        <link rel="stylesheet" href="assets/css/style.css"/>
        <link rel="icon" href="assets/img/logo.png" sizes="32x32"/>
        <link rel="icon" href="assets/img/logo.png" sizes="192x192"/>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

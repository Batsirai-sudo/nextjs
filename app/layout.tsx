import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Loader } from "@/components/loader";
import { Container } from "@/components/container";
import { Header } from "@/components/header";
import ScriptLoader from "@/components/script-loader";

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
        <div className="absolute inset-0 bg-gradient-to-br from-[#020817] via-[#071330] to-black"></div>
        <main className="relative min-h-screen flex items-center justify-center px-6">
          <div className="text-center max-w-4xl">
            <img
              src="https://eu.chat-img.sintra.ai/942cdce3-cc97-4263-a621-93244f7a46a8/f04ccec4-afc0-4ac5-ac71-1ab8d91f66d9/The_Glory_Today_TGTS-02.png"
              className="w-72 mx-auto mb-12 bounce-slow"
              />
            
            <div className="mb-6 text-yellow-400 uppercase tracking-[0.4em]">
              Coming Soon
            </div>
            
            <h1 className="text-5xl md:text-7xl text-slate-300 font-extrabold leading-tight mb-8">
              Stories That Inspire Generations
            </h1>
            
            <p className="text-slate-300 text-xl max-w-2xl mx-auto mb-10">
              The Glory Today Show brings faith, family,
              and purpose into every conversation.
            </p>

             <a href="https://www.theglory.today/" class="bg-gradient-to-r from-[#D4A843] to-[#E8762D] text-[#0A0E1A] px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:opacity-90 transition-all hover:scale-105 animate-pulse-glow22 text-center">
               Visit Our Events Pages
             </a>
          </div>
        </main>
        {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400;500&amp;display=swap" /> */}
        {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Antonio:wght@100..700&display=swap" /> */}
        {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap" /> */}
        {/* <link rel="stylesheet" href="assets/css/plugins.css"/> */}
        {/* <link rel="stylesheet" href="assets/css/style.css"/> */}
        {/* <link rel="icon" href="assets/img/logo.png" sizes="32x32"/> */}
        {/* <link rel="icon" href="assets/img/logo.png" sizes="192x192"/> */}
        {/* <ScriptLoader /> */}
        {/* <Loader /> */}
        {/* <Header /> */}
        {/* <Container> */}
        
        {/* </Container>  */}
        {/* <Analytics /> */}
        {/* <SpeedInsights /> */}
        
      </body>
    </html>
  );
}

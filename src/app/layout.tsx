
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {sigmarOne} from "./ui/fonts"
import "@/app/ui/styles/globals.css";
import Navbar from "./ui/components/nav-bar";
import Footer from "./ui/components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "404-FOUND",
  description: "Tech blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sigmarOne.variable} antialiased` }
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

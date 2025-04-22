import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import Navbar from "~/components/cores/Navbar";
import Footer from "~/components/cores/Footer";
import WhatsappButton from "~/components/cores/Whatsapp";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Handito Natael",
  description: "Handito natael web portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${fontSans.variable} antialiased bg-base`}>
        {children}
        {/* <WhatsappButton /> */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}

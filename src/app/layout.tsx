import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bayraktar Forklift Kiralama",
  description: "Bayraktar: Forklift, şantiye, depo ve sanayi alanları için hızlı ve güvenilir forklift kiralama hizmeti.",
};

import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { FloatingCallButton } from '@/components/FloatingCallButton';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={`/favicon.png?v=${Date.now()}`} />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <FloatingWhatsApp />
        <FloatingCallButton />
      </body>
    </html>
  );
}

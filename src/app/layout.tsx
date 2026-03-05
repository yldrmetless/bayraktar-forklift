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
  icons: { icon: '/favicon.png', apple: '/favicon.png' }
};

import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
  title: "Fundamentos Next.JS",
  description: "Praticando fundamentos router Next.JS",
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ptBR">
      <body
        className={`${inter.className} antialiased bg-teal-50`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Fundamentos Next.JS",
  description: "Praticando fundamentos router Next.JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ptBR">
      <body
        className={`antialiased bg-teal-50`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}

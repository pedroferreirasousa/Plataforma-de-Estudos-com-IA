import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppProviders from "@/contexts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StudIA - Plataforma de Estudos com IA",
  description: "StudIA - Plataforma de Estudos com IA; feita para você que quer aprender rapidamente e eficientemente. Crie seu plano de estudos e evolua rapidamente com o uso de IA.",
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppProviders>
          {children}
        </AppProviders>
      </body>
    </html>
  );
}

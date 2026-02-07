import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Colossus Software | We build mobile apps that people love",
  description:
    "Colossus Software LLC builds mobile apps that people love. Creators of Brekitz, SuperPets, and Quizzi.",
  openGraph: {
    title: "Colossus Software",
    description: "We build mobile apps that people love",
    url: "https://colossussoftware.com",
    siteName: "Colossus Software",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}

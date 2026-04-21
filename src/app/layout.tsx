import type { Metadata } from "next";
import { Knewave, Inter, Fredoka } from "next/font/google";
import "./globals.css";

const knewave = Knewave({
  weight: "400",
  variable: "--font-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const fredoka = Fredoka({
  variable: "--font-banner",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Run What Ya Brung Family Picnic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${knewave.variable} ${inter.variable} ${fredoka.variable}`}>
        {children}
      </body>
    </html>
  );
}

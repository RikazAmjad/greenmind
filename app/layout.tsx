import type { Metadata } from "next";
import { Poppins, Bodoni_Moda } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Greenmind - Buy your dream plants",
  description: "Cloned landing page for Greenmind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={`${poppins.variable} ${bodoni.variable}`}>
        {children}
      </body>
    </html>
  );
}

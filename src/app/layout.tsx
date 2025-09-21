import type { Metadata } from "next";
import "./globals.css";
import { Rubik, Merriweather_Sans } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" });
const merriweatherSans = Merriweather_Sans({
  subsets: ["latin"],
  variable: "--font-merriweather-sans",
});

export const metadata: Metadata = {
  title: "Onyx",
  description: "The Obsidian for Neurodiverse",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${rubik.variable} ${merriweatherSans.variable} dark`}
    >
      <body className="bg-obsidian-bg text-obsidian-fg font-sans min-h-screen">
        {children}
      </body>
    </html>
  );
}

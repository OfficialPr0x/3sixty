import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const serif = DM_Serif_Display({
  weight: "400",
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "3Sixty North | Premium Property Care",
  description: "Sudbury's elite residential and commercial property care specialists. Snow plowing, lawn maintenance, and landscape design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${serif.variable} scroll-smooth antialiased bg-background text-foreground`}
    >
      <body className="min-h-screen flex flex-col font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

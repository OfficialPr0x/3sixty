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

const siteUrl = "https://3sixtynorthlawncareandlandscaping.com";
const siteTitle = "3Sixty North Lawn Care & Landscaping | Northern Ontario";
const siteDescription =
  "Proudly 100% Indigenous-owned. Dependable lawn care, landscaping, and snow plowing for residential, commercial, industrial, and municipal clients across Northern Ontario.";
const ogImage =
  "https://res.cloudinary.com/dkc1pmbma/image/upload/q_auto/f_auto/v1781417481/ChatGPT_Image_Jun_13_2026_11_58_09_PM_ggrmwr.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "500x500" },
    ],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "500x500" }],
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: "3Sixty North",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: ogImage,
        width: 1672,
        height: 941,
        alt: "3Sixty North Lawn Care & Landscaping — Reliable property care in every season across Northern Ontario.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImage],
  },
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

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adam Biotech — Certified Tumor Models for Drug Testing",
  description: "Adam Biotech builds certified human tumor models for cancer drug testing. Every model is individually verified before it ships.",
  openGraph: {
    title: "Adam Biotech — Certified Tumor Models for Drug Testing",
    description: "We build human tumor models for cancer drug testing and certify every one before it reaches your lab.",
    url: "https://www.adambiotech.com",
    siteName: "Adam Biotech",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

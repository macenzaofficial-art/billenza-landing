import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Billenza — Precision GST Invoicing & Compliance Engine",
  description:
    "India's dependable financial and GST billing SaaS. Generate tax invoices, e-Way bills, multi-currency invoices in 22 currencies, and one-click GSTR-1/3B filing returns.",
  keywords: [
    "GST billing software",
    "GST invoice generator",
    "GSTR-1 JSON export",
    "e-Way bill India",
    "SME invoicing SaaS",
    "Billenza",
  ],
  authors: [{ name: "Billenza Inc." }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

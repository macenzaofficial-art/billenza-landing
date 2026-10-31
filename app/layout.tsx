import type { Metadata, Viewport } from "next";
import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_MARKETING_URL || "https://billenza.com";

export const viewport: Viewport = {
  themeColor: "#1d1d1d",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Billenza — Precision GST Invoicing & Compliance Engine",
    template: "%s | Billenza",
  },
  description:
    "India's dependable financial and GST billing SaaS. Generate tax invoices, e-Way bills, multi-currency invoices in 22 currencies, and one-click GSTR-1/3B filing returns.",
  keywords: [
    "GST billing software",
    "GST invoice generator",
    "GSTR-1 JSON export",
    "e-Way bill India",
    "SME invoicing SaaS",
    "multi-currency GST invoice",
    "GST calculator India",
    "Billenza",
    "Macenza",
  ],
  authors: [{ name: "Macenza (Shashank Shubham)", url: baseUrl }],
  creator: "Macenza",
  publisher: "Macenza",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: "Billenza — Precision GST Invoicing & Compliance Engine",
    description:
      "India's dependable financial and GST billing SaaS. Generate tax invoices, e-Way bills, multi-currency invoices in 22 currencies, and one-click GSTR-1/3B filing returns.",
    url: baseUrl,
    siteName: "Billenza",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${baseUrl}/billenza-app.jpg`,
        width: 1200,
        height: 630,
        alt: "Billenza GST Invoicing and Compliance Console",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Billenza — Precision GST Invoicing & Compliance Engine",
    description:
      "India's dependable financial and GST billing SaaS. Generate tax invoices, e-Way bills, and one-click GSTR-1/3B filing returns.",
    images: [`${baseUrl}/billenza-app.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: "Billenza",
        url: baseUrl,
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/billenza-app.jpg`,
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-94146-60123",
          contactType: "customer service",
          email: "info@macenza.com",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "PL NO 16, SIDDARTHA NAGAR, Mayo Link Rd, Dhola Bhata Colony",
          addressLocality: "Ajmer",
          addressRegion: "Rajasthan",
          postalCode: "305001",
          addressCountry: "IN",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "Billenza",
        description: "Precision GST Invoicing and Compliance Platform for Indian Businesses",
        publisher: {
          "@id": `${baseUrl}/#organization`,
        },
        inLanguage: "en-IN",
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

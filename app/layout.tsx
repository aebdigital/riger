import type { Metadata } from "next";
import "./globals.css";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { CookieConsent } from "@/components/CookieConsent";
import { site } from "@/lib/site-data";
import { organizationJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  title: {
    default: site.seoTitle,
    template: "%s - Riger s.r.o."
  },
  description: site.seoDescription,
  keywords: site.keywords,
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  verification: {
    google: "trX23muXo7W8YEdruDuPedNHVvMVRe1wLA2Imd6h2Io"
  },
  openGraph: {
    title: site.seoTitle,
    description: site.seoDescription,
    url: site.url,
    siteName: "Prenájom lešenia - Riger",
    images: [
      {
        url: site.ogImage,
        width: 2048,
        height: 1536,
        alt: "Fasádne lešenie Riger s.r.o."
      }
    ],
    locale: site.locale,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: site.seoTitle,
    description: site.seoDescription,
    images: [site.ogImage]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sk">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd)
          }}
        />
        <ScrollReveal />
        <SiteHeader />
        {children}
        <CookieConsent />
        <SiteFooter />
      </body>
    </html>
  );
}

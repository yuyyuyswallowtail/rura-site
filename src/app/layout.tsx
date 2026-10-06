import type { Metadata } from "next";
import { Geist } from "next/font/google";
import type { ReactNode } from "react";
import { GridGuides } from "@/components/layout/grid-guides";
import { InspirationBadge } from "@/components/layout/inspiration-badge";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const base = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(base),
  title: "RURA — Industrial Decarbonization Technology",
  description:
    "RURA is a fictional climate-technology company developing electrified process technologies for lower-carbon materials manufacturing. A design-study portfolio project.",
  openGraph: {
    title: "RURA — Industrial Decarbonization Technology",
    siteName: "RURA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RURA — Industrial Decarbonization Technology",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <GridGuides />
        <InspirationBadge />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

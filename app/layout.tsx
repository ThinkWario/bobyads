import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bobyads.com"),
  title: {
    default: "BobyAds | Agencia de Publicidad Digital",
    template: "%s | BobyAds",
  },
  description: "Agencia de publicidad digital especializada en Meta Ads, Google Ads y Agentes de IA. Aumenta tu conversión y ROAS con campañas optimizadas.",
  keywords: ["publicidad digital", "meta ads", "google ads", "agentes IA", "agencia digital", "ecommerce", "conversión"],
  authors: [{ name: "BobyAds" }],
  creator: "BobyAds",
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://www.bobyads.com",
    siteName: "BobyAds",
    title: "BobyAds | Agencia de Publicidad Digital",
    description: "Agencia de publicidad digital especializada en Meta Ads, Google Ads y Agentes de IA.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "BobyAds" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BobyAds | Agencia de Publicidad Digital",
    description: "Agencia de publicidad digital especializada en Meta Ads, Google Ads y Agentes de IA.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={poppins.variable}>
      <body className="font-poppins antialiased">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

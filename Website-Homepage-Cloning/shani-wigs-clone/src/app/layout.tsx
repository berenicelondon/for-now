import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Berenice London - High Quality Human Hair Wigs & Hairpieces",
  description: "Berenice London provides high quality, ethically sourced 100% European and South American human hair wigs and hairpieces in Ealing, West London. Contact our London wigmakers and discuss with us to find your new look today, or contact us to learn more.",
  keywords: "human hair wigs, hairpieces, London, Ealing, Berenice London, ethically sourced hair, European hair, South American hair",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Berenice London",
              "url": "https://www.berenice.london",
              "logo": "https://www.berenice.london/logo.png",
              "description": "Berenice London provides high quality, ethically sourced 100% European and South American human hair wigs and hairpieces in Ealing, West London.",
              "sameAs": [
                "https://www.facebook.com/your-profile",
                "https://twitter.com/your-profile",
                "https://www.instagram.com/your-profile",
                "https://www.pinterest.com/your-profile"
              ]
            }
          ) }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <div className="bg-yellow-200 text-center p-2">
          <p className="font-bold text-lg">Website is under reconstruction</p>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}

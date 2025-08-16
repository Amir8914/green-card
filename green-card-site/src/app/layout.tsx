import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import { OrganizationStructuredData, WebSiteStructuredData } from "@/components/StructuredData";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Green Card Lottery Expert - DV Lottery Application Help",
  description: "Expert assistance with Green Card Lottery applications. Maximize your chances of winning the DV lottery with professional guidance from immigration consultants.",
  keywords: ["green card lottery", "DV lottery", "diversity visa", "immigration to USA", "visa lottery help"],
  authors: [{ name: "Green Card Lottery Consulting" }],
  metadataBase: new URL(process.env.SITE_URL || 'http://localhost:3000'),
  openGraph: {
    title: "Green Card Lottery Expert - DV Lottery Application Help",
    description: "Expert assistance with Green Card Lottery applications. Maximize your chances of winning the DV lottery.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Card Lottery Expert - DV Lottery Application Help",
    description: "Expert assistance with Green Card Lottery applications. Maximize your chances of winning the DV lottery.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const baseUrl = process.env.SITE_URL || 'http://localhost:3000'
  
  return (
    <html lang="en">
      <head>
        <OrganizationStructuredData 
          name="Green Card Lottery Expert"
          description="Expert assistance with Green Card Lottery applications. Maximize your chances of winning the DV lottery."
          url={baseUrl}
        />
        <WebSiteStructuredData url={baseUrl} />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-blue-600 text-white">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">Green Card Lottery Expert</h1>
              <Navigation />
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-800 text-white py-8 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 Green Card Lottery Expert. All rights reserved.</p>
            <div className="mt-4 space-x-4">
              <a href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</a>
              <a href="/terms-of-service" className="hover:text-gray-300">Terms of Service</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
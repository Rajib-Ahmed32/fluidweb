import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "./contexts/ThemeContext"
import Script from "next/script"
import AdSense from "./components/AdSense"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Responsive Design Demo | Master Adaptive Layouts",
  description:
    "Learn responsive web design techniques and create beautiful, adaptive layouts for any screen size. Explore our interactive demos and developer guides.",
  keywords: "responsive design, web development, CSS, HTML, JavaScript, adaptive layouts",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://responsive-design-demo.com",
    title: "Responsive Design Demo | Master Adaptive Layouts",
    description: "Learn responsive web design techniques and create beautiful, adaptive layouts for any screen size.",
    images: [
      {
        url: "https://responsive-design-demo.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Responsive Design Demo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Responsive Design Demo | Master Adaptive Layouts",
    description: "Learn responsive web design techniques and create beautiful, adaptive layouts for any screen size.",
    images: ["https://responsive-design-demo.com/twitter-image.jpg"],
    creator: "@responsivedesigndemo",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://responsive-design-demo.com" />
        <Script id="structured-data" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Responsive Design Demo",
              "url": "https://responsive-design-demo.com",
              "description": "Learn responsive web design techniques and create beautiful, adaptive layouts for any screen size.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://responsive-design-demo.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </Script>
        <AdSense />
      </head>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}


import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/lib/theme-provider"
import { LocaleProvider } from "@/lib/locale-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Antonio Vargas - Senior Software Architect",
  description:
    "Staff Engineer specializing in Java 21, Cloud Architecture, and Distributed Systems. 12+ years building scalable solutions.",
  keywords: ["Software Architect", "Java", "Cloud", "AWS", "Staff Engineer", "Microservices", "System Design"],
  authors: [{ name: "Antonio Vargas" }],
  creator: "Antonio Vargas",
  publisher: "Antonio Vargas",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://antoniovargas.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_APP_URL,
    title: "Antonio Vargas - Senior Software Architect",
    description: "Staff Engineer | Java 21 Expert | Cloud Architect",
    siteName: "Antonio Vargas Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antonio Vargas - Senior Software Architect",
    description: "Staff Engineer specializing in Java 21, Cloud Architecture, and Distributed Systems.",
    creator: "@antoniovargas",
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
  verification: {
    google: "google-site-verification-code", // Placeholder for actual code
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`font-sans antialiased bg-background text-foreground`}>
        <ThemeProvider>
          <LocaleProvider>
            {children}
            <Analytics />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

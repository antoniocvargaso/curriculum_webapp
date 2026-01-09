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
  keywords: ["Software Architect", "Java", "Cloud", "AWS", "Staff Engineer"],
  authors: [{ name: "Antonio Vargas" }],
  openGraph: {
    type: "website",
    title: "Antonio Vargas - Senior Software Architect",
    description: "Staff Engineer | Java 21 Expert | Cloud Architect",
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

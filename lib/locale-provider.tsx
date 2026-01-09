"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"
import { type Locale, getTranslation } from "@/config/i18n"

type LocaleContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: ReturnType<typeof getTranslation>
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem("locale") as Locale
    if (stored) {
      setLocaleState(stored)
    }
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    if (mounted) {
      localStorage.setItem("locale", newLocale)
    }
  }

  const t = getTranslation(locale)

  return <LocaleContext.Provider value={{ locale, setLocale, t }}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider")
  }
  return context
}

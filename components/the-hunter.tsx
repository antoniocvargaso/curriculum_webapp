"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { useLocale } from "@/lib/locale-provider"

export function TheHunter() {
  const { t } = useLocale()
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [category, setCategory] = useState("Architecture")

  useEffect(() => {
    // Show widget after 10 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Lead captured:", { email, category })
    // Mock: Send to backend
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5">
      <Card className="bg-zinc-900 border-zinc-800 p-6 w-80 shadow-2xl">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <p className="text-sm text-zinc-300 leading-relaxed">{t.hunter.message.replace("{category}", category)}</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsVisible(false)}
            className="text-zinc-500 hover:text-white -mt-2 -mr-2"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="email"
            placeholder={t.hunter.placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-zinc-950 border-zinc-800 text-white placeholder:text-zinc-600"
          />
          <Button type="submit" className="w-full bg-white text-black hover:bg-zinc-200">
            <Send className="mr-2 h-4 w-4" />
            {t.hunter.submit}
          </Button>
        </form>
      </Card>
    </div>
  )
}

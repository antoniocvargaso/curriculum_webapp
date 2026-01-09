"use client"

import { useState, useEffect } from "react"
import { Terminal } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useLocale } from "@/lib/locale-provider"
import identity from "@/config/identity.json"

export function TerminalNow() {
  const { t } = useLocale()
  const [typedIndex, setTypedIndex] = useState(0)
  const currentFocus = identity.currentFocus[0]

  useEffect(() => {
    if (typedIndex < currentFocus.description.length) {
      const timeout = setTimeout(() => {
        setTypedIndex(typedIndex + 1)
      }, 50)
      return () => clearTimeout(timeout)
    }
  }, [typedIndex, currentFocus.description.length])

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Terminal className="h-6 w-6 text-zinc-400" />
          <h2 className="text-3xl font-bold text-white">{t.terminal.title}</h2>
        </div>

        <Card className="bg-zinc-950 border border-zinc-800 p-6 font-mono text-sm">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-zinc-800">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-zinc-600 ml-4">antonio@fedora: ~</span>
          </div>

          {/* Terminal Content */}
          <div className="space-y-4">
            {identity.currentFocus.map((focus, index) => (
              <div key={index} className="space-y-1">
                <div className="flex items-start gap-2">
                  <span className="text-green-500">{t.terminal.prompt}</span>
                  <span className="text-blue-400">status</span>
                  <span className="text-zinc-500">--focus</span>
                </div>
                <div className="pl-6 space-y-1">
                  <div className="text-white">
                    <span className="text-cyan-400">→</span> {focus.title}
                  </div>
                  <div className="text-zinc-400 pl-4">
                    {index === 0 ? currentFocus.description.slice(0, typedIndex) : focus.description}
                    {index === 0 && typedIndex < currentFocus.description.length && (
                      <span className="animate-pulse">▊</span>
                    )}
                  </div>
                  <div className="pl-4 flex flex-wrap gap-2 mt-2">
                    {focus.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-zinc-900 text-zinc-400 rounded border border-zinc-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}

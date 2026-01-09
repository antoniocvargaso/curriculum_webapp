"use client"

import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useLocale } from "@/lib/locale-provider"
import identity from "@/config/identity.json"

export function Hero() {
  const { t } = useLocale()

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      {/* Glow effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto text-center">
        {/* Avatar */}
        <div className="mb-8 inline-block relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-xl animate-pulse" />
          <Avatar className="h-32 w-32 border-2 border-zinc-800 relative">
            <AvatarImage src={identity.avatar || "/placeholder.svg"} alt={identity.name} />
            <AvatarFallback className="bg-zinc-900 text-2xl font-mono">
              {identity.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Name & Title */}
        <div className="mb-6">
          <p className="text-sm text-zinc-500 mb-2 font-mono">{t.hero.greeting}</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-white">{identity.name}</h1>
          <p className="text-xl sm:text-2xl text-zinc-400 font-mono">{identity.headline}</p>
        </div>

        {/* Bio */}
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto mb-8 leading-relaxed">{identity.bio}</p>

        {/* Stats */}
        <div className="flex justify-center gap-8 mb-10">
          <div>
            <div className="text-2xl font-bold text-white font-mono">{identity.stats.yearsExperience}</div>
            <div className="text-sm text-zinc-500">Years Experience</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white font-mono">{identity.stats.projectsDelivered}</div>
            <div className="text-sm text-zinc-500">Projects</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white font-mono">{identity.stats.contributions}</div>
            <div className="text-sm text-zinc-500">Contributions</div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button size="lg" className="bg-white text-black hover:bg-zinc-200 font-medium">
            {t.hero.cta}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-zinc-800 text-white hover:bg-zinc-900 bg-transparent">
            {t.hero.contact}
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4">
          <a
            href={identity.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={identity.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={identity.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

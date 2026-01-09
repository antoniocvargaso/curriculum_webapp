"use client"

import { ArrowRight, Github, Linkedin, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useLocale } from "@/lib/locale-provider"
import identity from "@/config/identity.json"

export function Hero() {
  const { t } = useLocale()

  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
  }

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
          <Avatar className="h-64 w-64 border-4 border-zinc-800 relative">
            <AvatarImage src={identity.avatar || "/placeholder.svg"} alt={identity.name} />
            <AvatarFallback className="bg-zinc-900 text-5xl font-mono">
              {identity.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Name & Title */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground mb-2 font-mono">{t.hero.greeting}</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-foreground">{identity.name}</h1>
          <p className="text-xl sm:text-2xl text-muted-foreground font-mono">{identity.headline}</p>
        </div>

        {/* Bio */}
        <div className="max-w-2xl mx-auto mb-8">
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">{identity.bio}</p>

          {/* Interactive Email */}
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
          >
            <Mail className="h-4 w-4" />
            <span>{t.hero.email_prefix}</span>
            <span className="font-semibold underline decoration-dotted underline-offset-4 group-hover:decoration-solid">
              {identity.email}
            </span>
          </button>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-8 mb-10">
          <div>
            <div className="text-2xl font-bold text-foreground font-mono">{identity.stats.yearsExperience}</div>
            <div className="text-sm text-muted-foreground">{t.hero.stats.experience}</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-foreground font-mono">{identity.stats.projectsDelivered}</div>
            <div className="text-sm text-muted-foreground">{t.hero.stats.projects}</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-foreground font-mono">{identity.stats.contributions}</div>
            <div className="text-sm text-muted-foreground">{t.hero.stats.contributions}</div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
            {t.hero.cta}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border text-foreground hover:bg-muted bg-transparent"
            onClick={scrollToContact}
          >
            {t.hero.contact}
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4">
          <a
            href={identity.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={identity.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={identity.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

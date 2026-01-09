"use client"

import { Github, Linkedin, Twitter, Instagram, MessageCircle, BookOpen, Music } from "lucide-react"
import { Card } from "@/components/ui/card"
import identity from "@/config/identity.json"
import { useLocale } from "@/lib/locale-provider"

const mockGithubStats = {
  repos: 45,
  stars: 1,
  contributions: 235,
}

const mockBooks = [
  { title: "Clean Architecture", author: "Robert C. Martin" },
  { title: "blockchain y smart contracts la revolucion de la confianza", author: "Emiliano B. Ocariz " },
]

export function BentoGrid() {
  const { t } = useLocale()

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12">{t.bento.title}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* GitHub Stats */}
          <Card className="bg-card border-border p-6 hover:border-border/80 transition-colors lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Github className="h-5 w-5 text-muted-foreground" />
              <span className="text-foreground font-semibold">{t.bento.github}</span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="text-2xl font-bold text-foreground font-mono">{mockGithubStats.repos}</div>
                <div className="text-xs text-muted-foreground">{t.bento.repos}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground font-mono">{mockGithubStats.stars}</div>
                <div className="text-xs text-muted-foreground">{t.bento.stars}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground font-mono">{mockGithubStats.contributions}</div>
                <div className="text-xs text-muted-foreground">{t.bento.contributions}</div>
              </div>
            </div>
          </Card>

          {/* LinkedIn */}
          <a href={identity.socials.linkedin} target="_blank" rel="noopener noreferrer" className="block">
            <Card className="bg-blue-500/10 border-blue-500/20 p-6 h-full hover:bg-blue-500/20 transition-colors cursor-pointer">
              <Linkedin className="h-8 w-8 text-blue-400 mb-3" />
              <p className="text-foreground font-semibold">{t.bento.linkedin}</p>
              <p className="text-sm text-blue-300">{t.bento.linkedin_desc}</p>
            </Card>
          </a>

          {/* Twitter */}
          <a href={identity.socials.twitter} target="_blank" rel="noopener noreferrer" className="block">
            <Card className="bg-cyan-500/10 border-cyan-500/20 p-6 h-full hover:bg-cyan-500/20 transition-colors cursor-pointer">
              <Twitter className="h-8 w-8 text-cyan-400 mb-3" />
              <p className="text-foreground font-semibold">X / Twitter</p>
              <p className="text-sm text-cyan-300">{t.bento.twitter_desc}</p>
            </Card>
          </a>

          {/* Discord */}
          <Card className="bg-indigo-500/10 border-indigo-500/20 p-6 hover:bg-indigo-500/20 transition-colors cursor-pointer">
            <MessageCircle className="h-8 w-8 text-indigo-400 mb-3" />
            <p className="text-foreground font-semibold">Discord</p>
            <p className="text-sm text-indigo-300 font-mono">{identity.socials.discord}</p>
          </Card>

          {/* Instagram */}
          <a href={identity.socials.instagram} target="_blank" rel="noopener noreferrer" className="block">
            <Card className="bg-pink-500/10 border-pink-500/20 p-6 h-full hover:bg-pink-500/20 transition-colors cursor-pointer">
              <Instagram className="h-8 w-8 text-pink-400 mb-3" />
              <p className="text-foreground font-semibold">Instagram</p>
              <p className="text-sm text-pink-300">{t.bento.instagram_desc}</p>
            </Card>
          </a>

          {/* The Shelf - Books */}
          <Card className="bg-card border-border p-6 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="h-5 w-5 text-muted-foreground" />
              <span className="text-foreground font-semibold">{t.bento.books}</span>
            </div>
            <div className="space-y-3">
              {mockBooks.map((book, index) => (
                <div key={index} className="text-sm">
                  <p className="text-foreground font-medium">{book.title}</p>
                  <p className="text-muted-foreground text-xs">{book.author}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Spotify - Deep Work */}
          <Card className="bg-green-500/10 border-green-500/20 p-6 hover:bg-green-500/20 transition-colors cursor-pointer">
            <Music className="h-8 w-8 text-green-400 mb-3" />
            <p className="text-foreground font-semibold">Deep Work</p>
            <p className="text-sm text-green-300">{t.bento.playlist}</p>
          </Card>
        </div>
      </div>
    </section>
  )
}

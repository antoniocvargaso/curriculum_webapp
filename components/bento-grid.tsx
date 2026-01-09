"use client"

import { Github, Linkedin, Twitter, Instagram, MessageCircle, BookOpen, Music } from "lucide-react"
import { Card } from "@/components/ui/card"
import identity from "@/config/identity.json"

const mockGithubStats = {
  repos: 45,
  stars: 892,
  contributions: 2547,
}

const mockBooks = [
  { title: "Clean Architecture", author: "Robert C. Martin" },
  { title: "Designing Data-Intensive Applications", author: "Martin Kleppmann" },
]

export function BentoGrid() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12">Connect & Explore</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* GitHub Stats */}
          <Card className="bg-zinc-900/50 border-zinc-800 p-6 hover:border-zinc-700 transition-colors lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Github className="h-5 w-5 text-zinc-400" />
              <span className="text-white font-semibold">GitHub</span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="text-2xl font-bold text-white font-mono">{mockGithubStats.repos}</div>
                <div className="text-xs text-zinc-500">Repositories</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white font-mono">{mockGithubStats.stars}</div>
                <div className="text-xs text-zinc-500">Stars</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white font-mono">{mockGithubStats.contributions}</div>
                <div className="text-xs text-zinc-500">Contributions</div>
              </div>
            </div>
          </Card>

          {/* LinkedIn */}
          <a href={identity.socials.linkedin} target="_blank" rel="noopener noreferrer" className="block">
            <Card className="bg-blue-500/10 border-blue-500/20 p-6 h-full hover:bg-blue-500/20 transition-colors cursor-pointer">
              <Linkedin className="h-8 w-8 text-blue-400 mb-3" />
              <p className="text-white font-semibold">LinkedIn</p>
              <p className="text-sm text-blue-300">Professional network</p>
            </Card>
          </a>

          {/* Twitter */}
          <a href={identity.socials.twitter} target="_blank" rel="noopener noreferrer" className="block">
            <Card className="bg-cyan-500/10 border-cyan-500/20 p-6 h-full hover:bg-cyan-500/20 transition-colors cursor-pointer">
              <Twitter className="h-8 w-8 text-cyan-400 mb-3" />
              <p className="text-white font-semibold">X / Twitter</p>
              <p className="text-sm text-cyan-300">Tech insights</p>
            </Card>
          </a>

          {/* Discord */}
          <Card className="bg-indigo-500/10 border-indigo-500/20 p-6 hover:bg-indigo-500/20 transition-colors cursor-pointer">
            <MessageCircle className="h-8 w-8 text-indigo-400 mb-3" />
            <p className="text-white font-semibold">Discord</p>
            <p className="text-sm text-indigo-300 font-mono">{identity.socials.discord}</p>
          </Card>

          {/* Instagram */}
          <a href={identity.socials.instagram} target="_blank" rel="noopener noreferrer" className="block">
            <Card className="bg-pink-500/10 border-pink-500/20 p-6 h-full hover:bg-pink-500/20 transition-colors cursor-pointer">
              <Instagram className="h-8 w-8 text-pink-400 mb-3" />
              <p className="text-white font-semibold">Instagram</p>
              <p className="text-sm text-pink-300">Behind the scenes</p>
            </Card>
          </a>

          {/* The Shelf - Books */}
          <Card className="bg-zinc-900/50 border-zinc-800 p-6 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="h-5 w-5 text-zinc-400" />
              <span className="text-white font-semibold">The Shelf</span>
            </div>
            <div className="space-y-3">
              {mockBooks.map((book, index) => (
                <div key={index} className="text-sm">
                  <p className="text-white font-medium">{book.title}</p>
                  <p className="text-zinc-500 text-xs">{book.author}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Spotify - Deep Work */}
          <Card className="bg-green-500/10 border-green-500/20 p-6 hover:bg-green-500/20 transition-colors cursor-pointer">
            <Music className="h-8 w-8 text-green-400 mb-3" />
            <p className="text-white font-semibold">Deep Work</p>
            <p className="text-sm text-green-300">Coding playlist</p>
          </Card>
        </div>
      </div>
    </section>
  )
}

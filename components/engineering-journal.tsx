"use client"

import { FileText, ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/lib/locale-provider"

interface Article {
  id: string
  title: string
  excerpt: string
  category: "architecture" | "java" | "cloud"
  date: string
  readTime: string
}

const mockArticles: Article[] = [
  {
    id: "1",
    title: "Building Resilient Microservices with Circuit Breakers",
    excerpt:
      "Deep dive into implementing fault tolerance patterns in distributed systems using Java 21 and Spring Boot.",
    category: "architecture",
    date: "2024-01-15",
    readTime: "8 min",
  },
  {
    id: "2",
    title: "Virtual Threads: The Future of Java Concurrency",
    excerpt: "Exploring Project Loom and how virtual threads revolutionize high-throughput applications.",
    category: "java",
    date: "2024-01-10",
    readTime: "12 min",
  },
  {
    id: "3",
    title: "AWS Lambda at Scale: Lessons Learned",
    excerpt: "Performance optimization strategies and cost management for serverless architectures.",
    category: "cloud",
    date: "2024-01-05",
    readTime: "10 min",
  },
]

export function EngineeringJournal() {
  const { t } = useLocale()

  const categoryColors = {
    architecture: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    java: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    cloud: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  }

  return (
    <section id="journal" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950/50">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-3">{t.journal.title}</h2>
            <p className="text-zinc-400">Technical articles and thoughts on software engineering</p>
          </div>
          <Button variant="ghost" className="text-zinc-400 hover:text-white">
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-6">
          {mockArticles.map((article) => (
            <Card
              key={article.id}
              className="bg-zinc-900/50 border-zinc-800 p-6 hover:border-zinc-700 transition-all cursor-pointer group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-zinc-800/50 rounded-lg">
                  <FileText className="h-6 w-6 text-zinc-400" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge className={`${categoryColors[article.category]} border text-xs`}>
                      {t.journal.categories[article.category]}
                    </Badge>
                    <span className="text-xs text-zinc-500 font-mono">
                      {article.date} • {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{article.excerpt}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

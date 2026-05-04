"use client"

import { useState } from "react"
import { Search, Book, FileText, BarChart2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { useLocale } from "@/lib/locale-provider"
import kbData from "@/config/knowledge-base.json"

interface KBItem {
  id: string
  title: string
  type: "manual" | "article" | "analysis"
  category: string
  excerpt: string
  content: string
  tags: string[]
  date: string
}

const typeIcons = {
  manual: Book,
  article: FileText,
  analysis: BarChart2,
}

const typeColors = {
  manual: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  article: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  analysis: "bg-amber-500/10 text-amber-400 border-amber-500/20",
}

export function KnowledgeBase() {
  const { t } = useLocale()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")
  const [selectedItem, setSelectedItem] = useState<KBItem | null>(null)

  const filteredItems = (kbData as KBItem[]).filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesTab = activeTab === "all" || item.type === activeTab

    return matchesSearch && matchesTab
  })

  return (
    <section id="kb" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">{t.kb.title}</h2>
          <p className="text-zinc-400">{t.kb.subtitle}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <Input
              placeholder={t.kb.search}
              className="pl-10 bg-zinc-900/50 border-zinc-800"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full md:w-auto">
            <TabsList className="bg-zinc-900/50 border-zinc-800">
              <TabsTrigger value="all">{t.kb.all}</TabsTrigger>
              <TabsTrigger value="manual">{t.kb.manual}</TabsTrigger>
              <TabsTrigger value="article">{t.kb.article}</TabsTrigger>
              <TabsTrigger value="analysis">{t.kb.analysis}</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item) => {
            const Icon = typeIcons[item.type]
            return (
              <Card
                key={item.id}
                className="bg-zinc-900/50 border-zinc-800 p-6 hover:border-zinc-700 transition-all group cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${typeColors[item.type]}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className={`${typeColors[item.type]} text-[10px] uppercase tracking-wider`}>
                        {t.kb[item.type]}
                      </Badge>
                      <span className="text-[10px] text-zinc-500 font-mono">{item.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-sm mb-4 line-clamp-2">{item.excerpt}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-[10px] text-zinc-600 font-mono">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 border border-dashed border-zinc-800 rounded-lg">
            <p className="text-zinc-500">No results found for "{searchQuery}"</p>
          </div>
        )}
      </div>

      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
        <DialogContent className="max-w-3xl bg-zinc-950 border-zinc-800 max-h-[90vh] overflow-y-auto">
          {selectedItem && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="outline" className={typeColors[selectedItem.type]}>
                    {t.kb[selectedItem.type]}
                  </Badge>
                  <span className="text-xs text-zinc-500">{selectedItem.date}</span>
                </div>
                <DialogTitle className="text-2xl font-bold text-white mb-2">{selectedItem.title}</DialogTitle>
                <DialogDescription className="text-zinc-400 text-base italic">
                  {selectedItem.excerpt}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-8 prose prose-invert max-w-none">
                <div className="text-zinc-300 leading-relaxed whitespace-pre-wrap">
                  {selectedItem.content}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-wrap gap-2">
                {selectedItem.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-zinc-900 text-zinc-400 border-zinc-800">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

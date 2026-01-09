"use client"

import { Brain, Lightbulb, AlertCircle } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLocale } from "@/lib/locale-provider"

type LogStatus = "LEARNING" | "SOLVING" | "BLOCKED" | "EUREKA"

interface DevLog {
  id: string
  status: LogStatus
  title: string
  description: string
  code?: string
  timestamp: string
}

const mockLogs: DevLog[] = [
  {
    id: "1",
    status: "EUREKA",
    title: "Virtual Threads in Java 21",
    description: "Discovered optimal pattern for high-throughput I/O operations",
    code: "Thread.startVirtualThread(() -> {\n  // Process request\n  processRequest();\n});",
    timestamp: "2h ago",
  },
  {
    id: "2",
    status: "SOLVING",
    title: "Distributed Cache Consistency",
    description: "Implementing eventual consistency with Redis Streams",
    timestamp: "5h ago",
  },
  {
    id: "3",
    status: "LEARNING",
    title: "AWS EventBridge Patterns",
    description: "Exploring event-driven architectures for microservices",
    timestamp: "1d ago",
  },
]

const statusConfig = {
  LEARNING: { icon: Brain, color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
  SOLVING: { icon: AlertCircle, color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" },
  BLOCKED: { icon: AlertCircle, color: "bg-red-500/10 text-red-400 border-red-500/20" },
  EUREKA: { icon: Lightbulb, color: "bg-green-500/10 text-green-400 border-green-500/20" },
}

export function MentalSandbox() {
  const { t } = useLocale()

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950/50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">{t.sandbox.title}</h2>
          <p className="text-zinc-400">{t.sandbox.subtitle}</p>
        </div>

        <div className="space-y-6">
          {mockLogs.map((log, index) => {
            const status = statusConfig[log.status]
            const Icon = status.icon

            return (
              <Card key={log.id} className="bg-zinc-900/50 border-zinc-800 p-6 hover:border-zinc-700 transition-colors">
                <div className="flex items-start gap-4">
                  {/* Timeline */}
                  <div className="flex flex-col items-center">
                    <div className={`p-2 rounded-lg border ${status.color}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    {index < mockLogs.length - 1 && <div className="w-px h-full bg-zinc-800 mt-2" />}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge className={`${status.color} border`}>{log.status}</Badge>
                      <span className="text-xs text-zinc-500 font-mono">{log.timestamp}</span>
                    </div>

                    <h3 className="text-lg font-semibold text-white mb-2">{log.title}</h3>
                    <p className="text-zinc-400 text-sm mb-4">{log.description}</p>

                    {log.code && (
                      <pre className="bg-zinc-950 border border-zinc-800 rounded p-4 overflow-x-auto">
                        <code className="text-sm font-mono text-zinc-300">{log.code}</code>
                      </pre>
                    )}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

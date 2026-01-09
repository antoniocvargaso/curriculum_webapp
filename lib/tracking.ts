"use client"

// Mock analytics tracker for The Hunter
export class AnalyticsTracker {
  private static instance: AnalyticsTracker
  private interactions: Map<string, number> = new Map()

  private constructor() {
    this.init()
  }

  static getInstance(): AnalyticsTracker {
    if (!AnalyticsTracker.instance) {
      AnalyticsTracker.instance = new AnalyticsTracker()
    }
    return AnalyticsTracker.instance
  }

  private init() {
    if (typeof window === "undefined") return

    // Track scroll depth
    window.addEventListener("scroll", () => {
      this.trackInteraction("scroll")
    })

    // Track section views
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            this.trackInteraction(`section:${entry.target.id}`)
          }
        })
      },
      { threshold: 0.5 },
    )

    // Observe sections after DOM is ready
    setTimeout(() => {
      document.querySelectorAll("section[id]").forEach((section) => {
        observer.observe(section)
      })
    }, 1000)
  }

  trackInteraction(category: string) {
    const count = this.interactions.get(category) || 0
    this.interactions.set(category, count + 1)
    console.log("[v0] Tracked:", category, "Count:", count + 1)
  }

  getMostViewedCategory(): string {
    let maxCategory = "Architecture"
    let maxCount = 0

    this.interactions.forEach((count, category) => {
      if (category.startsWith("section:") && count > maxCount) {
        maxCount = count
        maxCategory = category.replace("section:", "")
      }
    })

    return maxCategory
  }

  getInteractions() {
    return Array.from(this.interactions.entries())
  }
}

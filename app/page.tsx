import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { TerminalNow } from "@/components/terminal-now"
import { MentalSandbox } from "@/components/mental-sandbox"
import { BentoGrid } from "@/components/bento-grid"
import { EngineeringJournal } from "@/components/engineering-journal"
import { TheHunter } from "@/components/the-hunter"
import { Contact } from "@/components/contact"

export default function Page() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <TerminalNow />
      <MentalSandbox />
      <BentoGrid />
      <EngineeringJournal />
      <Contact />
      <TheHunter />

      {/* Footer */}
      <footer id="contact" className="py-12 px-4 border-t border-border bg-card">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-muted-foreground text-sm">Built with Next.js 16, Tailwind CSS, and ❤️ • White Label Ready</p>
        </div>
      </footer>
    </main>
  )
}

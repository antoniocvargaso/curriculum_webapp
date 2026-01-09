"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Loader2, Mail, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { useLocale } from "@/lib/locale-provider"
import identity from "@/config/identity.json"

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
})

export function Contact() {
  const { t } = useLocale()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSuccess(true)
    form.reset()
    setTimeout(() => setIsSuccess(false), 5000)
  }

  return (
    <section id="contact-form" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.contact.title}</h2>
          <p className="text-lg text-muted-foreground">{t.contact.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="p-6 bg-card/50 border-border backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Email</p>
                  <a href={`mailto:${identity.email}`} className="text-foreground font-semibold hover:text-primary transition-colors">
                    {identity.email}
                  </a>
                </div>
              </div>
            </Card>

            <div className="prose prose-invert max-w-none text-muted-foreground">
              <p>
                I'm currently open to new opportunities and collaborations.
                Whether you have a question or just want to explore potential synergies,
                I'll try my best to get back to you!
              </p>
            </div>
          </div>

          {/* Form */}
          <Card className="p-6 md:p-8 bg-card border-border shadow-lg">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  {t.contact.form.name}
                </label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  {...form.register("name")}
                  className="bg-background/50"
                />
                {form.formState.errors.name && (
                  <p className="text-sm text-destructive">{t.contact.form.required}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  {t.contact.form.email}
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  {...form.register("email")}
                  className="bg-background/50"
                />
                {form.formState.errors.email && (
                  <p className="text-sm text-destructive">{t.contact.form.invalid_email}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  {t.contact.form.message}
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  {...form.register("message")}
                  className="min-h-[120px] bg-background/50"
                />
                {form.formState.errors.message && (
                  <p className="text-sm text-destructive">{t.contact.form.required}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {t.contact.form.sending}
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    {t.contact.form.submit}
                  </>
                )}
              </Button>

              {isSuccess && (
                <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-md text-green-500 text-sm text-center animate-in fade-in slide-in-from-bottom-2">
                  {t.contact.form.success}
                </div>
              )}
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}

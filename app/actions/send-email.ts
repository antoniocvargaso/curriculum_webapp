"use server"

import { ResendEmailService } from "@/lib/email/providers/resend"
import { z } from "zod"

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export type ContactFormState = {
  success: boolean
  message?: string
  errors?: {
    name?: string[]
    email?: string[]
    message?: string[]
  }
}

export async function sendEmail(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  })

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { name, email, message } = validatedFields.data

  try {
    const apiKey = process.env.RESEND_API_KEY
    const contactEmail = process.env.CONTACT_EMAIL

    if (!apiKey || !contactEmail) {
      console.error("Missing configuration: RESEND_API_KEY or CONTACT_EMAIL")
      return {
        success: false,
        message: "Server configuration error. Please try again later.",
      }
    }

    const emailService = new ResendEmailService(apiKey, "onboarding@resend.dev", contactEmail)
    await emailService.sendEmail({ name, email, message })

    return {
      success: true,
      message: "Message sent successfully!",
    }
  } catch (error) {
    console.error("Failed to send email:", error)
    return {
      success: false,
      message: "Failed to send message. Please try again.",
    }
  }
}

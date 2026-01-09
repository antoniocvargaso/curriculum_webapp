import { Resend } from "resend"
import { EmailPayload, EmailService } from "../service"

export class ResendEmailService implements EmailService {
  private resend: Resend
  private fromEmail: string
  private toEmail: string

  constructor(apiKey: string, fromEmail: string = "onboarding@resend.dev", toEmail: string) {
    if (!apiKey) throw new Error("Resend API Key is required")
    if (!toEmail) throw new Error("Destination email is required")

    this.resend = new Resend(apiKey)
    this.fromEmail = fromEmail
    this.toEmail = toEmail
  }

  async sendEmail(payload: EmailPayload): Promise<void> {
    const { name, email, message } = payload

    try {
      await this.resend.emails.send({
        from: this.fromEmail,
        to: this.toEmail,
        replyTo: email,
        subject: `New Contact Form Message from ${name}`,
        html: `
          <div>
            <h1>New Message from ${name}</h1>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
          </div>
        `,
      })
    } catch (error) {
      console.error("Error sending email via Resend:", error)
      throw new Error("Failed to send email")
    }
  }
}

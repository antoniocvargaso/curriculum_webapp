export interface EmailPayload {
  name: string
  email: string
  message: string
}

export interface EmailService {
  sendEmail(payload: EmailPayload): Promise<void>
}

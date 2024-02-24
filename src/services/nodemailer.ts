import nodemailer from "nodemailer"
import { env } from "@/env"

const transporter = nodemailer.createTransport({
  host: env.MAIL_HOST,
  port: Number(env.MAIL_PORT),
  auth: {
    user: env.MAIL_USER,
    pass: env.MAIL_PASS
  }
})

export function send(to: string, subject: string, text: string) {
  transporter.sendMail({
    from: "contato@pipocaagil.com",
    to,
    subject,
    text
  })
}

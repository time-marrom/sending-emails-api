import "dotenv/config"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
})

export function send(to, subject, text) {
  transporter.sendMail({
    from: "contato@pipocaagil.com",
    to,
    subject,
    text
  })
}

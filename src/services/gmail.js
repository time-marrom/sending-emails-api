import "dotenv/config"
import nodemailer from "nodemailer"

export const gmail = nodemailer.createTransport({
  host: process.env.GMAIL_HOST,
  port: Number(process.env.GMAIL_PORT),
  // secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }
})

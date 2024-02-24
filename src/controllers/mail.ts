import { send } from "@/services/nodemailer"
import { Request, Response } from "express"

export function sendMail(req: Request, res: Response) {
  const { to, subject, text } = req.body as IMailRequest
  send(to, subject, text)
  return res.status(200).json({ message: "Mail sent" })
}

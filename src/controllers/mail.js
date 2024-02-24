import { send } from "../services/nodemailer.js"

export function sendMail(req, res) {
  const { to, subject, text } = req.body
  send(to, subject, text)
  return res.status(200).json({ message: "Mail sent" })
}

import { gmail } from "../services/gmail.js"
import { mentorConfirmation } from "../services/mail.js"

export function sendMentorConfirmation(req, res) {
  const { to, name } = req.body
  mentorConfirmation(gmail, { to, name, from: "timemarromdevs@gmail.com" })
  return res.status(200).json({ message: "E-mail enviado para " + to })
}

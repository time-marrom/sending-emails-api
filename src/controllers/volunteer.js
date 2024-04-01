import { gmail } from "../services/gmail.js"
import { volunteerConfirmation } from "../services/mail.js"

export function sendVolunteerConfirmation(req, res) {
  const { to, name } = req.body
  volunteerConfirmation(gmail, { to, name, from: "timemarromdevs@gmail.com" })
  return res.status(200).json({ message: "E-mail enviado para " + to })
}

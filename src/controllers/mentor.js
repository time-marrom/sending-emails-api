import { mentorConfirmation } from "../services/nodemailer.js"

export function sendMentorConfirmation(req, res) {
  const { to, name } = req.body
  mentorConfirmation(to, name)
  return res.status(200).json({ message: "Mail sent" })
}

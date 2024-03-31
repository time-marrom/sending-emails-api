import { volunteerConfirmation } from "../services/nodemailer.js"

export function sendVolunteerConfirmation(req, res) {
  const { to, name } = req.body
  volunteerConfirmation(to, name)
  return res.status(200).json({ message: "Mail sent" })
}

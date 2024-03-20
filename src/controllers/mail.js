import { send } from "../services/nodemailer.js"

export function sendMail(req, res) {
  const { to, name } = req.body
  send(to, name)
  return res.status(200).json({ message: "Mail sent" })
}

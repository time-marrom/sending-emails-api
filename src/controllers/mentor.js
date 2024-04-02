import { mentorConfirmation } from "../services/gmail.js"

export async function sendMentorConfirmation(req, res) {
  const { to, name } = req.body
  const info = await mentorConfirmation(to, name)
  return res.status(200).json(info)
}

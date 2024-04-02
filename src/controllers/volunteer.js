import { volunteerConfirmation } from "../services/gmail.js"

export async function sendVolunteerConfirmation(req, res) {
  const { to, name } = req.body
  const info = await volunteerConfirmation(to, name)
  return res.status(200).json(info)
}

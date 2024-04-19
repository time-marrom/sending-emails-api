import { contact } from "../services/gmail.js"

export async function sendContact(req, res) {
  const info = await contact(req.body)
  return res.status(200).json(info)
}

import { certificate } from "../services/gmail.js"

export async function sendCertificate(req, res) {
  const info = await certificate(req.body)
  return res.status(200).json(info)
}

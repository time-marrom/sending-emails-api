import { Router } from "express"
import { sendMail } from "./controllers/mail.js"
import { sendMentorConfirmation } from "./controllers/mentor.js"

export const routes = Router()

routes.post("/mail", sendMail)
routes.post("/mentor", sendMentorConfirmation)
routes.get("/", (_req, res) => res.json({ message: "© 2023 - Time Marrom" }))

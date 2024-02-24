import { Router } from "express"
import { sendMail } from "./controllers/mail"

export const routes = Router()

routes.post("/mail", sendMail)
routes.get("/", (_req, res) => res.json({ message: "© 2023 - Time Marrom" }))

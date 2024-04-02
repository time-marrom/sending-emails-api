import { Router } from "express"
import { sendVolunteerConfirmation } from "./controllers/volunteer.js"

export const routes = Router()

routes.post("/mentor", sendMentorConfirmation)
routes.post("/volunteer", sendVolunteerConfirmation)
routes.get("/", (_req, res) => res.json({ message: "© 2023 - Time Marrom" }))

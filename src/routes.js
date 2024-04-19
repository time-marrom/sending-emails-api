import { Router } from "express"
import { sendVolunteerConfirmation } from "./controllers/volunteer.js"
import { sendMentorConfirmation } from "./controllers/mentor.js"
import { sendCertificate } from "./controllers/certificate.js"
import { sendContact } from "./controllers/contact.js"

export const routes = Router()

routes.post("/contact", sendContact)
routes.post("/certificate", sendCertificate)
routes.post("/mentor", sendMentorConfirmation)
routes.post("/volunteer", sendVolunteerConfirmation)
routes.get("/", (_req, res) => res.json({ message: "© 2023 - Time Marrom" }))

import "dotenv/config"
import { z } from "zod"

const envSchema = z.object({
  PORT: z.string(),
  MAIL_HOST: z.string(),
  MAIL_PORT: z.string(),
  MAIL_USER: z.string(),
  MAIL_PASS: z.string(),
  MAIL_FROM: z.string().email()
})

export const env = envSchema.parse(process.env)

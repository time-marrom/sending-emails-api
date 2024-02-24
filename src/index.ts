import { env } from "@/env"
import { routes } from "@/routes"
import cors from "cors"
import express from "express"

const PORT = Number(env.PORT)

const server = express()
server.use(express.json())
server.use(routes)
server.use(cors())

async function bootstrap() {
  try {
    server.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`))
  } catch (error) {
    process.exit(1)
  }
}

bootstrap()

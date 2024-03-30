import cors from "cors"
import "dotenv/config"
import express from "express"
import { routes } from "./routes.js"

const PORT = Number(process.env.PORT)

const corsConfig = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
  methods: "GET, POST, PUT, DELETE",
  credentials: true
}

const server = express()
server.use(express.json())
server.use(routes)
server.use(cors(corsConfig))

async function bootstrap() {
  try {
    server.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`))
  } catch (error) {
    process.exit(1)
  }
}

bootstrap()

import cors from "cors"
import "dotenv/config"
import express from "express"
import { routes } from "./routes.js"

const PORT = Number(process.env.PORT)

const corsConfig = {
  origin: "*",
  optionsSuccessStatus: 200,
  methods: "GET, POST",
  credentials: true
}

const server = express()
server.use(cors(corsConfig))
server.use(express.json())
server.use(routes)

async function bootstrap() {
  try {
    server.listen(PORT, () => console.log("Server running! 🚀"))
  } catch (error) {
    process.exit(1)
  }
}

bootstrap()

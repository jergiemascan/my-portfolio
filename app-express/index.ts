import express, { Request, Response } from "express"
import bodyParser from "body-parser"
import cors from "cors"
import dotenv from "dotenv"
import { sendMessage } from "./sendEmail"
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

app.use("/", sendMessage)

app.use((error: Error, req: Request, res: Response) => {
  res.status(500).json({ message: error.message })
})

const PORT = process.env.PORT || 3002
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})

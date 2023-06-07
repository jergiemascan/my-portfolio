import express, { Request, Response } from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import cors from "cors"
import dotenv from "dotenv"
import { sendMessage } from "./sendEmail"
import { projects } from "./getProjects"
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

app.use("/", sendMessage)
app.use("/", projects)

app.use((error: Error, req: Request, res: Response) => {
  res.status(500).json({ message: error.message })
})

const db = async () => {
  try {
    const dbURL = process.env.DATABASE
    if (!dbURL) {
      throw new Error("DATABASE environment variable is not defined")
    }
    await mongoose.connect(dbURL)
    console.log("Connected to DB")
  } catch (error: unknown) {
    console.log(error)
    throw error
  }
}
db();

const PORT = process.env.PORT || 3002
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})

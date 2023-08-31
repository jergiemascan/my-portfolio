import { Request, Response } from "express"
import { Router } from "express"
import nodemailer from "nodemailer"
import dotenv from "dotenv"
const router = Router()
dotenv.config()

interface Data {
  name: string
  email: string
  message: string
  to: string
}

router.post("/sendMessage", async (req: Request, res: Response) => {
  try {
    const { name, email, message }: Data = req.body

    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD,
      },
    })

    transporter.verify(error => {
      if (error) {
        console.log(error)
      } else {
        console.log("Ready to Send")
      }
    })

    const emailSender = {
      from: email,
      to: process.env.USER_EMAIL,
      subject: `Contact me portfolio ${name}`,
      html: `<div>
              <p>From: ${name}</p>
              <p>Senders email address: ${email}</p>
              <p>Senders message: ${message}</p>
            </div>`,
    }

    await transporter.sendMail(emailSender, (error: Error | null) => {
      if (error) {
        res.status(500).json({ message: error.message })
      } else {
        res.status(200).json({ message: "Message has been sent" })
      }
    })
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" })
  }
})
export const sendMessage = router

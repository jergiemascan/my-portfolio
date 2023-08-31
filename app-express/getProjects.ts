import { Router } from "express"
import mongoose from "mongoose"
import { Request, Response } from "express"
import { ProjectSchema } from "./model/projectModel"
import dotenv from "dotenv"
const router = Router()
dotenv.config()

router.get("/projects", async (req: Request, res: Response) => {
  try {
    const ProjectModel = mongoose.model("Project", ProjectSchema)
    res.json(await ProjectModel.find())
  } catch (error) {
    res.json({ message: error })
  }
})
export const projects = router

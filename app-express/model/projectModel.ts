import mongoose from "mongoose"

export const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  desc: { type: String, required: true },
})

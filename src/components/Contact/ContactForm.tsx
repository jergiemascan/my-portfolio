import React, { FormEvent, useState, ChangeEvent } from "react"
import axios from "axios"
import "./ContactForm.css"
import Navbar from "../Navbar/Navbar"

type FormData = {
  name: string
  email: string
  message: string
}
type FormStatus = {
  isError: boolean
  message: string
}
const ContactForm = () => {
  const [status, setStatus] = useState<FormStatus>({
    isError: false,
    message: "",
  })
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      const response = await axios.post(
        "http://localhost:5004/sendMessage",
        formData
      )
      if (response?.status === 200) {
        setStatus({ isError: false, message: "Message sent successfully!" })
        setFormData({ name: "", email: "", message: "" })
      }
    } catch (error) {
      setStatus({
        isError: true,
        message: "Failed to send message. Please try again.",
      })
    }
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="heading">
          <div>
            <h1>
              If you’d like to chat about a project or just have question,
              please fill in the form below.
            </h1>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inner-container">
            <div className="input-wrapper">
              <label htmlFor="name">Name</label>
              <input
                className="form-input"
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
              ></input>
            </div>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input
                className="form-input"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
              ></input>
            </div>
          </div>
          <div className="wrapper">
            <div className="message-wrapper">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleInputChange}
                className="text-area"
                rows={10}
              ></textarea>
            </div>
            <div className="button-wrapper">
              {status && (
                <strong
                  style={{ color: status.isError === false ? "green" : "red" }}
                >
                  {status.message}
                </strong>
              )}
            </div>
            <div className="button-wrapper">
              <button className="btn" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default ContactForm

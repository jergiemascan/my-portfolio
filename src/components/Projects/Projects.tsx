import axios from "axios"
import React, { useEffect, useState } from "react"
import "./Projects.css"

type DbData = {
  name: string
  url: string
  desc: string
}
type FormStatus = {
  isError: boolean
  message: string
}

const Projects = () => {
  const [projects, setProjects] = useState<DbData[]>([])
  const [status, setStatus] = useState<FormStatus>({
    isError: false,
    message: "",
  })
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:5004/projects")
        if (response.data.length === 0) {
          setStatus({
            isError: false,
            message: "No projects found",
          })
        }
        setProjects(response.data)
      } catch (error) {
        setStatus({
          isError: true,
          message: "Problem in fetching projects!",
        })
      }
    }
    fetchProjects()
  }, [])

  return (
    <div className="container project-wrapper">
      <div className="project-header">
        <h2>My Recent Work</h2>
        <h3>Here are a few past design projects I've worked on.</h3>
      </div>
      <div className="projects">
        {projects ? (
          projects.map(project => (
            <div key={project.name} className="project-list">
              <h2>{project.name}</h2>
              <p>{project.desc}</p>
              <a className="btn" href={project.url}>
                Visit Website
              </a>
            </div>
          ))
        ) : (
          <p>No projects yet</p>
        )}
      </div>
      {status && (
        <strong style={{ color: status.isError === false ? "green" : "red" }}>
          {status.message}
        </strong>
      )}
    </div>
  )
}

export default Projects

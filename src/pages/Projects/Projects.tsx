import React from "react"
import * as S from "./Projects.styles"
import { ProjectLists } from "./ProjectLists"
import { OngoingProjects } from "./OngoingProjects"

const Projects = () => {
  return (
    <>
      <OngoingProjects />
      <S.Section className="section">
        <S.ProjectHeader>
          <h1>My Projects</h1>
          <h2>Here are a few past projects I've worked on</h2>
        </S.ProjectHeader>

        <S.ProjectContainer>
          {ProjectLists.map(project => {
            return (
              <S.Figure key={project?.projectName}>
                <S.Image
                  src={project?.image || "null"}
                  alt={project.projectName || "Image of a project"}
                />

                <S.Figcaption>
                  <h3>{project?.projectName}</h3>
                </S.Figcaption>

                <S.Overlay>
                  <p>{project?.description}</p>
                  <S.ProjectDescription>
                    {project?.link && (
                      <S.ProjectLink
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="site external link"
                      >
                        <S.SiteIcon>{project?.siteIcon}</S.SiteIcon>
                      </S.ProjectLink>
                    )}

                    <S.ProjectLink
                      href={project?.repoURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="github external link"
                    >
                      <S.GithubIcon>{project?.githubIcon}</S.GithubIcon>
                    </S.ProjectLink>
                  </S.ProjectDescription>
                </S.Overlay>
              </S.Figure>
            )
          })}
        </S.ProjectContainer>
      </S.Section>
    </>
  )
}

export default Projects

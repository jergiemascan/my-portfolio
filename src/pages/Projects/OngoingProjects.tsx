import React from "react"
import * as S from "./Projects.styles"
import { OngoingProjectLists } from "./OngoingProjectList"

export const OngoingProjects = () => {
  return (
    <S.Section className="section">
      <S.ProjectHeader>
        <h1>Currently working on</h1>
        <h2>Here is the list of some ongoing projects</h2>
      </S.ProjectHeader>

      <S.ProjectContainer>
        {OngoingProjectLists.map(project => {
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
  )
}

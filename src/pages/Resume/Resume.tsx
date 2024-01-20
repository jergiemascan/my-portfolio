import React from "react"
import { Experience } from "./Experience"
import { Education } from "./Education"
import * as S from "./Resume-styles"

const Resume = () => {
  return (
    <S.ResumeContainer className="section">
      <S.Content>
        <div>
          <h1>Experience</h1>
          <hr></hr>
        </div>
        {Experience.map(exp => (
          <div key={exp.company}>
            <h2>{exp.title}</h2>
            <span>
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="site external link"
              >
                {exp.company}
              </a>
              {" • "}
              <p>{exp.location}</p>
            </span>
            <p>{exp.date}</p>
            <S.Description>{exp.jobDescription}</S.Description>
          </div>
        ))}
      </S.Content>

      <S.Content>
        <div>
          <h1>Education</h1>
          <hr></hr>
        </div>
        {Education.map(course => (
          <div key={course.course}>
            <h2>{course.course}</h2>
            <span>
              <p>{course.school}</p>
              {" • "}
              <p>{course.location}</p>
            </span>
            <p>{course.date}</p>
            <S.Description>{course.description}</S.Description>
          </div>
        ))}
      </S.Content>

      <a
        href="https://drive.google.com/file/d/1Zh-te_ORRucZrVIrO58hFXoHgEpQC-N7/view?usp=sharing"
        target="_blank"
        rel="noopenner noreferrer "
      >
        Resume
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          fill="var(--secondary-color)"
          height="1rem"
          viewBox="0 0 194.818 194.818"
        >
          <path d="M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728 c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04 C194.818,6.19,190.789,2.161,185.818,2.161z"></path>
          <path d="M149,77.201c-4.971,0-9,4.029-9,9v88.456H18v-122h93.778c4.971,0,9-4.029,9-9s-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v140 c0,4.971,4.029,9,9,9h140c4.971,0,9-4.029,9-9V86.201C158,81.23,153.971,77.201,149,77.201z"></path>
        </svg>
      </a>
    </S.ResumeContainer>
  )
}

export default Resume

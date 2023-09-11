import React from "react"
import { TechnologiesList } from "./TechnologiesList"
import * as S from "./Technologies.styles"

const Technologies = () => {
  return (
    <S.Section className="section">
      <S.GridContainer>
        {TechnologiesList.map((tech, index) => (
          <S.GridContent key={tech.title}>
            <S.IconWrapper>
              <svg
                className="svg-inline--fa fa-circle fa-stack-2x has-text-success"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="circle"
                role="img"
                viewBox="0 0 512 512"
                data-fa-i2svg=""
              >
                <path
                  fill=" var(--primary-color)"
                  d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
                ></path>
              </svg>
              <S.Icon>{tech.icon}</S.Icon>
            </S.IconWrapper>

            <h2>{tech.title}</h2>
            <ul>
              {tech.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </S.GridContent>
        ))}
      </S.GridContainer>
    </S.Section>
  )
}

export default Technologies

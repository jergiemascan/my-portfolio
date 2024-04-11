import React from "react"
import { useLocation } from "react-router-dom"
import * as S from "./Contact.styles"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

const Contact = () => {
  const location = useLocation()

  return (
    <S.Section noBorderTop={location.pathname === "/contacts"}>
      <div className="section">
        <S.ContactHeader>
          <h1>Get in Touch</h1>
          <h2>
            If you’d like to chat about a project or question, please send an
            email.
          </h2>
        </S.ContactHeader>

        <S.LinkContainer>
          <S.Links
            href="mailto:jiji.mascan@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="e-mail external link"
          >
            <FaEnvelope size={24} color="var(--secondary-color)" />
          </S.Links>
          <S.Links
            href="https://github.com/jergiemascan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="site external link"
          >
            <FaGithub size={24} color=" var(--secondary-color)" />
          </S.Links>
          <S.Links
            href="https://www.linkedin.com/in/jergie-jiji-mascan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="site external link"
          >
            <FaLinkedin size={24} color=" var(--secondary-color)" />
          </S.Links>
        </S.LinkContainer>
      </div>
    </S.Section>
  )
}

export default Contact

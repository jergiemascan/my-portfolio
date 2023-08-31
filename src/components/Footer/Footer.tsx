import React from "react"
import styled from "styled-components"

const FooterContainer = styled.footer`
  background-color: var(--secondary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
  margin-top: auto;
  color: var(--white-color);
`
const Paragraph = styled.p`
  font-weight: 500;
  font-family: "Inter";
  font-size: 12px;
`

const Footer = () => {
  return (
    <FooterContainer>
        <Paragraph>© 2023 - present by Jergie Jiji Mascan </Paragraph>
    </FooterContainer>
  )
}

export default Footer

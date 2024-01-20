import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2023 - present by Jergie Jiji Mascan </p>
    </FooterContainer>
  )
}
export default Footer

const FooterContainer = styled.footer`
  background-color: var(--secondary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
  margin-top: auto;
  color: var(--white-color);

  p {
    font-weight: 500;
    font-family: "Inter";
    font-size: 12px;
  }
`

import React from "react"
import styled from "styled-components"
import logo from "../../../assets/images/logo.jpeg"
import { Link } from "react-router-dom"
import { BREAKPOINT_MIN_WIDTH } from "../../../assets/styles/Breakpoints"
const Logo = () => {
  return (
    <Container>
      <Link to={"/"}>
        <img src={logo} alt="logo" loading="lazy" />
      </Link>
    </Container>
  )
}

export default Logo
const Container = styled.div`
  img {
    max-width: 70%;

    ${BREAKPOINT_MIN_WIDTH[2]} {
      max-width: 90%;
    }
    ${BREAKPOINT_MIN_WIDTH[3]} {
      max-width: 100%;
    }
  }
`

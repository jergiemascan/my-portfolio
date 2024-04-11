import React from "react"
import styled from "styled-components"
import logo from "../../../assets/images/logo.png"
import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <Link to={"/"}>
      <Image src={logo} alt="logo" loading="lazy" />
    </Link>
  )
}

export default Logo
const Image = styled.img`
  width: 4rem;
  height: auto;
  margin-top: 0.5rem;
`

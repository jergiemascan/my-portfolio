import React from "react"
import HorizontalNav from "./Navigation/HorizontalNav"
import VerticalNav from "./Navigation/VerticalNav"
import styled from "styled-components"
import { BREAKPOINT_MIN_WIDTH } from "../../assets/styles/Breakpoints"
import Logo from "./Navigation/Logo"

const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <Logo />
        <>
          <HorizontalNav />
          <VerticalNav />
        </>
      </HeaderContainer>
    </header>
  )
}

export default Header

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;

  ${BREAKPOINT_MIN_WIDTH[3]} {
    max-width: 60rem;
  }
  ${BREAKPOINT_MIN_WIDTH[4]} {
    max-width: 71.25rem;
  }
  ${BREAKPOINT_MIN_WIDTH[5]} {
    max-width: 82.5rem;
  }
`

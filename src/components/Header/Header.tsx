import React from "react"
import HorizontalNav from "./Navigation/HorizontalNav"
import VerticalNav from "./Navigation/VerticalNav"
import styled from "styled-components"
import { BREAKPOINT_MIN_WIDTH } from "../../assets/styles/Breakpoints"

const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <HorizontalNav />
        <VerticalNav />
      </HeaderContainer>
    </header>
  )
}

export default Header

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 2rem 1rem;
  width: 100%;
  margin: 0 auto;

  ${BREAKPOINT_MIN_WIDTH[3]} {
    max-width: 60rem;
    padding-right: 1rem;
  }
  ${BREAKPOINT_MIN_WIDTH[4]} {
    max-width: 71.25rem;
    padding-right: 1.5rem;
  }
  ${BREAKPOINT_MIN_WIDTH[5]} {
    max-width: 82.5rem;
  }
`

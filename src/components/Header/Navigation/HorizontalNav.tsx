import React from "react"
import { NavLink } from "react-router-dom"
import Routes from "../Routes.json"
import styled from "styled-components"
import { BREAKPOINT_MAX_WIDTH } from "../../../assets/styles/Breakpoints"

const Navbar = () => {
  return (
    <Container role="navigation">
      <ul>
        {Object.values(Routes).map(route => (
          <li key={route.path}>
            <NavLink
              to={route.path}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default Navbar

const Container = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  li a {
    font-size: 1.2rem;
    color: var(--white-color);
  }
  ${BREAKPOINT_MAX_WIDTH[3]} {
    display: none;
  }
`

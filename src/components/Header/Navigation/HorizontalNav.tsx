import React from "react"
import { NavLink } from "react-router-dom"
import Routes from "../Routes.json"
import styled from "styled-components"
import {
  BREAKPOINT_MAX_WIDTH,
  BREAKPOINT_MIN_WIDTH,
} from "../../../assets/styles/Breakpoints"

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
    gap: 1.2rem;

    ${BREAKPOINT_MIN_WIDTH[3]} {
      gap: 1.5rem;
    }
  }
  li a {
    font-size: 0.9rem;
    color: var(--white-color);
    font-weight: bold;
    transition: color 0.3s ease-in-out;
    &:hover {
      color: var(--orange-color);
    }
  }

  ${BREAKPOINT_MAX_WIDTH[3]} {
    display: none;
  }
`

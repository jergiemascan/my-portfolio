import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import Routes from "../Routes.json"
import { BREAKPOINT_MIN_WIDTH } from "../../../assets/styles/Breakpoints"

interface MenuButtonProps {
  expanded: boolean
}

const VerticalNav = () => {
  const [expanded, setExpanded] = useState(false)

  const toggleMenu = () => {
    setExpanded(prevExpanded => !prevExpanded)
  }

  useEffect(() => {
    if (expanded) {
      document.body.classList.add("noscroll")
    } else {
      document.body.classList.remove("noscroll")
    }
    return () => {
      document.body.classList.remove("noscroll")
    }
  }, [expanded])

  return (
    <NavContainer>
      <MenuButton onClick={toggleMenu} expanded={expanded}>
        <Svg
          viewBox="0 0 110 70"
          width="28"
          height="28"
          fill={expanded ? "var(--secondary-color)" : "var(--white-color)"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="-2"
            width="140"
            height="14"
            rx="7"
            transform={expanded ? "rotate(40,0,20)" : "rotate(0, 15, 10)"}
          />
          <rect
            y="30"
            width="140"
            height="14"
            rx="7"
            opacity={expanded ? "0" : "1"}
          />
          <rect
            y="60"
            width="140"
            height="14"
            rx="7"
            transform={expanded ? "rotate(-40,20,60)" : "rotate(0, 15, 60)"}
          />
        </Svg>
      </MenuButton>

      <SmallScreenContainer aria-hidden="true" expanded={expanded}>
        <LinksUl>
          {Object.values(Routes).map(route => (
            <li key={route.path}>
              <NavLink
                to={route.path}
                className={({ isActive }) => (isActive ? "active-link" : "")}
                onClick={() => setExpanded(false)}
              >
                {route.name}
              </NavLink>
            </li>
          ))}
        </LinksUl>
      </SmallScreenContainer>
    </NavContainer>
  )
}

export default VerticalNav

const NavContainer = styled.nav`
  ${BREAKPOINT_MIN_WIDTH[3]} {
    display: none;
  }
`

const MenuButton = styled.button<MenuButtonProps>`
  background-color: transparent;
  border: none;
  color: #000;
  cursor: pointer;
  padding-right: 0.8rem;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  ${({ expanded }) =>
    expanded &&
    `
    margin: 0;
    z-index: 2000;
    position: fixed;
    top: 1.2rem;
    right: 0;
    transition: all 0.4s ease-out;

    ${BREAKPOINT_MIN_WIDTH[1]}{
      right: 1rem;
    }
    ${BREAKPOINT_MIN_WIDTH[2]}{
      top:1.2rem;
    }
    `}
`
const SmallScreenContainer = styled.div<MenuButtonProps>`
  background-color: var(--white-color);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  z-index: 100;
  padding-top: 10rem;
  transform: ${({ expanded }) =>
    expanded ? "translateX(0)" : "translateX(-100%)"};
  transition: all 0.2s ease-out;
`
const LinksUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;

  li a {
    color: var(--gray-dark-color);
    transition: border-bottom 0.3s ease-in-out;
    font-weight: bold;
    &:hover {
      color: var(--orange-color);
    }
  }
`
const Svg = styled.svg`
  rect {
    width: 100%;
    transition: transform 0.3s ease, opacity 0.2s ease;
  }
`

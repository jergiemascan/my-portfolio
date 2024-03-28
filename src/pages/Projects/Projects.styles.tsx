import styled from "styled-components"
import { BREAKPOINT_MIN_WIDTH } from "../../assets/styles/Breakpoints"

export const Section = styled.section``
export const Flex = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProjectHeader = styled(Flex)`
  gap: 2rem;
  padding-top: 2rem;
  padding-bottom: 3rem;
  text-align: center;

  h1 {
    color: var(--secondary-color);
  }

  h2 {
    font-weight: 300;
    ${BREAKPOINT_MIN_WIDTH[2]} {
      font-size: 1.5rem;
      font-weight: 400;
    }
  }
  ${BREAKPOINT_MIN_WIDTH[2]} {
    gap: 1rem;
    padding-top: 0;
    padding-bottom: 4rem;
  }
`
export const ProjectContainer = styled(Flex)`
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 1rem 0;
  height: 100%;

  ${BREAKPOINT_MIN_WIDTH[2]} {
    flex-direction: row;
    padding: 0;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  object-position: center center;
  transition: transform 0.4s ease-in-out;
`
export const Figcaption = styled.figcaption`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 1;
  opacity: 1;
  color: var(--white-color);
  letter-spacing: 0.5px;
  font-size: 1.2rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  transition: opacity 0.4s ease-in-out;

  h3 {
    font-weight: 600;
  }
`
export const Overlay = styled(Flex)`
  position: absolute;
  color: var(--white-color);
  opacity: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-color: var(--secondary-color);
  padding: 1rem;
  transition: transform 0.4s ease-in, opacity 0.4s ease-in;
`
export const Figure = styled.figure`
  position: relative;
  display: flex;
  flex-basis: calc(100% - 1rem);
  min-height: 300px;
  box-shadow: var(--light-shadow);
  border-radius: 10px;
  overflow: hidden;
  z-index: 0;

  &:hover ${Image} {
    transform: scale(1.2);
    transition: transform 0.4s ease-in-out;
  }

  &:hover ${Figcaption} {
    opacity: 0;
    transform: scale(1.5);
    transition: transform 0.3s ease-in-out, opacity 0.4s ease-in-out;
  }

  &:hover ${Overlay} {
    opacity: 1;
    transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
    z-index: 20;
  }

  ${BREAKPOINT_MIN_WIDTH[2]} {
    flex-basis: calc(50% - 1rem);
    height: 250px;
  }

  ${BREAKPOINT_MIN_WIDTH[3]} {
    flex-basis: calc(33.333% - 1rem);
  }
`

export const SiteIcon = styled.span`
  ${Flex}
  align-items: center;
  justify-content: center;
  position: relative;

  &::before {
    content: "";
    color: var(--white-color);
    font-size: 0.9rem;
    font-weight: 300;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateY(5px) translateX(-50%);
    transition: content 0.3s;
  }

  &:hover::before {
    content: "Visit Website";
  }
`
export const GithubIcon = styled(SiteIcon)`
  &:hover::before {
    content: "Github";
  }
`
export const ProjectLink = styled.a`
  color: var(--white-color);
  font-size: 0.9rem;
  display: flex;
  gap: 10px;
  font-weight: 400;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  z-index: 10;

  ${BREAKPOINT_MIN_WIDTH[1]} {
    font-size: 1rem;
  }
`

export const ProjectDescription = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

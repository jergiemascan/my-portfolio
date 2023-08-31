import styled from "styled-components"
import { BREAKPOINT_MIN_WIDTH } from "../../assets/styles/Breakpoints"

export const Section = styled.section`
  border-top: 1px solid var(--lightest-grey);
`

export const ContactHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 1rem;
  text-align: center;
  ${BREAKPOINT_MIN_WIDTH[2]} {
    gap: 1rem;
    padding-top: 2rem;
    padding-bottom: 5rem;
  }
`
export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 3rem;
  ${BREAKPOINT_MIN_WIDTH[2]} {
    justify-content: center;
    gap: 3rem;
    padding-top: 0;
  }
`
export const Links = styled.a`
  font-family: "Inter";
  font-size: 0.9rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  height: fit-content;

  &:hover path {
    fill: #0a66c2;
  }
`

export const SocialMadiaWrapper = styled.div`
  display: flex;
  gap: 1rem;
`
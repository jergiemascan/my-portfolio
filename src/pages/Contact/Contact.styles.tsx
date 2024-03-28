import styled from "styled-components"
import { BREAKPOINT_MIN_WIDTH } from "../../assets/styles/Breakpoints"

export const Section = styled.section<{ noBorderTop: boolean }>`
  border-top: ${({ noBorderTop }) =>
    noBorderTop ? "none" : "1px solid var(--lightest-grey)"};
`

export const ContactHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 1rem;
  text-align: center;

  h1 {
    color: var(--secondary-color);
  }
  h2 {
    font-weight: 300;
  }

  ${BREAKPOINT_MIN_WIDTH[2]} {
    gap: 1rem;
    padding-top: 2rem;
    padding-bottom: 5rem;
    h2 {
      font-size: 1.5rem;
      font-weight: 400;
    }
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

  span {
    font-weight: 400;
  }
  &:hover path {
    fill: var(--orange-color);
  }
`

export const SocialMadiaWrapper = styled.div`
  display: flex;
  gap: 1rem;
`

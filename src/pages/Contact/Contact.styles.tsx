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
    color: transparent;
    background-image: linear-gradient(
      to right,
      var(--blue-violet-100),
      var(--primary-color)
    );
    -webkit-background-clip: text;
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
  padding-top: 3rem;
  gap: 0.8rem;
  justify-content: center;
  ${BREAKPOINT_MIN_WIDTH[2]} {
    gap: 1rem;
    padding-top: 0;
  }
`
export const Links = styled.a`
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  height: fit-content;
  text-decoration: none;
  color: var(--secondary-color);
  font-weight: 400;
  border: 1px solid var(--secondary-color);
  padding: 10px;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  &:hover {
    border: 1px solid var(--orange-color);
    fill: var(--white-color);
    background-color: var(--orange-color);
  }
  &:hover path {
    fill: var(--white-color);
  }
`

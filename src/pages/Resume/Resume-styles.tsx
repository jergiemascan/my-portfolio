import styled from "styled-components"
import { BREAKPOINT_MIN_WIDTH } from "../../assets/styles/Breakpoints"

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
`
export const ResumeContainer = styled.section`
  display: flex;
  flex-direction: column;
  text-align: start;
  padding-left: 1rem;
  padding-right: 1rem;
  gap: 2.5rem;
  svg {
    padding-left: 0.5rem;
  }
  a:last-child {
    border: 1px solid #ccc;
    width: fit-content;
    padding: 0.5rem;
    border-radius: 4px;
  }
`
export const Content = styled(Flex)`
  gap: 1.9rem;
  a {
    text-decoration: underline;
    &:hover {
      color: var(--primary-color);
    }
  }
  span {
    display: flex;
    gap: 5px;
  }
`
export const Description = styled.p`
  padding-top: 1rem;
  font-size: 1.1rem;
  ${BREAKPOINT_MIN_WIDTH[3]} {
    font-size: 1.2rem;
  }
`

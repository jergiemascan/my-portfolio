import styled from "styled-components"
import { BREAKPOINT_MIN_WIDTH } from "../../assets/styles/Breakpoints"

export const Section = styled.section``
export const GridContainer = styled.div`
  background-color: var(--white-color);
  box-shadow: var(--light-shadow);
  border-radius: 14px;
  margin-top: -7rem;

  ${BREAKPOINT_MIN_WIDTH[2]} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    margin-top: -8rem;
  }
  ${BREAKPOINT_MIN_WIDTH[4]} {
    margin-top: -10rem;
  }
`
export const GridContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 2rem 0;
  position: relative;
  border-bottom: 1px solid var(--lightest-grey);
  &:last-child {
    border-bottom: none;
  }

  ${BREAKPOINT_MIN_WIDTH[2]} {
    gap: 2rem;
    border-right: 1px solid var(--lightest-grey);
    padding: 3rem 0;
    border-bottom: none;
    &:last-child {
      border-right: none;
    }
  }
`
export const IconWrapper = styled.span`
  width: 3rem;
  height: 3rem;
  position: relative;

  ${BREAKPOINT_MIN_WIDTH[3]} {
    width: 3.7rem;
    height: 3.7rem;
  }
`
export const Icon = styled.span`
  color: var(--white-color);
  position: absolute;
  height: 100%;
  width: 100%;
  bottom: 0;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: 1.2rem;
    width: 1.2rem;

    ${BREAKPOINT_MIN_WIDTH[1]} {
      height: 1.5rem;
      width: 1.5rem;
    }
  }
`
export const H2 = styled.h2`
  font-weight: 600;
  font-size: 1.2rem;
  ${BREAKPOINT_MIN_WIDTH[3]} {
    font-size: 1.4rem;
  }
`

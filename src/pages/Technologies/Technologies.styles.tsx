import styled from "styled-components"
import { BREAKPOINT_MIN_WIDTH } from "../../assets/styles/Breakpoints"

export const Section = styled.section`
  z-index: 100;
`
export const GridContainer = styled.div`
  background-color: var(--white-color);
  box-shadow: var(--light-shadow);
  border-radius: 14px;
  margin-top: -7rem;

  ${BREAKPOINT_MIN_WIDTH[2]} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
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

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  &:last-child {
    border-bottom: none;
  }
  li {
    font-size: 1.1rem;
    display: flex;
    flex-direction: column;
    span:not(:last-child) {
      color: var(--color-green-100);
      font-size: 2rem;
      width: 2.8rem;
      height: 2.8rem;
      border-radius: 5px;
      padding: 4px;
      align-self: center;
    }
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
  width: 4rem;
  height: 4rem;
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
    height: 1.5rem;
    width: 1.5rem;
    font-weight: 100;

    ${BREAKPOINT_MIN_WIDTH[1]} {
      height: 1.5rem;
      width: 1.5rem;
    }
  }
`

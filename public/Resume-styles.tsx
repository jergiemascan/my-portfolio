import styled from "styled-components"

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
    transition: all 0.2s ease-in-out;
    &:hover {
      color: var(--white-color);
      background-image: linear-gradient(
        to right,
        rgba(77, 101, 233, 0.9),
        rgba(114, 128, 237, 0.9)
      );
    }
  }
`
export const H1 = styled.h1`
  /* color: var(--blue-violet-300); */
  color: transparent;
  background-image: linear-gradient(
    to right,
    var(--blue-violet-100),
    var(--primary-color) 45%
  );
  -webkit-background-clip: text;
`
export const Content = styled(Flex)`
  gap: 1.9rem;
  a {
    text-decoration: underline;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: var(--orange-color);
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
  line-height: normal;
  color: var(--secondary-color);
`

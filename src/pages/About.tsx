import React from "react"
import styled from "styled-components"
import { BREAKPOINT_MIN_WIDTH } from "../assets/styles/Breakpoints"

const About = () => {
  return (
    <Section>
      <div className="section">
        <Content>
          <h1>Hi, Welcome To My Portfolio👋🏻</h1>
          <h2>
            I'm Jergie Mascan, a goal-driven Front-end Developer from Stockholm,
            Sweden. My journey into web development opened up a passion for
            creating innovative solutions and optimal user experiences through
            my frontend skills. Most of my projects are built with JavaScript,
            TypeScript, React and Node.js, but I also have basic knowledge of
            ASP.NET and Umbraco.
          </h2>
          <h2>
            When I'm not coding, I love playing badminton, traveling for
            inspiration, and immersing myself in diverse cultures. Feel free to
            browse through my projects below.
          </h2>
        </Content>
      </div>
    </Section>
  )
}

export default About

const Section = styled.section`
  background-color: var(--primary-color);
  color: var(--white-color);
`
export const Content = styled.div`
  padding: 0 1rem 8rem 1rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  text-align: start;
  gap: 1rem;

  h1 {
    text-align: center;
    padding-bottom: 2.5rem;
    font-weight: 600;
    line-height: 1.6;
    letter-spacing: 1px;
  }

  h2 {
    font-size: 1.1rem;
    font-weight: 400;
    letter-spacing: 0;
  }

  ${BREAKPOINT_MIN_WIDTH[2]} {
    padding: 3rem 0 9rem 0;
    max-width: 40rem;

    h2 {
      font-size: 1.2rem;
    }
  }
  ${BREAKPOINT_MIN_WIDTH[4]} {
    max-width: 50rem;
    padding-bottom: 12rem;
  }
`

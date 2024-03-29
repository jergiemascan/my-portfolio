import React from "react"
import styled from "styled-components"
import { BREAKPOINT_MIN_WIDTH } from "../assets/styles/Breakpoints"

const About = () => {
  return (
    <Section>
      <div className="section">
        <Content>
          <h1>Hi, Welcome To My Portfolio👋🏻</h1>
          <p>
            I’m Jergie. A passionate and driven Frontend Developer with a
            Vocational College diploma focused on Frontend Web Development from
            Stockholm, Sweden. I design and build web and server-side
            applications with React(Next), Vue, JavaScript, NodeJs, and other
            libraries and frameworks. I also have professional experience and
            basic knowledge of Laravel PHP, AWS, and .NET.
          </p>
          <p>
            I am naturally curious and always eager to learn new things to
            improve my skills. If you have any job offers or recommendations,
            feel free to message me. I have gained valuable experience from my
            previous internships and my current role and I am committed to
            bringing that experience into any new opportunity.
          </p>
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
  text-align: center;
  gap: 1rem;

  h1 {
    text-align: center;
    padding-bottom: 2.5rem;
    font-family: var(--font-secondary);
    font-weight: 600;
    line-height: 1.6;
    letter-spacing: 1px;
  }

  p {
    font-family: var(--font-primary);
    font-size: 1rem;
    font-weight: 400;
    line-height: normal;
  }

  ${BREAKPOINT_MIN_WIDTH[2]} {
    padding: 0 0 9rem 0;
    max-width: 40rem;
  }
  ${BREAKPOINT_MIN_WIDTH[4]} {
    p {
      font-size: 1.1rem;
    }
    max-width: 50rem;
    padding-bottom: 12rem;
  }
`

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
            I'm Jergie, a goal-driven Front-end Developer, with a diploma in
            Frontend Web Development from Higher Vocational Education. My
            primary expertise lies in frontend, but I also have solid
            understanding of backend web development and database solutions.
            Technologies I'm proficient with include JavaScript, TypeScript,
            React, Next.js, Vue and Node.js, which I have applied in numerous
            projects.
          </h2>

          <h2>
            As a person I am sociable, thriving in environments where
            collaboration is key. I believe in the power of teamwork, where we
            can blend our unique strengths and grow together. I'm all about
            learning, improving, and pushing the boundaries of what I know about
            web development.
          </h2>

          <h2>
            When I'm not coding, I love playing badminton, kayaking, taking
            sauna baths, and traveling for inspiration. Feel free to message me
            if you have any job offers, recommendations, or just want to chat
            about tech and badminton ☺️
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

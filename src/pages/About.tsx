import React from "react"
import styled from "styled-components"
import { BREAKPOINT_MIN_WIDTH } from "../assets/styles/Breakpoints"

const Aboutme = () => {
  return (
    <Section>
      <div className="section">
        <Content>
          <h1>Hello! I'm Jergie. Frontend Developer</h1>
          <h4>
            I'm a goal-driven Front-end Developer based in Stockholm, Sweden. My
            journey into web development opened up a passion within me – an
            enthusiasm for creating innovative solutions and optimal user
            experiences through my frontend skills. Most of my projects are
            built with JavaScript, TypeScript, React and Node.js. I have also
            basic knowledge in ASP.NET and Umbraco. Outside programming, I enjoy
            playing badminton, traveling seeking inspiration and learning from
            the diverse cultures and environments I immerse myself in. Welcome
            to my portfolio!
          </h4>
        </Content>
      </div>
    </Section>
  )
}

export default Aboutme

const Section = styled.section`
  background-color: #6e07f3;
  color: white;
`
export const Content = styled.div`
  padding: 0 1rem 7rem 1rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  text-align: start;
  gap: 1rem;
  h1 {
    text-align: center;
    font-weight: 600;
    font-size: 1.5rem;
    padding-bottom: 2.5rem;

    ${BREAKPOINT_MIN_WIDTH[2]} {
      font-size: 2rem;
    }
  }

  ${BREAKPOINT_MIN_WIDTH[2]} {
    padding: 3rem 0 9rem 0;
    max-width: 35rem;
    h4 {
      font-size: 1.2rem;
    }
  }
  ${BREAKPOINT_MIN_WIDTH[4]} {
    max-width: 50rem;
    padding-bottom: 10rem;
  }
`

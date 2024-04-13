import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { BREAKPOINT_MIN_WIDTH } from "../../assets/styles/Breakpoints"
import author from "../../assets/images/author.png"
import TransformText from "./TransformText"

const texts = [
  "designer 🎨",
  "badmintonista🏸",
  "optimist 🚀",
  "sauna seeker 🧖🏻‍♀️",
  "world traveller🌏",
  "kayaker 🛶",
  "foodie 🍌",
  "board game geek🎲",
]

const About = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex(currentIndex => (currentIndex + 1) % texts.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Section>
      <HeadingWrapper>
        <div className="flex">
          <h1>Hey there, I’m Jergie!</h1>
          <h1>I’m a Frontend Developer and </h1>
          <TransformText
            text={texts[currentTextIndex]}
            key={currentTextIndex}
            isActive={true}
          />
          <img src={author} alt="owner" loading="lazy" />
        </div>
      </HeadingWrapper>
      <Content>
        <p>
          I’m passionate about design and technology coming together to create a
          perfect user experience: Beautiful, intuitive and effective. I write
          clean code. I sweat the details. I keep it simple.
        </p>
        <p>
          My expertise lies within frontend development and design, but I also
          have good experience with backend and my aim is to become fullstack
          🚀.
        </p>
        <p>
          I have a Vocational College diploma in frontend development from
          Jensen Yrkeshögskola, Stockholm, and one year’s relevant work
          experience. I'm based in Stockholm, Sweden.
        </p>
        <p>
          Feel free to reach me if you have an opportunity you’d like to discuss
          or just want to say hello.
        </p>
        <a
          href="mailto:jiji.mascan@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="e-mail external link"
        >
          Get in touch!
        </a>
      </Content>
    </Section>
  )
}

export default About

const Section = styled.section`
  background-image: linear-gradient(
    to bottom,
    rgba(114, 128, 237, 0.9),
    rgba(77, 101, 233, 0.9)
  );
  position: relative;
`
const HeadingWrapper = styled.div`
  background-color: rgb(255, 247, 237);
  background-image: radial-gradient(
      at 36% 120%,
      rgb(254, 249, 195) 0px,
      transparent 50%
    ),
    radial-gradient(at 73% 72%, rgb(255, 229, 238) 0px, transparent 50%),
    radial-gradient(at 80% 100%, rgb(255, 229, 238) 0px, transparent 50%),
    radial-gradient(at 43% 56%, rgb(255, 199, 219) 0px, transparent 50%);
  content: "";
  clip-path: polygon(0% 0%, 100% 0px, 100% 84%, 50% 90%, 0px 84%);
  padding: 3rem 0px 1rem 0px;
  color: rgb(86, 112, 222);
  position: absolute;
  top: -1px;
  width: 100%;
  left: 0;

  img {
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
    margin-top: 2rem;
  }
  .flex {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 25rem;
    margin: 0 auto;
    padding: 2rem 0px 3.5rem 0px;
  }
  h1 {
    display: inline-block;
    font-weight: 700;
    letter-spacing: 0.2px;
    color: var(--blue-violet-300);
    font-size: 24px;
    line-height: 2rem;
    flex-wrap: wrap;
    text-align: center;
  }
  ${BREAKPOINT_MIN_WIDTH[1]} {
    h1 {
      font-size: 28px;
      line-height: 2.5rem;
    }
  }
  ${BREAKPOINT_MIN_WIDTH[2]} {
    clip-path: polygon(0% 0%, 100% 0px, 100% 86%, 50% 100%, 0px 86%);
    .flex {
      max-width: 30rem;
      padding-bottom: 2rem;
    }
    img {
      width: 12rem;
      height: 12rem;
    }
    h1 {
      font-size: 34px;
      letter-spacing: 0.3px;
      line-height: 3rem;
    }
  }
  ${BREAKPOINT_MIN_WIDTH[4]} {
    h1 {
      font-size: 38px;
    }
    .flex {
      max-width: 35rem;
    }
  }
`
export const Content = styled.div`
  padding: 0 1rem 8rem 1rem;
  margin: 27rem auto 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  text-align: start;
  gap: 1rem;
  max-width: 30rem;
  p {
    font-family: var(--font-primary);
    font-size: 1rem;
    font-weight: 400;
    line-height: normal;
    color: var(--white-color);
  }
  p:last-child {
    margin-top: 0.5rem;
  }
  a {
    max-width: fit-content;
    border-bottom: 1px solid var(--color-pink-100);
    transition: all 0.2s ease-in-out;
    font-weight: bold;
    padding: 2px;
  }
  a:hover {
    border-radius: 4px;
    background-color: var(--color-pink-100);
  }
  ${BREAKPOINT_MIN_WIDTH[1]} {
    margin-top: 28rem;
  }
  ${BREAKPOINT_MIN_WIDTH[2]} {
    padding: 5rem 0 12rem 0;
    p {
      font-size: 1.2rem;
    }
  }
  ${BREAKPOINT_MIN_WIDTH[4]} {
    max-width: 41rem;
    padding-bottom: 12rem;
  }
`

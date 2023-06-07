import React from "react"
import { FaTerminal, FaDatabase, FaCode, FaChartArea } from "react-icons/fa"
import "./TechStackList.css"

const TechStackList = () => {
  return (
    <div className="container">
      <div className="grid-container box">
        <div className="grid-content">
          <span className="icon-wrapper">
            <svg
              className="icon-bg svg-inline--fa fa-circle fa-stack-2x has-text-success"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="circle"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg=""
            >
              <path
                fill=" #6e07f3"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
              ></path>
            </svg>
            <FaTerminal className="icon" />
          </span>
          <h2>Frontend</h2>

          <p>
            I like to code things from scratch, and enjoy bringing ideas to life
            in the browser.
          </p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Redux</li>
          </ul>
        </div>
        <div className="grid-content">
          <span className="icon-wrapper">
            <svg
              className="icon-bg svg-inline--fa fa-circle fa-stack-2x has-text-success"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="circle"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg=""
            >
              <path
                fill=" #6e07f3"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
              ></path>
            </svg>
            <FaCode className="icon" size={24} />
          </span>
          <h2>Backend</h2>
          <p>
            I value simple content structure, clean design patterns, and
            thoughtful interactions.
          </p>
          <ul>
            <li>NodeJs</li>
            <li>Firebase</li>
            <li>MongoDB</li>
            <li>SQLite</li>
          </ul>
        </div>

        <div className="grid-content">
          <span className="icon-wrapper">
            <svg
              className="icon-bg svg-inline--fa fa-circle fa-stack-2x has-text-success"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="circle"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg=""
            >
              <path
                fill=" #6e07f3"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
              ></path>
            </svg>
            <FaChartArea className="icon" size={24} />
          </span>
          <h2>Design</h2>
          <p>
            I value simple content structure, clean design patterns, and
            thoughtful interactions.
          </p>
          <p>Figma</p>
        </div>
      </div>
    </div>
  )
}

export default TechStackList

import React from "react"
import Aboutme from "./Aboutme"
import TechStackList from "./TechStackList"
import Navbar from "./Navbar/Navbar"
import Projects from "./Projects/Projects"

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Aboutme />
        <TechStackList />
        <Projects/>
      </div>
    </div>
  )
}

export default Home

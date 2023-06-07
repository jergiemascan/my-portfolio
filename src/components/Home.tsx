import React from "react"
import Aboutme from "./Aboutme"
import TechStackList from "./TechStackList"
import Navbar from "./Navbar/Navbar"

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Aboutme />
        <TechStackList />
      </div>
    </div>
  )
}

export default Home

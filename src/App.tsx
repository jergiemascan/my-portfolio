import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Projects from "./pages/Projects/Projects"
import Contact from "./pages/Contact/Contact"
import Resume from "./pages/Resume/Resume"
import Layout from "./components/layouts/Layout"
import Main from "./components/layouts/Main"

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

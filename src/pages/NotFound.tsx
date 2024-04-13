import React from "react"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="section">
      <h1>404 Page Not Found</h1>
      <Link to="/">
        <h3>Go Home</h3>
      </Link>
    </div>
  )
}

export default NotFound

import React from "react"
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const location = useLocation()

  return (
    <nav className="nav-ul">
      <ul>
        {location.pathname === "/" ? (
          <li>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
        ) : (
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar

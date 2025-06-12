import React from 'react'

function navbar() {
  return (
  <header className="header">
        {/* Logo */}
        <div className="logo">M.</div>

        {/* Navigation */}
        <nav className="navigation">
          <a href="#" className="nav-link active">
            Home
          </a>
          <a href="#" className="nav-link">
            About
          </a>
          <a href="#" className="nav-link">
            Projects
          </a>
          <a href="#" className="nav-link">
            Contact
          </a>
        </nav>

        {/* Hire Me Button */}
        <button className="hire-button">HIRE ME</button>
      </header>
  )
}

export default navbar
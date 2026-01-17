import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar(){
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'HOME' },
    {path: '/about', label: 'ABOUT' },
    { path: '/contact', label: 'CONTACT' }
  ]

  return (
    <nav className="navbar w-nav" role="banner">
      <Link to="/" className="logo-link-wrapper w-nav-brand">
        <img
                                                                       src="events/vit.jpg"
          alt="logo"
          className="logo"
        />
      </Link>
      <div className="nav-container w-container">
        <nav role="navigation" className="nav-menu w-nav-menu">
          {navLinks.map(link => (
            <div key={link.path} className="nav-link-wrapper">
              <Link 
                to={link.path} 
                className={`nav-link w-nav-link ${location.pathname === link.path ? 'w--current' : ''}`}
              >
                {link.label}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </nav>
  )
}

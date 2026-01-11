import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar(){
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT' },
    { path: '/tech', label: 'TECHNICAL' },
    { path: '/nontech', label: 'NON-TECH' },
    { path: '/workshops', label: 'WORKSHOPS' },
    { path: '/onlineevents', label: 'ONLINE' },
    { path: '/contact', label: 'CONTACT' }
  ]

  return (
    <nav className="navbar w-nav" role="banner">
      <Link to="/" className="logo-link-wrapper w-nav-brand">
        <img
          src="https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/6703898cb9ed6a04ab83c37b_panorama_photosphere.svg"
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
        <div className="hide-on-mobile">
          <Link to="/contact" className="button-with-circle-icon w-inline-block">
            <div className="button-flex">
              <p className="button-text">EXPLORE</p>
              <p className="button-text-absolute">EXPLORE</p>
            </div>
            <div className="button-arrow-wrapper">
              <img
                alt=""
                src="https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/67021bf42ce586086aea6af8_arrow_outward.svg"
                className="button-icon"
              />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  )
}

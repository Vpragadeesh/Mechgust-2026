import React, {useState} from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar(){
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT' },
    { path: '/tech', label: 'TECHNICAL' },
    { path: '/nontech', label: 'NON-TECHNICAL' },
    { path: '/workshops', label: 'WORKSHOPS' },
    { path: '/onlineevents', label: 'ONLINE EVENTS' },
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
      <div className="menu-button w-nav-button" onClick={()=> setIsOpen(!isOpen)}>
        <div className="burger-icon invert w-icon-nav-menu"></div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-nav-menu" style={{
          position: 'fixed',
          top: '60px',
          left: 0,
          right: 0,
          background: '#000',
          padding: '1rem',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {navLinks.map(link => (
            <Link 
              key={link.path}
              to={link.path} 
              className="nav-link w-nav-link"
              onClick={() => setIsOpen(false)}
              style={{ color: location.pathname === link.path ? '#fff' : '#888' }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

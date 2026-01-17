import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <footer style={{ background: '#050505', padding: '0', marginTop: '0' }}>
      {/* CTA Section */}
      <section style={{
        textAlign: 'center',
        padding: 'clamp(3rem, 6vw, 6rem) 2rem',
        borderBottom: '1px solid #1a1a1a'
      }}>

        



        
        <p style={{
          color: '#888',
          fontSize: '0.85rem',
          letterSpacing: '0.2em',
          marginBottom: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem'
        }}>
          <span style={{ fontSize: '0.7rem' }}>✦</span> GET IN TOUCH
        </p>
        
        <h2 style={{
          fontSize: 'clamp(2.5rem, 10vw, 7rem)',
          fontWeight: '700',
          lineHeight: '1.1',
          margin: '0 0 1rem 0'
        }}>
          <span style={{ color: '#fff', fontStyle: 'italic' }}>LET'S </span>
          <span style={{ 
            color: 'transparent',
            WebkitTextStroke: '1px #fff',
            fontStyle: 'normal'
          }}>CONNECT</span>
        </h2>
        <h2 style={{
          fontSize: 'clamp(2.5rem, 10vw, 7rem)',
          fontWeight: '700',
          lineHeight: '1.1',
          margin: '0 0 2.5rem 0',
          color: 'transparent',
          WebkitTextStroke: '1px #fff',
          fontStyle: 'italic'
        }}>TOGETHER</h2>
        
        <Link 
          to="/contact"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.8rem 1.5rem 0.8rem 2rem',
            background: 'transparent',
            border: '1px solid #444',
            borderRadius: '50px',
            color: '#fff',
            textDecoration: 'none',
            fontSize: '0.9rem',
            letterSpacing: '0.1em',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = '#fff'
            e.currentTarget.style.color = '#000'
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = '#fff'
          }}
        >
          CONTACT
          <span style={{
            width: '36px',
            height: '36px',
            background: '#fff',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: '0.5rem'
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </span>
        </Link>
      </section>

      {/* Footer Links Section */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '3rem',
        padding: '4rem 5%',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Logo & Social */}
        <div>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.75rem',
            marginBottom: '1rem'
          }}>
            <span style={{ 
              color: '#fff', 
              fontSize: '1.2rem', 
              fontWeight: '700' 
            }}>MECHGUST ' 26</span>
            
          </div>
          
          <div style={{ 
            display: 'flex', 
            gap: '0.75rem',
            marginBottom: '1.5rem'
          }}>
            <a href="https://youtube.com/@mechgust6282?si=IUR3xjX8c9pYeHp4" target="_blank" rel="noopener noreferrer" style={{
              width: '32px',
              height: '32px',
              background: '#1a1a1a',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/mechgust_cit?igsh=NHdtbWljajZnODJu" target="_blank" rel="noopener noreferrer" style={{
              width: '32px',
              height: '32px',
              background: '#1a1a1a',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            
          </div>
          
          <p style={{ 
            color: '#666', 
            fontSize: '0.9rem', 
            lineHeight: '1.6',
            maxWidth: '280px'
          }}>
            “Not your average mech fest.”
          </p>
        </div>

        {/* Main Links */}
        
          
          
        

        {/* Pages Links */}
        

        {/* Quick Links */}
        
      </section>

      {/* Copyright */}
      <div style={{
        borderTop: '1px solid #1a1a1a',
        padding: '1.5rem 5%',
        textAlign: 'center'
      }}>
        <p style={{ 
          color: '#444', 
          fontSize: '0.85rem',
          margin: 0
        }}>
          © MECHGUST2026. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

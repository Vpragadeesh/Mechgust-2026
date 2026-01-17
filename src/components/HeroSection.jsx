import React, { useState, useEffect } from 'react'
import SpacemanScene from './SpacemanScene'
import SplineObject from './SplineObject'

export default function HeroSection(){
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 991);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <section className="hero-section" style={{ position: 'relative', minHeight: '100vh' }}>
      <div className="hero-bg"></div>
      
      {/* 3D Spaceman for mobile - appears at top */}
      {isMobile && (
        <div className="mobile-spaceman-hero">
          <SplineObject
            splineUrl="https://prod.spline.design/J6fFldz3YOndaynA/scene.splinecode"
            animationType="spline"
            className="hero-spaceman-mobile"
          />
        </div>
      )}
      
        <div className="hero-content-wrapper" style={{
          position: 'absolute',
          top: '14%',
          left: '5%',
          zIndex: 2,
          maxWidth: '60%'
        }}>
          
          <div className="hero-subheading-flex">
            <img
          alt="fingerprint"
          src="https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/67024792d09f3730c4f72330_fingerprint.svg"
          className="icon-small"
            />

            
            <h5>Welcome to MECHGUST'26</h5>
          </div>
          
          <h1 style={{
            fontSize: 'clamp(20px, 6vw, 100px)',
            fontWeight: '800',
            color: '#fff',
            letterSpacing: '-0.02em',
            lineHeight: '0.9',
            textTransform: 'uppercase',
            margin: '0.5rem 0'
          }}>THE SILVER ERA</h1>
          
          <p className="max-width-25vw" style={{ color: '#888', marginTop: '1rem' }}>
            Forging the Future into the Silver!
          </p>
          
          <div style={{
            marginTop: '1.5rem',
            display: 'inline-block',
            padding: '0.5rem 1rem',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '12px',
            backgroundColor: '#fff',
            backdropFilter: 'blur(10px)'
          }}>
            <span style={{
          color: '#000',
          fontSize: '1rem',
          fontWeight: '600',
          letterSpacing: '0.05em'
            }}> On FEB - 02</span>
          </div>
        </div>
        
        {/* Spaceman - placed after content so it appears below on mobile */}
      <SpacemanScene className="spline" />
      
      {/* Bottom cards */}
      <div style={{
        position: 'absolute',
        bottom: '15%',
        left: '5%',
        zIndex: 2
      }}>
        <div className="hero-flex">
          <div className="hero-cards-wrapper">
            <div className="hero-card">
              
            </div>
          </div>
          <div className="hero-cards-wrapper">
            <div className="hero-card">
              <div className="hero-text-flex">
                <h4 className="hero-card-title">3K</h4>
                <h5>Works</h5>
                <img
                  src="https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/670239a571ef993ea919efd4_Arrow.svg"
                  alt="arrow"
                  className="hero-icon"
                />
              </div>
              <div className="hero-card-image">
                <img
                  src="https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/670229a75f4844ac9d8daa0a_Services-p-500.jpg"
                  alt="gadgets on a white table"
                  className="hero-card-image-back"
                />
                <img
                  src="https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/67038dd51127140791a4bc7c_PosterMockup-p-500.jpg"
                  alt="poster mock up"
                  className="hero-card-image-front"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-overlay"></div>
    </section>
  )
}

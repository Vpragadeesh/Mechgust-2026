import React from 'react'

/**
 * SpacemanMobile - Lightweight gear animation for mobile devices
 * Shows a spinning gear with a message to visit on desktop for full 3D experience
 */
export default function SpacemanMobile({ className = 'spline' }) {
  return (
    <div 
      className={className}
      style={{
        width: '240px',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'visible',
        margin: '0 auto',
        padding: '1rem 0'
      }}
    >
      {/* SVG Gear Icon */}
      <svg 
        width="120" 
        height="120" 
        viewBox="0 0 512 512" 
        style={{
          opacity: 0.8,
          animation: 'gearSpin 8s linear infinite'
        }}
      >
        <defs>
          <linearGradient id="gearGradientMobile" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#e8e8e8' }} />
            <stop offset="100%" style={{ stopColor: '#888888' }} />
          </linearGradient>
        </defs>
        {/* Outer gear ring */}
        <circle cx="256" cy="256" r="140" fill="none" stroke="url(#gearGradientMobile)" strokeWidth="40" />
        {/* Gear teeth around the ring */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <rect 
            key={i}
            x="246" 
            y="80" 
            width="20" 
            height="40" 
            fill="url(#gearGradientMobile)"
            transform={`rotate(${angle} 256 256)`}
            rx="4"
          />
        ))}
        {/* Center circle */}
        <circle cx="256" cy="256" r="60" fill="#1a1a2e" stroke="#666" strokeWidth="3" />
        {/* Inner detail */}
        <circle cx="256" cy="256" r="30" fill="none" stroke="#444" strokeWidth="2" />
        {/* Center dot */}
        <circle cx="256" cy="256" r="10" fill="#64b5f6" />
      </svg>
      
      {/* Message for mobile users */}
      <p style={{
        color: '#888',
        fontSize: '0.75rem',
        textAlign: 'center',
        marginTop: '1rem',
        padding: '0 1rem',
        lineHeight: '1.5',
        maxWidth: '280px'
      }}>
        ✨ To see more animations, visit this webpage on desktop
      </p>
      
      <style>{`
        @keyframes gearSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

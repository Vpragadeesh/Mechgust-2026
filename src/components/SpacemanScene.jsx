import React, { useEffect, useState, lazy, Suspense } from 'react'

// Lazy load components based on device type - only loads necessary code
const SpacemanDesktop = lazy(() => import('./SpacemanDesktop'))
const SpacemanMobile = lazy(() => import('./SpacemanMobile'))

/**
 * SpacemanScene - Device-aware wrapper that loads appropriate spaceman component
 * Mobile: Lightweight gear animation (SpacemanMobile.jsx)
 * Desktop: Full 3D Spline scene (SpacemanDesktop.jsx)
 */
export default function SpacemanScene({ className = 'spline' }) {
  const [isMobile, setIsMobile] = useState(null) // null = not determined yet

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 991 || 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      setIsMobile(mobile)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Loading state while determining device type
  if (isMobile === null) {
    return (
      <div 
        className={className}
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div style={{
          width: '40px',
          height: '40px',
          border: '3px solid #333',
          borderTopColor: '#667eea',
          borderRadius: '50%',
          animation: 'initialSpin 1s linear infinite'
        }} />
        <style>{`
          @keyframes initialSpin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    )
  }

  // Fallback loader while lazy component loads
  const LoadingFallback = () => (
    <div 
      className={className}
      style={{
        width: isMobile ? '240px' : '100%',
        height: isMobile ? 'auto' : '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: isMobile ? '0 auto' : '0'
      }}
    >
      <div style={{
        width: '40px',
        height: '40px',
        border: '3px solid #333',
        borderTopColor: '#667eea',
        borderRadius: '50%',
        animation: 'fallbackSpin 1s linear infinite'
      }} />
      <style>{`
        @keyframes fallbackSpin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )

  return (
    <Suspense fallback={<LoadingFallback />}>
      {isMobile ? (
        <SpacemanMobile className={className} />
      ) : (
        <SpacemanDesktop className={className} />
      )}
    </Suspense>
  )
}

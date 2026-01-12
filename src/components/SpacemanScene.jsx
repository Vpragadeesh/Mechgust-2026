import React, {useEffect, useRef, useState} from 'react'

/**
 * SpacemanScene - Renders the interactive astronaut/spaceman 3D scene
 * Optimized for performance with lazy loading and mobile detection
 */
export default function SpacemanScene({className = 'spline'}){
  const containerRef = useRef(null)
  const appRef = useRef(null)
  const splineRuntimeRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [loadProgress, setLoadProgress] = useState(0)

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

  // Load and initialize Spline runtime (only on desktop)
  useEffect(()=>{
    // Skip loading 3D on mobile devices
    if (isMobile) {
      setIsLoading(false)
      return
    }

    // Simulate initial progress
    const progressInterval = setInterval(() => {
      setLoadProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval)
          return prev
        }
        return prev + Math.random() * 15
      })
    }, 500)

    const loadSplineAndRender = async ()=>{
      try {
        // Dynamically import Spline runtime
        if (!window.Spline) {
          const splineModule = await import('https://unpkg.com/@splinetool/runtime@1.12.29/build/runtime.js')
          window.Spline = splineModule
          splineRuntimeRef.current = splineModule
        }

        if (!containerRef.current) return

        const { Application } = window.Spline
        const canvas = containerRef.current.querySelector('canvas')
        
        if (!canvas) {
          console.error('Canvas element not found in container')
          return
        }

        // Create and initialize the Spline application
        const splineApp = new Application(canvas)
        
        // Load the spaceman/astronaut scene
        await splineApp.load('https://prod.spline.design/rNxf6T0SBLTAKJDp/scene.splinecode')
        
        appRef.current = splineApp
        setLoadProgress(100)
        
        // Small delay for smooth transition
        setTimeout(() => {
          setIsLoading(false)
        }, 300)
        
        // Dispatch load event (mimics Webflow behavior)
        const loadEvent = new Event('w-spline-load')
        containerRef.current.dispatchEvent(loadEvent)
        
        // Add loaded class for styling
        containerRef.current.classList.add('spline-loaded')
        
      } catch(error) {
        console.error('Spline initialization failed:', error)
        setIsLoading(false)
        clearInterval(progressInterval)
      }
    }

    // Delay loading slightly to prioritize critical content
    const loadTimer = setTimeout(loadSplineAndRender, 100)

    return ()=>{
      clearTimeout(loadTimer)
      clearInterval(progressInterval)
      // Cleanup on unmount
      if (appRef.current?.dispose) {
        try {
          appRef.current.dispose()
        } catch(err) {
          console.warn('Error disposing Spline app:', err)
        }
      }
    }
  }, [isMobile])

  // Add mouse tracking for parallax effect
  useEffect(()=>{
    const handleMouseMove = (e)=>{
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      
      // Calculate normalized position relative to container
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const distX = e.clientX - centerX
      const distY = e.clientY - centerY
      
      // Normalize to -1 to 1 range
      const normalizedX = distX / (rect.width / 2)
      const normalizedY = distY / (rect.height / 2)
      
      // Calculate rotation angles
      const rotateX = normalizedY * 10
      const rotateY = normalizedX * 10
      
      // Apply 3D perspective transform
      containerRef.current.style.transform = `
        perspective(1200px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg) 
        scale(1.0)
      `
      containerRef.current.style.transition = 'transform 0.1s ease-out'
    }

    const handleMouseLeave = ()=>{
      if (containerRef.current) {
        containerRef.current.style.transform = `
          perspective(1200px) 
          rotateX(0deg) 
          rotateY(0deg) 
          scale(1.0)
        `
        containerRef.current.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.320, 1)'
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    containerRef.current?.addEventListener('mouseleave', handleMouseLeave)

    return ()=>{
      document.removeEventListener('mousemove', handleMouseMove)
      containerRef.current?.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  // Mobile fallback - show gear icon with message
  if (isMobile) {
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
            animation: 'spin 8s linear infinite'
          }}
        >
          <defs>
            <linearGradient id="gearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#e8e8e8'}} />
              <stop offset="100%" style={{stopColor: '#888888'}} />
            </linearGradient>
          </defs>
          {/* Gear teeth */}
          <path 
            d="M256 48l-24 48h-48l-24-48h-48l24 48-36 36-48-24v48l48 24v48l-48 24v48l48-24 36 36-24 48h48l24-48h48l24 48h48l-24-48 36-36 48 24v-48l-48-24v-48l48-24v-48l-48 24-36-36 24-48h-48z" 
            fill="url(#gearGradient)"
            stroke="#666"
            strokeWidth="2"
          />
          {/* Outer gear ring */}
          <circle cx="256" cy="256" r="140" fill="none" stroke="url(#gearGradient)" strokeWidth="40" />
          {/* Gear teeth around the ring */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <rect 
              key={i}
              x="246" 
              y="80" 
              width="20" 
              height="40" 
              fill="url(#gearGradient)"
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
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className={className}
      data-animation-type="spline"
      data-spline-url="https://prod.spline.design/rNxf6T0SBLTAKJDp/scene.splinecode"
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.1s ease-out'
      }}
      onMouseEnter={(e)=>{
        // Add interaction hint
        e.currentTarget.style.cursor = 'grab'
      }}
      onMouseLeave={(e)=>{
        e.currentTarget.style.cursor = 'default'
      }}
    >
      {/* Loading indicator */}
      {isLoading && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          zIndex: 10
        }}>
          <div style={{
            fontSize: '48px',
            animation: 'pulse 2s ease-in-out infinite'
          }}>🚀</div>
          <div style={{
            width: '120px',
            height: '4px',
            background: '#333',
            borderRadius: '2px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${loadProgress}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #667eea, #764ba2)',
              borderRadius: '2px',
              transition: 'width 0.3s ease'
            }} />
          </div>
          <div style={{
            color: '#666',
            fontSize: '12px',
            fontFamily: 'system-ui'
          }}>Loading 3D Scene...</div>
          <style>{`
            @keyframes pulse {
              0%, 100% { transform: scale(1); opacity: 1; }
              50% { transform: scale(1.1); opacity: 0.7; }
            }
          `}</style>
        </div>
      )}
      <canvas
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.5s ease-out'
        }}
      />
    </div>
  )
}

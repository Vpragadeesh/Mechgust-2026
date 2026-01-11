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

  // Mobile fallback - show static rocket image instead of 3D
  if (isMobile) {
    return (
      <div 
        className={className}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #050505 70%)',
          overflow: 'hidden'
        }}
      >
        {/* SVG Rocket for better Firefox compatibility */}
        <svg 
          width="200" 
          height="200" 
          viewBox="0 0 512 512" 
          style={{
            opacity: 0.4,
            animation: 'float 6s ease-in-out infinite',
            maxWidth: '40vw',
            maxHeight: '40vh'
          }}
        >
          <defs>
            <linearGradient id="rocketBody" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#e8e8e8'}} />
              <stop offset="100%" style={{stopColor: '#a0a0a0'}} />
            </linearGradient>
            <linearGradient id="rocketWindow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#64b5f6'}} />
              <stop offset="100%" style={{stopColor: '#1976d2'}} />
            </linearGradient>
            <linearGradient id="rocketFire" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor: '#ff9800'}} />
              <stop offset="50%" style={{stopColor: '#f44336'}} />
              <stop offset="100%" style={{stopColor: '#ff5722'}} />
            </linearGradient>
          </defs>
          {/* Rocket body */}
          <ellipse cx="256" cy="200" rx="80" ry="160" fill="url(#rocketBody)" />
          {/* Rocket tip */}
          <path d="M256 40 L200 120 L312 120 Z" fill="#e53935" />
          {/* Window */}
          <circle cx="256" cy="180" r="35" fill="url(#rocketWindow)" />
          <circle cx="256" cy="180" r="25" fill="#bbdefb" opacity="0.5" />
          {/* Left fin */}
          <path d="M176 280 L130 380 L176 340 Z" fill="#e53935" />
          {/* Right fin */}
          <path d="M336 280 L382 380 L336 340 Z" fill="#e53935" />
          {/* Bottom fin */}
          <ellipse cx="256" cy="360" rx="40" ry="20" fill="#c62828" />
          {/* Fire/exhaust */}
          <ellipse cx="256" cy="400" rx="30" ry="60" fill="url(#rocketFire)" opacity="0.9" />
          <ellipse cx="256" cy="420" rx="20" ry="40" fill="#ffeb3b" opacity="0.8" />
          {/* Stars decoration */}
          <circle cx="100" cy="100" r="3" fill="#fff" opacity="0.6" />
          <circle cx="400" cy="80" r="2" fill="#fff" opacity="0.5" />
          <circle cx="450" cy="200" r="4" fill="#fff" opacity="0.4" />
          <circle cx="80" cy="300" r="2" fill="#fff" opacity="0.6" />
          <circle cx="420" cy="350" r="3" fill="#fff" opacity="0.5" />
        </svg>
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(-10deg); }
            50% { transform: translateY(-20px) rotate(10deg); }
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

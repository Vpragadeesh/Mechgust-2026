import React, {useEffect, useRef} from 'react'

/**
 * SpacemanScene - Renders the interactive astronaut/spaceman 3D scene
 * This component is optimized based on Webflow's Spline integration pattern
 */
export default function SpacemanScene({className = 'spline'}){
  const containerRef = useRef(null)
  const appRef = useRef(null)
  const splineRuntimeRef = useRef(null)

  // Load and initialize Spline runtime
  useEffect(()=>{
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
        
        // Dispatch load event (mimics Webflow behavior)
        const loadEvent = new Event('w-spline-load')
        containerRef.current.dispatchEvent(loadEvent)
        
        // Add loaded class for styling
        containerRef.current.classList.add('spline-loaded')
        
      } catch(error) {
        console.error('Spline initialization failed:', error)
        // Fallback UI
        if (containerRef.current) {
          containerRef.current.innerHTML = `
            <div style="
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-family: system-ui;
              text-align: center;
              font-size: 16px;
              gap: 12px;
            ">
              <div style="font-size: 32px; animation: bounce 2s infinite;">🚀</div>
              <div>Spaceman Loading...</div>
            </div>
          `
        }
      }
    }

    loadSplineAndRender()

    return ()=>{
      // Cleanup on unmount
      if (appRef.current?.dispose) {
        try {
          appRef.current.dispose()
        } catch(err) {
          console.warn('Error disposing Spline app:', err)
        }
      }
    }
  }, [])

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
      <canvas
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          opacity: 0,
          animation: 'fadeIn 1.2s ease-out 0.4s forwards'
        }}
      />
    </div>
  )
}

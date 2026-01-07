import React, {useEffect, useRef, useState} from 'react'

export default function SplineObject({splineUrl, animationType, className}){
  const containerRef = useRef(null)
  const [mousePos, setMousePos] = useState({x: 0, y: 0})
  const appRef = useRef(null)
  const splineInstanceRef = useRef(null)

  // Load Spline runtime once globally
  useEffect(()=>{
    const loadSplineRuntime = async ()=>{
      if (!window.Spline) {
        try {
          const module = await import('https://unpkg.com/@splinetool/runtime@1.12.29/build/runtime.js')
          window.Spline = module
        } catch(err) {
          console.error('Failed to load Spline runtime:', err)
        }
      }
    }
    loadSplineRuntime()
  }, [])

  // Initialize Spline app when URL is provided
  useEffect(()=>{
    if (!splineUrl || !containerRef.current || appRef.current) return

    const initSpline = async ()=>{
      try {
        // Wait for Spline runtime to be available
        let attempts = 0
        while (!window.Spline && attempts < 50) {
          await new Promise(resolve => setTimeout(resolve, 100))
          attempts++
        }

        if (!window.Spline) {
          throw new Error('Spline runtime not loaded')
        }

        const { Application } = window.Spline
        const canvas = containerRef.current?.querySelector('canvas')
        
        if (!canvas) return

        const app = new Application(canvas)
        await app.load(splineUrl)
        
        appRef.current = app
        splineInstanceRef.current = app
        
        // Dispatch custom event (like Webflow does)
        containerRef.current.dispatchEvent(new Event('w-spline-load'))
        
        // Add animation class after load
        containerRef.current.classList.add('spline-loaded')
        
      } catch(err) {
        console.error('Spline initialization error:', err)
        if (containerRef.current) {
          containerRef.current.innerHTML = '<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: #fff; font-family: system-ui; text-align: center;"><div><div style="font-size: 48px; margin-bottom: 10px;">✨</div><div>3D Object Loading...</div></div></div>'
        }
      }
    }

    initSpline()

    return ()=>{
      // Cleanup on unmount
      if (splineInstanceRef.current?.dispose) {
        splineInstanceRef.current.dispose()
      }
    }
  }, [splineUrl])

  // Mouse tracking for parallax effect
  useEffect(()=>{
    const handleMouseMove = (e)=>{
      if (!containerRef.current) return
      
      // Normalize mouse position to -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = (e.clientY / window.innerHeight) * 2 - 1
      setMousePos({x, y})

      // Apply parallax transform using 3D perspective
      const rotateX = y * 8  // Increased sensitivity
      const rotateY = x * 8
      
      containerRef.current.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.0)`
      containerRef.current.style.transition = 'transform 0.08s ease-out'
    }

    const handleMouseLeave = ()=>{
      if (containerRef.current) {
        containerRef.current.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1.0)'
        containerRef.current.style.transition = 'transform 0.5s ease-out'
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    containerRef.current?.addEventListener('mouseleave', handleMouseLeave)

    return ()=>{
      window.removeEventListener('mousemove', handleMouseMove)
      containerRef.current?.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={className}
      data-animation-type={animationType}
      data-spline-url={splineUrl}
      style={{
        transition: 'transform 0.08s ease-out',
        transformStyle: 'preserve-3d',
        width: '100%',
        height: '100%',
        position: 'relative'
      }}
    >
      <canvas 
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          opacity: 0,
          animation: 'fadeIn 1s ease-out 0.3s forwards'
        }}
      ></canvas>
    </div>
  )
}

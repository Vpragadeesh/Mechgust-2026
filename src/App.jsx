import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import MetricsSection from './components/MetricsSection'
import WorksSection from './components/WorksSection'
import Footer from './components/Footer'
import Nontech from './components/Nontech'
import Tech from './components/Tech'
import Workshops from './components/Workshops'
import Onlineevents from './components/Onlineevents'
import About from './components/About'
import Contactus from './components/Contactus'

import { initializeAnimations, addHoverAnimations, initScrollAnimations } from './utils/animations'

const basename = import.meta.env.MODE === 'production' ? '/Mechgust-2026' : ''

function ScrollToTop() {
  const { pathname } = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  
  return null
}

function HomePage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      initializeAnimations()
      addHoverAnimations()
      initScrollAnimations()
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Navbar />
      <HeroSection />
      <MetricsSection />
      <WorksSection />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nontech" element={<Nontech />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/onlineevents" element={<Onlineevents />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contactus />} />
      </Routes>
    </BrowserRouter>
  )
}

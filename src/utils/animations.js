/**
 * Animations module - Handles all scroll-triggered and entrance animations
 * Mirrors Webflow's animation behavior
 */

export function initializeAnimations() {
  // Set up Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  }

  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add animation classes based on data attributes
        const element = entry.target
        
        if (element.hasAttribute('data-w-id')) {
          element.classList.add('animate-in')
          
          // Apply fade-in animation
          if (!element.classList.contains('animated')) {
            element.style.opacity = '0'
            element.style.transform = 'translateY(30px)'
            element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
            
            // Trigger animation
            setTimeout(() => {
              element.style.opacity = '1'
              element.style.transform = 'translateY(0)'
            }, 50)
            
            element.classList.add('animated')
          }
        }
        
        // Stop observing after animation
        animationObserver.unobserve(element)
      }
    })
  }, observerOptions)

  // Observe all elements with animation data attributes
  const animatedElements = document.querySelectorAll('[data-w-id]')
  animatedElements.forEach(element => {
    animationObserver.observe(element)
  })

  // Hero elements stagger animation
  const heroElements = document.querySelectorAll('.hero-text, .hero-subheading-flex, .hero-flex, .max-width-25vw')
  heroElements.forEach((element, index) => {
    element.style.opacity = '0'
    element.style.transform = 'translateY(20px)'
    element.style.animation = `fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1 + 0.2}s forwards`
  })

  // Metrics cards animation
  const metricsBlocks = document.querySelectorAll('.metrics-text-block')
  metricsBlocks.forEach((block, index) => {
    block.style.opacity = '0'
    block.style.animation = `fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15 + 0.3}s forwards`
  })

  // Works items animation
  const workItems = document.querySelectorAll('.works-wrapper')
  workItems.forEach((item, index) => {
    item.style.opacity = '0'
    item.style.animation = `fadeInScale 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15 + 0.4}s forwards`
  })

  // Avatar stagger animation
  const avatars = document.querySelectorAll('.avatar-a, .avatar-b, .avatar-c')
  avatars.forEach((avatar, index) => {
    avatar.style.opacity = '0'
    avatar.style.animation = `popIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.1 + 0.8}s forwards`
  })

  // Social icons animation
  const socialIcons = document.querySelectorAll('.social-icon')
  socialIcons.forEach((icon, index) => {
    icon.style.opacity = '0'
    icon.style.animation = `slideInRight 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1 + 0.9}s forwards`
  })
}

export function addHoverAnimations() {
  // Hover effect for buttons and links
  const buttons = document.querySelectorAll('.button-with-circle-icon, .works-link-wrapper, a[href*="/"]')
  
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)'
      this.style.transition = 'transform 0.3s ease-out'
    })
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)'
    })
  })

  // Parallax hover for hero cards
  const heroCards = document.querySelectorAll('.hero-card')
  heroCards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      const rotateX = (y - rect.height / 2) / 10
      const rotateY = (x - rect.width / 2) / 10
      
      this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
      this.style.transition = 'transform 0.1s ease-out'
    })
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)'
      this.style.transition = 'transform 0.3s ease-out'
    })
  })

  // Image hover effects
  const images = document.querySelectorAll('.works-image, .hero-card-image-front')
  images.forEach(image => {
    image.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.08)'
      this.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    })
    
    image.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)'
    })
  })
}

export function initScrollAnimations() {
  // Scroll-triggered element reveals
  let lastScrollPos = 0

  const handleScroll = () => {
    const scrollPos = window.scrollY
    const direction = scrollPos > lastScrollPos ? 'down' : 'up'
    lastScrollPos = scrollPos

    // Navbar animation on scroll
    const navbar = document.querySelector('.navbar')
    if (navbar) {
      if (scrollPos > 100) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)'
        navbar.style.backdropFilter = 'blur(10px)'
      } else {
        navbar.style.boxShadow = 'none'
        navbar.style.backdropFilter = 'none'
      }
    }

    // Parallax effect for large titles
    const largeTitles = document.querySelectorAll('.large-title')
    largeTitles.forEach(title => {
      const rect = title.getBoundingClientRect()
      const offset = (window.innerHeight - rect.top) * 0.1
      title.style.transform = `translateY(${offset}px)`
    })
  }

  window.addEventListener('scroll', handleScroll, { passive: true })
}

export function setupPageTransitions() {
  // Add smooth transitions between elements
  const navLinks = document.querySelectorAll('a[href^="/"]')
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href')
      
      // Prevent default for demo, but show animation
      if (href.startsWith('/')) {
        // You can replace this with actual routing in a real app
        console.log('Navigating to:', href)
        
        // Add fade-out animation before navigation
        document.body.style.opacity = '1'
        document.body.style.transition = 'opacity 0.3s ease-out'
        document.body.style.opacity = '0'
      }
    })
  })
}

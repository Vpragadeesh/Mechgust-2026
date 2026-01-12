import { useEffect, useState, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './WorkDetail.css'

export default function Nontech() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [visibleCards, setVisibleCards] = useState(new Set())
  const cardRefs = useRef([])

  useEffect(() => {
    // Load AOS library for scroll-based animations
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/aos@next/dist/aos.js'
    script.async = true
    script.onload = () => {
      window.AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: false,
        mirror: false,
        offset: 100,
        delay: 0
      })
    }
    document.body.appendChild(script)

    // Add AOS CSS
    const link = document.createElement('link')
    link.href = 'https://unpkg.com/aos@next/dist/aos.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    // Intersection Observer for scroll-based reveals (better performance)
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = cardRefs.current.indexOf(entry.target)
          setVisibleCards(prev => new Set([...prev, index]))
          observer.unobserve(entry.target)
        }
      })
    }, options)

    cardRefs.current.forEach(card => {
      if (card) observer.observe(card)
    })

    return () => {
      cardRefs.current.forEach(card => {
        if (card) observer.unobserve(card)
      })
    }
  }, [])
  const work = {
    title: 'NON - TECHNICAL',
    category: 'Marketing',
    client: 'Mutil-Digital Capita',
    date: 'March 15, 2024',
    description: 'We embrace the latest trends, technology, and forward-thinking approaches to deliver sleek solutions.',
    overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    objectives: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    ],
    scopeItems: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    ],
    events: [
      { letter: 'A', label: 'IPL AUCTION',          image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/nontech-ipl-auction', price: '₹100' },
      { letter: 'B', label: 'CONNECTIONS',          image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/nontech-connections', price: '₹100' },
      { letter: 'C', label: 'GRAB A MINUTE',        image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/nontech-grab-a-minute', price: '₹100' },
      { letter: 'D', label: 'GUESS THE LYRICS',     image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/nontech-guess-lyrics', price: '₹100' },
      { letter: 'E', label: 'PICTO SCAVENGER HUNT', image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/nontech-scavenger-hunt', price: '₹100' },
      { letter: 'F', label: 'GUESS THE LYRICS',     image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/nontech-guess-lyrics-2', price: '₹100' },
      { letter: 'G', label: 'POSTER DESIGN',        image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/nontech-poster-design', price: '₹100' },
      { letter: 'H', label: 'TREASURE HUNT',        image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/nontech-treasure-hunt', price: '₹100' },
      { letter: 'I', label: 'SQUID GAME RELAY',     image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/nontech-squid-game', price: '₹100' },
      { letter: 'J', label: 'SCRIBBLE',             image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/nontech-scribble', price: '₹100' }
    ]
  }

  return (
    <div className="work-detail-page">
      <button
        onClick={() => navigate('/')}
        className="close-button"
        aria-label="Close work detail"
      >✕ Close</button>

      <section className="events-section">
        <div className="w-layout-blockcontainer container w-container">
          <h2 className="events-title">{work.title} EVENTS</h2>

          <div className="events-grid">
            {work.events.map((event, i) => (
              <div
                key={i}
                ref={el => cardRefs.current[i] = el}
                className={`event-card ${visibleCards.has(i) ? 'visible' : ''} ${event.isRed ? 'red-event' : ''}`}
                style={{
                  animationDelay: `${i * 0.1}s`
                }}
                data-aos={i % 2 === 0 ? 'fade-in-left' : 'fade-in-right'}
                data-aos-delay={`${i * 50}`}
                data-aos-duration="800"
              >
                {/* Left Content */}
                <div className="event-content">
                  <h3 className="event-section-title">DESCRIPTION</h3>
                  <p className="event-description">{event.description}</p>

                  <h3 className="event-section-title">RULES</h3>
                  <ul className="event-rules">
                    {event.rules.map((rule, rIdx) => (
                      <li key={rIdx} className="rule-item">• {rule}</li>
                    ))}
                  </ul>

                  <div className="event-footer">
                    <div className="event-price">{event.price}</div>
                    <a 
                      href={event.formLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="register-btn"
                    >
                      REGISTER NOW
                    </a>
                  </div>
                </div>

                {/* Right Image */}
                <div className="event-image-wrapper">
                  <img
                    src={event.image}
                    alt={event.label}
                    className="event-image"
                    loading="lazy"
                  />
                  <div className="image-overlay" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

import { useEffect, useState, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './WorkDetail.css'

export default function Onlineevents() {
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
    title: 'ONLINE   ',
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
      
      
      
      { letter: 'A', label: 'FREE FIRE',          image: 'events/image.jpg', description: 'This Free Fire event tests players’ skills and teamwork in a competitive battle royale format, with strict fair play and discipline to ensure an exciting and balanced competition.', rules: ['Players must register with correct in-game names and team details.',
'Only mobile devices are allowed; emulators, triggers, and third-party apps are banned.',
'Players must join the lobby on time; late entries will not be allowed.',
'Matches will be played in classic battle royale mode with a pre-decided format.',
'Use of hacks, cheats, teaming, exploits, or toxic behavior leads to disqualification.',
'Judges’ and organizers’ decisions are final and cannot be contested.'], formLink: 'https://forms.gle/eZSUJGW6CRzU6uTM6', price: 'Entry Fee ₹50' },
      
      
      
      
      
      { letter: 'B', label: 'BGMI',          image: 'events/image.jpg', description: 'This BGMI event delivers intense battle royale action where players showcase skill, strategy, and teamwork under strict fair-play rules for a balanced and thrilling gaming experience.', rules: ['Players must register with correct in-game names and team details.',
'Only mobile devices are allowed; emulators, triggers, and third-party apps are banned.',
'Players must join the lobby on time; late entries will not be entertained.',
'Matches will be played in classic battle royale mode with a pre-decided format.',
'Use of hacks, cheats, teaming, exploits, or toxic behavior results in disqualification.',
'Judges’ and organizers’ decisions are final and cannot be contested.'], formLink: 'https://forms.gle/eZSUJGW6CRzU6uTM6', price: 'Entry Fee ₹50' },
      
      
      
      
      
      
      { letter: 'C', label: 'PHOTOGRAPHY',        image: 'events/image.jpg', description: 'This photography event invites participants to showcase creativity through original images, with fair judging based on clear guidelines to ensure equal opportunity for all.', rules: ['Photos must be original and within the size limit.',
'DSLR and mobile cameras are allowed; AI images are not permitted.',
'Only basic colour and image adjustments are allowed.',
'No watermarks, logos, or identifying marks on images.',
'Entries must be submitted before the deadline.',
'Judges’ and organizers’ decisions are final.'], formLink: 'https://forms.gle/eZSUJGW6CRzU6uTM6', price: 'Entry Fee ₹50' },
      
      
      
      
      
      
      
      
      
      
      { letter: 'D', label: 'MEME MANIA',     image: 'events/image.jpg', description: 'Meme Mania is a fun and creative event where participants showcase humor and originality through image-based memes, judged on popularity and quality while ensuring fair play and content integrity.', rules: ['Participants must submit their Instagram profile for verification and are allowed only one entry.',
'The meme concept is open-themed and must be original without copyright infringement.',
'Only image memes are allowed; videos are not permitted.',
'Auto likes are strictly prohibited and will result in disqualification.',
'Watermarks and political, violent, or adult content are not allowed.',
'Winners are decided based on likes received and judges’ evaluation.'], formLink: 'https://forms.gle/eZSUJGW6CRzU6uTM6', price: 'Entry Fee ₹50' },
      
      
      
      
      
      
      
      
      
      
      
      
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

<p className="max-width-25vw" style={{ color: '#888', marginTop: '0.5rem' ,}}>
  Scroll down to see all the events
</p>
          










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
                {/* Left Image */}
                <div className="event-image-wrapper">
                  <img
                    src={event.image}
                    alt={event.label}
                    className="event-image"
                    loading="lazy"
                  />
                  <div className="image-overlay" />
                </div>

                {/* Right Content */}
                <div className="event-content">
                  <h3 className="event-section-title">{event.label}</h3>
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

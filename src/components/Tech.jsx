import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './WorkDetail.css'

export default function Tech() {
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
    title: 'TECHNICAL',
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
      
      
      { letter: 'A', label: 'MR.MACHINIST',          image: 'events/image.jpg', description: 'The Mr. Machinist event evaluates practical machining skills in lathe, grinding, drilling, and tool making, focusing on accuracy, surface finish, safety, and time management.', rules: ['Closed shoes must be worn at all times',
'Loose-fitting clothes are strictly prohibited',
'Long hair must be properly tied',
'Ensure proper clamping of workpieces before starting any machine',
'Machine operation must begin only after supervisor approval',
'Follow shop-floor discipline and safety throughout the event'], formLink: 'https://forms.gle/aaCrC6Fs72CHwUvB6', price: 'Entry Fee : Free' },
      
      
      
      
      
      
      
      { letter: 'B', label: 'PAPER PRESENTATION',          image: 'events/image.jpg', description: 'The Paper Presentation event provides a platform to present innovative ideas and research in Mechanical Engineering, focusing on originality, technical depth, and effective communication.', rules: ['Participation can be Individual or Team-based (maximum 2–3 members per team)',
'The abstract must not exceed 250 words, and the paper should be limited to 15 pages',
'PowerPoint presentation is mandatory, and participants must bring their own laptop',
'Soft copies of the paper and presentation must be in .docs format',
'Each team will have a maximum of 10 minutes to present',
'The judges’ decision will be final, with no arguments or appeals entertained'], formLink: 'https://forms.gle/Mbm4fsCpvvCJjXqSA', price: 'Entry Fee : Free' },
      
      
      
      
      
      { letter: 'C', label: 'PROJECT PRESENTATION',        image: 'events/image.jpg', description: 'The Project Presentation event enables teams to present innovative projects, focusing on problem definition, technical approach, and practical feasibility with effective communication.', rules: ['Maximum 3 members are allowed per team',
'Each team will be allotted 15 minutes for presentation including Q&A',
'The presentation must be limited to a maximum of 10 slides',
'Graphs must have clearly labeled axes and only one topic per slide',
'If videos are used, a backup slide with screenshots must be included',
'The jury’s decision will be final and no appeals will be entertained'], formLink: 'https://forms.gle/drEDCDmssVnbHRds5', price: 'Entry Fee : Free' },
      
      
      
      
      
      
      
      
      { letter: 'D', label: 'MECH MINDS',     image: 'events/image.jpg', description: 'Mech Minds is a mechanical engineering quiz event that tests technical knowledge, conceptual clarity, speed, and problem-solving skills.', rules: ['Team size is limited to 1–2 members per team',
'All registered teams will compete in the preliminary round',
'Questions will be strictly from Mechanical Engineering topics',
'Teams must answer within the given time limit for each question',
'No external resources such as books, mobile phones, or calculators are allowed',
'The panel’s decision will be final and binding' ], formLink: 'https://forms.gle/yMrstXjCS9kPoQrv6', price: 'Entry Fee : Free' },
      
      
      
      
      
      
      
      
      
      { letter: 'E', label: 'REVERSE ENGINEERING', image: 'events/image.jpg', description: 'The Cycle Assembly event challenges teams to assemble a disassembled bicycle, testing practical skills, mechanical understanding, teamwork, and problem-solving.', rules: ['Team size must be 2–3 members per team',
'Participants will be provided with a fully disassembled bicycle and required components',
'Basic tools necessary for assembly will be provided by the organizers',
'Only top-performing teams from the MCQ round will qualify for the assembly round',
'Qualified teams must assemble the bicycle correctly within the monitored time limit',
'Accuracy and speed of assembly will be key evaluation factors'], formLink: 'https://forms.gle/drEDCDmssVnbHRds5', price: 'Entry Fee : Free' },
      
      
      
      
      
      
      
      
      
      
      { letter: 'F', label: 'CAD',     image: 'events/image.jpg', description: 'The Computer Aided Designing event tests CAD knowledge and modeling skills, focusing on precision, efficiency, and design quality.', rules: ['Only individual participation is allowed for this event',
'Participants must bring their own laptops with pre-installed CAD software',
'Any CAD software may be used for the competition',
'Top-performing participants in the MCQ round will qualify for the final round',
'Participants must create the given draft model within the specified time limit',
'Models will be evaluated based on accuracy, efficiency, and overall quality'], formLink: 'https://forms.gle/Mbm4fsCpvvCJjXqSA', price: 'Entry Fee : Free' },
      
      
      
      
      
      
      
      
      
      { letter: 'G', label: 'CAM',        image: 'events/image.jpg', description: 'The Computer Aided Manufacturing event tests participants’ ability to program and simulate CAM models within a given time. It emphasizes accuracy, efficiency, complexity, and manufacturing feasibility.', rules: ['Team size is limited to a maximum of 2 members',
'Participants must create a CAM model using software such as Mastercam, Fusion 360, or similar',
'A specific time limit will be provided to complete programming and simulation',
'Any CAM software is permitted for this event',
'Teams will be evaluated by a jury panel',
'The panel’s decision will be final and binding'], formLink: 'https://forms.gle/Mbm4fsCpvvCJjXqSA', price: 'Entry Fee : Free' },
      
      
      
      
      
      
      
      
      
      
      
      
      { letter: 'H', label: 'WATER ROCKETRY',        image: 'events/image.jpg', description: 'The Water Rocketry event challenges teams to design and launch a safe, efficient water-powered rocket. It focuses on distance, stability, design quality, and strict adherence to safety rules.', rules: ['Team size is limited to a maximum of 2 members',
'Rockets must be fully assembled before attending the event and each team may have only one rocket',
'Only cardboard is allowed for wings and a single 1-litre water bottle must be used as the pressure vessel',
'Water and air pressure are the only permissible propulsion sources and pressure must not exceed 45 psi',
'Use of metal, glass, hard plastics, spikes, antennas, or parachutes is strictly prohibited',
'Only one official launch attempt will be allowed and evaluated, and unsafe rockets will be disqualified'], formLink: 'https://forms.gle/yMrstXjCS9kPoQrv6', price: 'Entry Fee : Free' },
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
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

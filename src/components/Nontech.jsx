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
      { letter: 'A', label: 'IPL AUCTION',          image: 'events/image.jpg', description: 'IPL AUCTION is a fast-paced team bidding event where participants build a squad using a fixed virtual budget.It tests strategy, budget management, and quick decision-making.', rules: ['IPL team of 4–5 members',
'Fixed virtual budget (e.g., ₹100 Cr)',
'Auction with base price and minimum bid increments',
'Highest bidder wins, amount deducted, sale final',
'Squad must follow organizer rules',
'Fair play mandatory, violations lead to disqualification',
'Judged on team balance, budget use, and strategy',
'Tie resolved by tie-breaker, judges’ decision final'], formLink: 'https://forms.gle/1sADdJZ4AQGSsFPu5', price: 'Entry Fee ₹150' },


      { letter: 'B', label: 'CONNECTIONS',          image: 'events/image.jpg', description: 'CONNEXTIONS is a fast-paced visual reasoning event where teams identify the common link between a set of images, testing their observation, logic, and quick-thinking skills.', rules: ['Teams of exactly 2 members participate together',
'Players identify the common link between given images',
'The event has three rounds: Warm-Up, Themed, and Rapid-Fire',
'Only one final answer per question is allowed',
'Correct answer scores 1 point; incorrect scores 0',
'No external help; ties go to sudden death and judges’ decisions are final'], formLink: 'https://forms.gle/8FZNGX2dms5RJWqW6', price: 'Entry Fee ₹50' },






      { letter: 'C', label: 'GRAB A MINUTE',        image: 'events/image.jpg', description: 'GRAB A MINUTE is a high-energy event where participants test their memory, observation, and quick-thinking skills through timed picture recognition and topic challenges.', rules: ['Each team must consist of 2 participants',
'The event is conducted in two rounds: Picture Recognition and Topic Challenge',
'In Round 1, pictures are shown briefly and participants recall details within limited time',
'In Round 2, participants list relevant names or items for a given topic within 30 seconds',
'Participants compete head-to-head and points are awarded based on accuracy and relevance',
'Cheating leads to disqualification, team scores are combined, and judges’ decisions are final'], formLink: 'https://forms.gle/8FZNGX2dms5RJWqW6', price: 'Entry Fee ₹50' },







      
      { letter: 'D', label: 'GUESS THE LYRICS',     image: 'events/image.jpg', description: 'GUESS THE LYRICS is a fast-paced music event where teams identify songs and missing lyrics, testing quick response, musical knowledge, and teamwork.', rules: ['Each team must consist of 2 participants',
'The event is conducted in two rounds',
'Round 1 involves identifying songs based on displayed pictures within 15 seconds',
'Round 2 requires guessing the missing lyric from a played song within 10 seconds',
'All rounds use the Multibuzzer system; misuse leads to disqualification',
'Points are awarded for correct answers, cheating leads to disqualification, and judges’ decisions are final'], formLink: 'https://forms.gle/8FZNGX2dms5RJWqW6', price: 'Entry Fee ₹50' },
      
      
      
      
      
      
      
      
      
      
      { letter: 'E', label: 'PICTO SCAVENGER HUNT', image: 'events/image.jpg', description: 'PICTO SCAVENGER HUNT is a fast-paced photography challenge where participants capture original photos from picture clues, testing creativity, observation, and speed.', rules: ['Teams may consist of 1–2 participants',
'The event includes one main round with a tie-breaker if required',
'Participants receive picture-based clues and must click photos representing them',
'All photos must be original, unedited, taken on the spot using mobile cameras only',
'Photos must be submitted within the given time through the specified platform',
'Scoring is based on accuracy, creativity, speed; rule violations lead to disqualification and judges’ decisions are final'], formLink: 'https://forms.gle/NSnpHxp5b28kde8MA', price: 'Entry Fee ₹50' },
      
      
      
      
      
      
      
      
      
      
      
      
      { letter: 'F', label: 'MIND FLAYER QUIZ',     image: 'events/image.jpg', description: 'MIND FLAYER QUIZ is a buzzer-based Stranger Things quiz that tests speed, accuracy, and fandom knowledge through intense rounds.', rules: ['Each team must consist of exactly 2 members',
'The quiz is based on Stranger Things and uses buzzer responses',
'The event has two lapses: Initial Lapse and Final Lapse',
'All rounds are conducted using Multibuzzer; misuse leads to disqualification',
'Scores are awarded and deducted based on correctness and round rules',
'Cheating is prohibited, tie-breakers may be conducted, and judges’ decisions are final'], formLink: 'https://forms.gle/8FZNGX2dms5RJWqW6', price: 'Entry Fee ₹50' },
      
      
      
      
      
      
      
      
      
      
      
      
      { letter: 'G', label: 'POSTER DESIGN',        image: 'events/image.jpg', description: 'POSTER DESIGN (ON-SPOT) is an individual event where participants create an original Canva poster on a given theme, testing creativity, design skills, and time management.', rules: ['Individual on-spot event with a single participant',
'Theme is given on the spot and the event has one round only',
'Poster must be designed only in Canva using personal laptop',
'No templates, downloads, or external references allowed',
'30 minutes total time including submission; late entries not accepted',
'Judging is based on creativity, relevance, and visual clarity; judges’ decision is final'], formLink: 'https://forms.gle/7n9jxXZGgjiAf3Bn7', price: 'Entry Fee ₹50' },
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      { letter: 'H', label: 'TREASURE HUNT',        image: 'events/image.jpg', description: 'TREASURE HUNT is a team-based adventure where participants solve clues and tasks to reach the treasure, testing teamwork, problem-solving, and speed.', rules: ['Teams of 3–4 members must stay together throughout the game',
'The hunt starts with a clue and each clue leads to the next location',
'Clues include riddles, puzzles, images, or tasks and must not be shared',
'Tasks must be completed as instructed; skipping levels is not allowed',
'Time is tracked and penalties apply for wrong answers or violations',
'Cheating leads to disqualification, ties are resolved by tie-breaker, and judges’ decisions are final'], formLink: 'https://forms.gle/pVyi5x8oAzJesLU28', price: 'Entry Fee ₹100' },
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      { letter: 'I', label: 'SQUID GAME RELAY',     image: 'events/image.jpg', description: 'SQUID GAME RELAY is a fast-paced team relay inspired by safe Squid Game challenges, testing coordination, speed, and accuracy.', rules: ['Teams of 4–5 members participate in a relay of mini-games',
'Each mini-game must be completed in sequence to move forward',
'Only one player competes at a time and tags the next teammate',
'Tasks must be completed within the given time limits',
'Scoring is based on completion, time, and accuracy',
'Rule violations or unsafe behavior lead to disqualification; ties go to sudden death'], formLink: 'https://forms.gle/HeRSJNaosNZJRa7G6', price: 'Entry Fee ₹100' },
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      { letter: 'J', label: 'SCRIBBLE',             image: 'events/image.jpg', description: 'SCRIBBLE is a fun team-based drawing and guessing game where one player sketches a word while the other guesses it within a time limit. It tests creativity, communication, and quick thinking.', rules: ['Each team consists of 2 members: one Drawer and one Guesser',
'The Drawer draws the given word while the Guesser identifies it within 30 seconds',
'Only drawings are allowed; no letters, numbers, symbols, gestures, or verbal clues',
'The Guesser may make unlimited guesses while other teams remain silent',
'Correct answers score 1 point; wrong answers or time-outs score 0',
'Cheating leads to disqualification, difficulty is set by the coordinator, and judges’ decisions are final'], formLink: 'https://forms.gle/8FZNGX2dms5RJWqW6', price: 'Entry Fee ₹50' }
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

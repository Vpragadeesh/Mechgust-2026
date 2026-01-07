import { useNavigate } from 'react-router-dom'
import './WorkDetail.css'

export default function About() {
  const navigate = useNavigate()

  return (
    <div className="work-detail-page">
      <button
        onClick={() => navigate('/')}
        className="close-button"
        aria-label="Close"
      >✕ Close</button>

      <section className="events-section">
        <div className="w-layout-blockcontainer container w-container">
          <h2 className="events-title">ABOUT US</h2>
          
          <div className="about-content" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#ccc', marginBottom: '2rem' }}>
              Welcome to our college symposium! We are dedicated to bringing together the brightest minds 
              for an unforgettable experience of learning, innovation, and fun.
            </p>
            
            <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Our Mission</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#aaa', marginBottom: '2rem' }}>
              To foster creativity, technical excellence, and collaborative spirit among students 
              through engaging events and workshops.
            </p>
            
            <h3 style={{ color: '#fff', marginBottom: '1rem' }}>What We Offer</h3>
            <ul style={{ color: '#aaa', lineHeight: '2', paddingLeft: '1.5rem' }}>
              <li>Technical Events - Showcase your coding and engineering skills</li>
              <li>Non-Technical Events - Fun activities for everyone</li>
              <li>Workshops - Learn from industry experts</li>
              <li>Online Events - Participate from anywhere</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

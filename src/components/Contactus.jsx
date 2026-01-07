import { useNavigate } from 'react-router-dom'
import './WorkDetail.css'

export default function Contactus() {
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
          <h2 className="events-title">CONTACT US</h2>
          
          <div className="contact-content" style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Get In Touch</h3>
              <p style={{ color: '#aaa', lineHeight: '1.7' }}>
                Have questions about our events? Want to participate or collaborate? 
                Reach out to us!
              </p>
            </div>
            
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>📧 Email</h4>
                <p style={{ color: '#aaa' }}>contact@symposium.edu</p>
              </div>
              
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>📞 Phone</h4>
                <p style={{ color: '#aaa' }}>+91 98765 43210</p>
              </div>
              
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>📍 Location</h4>
                <p style={{ color: '#aaa' }}>College Campus, Main Building</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import { useNavigate } from 'react-router-dom'
import './WorkDetail.css'

export default function Contactus() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    alert('Message sent! We will get back to you soon.')
  }

  return (
    <div className="work-detail-page">
      <button
        onClick={() => navigate('/')}
        className="close-button"
        aria-label="Close"
      >✕ Close</button>

      <section className="events-section" style={{ minHeight: '100vh', paddingTop: '8rem' }}>
        <div className="w-layout-blockcontainer container w-container">
          {/* Header */}
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ 
              color: '#888', 
              letterSpacing: '0.2em', 
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              marginBottom: '0.5rem'
            }}>Get In Touch</p>
            <h1 style={{ 
              fontSize: 'clamp(3rem, 10vw, 8rem)', 
              fontWeight: '700',
              margin: 0,
              lineHeight: 1
            }}>
              <span style={{ color: '#fff' }}>CON</span>
              <span style={{ color: '#333' }}>TACT</span>
            </h1>
          </div>
          
          {/* Main Content Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'start'
          }}>
            {/* Contact Form */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ 
                  display: 'block', 
                  color: '#f5f5f5', 
                  marginBottom: '0.5rem',
                  fontSize: '0.9rem'
                }}>Name</label>
                <input 
                  type="text" 
                  placeholder="e. g. John Doe"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: '#1a1a1a',
                    border: '1px solid #333',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '1rem',
                    outline: 'none'
                  }}
                />
              </div>
              
              <div>
                <label style={{ 
                  display: 'block', 
                  color: '#f5f5f5', 
                  marginBottom: '0.5rem',
                  fontSize: '0.9rem'
                }}>Email Address</label>
                <input 
                  type="email" 
                  placeholder="e. g. johndoe@email.com"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: '#1a1a1a',
                    border: '1px solid #333',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '1rem',
                    outline: 'none'
                  }}
                />
              </div>
              
              <div>
                <label style={{ 
                  display: 'block', 
                  color: '#f5f5f5', 
                  marginBottom: '0.5rem',
                  fontSize: '0.9rem'
                }}>Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="(123) - 456 - 789"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: '#1a1a1a',
                    border: '1px solid #333',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '1rem',
                    outline: 'none'
                  }}
                />
              </div>
              
              <div>
                <label style={{ 
                  display: 'block', 
                  color: '#f5f5f5', 
                  marginBottom: '0.5rem',
                  fontSize: '0.9rem'
                }}>Your Message</label>
                <textarea 
                  placeholder="Write Your Message Here"
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: '#1a1a1a',
                    border: '1px solid #333',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '1rem',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit'
                  }}
                />
              </div>
              
              <button 
                type="submit"
                style={{
                  padding: '1rem 2.5rem',
                  background: '#fff',
                  color: '#000',
                  border: 'none',
                  borderRadius: '50px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  letterSpacing: '0.1em',
                  cursor: 'pointer',
                  alignSelf: 'flex-start',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = '#f0f0f0'
                  e.target.style.transform = 'scale(1.02)'
                }}
                onMouseOut={(e) => {
                  e.target.style.background = '#fff'
                  e.target.style.transform = 'scale(1)'
                }}
              >
                SUBMIT
              </button>
            </form>
            
            {/* Contact Info Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Email Card */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                background: '#1a1a1a',
                padding: '1.5rem 2rem',
                borderRadius: '12px',
                border: '1px solid #2a2a2a'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: '#2a2a2a',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="M22 6l-10 7L2 6"/>
                  </svg>
                </div>
                <div>
                  <p style={{ 
                    color: '#888', 
                    fontSize: '0.75rem', 
                    letterSpacing: '0.15em',
                    marginBottom: '0.25rem',
                    textTransform: 'uppercase'
                  }}>EMAIL</p>
                  <p style={{ color: '#f5f5f5', fontSize: '1rem', margin: 0 }}>mechgust@citchennai.net</p>
                </div>
              </div>
              
              {/* Location Card */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                background: '#1a1a1a',
                padding: '1.5rem 2rem',
                borderRadius: '12px',
                border: '1px solid #2a2a2a'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: '#2a2a2a',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                  </svg>
                </div>
                <div>
                  <p style={{ 
                    color: '#888', 
                    fontSize: '0.75rem', 
                    letterSpacing: '0.15em',
                    marginBottom: '0.25rem',
                    textTransform: 'uppercase'
                  }}>LOCATION</p>
                  <p style={{ color: '#f5f5f5', fontSize: '1rem', margin: 0, lineHeight: 1.4 }}>
                    Department of Mechanical Engineering<br/>
                    Chennai instsitute of technology(CIT)  <br/>
                    Kundrathur,Chennai,600069.               </p>
                </div>
              </div>
              
              {/* Phone Card */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                background: '#1a1a1a',
                padding: '1.5rem 2rem',
                borderRadius: '12px',
                border: '1px solid #2a2a2a'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: '#2a2a2a',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p style={{ 
                    color: '#888', 
                    fontSize: '0.75rem', 
                    letterSpacing: '0.15em',
                    marginBottom: '0.25rem',
                    textTransform: 'uppercase'
                  }}>PHONE</p>
                  <p style={{ color: '#f5f5f5', fontSize: '1rem', margin: 0 }}>+91 98765 43210</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

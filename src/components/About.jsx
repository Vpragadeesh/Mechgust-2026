import { useNavigate, Link } from 'react-router-dom'
import './WorkDetail.css'

export default function About() {
  const navigate = useNavigate()

  const teamMembers = [
    {
      name: 'Dr. John Smith',
      role: 'FACULTY COORDINATOR',
      email: 'john@mech.edu',
      image: 'https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/67021bf42ce586086aea69fc_Team3.jpg'
    },
    {
      name: 'Priya Kumar',
      role: 'STUDENT COORDINATOR',
      email: 'priya@mech.edu',
      image: 'https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/67021bf42ce586086aea6a3c_Team2.jpg'
    },
    {
      name: 'Rahul Dev',
      role: 'TECH LEAD',
      email: 'rahul@mech.edu',
      image: 'https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/67021bf42ce586086aea6a3e_Team1.jpg'
    }
  ]

  const timelineData = [
    { year: '2001', label: 'FOUNDED', desc: 'Department of Mechanical Engineering established with a vision to create future innovators.' },
    { year: '2015', label: 'FIRST SYMPOSIUM', desc: 'MECHGUST was born as a small departmental event with just 200 participants.' },
    { year: '2023', label: '2K+ PARTICIPANTS', desc: 'Grew into one of the largest technical symposiums in the region.' },
    { year: '2026', label: 'SILVER ERA', desc: 'Celebrating 25 years of excellence with our biggest edition yet.' }
  ]

  const skills = [
    { name: 'TECHNICAL EVENTS', percent: 85 },
    { name: 'WORKSHOPS', percent: 90 },
    { name: 'INNOVATION', percent: 75 },
    { name: 'STUDENT ENGAGEMENT', percent: 95 }
  ]

  return (
    <div className="work-detail-page" style={{ background: '#050505' }}>
      <button
        onClick={() => navigate('/')}
        className="close-button"
        aria-label="Close"
      >✕ Close</button>

      {/* Hero Section */}
      <section style={{ 
        minHeight: '90vh', 
        padding: '10rem 5% 4rem',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'start'
          }}>
            {/* Left - Title */}
            <div>
              <h1 style={{
                fontSize: 'clamp(4rem, 12vw, 10rem)',
                fontWeight: '700',
                color: '#fff',
                lineHeight: '0.95',
                margin: 0,
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.5rem'
              }}>
                ABOUT US
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" style={{ marginTop: '1rem' }}>
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </h1>
              
              {/* Arrow Icon */}
              <div style={{ marginTop: '3rem' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </div>
            </div>
            
            {/* Right - Avatars & Tagline */}
            <div style={{ textAlign: 'right' }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'flex-end',
                marginBottom: '2rem'
              }}>
                {teamMembers.map((member, i) => (
                  <div key={i} style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    border: '3px solid #050505',
                    overflow: 'hidden',
                    marginLeft: i > 0 ? '-20px' : 0
                  }}>
                    <img 
                      src={member.image} 
                      alt={member.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                ))}
              </div>
              <p style={{
                color: '#888',
                fontSize: '0.85rem',
                letterSpacing: '0.15em',
                lineHeight: '1.8',
                textTransform: 'uppercase'
              }}>
                WE TRANSFORM<br/>
                YOUR IDEAS INTO<br/>
                STUNNING EXPERIENCES.
              </p>
            </div>
          </div>

          {/* Folder Cards */}
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            marginTop: '4rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            {/* Card 1 - MECH */}
            <div style={{
              background: 'linear-gradient(145deg, #1a1a2e 0%, #16162a 100%)',
              borderRadius: '20px',
              padding: '2rem',
              width: '200px',
              height: '180px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '-10px',
                left: '20px',
                right: '20px',
                height: '20px',
                background: '#252540',
                borderRadius: '8px 8px 0 0'
              }}/>
              <span style={{ fontSize: '2rem', fontWeight: '700', color: '#fff' }}>MECH</span>
              <span style={{ fontSize: '0.7rem', color: '#888', letterSpacing: '0.2em' }}>DEPARTMENT</span>
              <div style={{
                marginTop: '1rem',
                width: '50px',
                height: '50px',
                border: '2px solid #444',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
                </svg>
              </div>
            </div>

            {/* Card 2 - Image */}
            <div style={{
              background: '#f5f5f5',
              borderRadius: '20px',
              width: '200px',
              height: '180px',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img 
                src="https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/670229a75f4844ac9d8daa0a_Services-p-500.jpg"
                alt="Symposium"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Card 3 - Satisfaction */}
            <div style={{
              background: 'linear-gradient(145deg, #1a1a2e 0%, #16162a 100%)',
              borderRadius: '20px',
              padding: '2rem',
              width: '200px',
              height: '180px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '-10px',
                left: '20px',
                right: '20px',
                height: '20px',
                background: '#252540',
                borderRadius: '8px 8px 0 0'
              }}/>
              <span style={{ fontSize: '0.6rem', color: '#888', marginBottom: '0.5rem' }}>✦</span>
              <span style={{ fontSize: '2.5rem', fontWeight: '700', color: '#fff' }}>99.7<sup style={{ fontSize: '1rem' }}>%</sup></span>
              <span style={{ fontSize: '0.7rem', color: '#888', letterSpacing: '0.15em' }}>SATISFACTION</span>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section style={{ padding: '6rem 5%', background: '#050505' }}>
        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'start'
        }}>
          {/* Left - Title */}
          <div>
            <p style={{
              color: '#666',
              fontSize: '0.8rem',
              letterSpacing: '0.2em',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{ opacity: 0.5 }}>◎</span> WELCOME
            </p>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '400',
              color: '#fff',
              margin: '0 0 1.5rem 0',
              fontStyle: 'italic'
            }}>Our Timeline</h2>
            <p style={{
              color: '#666',
              fontSize: '1rem',
              lineHeight: '1.8',
              maxWidth: '400px',
              marginBottom: '2rem'
            }}>
              Established in 2001, our department emerged from a collective passion for engineering, innovation, and the boundless potential of mechanical systems.
            </p>
            <Link 
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.8rem 1.5rem 0.8rem 2rem',
                background: 'transparent',
                border: '1px solid #444',
                borderRadius: '50px',
                color: '#fff',
                textDecoration: 'none',
                fontSize: '0.85rem',
                letterSpacing: '0.1em'
              }}
            >
              EXPLORE
              <span style={{
                width: '32px',
                height: '32px',
                background: '#fff',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </span>
            </Link>
          </div>

          {/* Right - Timeline Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {timelineData.map((item, i) => (
              <div key={i} style={{
                background: 'linear-gradient(135deg, rgba(30,30,50,0.8) 0%, rgba(20,20,35,0.9) 100%)',
                borderRadius: '16px',
                padding: '2rem',
                border: '1px solid #1a1a2a'
              }}>
                <p style={{
                  color: '#666',
                  fontSize: '0.7rem',
                  letterSpacing: '0.2em',
                  marginBottom: '0.5rem'
                }}>{item.label}</p>
                <h3 style={{
                  fontSize: '3rem',
                  fontWeight: '700',
                  color: '#fff',
                  margin: '0 0 1rem 0'
                }}>{item.year}</h3>
                <p style={{
                  color: '#888',
                  fontSize: '0.95rem',
                  lineHeight: '1.6'
                }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '6rem 5%', borderTop: '1px solid #1a1a1a' }}>
        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          textAlign: 'center'
        }}>
          <div>
            <p style={{ color: '#666', fontSize: '0.75rem', letterSpacing: '0.2em', marginBottom: '1rem' }}>
              <span style={{ opacity: 0.5 }}>◎</span> EVENTS
            </p>
            <h2 style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', fontWeight: '700', color: '#fff', margin: 0 }}>25+</h2>
          </div>
          <div>
            <p style={{ color: '#666', fontSize: '0.75rem', letterSpacing: '0.2em', marginBottom: '1rem' }}>
              <span style={{ opacity: 0.5 }}>▲</span> PARTICIPANTS
            </p>
            <h2 style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', fontWeight: '700', color: '#fff', margin: 0 }}>2K+</h2>
          </div>
          <div>
            <p style={{ color: '#666', fontSize: '0.75rem', letterSpacing: '0.2em', marginBottom: '1rem' }}>
              <span style={{ opacity: 0.5 }}>✦</span> YEARS
            </p>
            <h2 style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', fontWeight: '700', color: '#fff', margin: 0 }}>25</h2>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section style={{ padding: '6rem 5%', textAlign: 'center' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p style={{
            color: '#666',
            fontSize: '0.8rem',
            letterSpacing: '0.2em',
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}>
            <span>✦</span> OUR VISION
          </p>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
            fontWeight: '400',
            lineHeight: '1.4',
            margin: 0
          }}>
            <span style={{ color: '#fff' }}>We Aspire To </span>
            <span style={{ color: '#444' }}>Be A Driving Force Behind A Future </span>
            <span style={{ color: '#fff' }}>Where Innovation </span>
            <span style={{ color: '#444' }}>Is A Powerful Catalyst For Positive Change.</span>
          </h2>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ padding: '6rem 5%' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{
              color: '#666',
              fontSize: '0.8rem',
              letterSpacing: '0.2em',
              marginBottom: '1rem'
            }}>GET TO KNOW US</p>
            <h2 style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontWeight: '400',
              margin: 0
            }}>
              <span style={{ color: '#fff', fontStyle: 'italic' }}>The </span>
              <span style={{ color: '#444' }}>Team</span>
            </h2>
            <p style={{
              color: '#666',
              fontSize: '1rem',
              marginTop: '1.5rem',
              maxWidth: '500px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Our team of talented coordinators and volunteers bring expertise and creativity to every event.
            </p>
          </div>

          {/* Team Cards */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '2rem',
            position: 'relative'
          }}>
            {teamMembers.map((member, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2rem',
                marginTop: i * 60 + 'px'
              }}>
                <div style={{
                  width: '200px',
                  height: '250px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  background: '#f5f5f5'
                }}>
                  <img 
                    src={member.image}
                    alt={member.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <p style={{
                    color: '#666',
                    fontSize: '0.7rem',
                    letterSpacing: '0.2em',
                    marginBottom: '0.5rem'
                  }}>{member.role}</p>
                  <h3 style={{
                    color: '#fff',
                    fontSize: '1.8rem',
                    fontWeight: '600',
                    margin: '0 0 0.5rem 0'
                  }}>{member.name}</h3>
                  <p style={{
                    color: '#666',
                    fontSize: '0.8rem',
                    letterSpacing: '0.1em',
                    marginBottom: '1rem'
                  }}>{member.email.toUpperCase()}</p>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {['youtube', 'instagram', 'tiktok'].map((social) => (
                      <a key={social} href="#" style={{
                        width: '28px',
                        height: '28px',
                        background: '#1a1a1a',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="#fff">
                          <circle cx="12" cy="12" r="4"/>
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section style={{ padding: '6rem 5%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <span style={{
              fontSize: '6rem',
              color: 'transparent',
              WebkitTextStroke: '1px #444',
              lineHeight: 0.8
            }}>"</span>
            <div>
              <p style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                fontWeight: '400',
                fontStyle: 'italic',
                color: '#fff',
                lineHeight: '1.5',
                marginBottom: '2rem'
              }}>
                I was blown away by the creativity and innovation at MECHGUST. The events were well-organized and the experience was unforgettable.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  overflow: 'hidden'
                }}>
                  <img 
                    src="https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/67021bf42ce586086aea6a3c_Team2.jpg"
                    alt="Testimonial"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <p style={{ color: '#fff', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.1em' }}>SARAH WINTER</p>
                  <p style={{ color: '#666', fontSize: '0.75rem', letterSpacing: '0.1em' }}>PARTICIPANT 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section style={{ padding: '6rem 5%' }}>
        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          {/* Left - Skills */}
          <div>
            <div style={{ marginBottom: '3rem' }}>
              <span style={{ color: '#666', fontSize: '0.8rem', letterSpacing: '0.2em' }}>OUR </span>
              <span style={{ color: '#fff', fontSize: '2.5rem', fontWeight: '700' }}>SKILLS</span>
            </div>
            
            {skills.map((skill, i) => (
              <div key={i} style={{ marginBottom: '2rem' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  marginBottom: '0.5rem'
                }}>
                  <span style={{
                    fontSize: '2.5rem',
                    fontWeight: '300',
                    color: i % 2 === 0 ? '#333' : '#fff',
                    fontStyle: 'italic'
                  }}>{skill.percent}%</span>
                </div>
                <div style={{
                  height: '1px',
                  background: `linear-gradient(90deg, #333 0%, #333 ${skill.percent}%, #1a1a1a ${skill.percent}%)`
                }}/>
                <p style={{
                  color: '#666',
                  fontSize: '0.75rem',
                  letterSpacing: '0.2em',
                  marginTop: '0.5rem'
                }}>{skill.name}</p>
              </div>
            ))}
          </div>

          {/* Right - Image */}
          <div style={{
            borderRadius: '24px',
            overflow: 'hidden',
            background: '#fff'
          }}>
            <img 
              src="https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/67038dd51127140791a4bc7c_PosterMockup-p-500.jpg"
              alt="Skills showcase"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

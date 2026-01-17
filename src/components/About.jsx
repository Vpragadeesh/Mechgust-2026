import { useNavigate, Link } from 'react-router-dom'
import './WorkDetail.css'

export default function About() {
  const navigate = useNavigate()



  const teamMembers = [
    {
      name: 'LEARN ',
      role: '',
      email: '',
      image: 'https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/67021bf42ce586086aea69fc_Team3.jpg'
    },
    {
      name: 'COMPLETE',
      role: '',
      email: '',
      image: 'https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/67021bf42ce586086aea6a3c_Team2.jpg'
    },
    {
      name: 'CONNECT & WIN',
      role: '',
      email: '',
      image: 'https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/67021bf42ce586086aea6a3e_Team1.jpg'
    }

    
  ]


  

  const timelineData = [
    { year: '2022', label: 'SYMPOSIUM', desc: 'Launch of MECHGUST as a departmental technical symposium Focused on core mechanical engineering events Encouraged student participation and technical learning' },
    { year: '2023', label: 'NEW ', desc: 'Increased participation from multiple colleges Introduction of new technical and non-technical events' },
    { year: '2024', label: '2.5K+ PARTICIPANTS', desc: 'Expansion of events including workshops and project presentations,Improved event organization and outreach.' },
    { year: '2025', label: 'MASSIVE SUCCESS', desc: 'Added industry-oriented sessions and advanced competitions Wider participation across regions' }
  ]

  const skills = [
    { name: 'TECH EVENTS', percent: 95 },
    { name: 'HANDS ON WORKSHOPS', percent: 92 },
    { name: 'IDEAS & INNOVATION', percent: 83 },
    { name: 'FUN & PARTICIPATION', percent: 100 }
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
                fontSize: 'clamp(1rem, 9vw, 7rem)',
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
                src="events/download.png"
                alt="Symposium"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>


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
                src="events/loogosample.neww (3)-Photoroom.png"
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
              <span style={{ opacity: 0.5 }}>◎</span> About our Institution
            </p>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '400',
              color: '#fff',
              margin: '0 0 1.5rem 0',
              fontStyle: 'italic'
            }}>Chennai institute of technology</h2>
            <p style={{
              color: '#666',
              fontSize: '1rem',
              lineHeight: '1.8',
              maxWidth: '400px',
              marginBottom: '2rem'
            }}>
<p>
Chennai Institute of Technology (CIT) is a premier engineering institution committed to excellence in technical education, innovation, and research. Established with a strong vision to nurture skilled and responsible engineers, CIT offers a dynamic learning environment that seamlessly blends academic knowledge with hands-on practical exposure. The institution emphasizes conceptual clarity, critical thinking, and technical competence, preparing students to meet the evolving demands of the engineering industry.
</p>

<p>
With a strong focus on industry-oriented learning, state-of-the-art infrastructure, and experienced faculty members, CIT encourages students to think creatively and solve real-world problems. The institute actively promotes innovation through technical events, national-level symposiums, workshops, and hands-on initiatives such as MECHGUST, providing students with opportunities to explore emerging technologies, collaborate with peers, and develop future-ready skills. Through these initiatives, CIT empowers students to innovate, lead, and contribute meaningfully to the future of engineering.
</p>



           </p>


            <Link 
              to="https://www.citchennai.edu.in/"
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




            <p style={{
              color: '#666',
              position:'relative',
              top: '10%',
              fontSize: '0.8rem',
              letterSpacing: '0.2em',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{ opacity: 0.5 }}>◎</span> About our Symposium
            </p>

            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '400',
              color: '#fff',
              margin: '0 0 1.5rem 0',
              fontStyle: 'italic'
            }}>Mechgust</h2>
          </div>

          <p style={{
              color: '#666',
              fontSize: '1rem',
              lineHeight: '1.8',
              maxWidth: '400px',
              marginBottom: '2rem'
            }}>          
            <p>
MECHGUST is the annual national-level technical symposium organized by the Department of Mechanical Engineering, Chennai Institute of Technology. Designed to bring together passionate students and innovative minds, MECHGUST provides a platform to explore mechanical engineering beyond classroom learning. The symposium focuses on encouraging creativity, technical excellence, and problem-solving through a wide range of competitive events and activities.
</p>

<p>
Centered around the theme <strong>“The Silver Era,”</strong> MECHGUST represents the age of smart machines, automation, and advanced engineering technologies. Through technical events, hands-on workshops, and interactive challenges, the symposium offers students real-world exposure and practical experience. MECHGUST inspires participants to collaborate, innovate, and develop future-ready skills while enjoying a vibrant and engaging fest atmosphere.
</p>

            
              </p> 































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
          maxWidth: '1200px', 
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
              <span style={{ opacity: 0.5 }}>✦</span> PRIZES
            </p>
            <h2 style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', fontWeight: '700', color: '#fff', margin: 0 }}>20K+</h2>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section style={{ padding: '6rem 5%', textAlign: 'center' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p style={{
            color: '#666',
            fontSize: '1.8rem',
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
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
            fontWeight: '400',
            lineHeight: '1.4',
            margin: 0
          }}>
            <span style={{ color: '#fff' }}>We Aspire To Be A Hub Of </span>
            <span style={{ color: '#444' }}>Innovation And Excellence, </span>
            <span style={{ color: '#fff' }}>Where Mechanical Minds  </span>
            <span style={{ color: '#444' }}> Unite To Create, Compete, And Collaborate—
Shaping Future Engineers
And Driving Meaningful Change Through Technology.</span>
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
            }}>WHY</p>
            <h2 style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontWeight: '400',
              margin: 0
            }}>
              <span style={{ color: '#fff', fontStyle: 'italic' }}>MECHGUST </span>
              <span style={{ color: '#444' }}>26</span>
            </h2>
            <p style={{
              color: '#666',
              fontSize: '1rem',
              marginTop: '1.5rem',
              maxWidth: '500px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              From classroom knowledge to real-world skills.
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
              <span style={{ color: '#666', fontSize: '0.8rem', letterSpacing: '0.2em' }}>WHY </span>
              <span style={{ color: '#fff', fontSize: '2.5rem', fontWeight: '700' }}>MECHGUST ROCKS</span>
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

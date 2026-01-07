import React from 'react'
import { useNavigate } from 'react-router-dom'
import SplineObject from './SplineObject'

export default function WorksSection() {
  const navigate = useNavigate()
  
  const works = [
    {
      id: 'nontech',
      label: 'Non-Technical',
      image: 'https://cdn.prod.website-files.com/67021bf42ce586086aea69e3/670279c5ed785cf3f5e8ae91_Works1.webp'
    },
    {
      id: 'tech',
      label: 'Technical',
      image: 'https://cdn.prod.website-files.com/67021bf42ce586086aea69e3/670279e81cd620f266f83dce_Works2.webp'
    },
    {
      id: 'workshops',
      label: 'Workshops',
      image: 'https://cdn.prod.website-files.com/67021bf42ce586086aea69e3/670279f98647f3b8c72705df_Works3.webp'
    },
    {
      id: 'onlineevents',
      label: 'Online Events',
      image: 'https://cdn.prod.website-files.com/67021bf42ce586086aea69e3/670279c5ed785cf3f5e8ae91_Works1.webp'
    }
  ]

  return (
    <>
      <section className="section relative">
        <div className="w-layout-blockcontainer container justify-bottom w-container">
          <div className="page-title-wrapper">
            <div className="page-title-block">
              <h5>INSIDE THE</h5>
              <div className="page-title-flex">
                <h1 className="large-title">SILVER</h1>
                <h1 className="large-title outline-white">ERA</h1>
              </div>
            </div>
            <div className="space-2rem hide-on-tab"></div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="w-dyn-list">
            <div role="list" className="works-block w-dyn-items">
              {works.map(work => (
                <div key={work.id} role="listitem" className="works-wrapper w-dyn-item">
                  <button
                    onClick={() => navigate(`/${work.id}`)}
                    className="works-link-wrapper w-inline-block"
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      width: '100%',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <div className="works-image-wrapper">
                      <img
                        src={work.image}
                        alt={work.id}
                        className="works-image"
                      />
                      <div className="works-cut-out"></div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-8rem"></div>
      </section>

      <SplineObject
        splineUrl="https://prod.spline.design/J6fFldz3YOndaynA/scene.splinecode"
        animationType="spline"
        className="spline-tab-down"
      />
    </>
  )
}

import React from 'react'

export default function MetricsSection(){
  return (
    <section id="Metrics" className="section">
      <div className="w-layout-blockcontainer container padding-9rem w-container">
        <div className="space-4rem"></div>
        <div className="metrics-wrapper">
          <div className="metrics-text-block">
            <div className="hero-subheading-flex">
              <img
                alt="fingerprint"
                src="https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/67024792d09f3730c4f72330_fingerprint.svg"
                className="icon-small"
              />
              <h5>Events</h5>
            </div>
            <h2 className="metrics-text">25+</h2>
          </div>
          <div className="metrics-text-block">
            <div className="hero-subheading-flex">
              <img
                alt="icon light"
                src="https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/6702441c652606ecea9f2d56_Icon%20Light.svg"
                className="icon-small"
              />
              <h5>Participants</h5>
            </div>
            <h2 className="metrics-text">2500+</h2>
          </div>
          <div className="metrics-text-block">
            <div className="hero-subheading-flex">
              <img
                alt="icon thunder"
                src="https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/67028ec19de9795a1a8b34f9_svg_w2Td.svg"
                className="icon-small"
              />
              <h5>Prizes</h5>
            </div>
            <h2 className="metrics-text">20K+</h2>
          </div>
        </div>
        <div className="space-4rem"></div>
      </div>
    </section>
  )
}

import React from 'react'
import '../HomeScreen.scss';
import CTAButton from '../CTAButton/CTAButton';

const OrgHighlights = ({handldeExploreCourse}) => {
  return (
    <section className='org-highlights'>
        <div className='org-highlights-card'>
          <div className='header'>
            <label>Knowledge to Fuel Your EXIM Business Growth</label>
          </div>
          <div className='content'>
            <div className='exim-description'>
              <div className='exim-text'>
                <label>Global Vyapar empowers businesses with the knowledge, strategies, and community to thrive in international trade.</label>
                <div className='knowledge-points'>
                  <ul>
                    <li>Trusted partner for export-import businesses</li>
                    <li>Expert-led learning programs</li>
                    <li>2 lakh+ community on YouTube</li>
                    <li>Webinars and hands-on learning</li>
                  </ul>
                </div>

                <p>Join our growing network of successful exporters and importers.</p>
                <div className='action-button'>
                  <CTAButton CTA={"Explore courses"} onClick={handldeExploreCourse} backgroundColor={"#f89726"} IconBackgroundColor={"white"} IconColor={"#f89726"} />
                </div>
              </div>
            </div>
            <div className="org-youtube-highlight">
              <div className="video-wrapper">
                <iframe
                  className="highlight-video"
                  src="https://www.youtube.com/embed/AgXeukFH6bw?autoplay=0&mute=1&loop=1&playlist=AgXeukFH6bw"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>
  )
}

export default OrgHighlights
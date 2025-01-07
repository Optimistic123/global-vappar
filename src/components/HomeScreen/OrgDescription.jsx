import React from 'react'
import '../HomeScreen.scss';
import CTAButton from '../CTAButton/CTAButton';


const OrgDescription = () => {
    return (
        <section className="org-description">
            <video
                className="background-video"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/assets/Cover-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="text-content">
                <div className='text-tile'>
                    {/* <Typewriter text={"Grow Your Export-Import Business with Global Vyapar"} /> */}
                    <h4 className='t-header'>Your Export-Import business starts here</h4>
                    <h4 className='t-subtitle'><span>We help domestic business go global with our streamlined import export services</span></h4>
                </div>
                <CTAButton CTA={"Get In Touch"} backgroundColor={"#f89726"} IconBackgroundColor={"white"} IconColor={"#f89726"} />
            </div>
        </section>
    )
}

export default OrgDescription
import React from 'react'
import '../HomeScreen.scss';
import CTAButton from '../CTAButton/CTAButton';

const whyUsCards = [
    {
        id: '#one',
        title: 'End-to-End Services',
        description: 'Expert support in market research, logistics, and regulatory compliance.',
    },
    {
        id: '#two',
        title: 'Expert Programs',
        description: 'Learn import export strategies through webinars, workshops, and hands-on courses.',
    },
    {
        id: '#three',
        title: 'Global Network',
        description: 'Connect with 2+ lakh like- minded import-export professionals.',
    },
];

const WhyUs = ({ handldeLearMore }) => {
    return (
        <section className="why-us-section">
            <h2>Why Choose Global Vyapar?</h2>
            <div className="card-container">
                {whyUsCards.map((card, index) => (
                    <div key={index} className="card">
                        <span className="card-id">{card.id}</span>
                        <div className='card-info'>
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='cta-button-container'>
                <CTAButton CTA={"Learn more"} onClick={handldeLearMore} backgroundColor={"#f89726"} IconBackgroundColor={"white"} IconColor={"#f89726"} />
            </div>
        </section>
    )
}

export default WhyUs
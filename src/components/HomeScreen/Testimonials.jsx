import React from 'react'
import Slider4 from '../Slider/Slider4'

const Testimonials = () => {
    const testimonialsList = [
        {
            header: "Awesome tool!",
            description: "The webinars and resources provided by Global Vyapar are invaluable. Highly recommended for aspiring entrepreneurs!",
            rating: 4.5,
            imageUrl: "/assets/client1.jpg",
            clientName: "John Doe",
            clientDesignation: "CEO, TradeConnect"
        },
        {
            header: "Awesome tool!",
            description: "The webinars and resources provided by Global Vyapar are invaluable. Highly recommended for aspiring entrepreneurs!",
            rating: 4.5,
            imageUrl: "/assets/client1.jpg",
            clientName: "John Doe",
            clientDesignation: "CEO, TradeConnect"
        },
        {
            header: "Awesome tool!",
            description: "The webinars and resources provided by Global Vyapar are invaluable. Highly recommended for aspiring entrepreneurs!",
            rating: 4.5,
            imageUrl: "/assets/client1.jpg",
            clientName: "John Doe",
            clientDesignation: "CEO, TradeConnect"
        },
        {
            header: "Awesome tool!",
            description: "The webinars and resources provided by Global Vyapar are invaluable. Highly recommended for aspiring entrepreneurs!",
            rating: 4.5,
            imageUrl: "/assets/client1.jpg",
            clientName: "John Doe",
            clientDesignation: "CEO, TradeConnect"
        }, 
        {
            header: "Awesome tool!",
            description: "The webinars and resources provided by Global Vyapar are invaluable. Highly recommended for aspiring entrepreneurs!",
            rating: 4.5,
            imageUrl: "/assets/client1.jpg",
            clientName: "John Doe",
            clientDesignation: "CEO, TradeConnect"
        }

    ];
    return (
        <section className="testimonials-section">
            <h2>Hear it from our clients!</h2>
            <div className="testimonials">
                <Slider4 slides={testimonialsList} />
            </div>
        </section>
    )
}

export default Testimonials
import React from 'react'
import StarRating from "../StarRating/index";

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <h2>Hear it from our clients!</h2>
            <div className="testimonials">
                <div className="testimonial-card">
                    <h4>Awesome tool! </h4>
                    <p className="testimonial-text">
                        "Global Vyapar has transformed the way I handle my import-export business. Their courses and support are top-notch!"
                    </p>
                    <StarRating rating={4.5} totalStars={5} />
                    <div className="client-info">
                        <img
                            src="/assets/client1.jpg"
                            alt="Client 1"
                            className="client-photo"
                        />
                        <div>
                            <h4 className="client-name">John Doe</h4>
                            <p className="client-title">CEO, TradeConnect</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial-card">
                    <h4>Awesome tool! </h4>
                    <p className="testimonial-text">
                        "The webinars and resources provided by Global Vyapar are invaluable. Highly recommended for aspiring entrepreneurs!"
                    </p>
                    <StarRating rating={4.5} totalStars={5} />
                    <div className="client-info">
                        <img
                            src="/assets/client2.jpg"
                            alt="Client 2"
                            className="client-photo"
                        />
                        <div>
                            <h4 className="client-name">Jane Smith</h4>
                            <p className="client-title">Founder, ExportEase</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial-card">
                    <h4>Awesome tool! </h4>
                    <p className="testimonial-text">
                        "Global Vyapar's startup kit made launching my export business so much easier. Thank you!"
                    </p>
                    <StarRating rating={2.5} totalStars={5} />
                    <div className="client-info">
                        <img
                            src="/assets/client3.jpg"
                            alt="Client 3"
                            className="client-photo"
                        />
                        <div>
                            <h4 className="client-name">Rajesh Kumar</h4>
                            <p className="client-title">Entrepreneur</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import './Slider.scss';
import "swiper/swiper-bundle.css";


const Slider = ({ slides }) => {
    return (
        <div className="slider-container">
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                pagination={{
                    clickable: true,
                }}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                breakpoints={{
                    768: {
                        slidesPerView: 1,
                    },
                    1024: {
                        slidesPerView: 2,
                    },
                    1440: {
                        slidesPerView: 3,
                    },
                }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="slide-item" >
                            <div className="slide-icon">{slide.icon}</div>
                            <h3 className="slide-title">{slide.title}</h3>
                            <p className="slide-subtitle">{slide.subtitle}</p>
                            <p className="slide-description">{slide.description}</p>
                            <button className="slide-btn">Learn More</button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;

import React from 'react';
import Slider2 from "../Slider/Slider2"
import "../HomeScreen.scss";
import { FaBook, FaSuitcase } from "react-icons/fa";

const Services = ({ handldeLearMore }) => {
    const slides = [
        {
            icon: <FaBook color="#f89726" size="3em" />,
            title: "Export-Import business courses",
            subtitle: "Learn from the best!",
            description:
                "Gain actionable skills, expert-led insights, and build connections with peers and professionals to drive your business growth.",
            onClick: handldeLearMore
        },
        {
            icon: <FaSuitcase color="#f89726" size="3em" />,
            title: "Export-Import start-up kit",
            subtitle: "Kickstart your trade journey!",
            description:
                "Our complete starter package offers tailored courses, step-by-step guidance, and all-in-one solutions to equip new exporters and importers with the tools, knowledge, and support needed to succeed.",
            onClick: handldeLearMore
        },
        {
            icon: <FaBook color="#f89726" size="3em" />,
            title: "Advanced Logistics",
            subtitle: "Master logistics management!",
            description:
                "Learn the skills to manage global trade logistics, reduce costs, and improve efficiency in supply chain operations.",
            onClick: handldeLearMore
        },
        {
            icon: <FaSuitcase color="#f89726" size="3em" />,
            title: "Customs Documentation",
            subtitle: "Stay compliant!",
            description:
                "Understand the necessary documentation and procedures required for smooth and compliant trade operations.",
            onClick: handldeLearMore
        }
    ];

    return (
        <section className="home-our-services">
            <h2>OUR SERVICES</h2>
            <Slider2 slides={slides} />
        </section>
    )
}

export default Services;
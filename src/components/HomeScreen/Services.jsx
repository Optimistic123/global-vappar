import React from 'react';
import Slider2 from "../Slider/Slider2"
import "../HomeScreen.scss";
import { FaBook, FaSuitcase } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Services = ({ handldeLearMore }) => {
    const slides = [
        {
            icon: <FaBook color="#000000" size="3em" />,
            // icon: "/assets/Importer-on-record.png",
            title: "Importer on record",
            subtitle: "Import made easy!",
            description: "We handle compliance, documentation, and responsibilities as your registered importer, ensuring a seamless experience.",
            onClick: handldeLearMore
        },
        {
            icon: <FaSuitcase color="#000000" size="3em" />,
            title: "Freight Forwarding",
            subtitle: "Ship globally, stress-free!",
            description: "We manage logistics, customs, and delivery to ensure your goods arrive safely and on time.",
            onClick: handldeLearMore
        },
        {
            icon: <FaBook color="#000000" size="3em" />,
            // icon: "/assets/Customs-Clearance.png",
            title: "Customs Clearance",
            subtitle: "Clear customs with confidence!",
            description: "Our expert support ensures efficient, timely, and fully compliant shipments, making trade smooth and hassle-free.",
            onClick: handldeLearMore
        },
        {
            icon: <FaSuitcase color="#000000" size="3em" />,
            // icon: "/assets/Export-Import-business-courses.png",
            title: "Export-Import business courses",
            subtitle: "Learn from the best!",
            description: "Gain actionable skills, expert-led insights, and build connections with peers and professionals to drive your business growth.",
            onClick: handldeLearMore
        },
        {
            icon: <FaSuitcase color="#000000" size="3em" />,
            // icon: "/assets/Export-Import start-up kit.png",
            title: "Export-Import start-up kit",
            subtitle: "Kickstart your trade journey!",
            description: "Our complete starter package offers tailored courses, step-by-step guidance, and all-in-one solutions to equip new exporters and importers with the tools, knowledge, and support needed to succeed.",
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
import React from 'react';
import Slider2 from "../Slider/Slider2"
import "../HomeScreen.scss";
import { FaSuitcase } from "react-icons/fa";
import { FcCustomerSupport } from "react-icons/fc";
import { PiTruckTrailerFill, PiAirplaneInFlightFill } from "react-icons/pi";
import { FaAddressBook } from "react-icons/fa6";


const Services = ({ handldeLearMore }) => {
    const slides = [
        {
            icon: <FaAddressBook color="#000000" size="3em" />,
            title: "Importer on record",
            subtitle: "Import made easy!",
            description: "We handle compliance, documentation, and responsibilities as your registered importer, ensuring a seamless experience.",
            onClick: handldeLearMore
        },
        {
            icon: <PiAirplaneInFlightFill color="#000000" size="4em" />,
            title: "Freight Forwarding",
            subtitle: "Ship globally, stress-free!",
            description: "We manage logistics, customs, and delivery to ensure your goods arrive safely and on time.",
            onClick: handldeLearMore
        },
        {
            icon: <FcCustomerSupport color="#000000" size="4em" />,
            title: "Customs Clearance",
            subtitle: "Clear customs with confidence!",
            description: "Our expert support ensures efficient, timely, and fully compliant shipments, making trade smooth and hassle-free.",
            onClick: handldeLearMore
        },
        {
            icon: <FaSuitcase color="#000000" size="3em" />,
            image: "/assets/Ex-Imp-course.webp",
            title: "Export-Import business courses",
            subtitle: "Learn from the best!",
            description: "Gain actionable skills, expert-led insights, and build connections with peers and professionals to drive your business growth.",
            onClick: handldeLearMore
        },
        {
            icon: <FaSuitcase color="#000000" size="3em" />,
            // image: "/assets/Ex-Imp-Startup-kit.webp",
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
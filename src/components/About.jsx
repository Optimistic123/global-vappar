import React from "react";
import "./About.scss";
import { FcBusinessman } from "react-icons/fc";

const About = () => {
    return (
        <div className="aboutus-section">
            <div className="content-container">
                <h2 className="section-title">
                    <span className="icon"><FcBusinessman /></span> Meet The Founder
                </h2>
                <div className="details-container">
                    <div className="text-content">
                        <div className="text-content-header">
                            <p>
                                I'm <strong>Dipankar Biswas</strong>, a seasoned expert with over
                                <strong> 10 years of experience</strong> in global trade. With a
                                community of <strong>197K subscribers</strong>, I specialize in
                                simplifying complex processes such as freight forwarding and
                                customs clearance, allowing you to focus on scaling your business
                                internationally.
                            </p>

                            <p>
                                Expand your business beyond borders with comprehensive solutions
                                in trade, logistics, customs, and compliance. At Global Vyapar,
                                we are your trusted partner in the export-import industry,
                                dedicated to driving your global growth and success.
                            </p>
                        </div>

                        <div className="video-container">
                            <video
                                className="founder-video"
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source src="/assets/Cover-video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="founder-badge">
                                <span>Founder</span>
                                <span>Global Vyapar</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

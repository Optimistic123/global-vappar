import React from 'react'
import "./Shimmer.scss";

const Shimmer = ({ type }) => {
    const getShimmerClassDesign = () => {
        switch (type) {
            case "courseShimmer":
                return (<div className="shimmer-container">
                    {Array(6).fill("").map((_, index) => (
                        <div key={index} className="shimmer-card">
                            <div className="shimmer-thumbnail" />
                            <div className="shimmer-title" />
                        </div>
                    ))}
                </div>);
            case "blogShimmer":
                return (<div className="blog-shimmer-grid">
                    {Array(6).fill("").map((_, index) => (
                        <div key={index} className="blog-shimmer-card">
                            <div className="blog-shimmer-title" />
                            <div className="blog-shimmer-summary" />
                            <div className="blog-shimmer-button" />
                        </div>
                    ))}
                </div>
                )
            case "blogDetailsShimmer":
                return (<div className="blog-details-shimmer">
                    <div className="title"></div>
                    <div className="meta"></div>
                    <div className="paragraph"></div>
                    <div className="paragraph"></div>
                    <div className="paragraph"></div>
                    <div className="image"></div>
                    <div className="paragraph"></div>
                    <div className="paragraph"></div>
                    <div className="paragraph"></div>
                </div>
                )
            default:
                return null;
        }
    };

    return (
        <div>{getShimmerClassDesign()}</div>
    )
}

export default Shimmer
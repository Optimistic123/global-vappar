import React, { useState, useEffect } from "react";

const Typewriter = ({ text }) => {
    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText((prev) => prev + text[index]);
                setIndex((prev) => prev + 1);
            }, 100); // Adjust typing speed here
            return () => clearTimeout(timeout);
        }
    }, [index, text]);

    return (
        <div className="type-writer">
            <h4>
                <span className="highlight">{displayText}</span>
            </h4>
        </div>

    );
};

export default Typewriter;

import React, { useState } from "react";
import "./FAQ.scss"; // Include the corresponding CSS for styling
import CTAButton from '../CTAButton/CTAButton';
import { FcBusinesswoman } from "react-icons/fc";

const FAQ = ({handldeLearMore}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What are the documents required to start export import business?",
      answer: "You will need an Import Export Code (IEC), GST registration, and other trade-related documents.",
    },
    {
      question: "Are you an export-import trainer?",
      answer: "Yes, we provide training and consultancy services for export-import businesses.",
    },
    {
      question: "How to help in starting export-import business?",
      answer: "We offer complete guidance, from documentation to finding international buyers.",
    },
    {
      question: "How do you help in lowering the cross-border logistic cost?",
      answer: "We help negotiate with logistics providers for competitive rates and provide cost-effective solutions.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-header">
        <div className="header-title">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq-subtitle">
            <p>Got more questions?</p>
            <p>Feel free to drop them on our email!</p>
        </div>
        <FcBusinesswoman color="#f89726" size="9em" />
        <CTAButton CTA={"Contact us"} onClick={handldeLearMore} backgroundColor={"#f89726"} IconBackgroundColor={"white"} IconColor={"#f89726"} />
      </div>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span>{faq.question}</span>
              <span className="faq-icon">{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

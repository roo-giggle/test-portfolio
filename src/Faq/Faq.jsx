import React, { useState } from "react";
import "./faq.css";

const testimonials = [
  {
    name: "Floyd Miles",
    company: "eBay",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    message:
      "Synergy’s resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
  },
  // Add more if needed
];

const faqs = [
  {
    question: "What is your design process?",
    answer:
      "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.",
  },
  {
    question: "What tools and software do you use for UX design?",
  },
  {
    question: "How do you measure the success of your UX designs?",
  },
];

export default function TestimonialAndFAQ() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((index + 1) % testimonials.length);

  return (
    <div id="testimonial-faq-container">
      {/* Testimonial */}
      <div className="testimonial-block">
        <h2>✺ What they say</h2>
        <div className="testimonial-content">
          <div className="avatar-section">
            <img src={current.avatar} alt={current.name} />
            <div>
              <p className="name">{current.name}</p>
              <p className="company">{current.company}</p>
            </div>
          </div>
          <div className="quote">
            <p><span className="quote-mark">❝</span> {current.message}</p>
            <div className="controls">
              <button onClick={prev}>←</button>
              <button onClick={next}>→</button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-block">
        <h2>✺ Frequently asked questions</h2>
        {faqs.map((faq, i) => (
          <div key={i} className="faq-item">
            <p className="question">{faq.question}</p>
            {faq.answer && <p className="answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

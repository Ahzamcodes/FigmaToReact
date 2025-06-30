'use client';

import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const faqData = [
  {
    question: 'What materials are your products made from?',
    answer:
      'Our products are crafted from a variety of high-quality, sustainable materials, including solid wood, recycled plastics, and organic fabrics. We prioritize durability and environmental responsibility in our material selection.',
  },
  {
    question: 'Do you offer a warranty on your products?',
    answer:
      'Yes, all our products come with a 2-year warranty covering manufacturing defects. We stand by the quality of our products and want you to feel confident in your purchase.',
  },
  {
    question: 'What is your return policy?',
    answer:
      'We offer a 30-day return policy for all our products. If you are not satisfied with your purchase, you can return it for a full refund or exchange. Please refer to our returns page for more details.',
  },
    {
    question: 'How do I care for my new furniture?',
    answer:
      'Care instructions are provided with each product. Generally, we recommend using a soft, damp cloth for cleaning and avoiding harsh chemicals. For specific materials, please refer to the care guide included with your purchase.',
  },
];

const FaqItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(contentRef.current, { height: 'auto', duration: 0.5, ease: 'power3.inOut' });
    } else {
      gsap.to(contentRef.current, { height: 0, duration: 0.5, ease: 'power3.inOut' });
    }
  }, [isOpen]);

  return (
    <div className="border-b border-gray-700 py-6">
      <button
        className="flex w-full items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-brand-text-light">{question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      <div ref={contentRef} className="h-0 overflow-hidden">
        <p className="pt-4 text-brand-text-medium">{answer}</p>
      </div>
    </div>
  );
};

const Faq = () => {
  return (
    <section className="bg-brand-background py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-5xl font-semibold">Frequently Asked Questions</h2>
        <div className="mx-auto mt-12 max-w-3xl">
          {faqData.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq; 
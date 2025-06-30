'use client';

import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5" stroke="#F4F4F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12l10 5 10-5" stroke="#F4F4F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Unmatched Quality',
    description: 'We source the finest materials and adhere to the strictest manufacturing standards to ensure every product is a masterpiece of durability and craftsmanship.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="#F4F4F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Innovative Design',
    description: 'Our in-house design team is constantly pushing the boundaries of style and functionality to create pieces that are both timeless and contemporary.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#F4F4F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 1.5-1.5 2.5-3 4-1.5 1.5-3 2.5-3 4" stroke="#F4F4F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 18v.01" stroke="#F4F4F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Sustainable Practices',
    description: 'We are committed to protecting our planet. Our materials are sustainably sourced, and our manufacturing processes are designed to minimize environmental impact.',
  },
];

const FeatureCard = ({ feature }: { feature: typeof features[0] }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        autoAlpha: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
        },
      });
    }, cardRef);
    return () => ctx.revert();
  }, []);
  
  return (
    <div ref={cardRef} className="rounded-lg bg-brand-dark-green p-8 text-center">
      <div className="flex justify-center">{feature.icon}</div>
      <h3 className="mt-6 text-2xl font-semibold text-brand-text-light">{feature.title}</h3>
      <p className="mt-2 text-brand-text-medium">{feature.description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="bg-brand-background py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-5xl font-semibold">Why Choose Us</h2>
        <p className="mt-4 text-center text-lg text-brand-text-medium">
          The distinctive features that set our products apart.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 
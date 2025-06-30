'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../ui/Button';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const ArrowIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 12H19"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 5L19 12L12 19"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Hero = () => {
  const container = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  const paragraphText = "At Aura, we are dedicated to enhancing your living spaces with innovative and stylish home solutions. Our products are designed to bring comfort, convenience, and a touch of elegance to your everyday life.";

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading characters
      if (headingRef.current) {
        const chars = headingRef.current.innerText.split('');
        headingRef.current.innerText = '';
        chars.forEach(char => {
          const span = document.createElement('span');
          if (char === ' ') {
            span.innerHTML = '&nbsp;';
          } else {
            span.innerText = char;
          }
          span.style.display = 'inline-block';
          headingRef.current?.appendChild(span);
        });

        gsap.fromTo(
          headingRef.current.children,
          { autoAlpha: 0, y: 20 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.02,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 80%',
            },
          }
        );
      }
      
      // Animate paragraph words
      if (paragraphRef.current) {
        const words = paragraphRef.current.innerText.split(' ');
        paragraphRef.current.innerText = '';
        words.forEach(word => {
            const span = document.createElement('span');
            span.innerHTML = word + '&nbsp;';
            span.style.display = 'inline-block';
            paragraphRef.current?.appendChild(span);
        });

        gsap.fromTo(
          paragraphRef.current.children,
          { color: '#A6A6A6' },
          {
            color: '#F4F4F4',
            duration: 0.5,
            stagger: 0.1,
            ease: 'none',
            scrollTrigger: {
              trigger: paragraphRef.current,
              start: 'top 80%',
              end: 'bottom 50%',
              scrub: true,
            },
          }
        );
      }
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative flex h-screen w-full items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/c009c7e9-88dc-4fe4-9594-180233fbb533.png"
          alt="Modern living room"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="container mx-auto px-4 text-center text-white">
        <h1 ref={headingRef} className="text-5xl font-semibold text-brand-text-light md:text-7xl lg:text-8xl">
          Pioneering the Future of Comfortable Living.
        </h1>
        <p ref={paragraphRef} className="mx-auto mt-6 max-w-lg text-base text-brand-text-medium md:text-lg lg:max-w-2xl">
          {paragraphText}
        </p>
        <div className="mt-8 flex justify-center">
          <Button icon={<ArrowIcon />}>Shop Now</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
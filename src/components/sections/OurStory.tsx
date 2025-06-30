'use client';

import React, { useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OurStory = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        autoAlpha: 0,
        y: 100,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-brand-dark-green py-20 text-white">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <h2 className="text-5xl font-semibold">Our Story</h2>
          <p className="mt-4 text-lg text-brand-text-medium">
            Founded in 2010, Aura started with a simple mission: to blend timeless design with modern comfort. Our journey began in a small workshop, driven by a passion for craftsmanship and a desire to create furniture that wasn't just functional, but also beautiful and inspiring. Over the years, we've grown into a brand synonymous with quality and elegance, yet our core values remain unchanged. We believe that a well-designed home can elevate everyday living, and we are committed to bringing that vision to life for our customers.
          </p>
        </div>
        <div className="order-1 h-96 w-full overflow-hidden rounded-lg md:order-2">
          <Image
            src="/61813543-3864-428a-9af6-c8311e538926.png"
            alt="Our Story"
            width={600}
            height={400}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default OurStory; 
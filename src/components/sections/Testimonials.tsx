'use client';

import React, { useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "Aura's furniture has completely transformed my living space. The quality is outstanding, and the design is both modern and timeless. I couldn't be happier with my purchase!",
    name: 'Emily Johnson',
    image: '/c009c7e9-88dc-4fe4-9594-180233fbb533.png', // Replace with actual image path
  },
  {
    quote: "The attention to detail in every piece is remarkable. From the stitching on the sofa to the finish on the coffee table, everything is perfect. I highly recommend Aura to anyone looking for high-quality furniture.",
    name: 'Michael Smith',
    image: '/40a16ed2-733f-4d3b-adc1-7a927cd88158.png', // Replace with actual image path
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(cardRef.current, {
                autoAlpha: 0,
                x: -50,
                duration: 0.8,
                ease: 'power3.out',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: 'top 85%',
                },
            });
        }, cardRef);
        return () => ctx.revert();
    }, []);

    return(
        <div ref={cardRef} className="rounded-lg bg-brand-background p-8">
            <p className="text-brand-text-medium text-lg">"{testimonial.quote}"</p>
            <div className="mt-6 flex items-center gap-4">
                <div className="h-14 w-14 overflow-hidden rounded-full">
                    <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div>
                    <p className="font-semibold text-brand-text-light">{testimonial.name}</p>
                </div>
            </div>
        </div>
    )
}

const Testimonials = () => {
  return (
    <section className="bg-brand-dark-green py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-5xl font-semibold">What Our Customers Say</h2>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 
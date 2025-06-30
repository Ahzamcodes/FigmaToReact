'use client';

import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    name: 'Modern Chair',
    description: 'A sleek and comfortable chair for any modern living space.',
    image: '/40a16ed2-733f-4d3b-adc1-7a927cd88158.png',
  },
  {
    name: 'Elegant Sofa',
    description: 'A luxurious sofa that combines style and comfort.',
    image: '/4167f2ea-8009-441e-9d58-e8bdca1e5ca7.png',
  },
  {
    name: 'Minimalist Lamp',
    description: 'A simple yet stylish lamp to brighten up any room.',
    image: '/42c2292a-686b-44f5-95cf-784ab700b1f9.png',
  },
];

const ProductCard = ({ product }: { product: typeof products[0] }) => {
  const cardRef = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
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
    <div
      ref={cardRef}
      className="group overflow-hidden rounded-lg bg-brand-dark-green"
    >
      <div className="relative h-80 w-full">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-brand-text-light">{product.name}</h3>
        <p className="mt-2 text-brand-text-medium">{product.description}</p>
        <div className="mt-6">
          <Button>View Product</Button>
        </div>
      </div>
    </div>
  );
};

const BestSellers = () => {
  return (
    <section className="bg-brand-background py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-5xl font-semibold">Best Selling Products</h2>
        <p className="mt-4 text-center text-lg text-brand-text-medium">
          Discover our most popular items, loved by customers for their design and functionality.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers; 
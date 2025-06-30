'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

const GsapProvider = ({ children }: { children: React.ReactNode }) => {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        root.current,
        { autoAlpha: 0, y: 50 },
        { autoAlpha: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return <div ref={root}>{children}</div>;
};

export default GsapProvider; 
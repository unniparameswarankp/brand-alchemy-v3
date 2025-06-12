'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function InfiniteScrollingText() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const text1Ref = useRef<HTMLDivElement | null>(null);
  const text2Ref = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const text1 = text1Ref.current;
    const text2 = text2Ref.current;
    const container = containerRef.current;

    if (!text1 || !text2 || !container) return;

    // Set initial positions
    const width = text1.offsetWidth;
    gsap.set(text1, { x: 0 });
    gsap.set(text2, { x: width });

    tweenRef.current = gsap.to([text1, text2], {
      x: `-=${width}`,
      duration: 20,
      ease: 'linear',
      repeat: -1,
      modifiers: {
        x: (x) => `${parseFloat(x) % width}px`,
      },
    });

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const direction = currentScroll > lastScrollY.current ? 1 : -1;
      lastScrollY.current = currentScroll;
      if (tweenRef.current) {
        tweenRef.current.timeScale(direction);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      tweenRef.current?.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden py-4 whitespace-nowrap relative text-4xl font-light services-title"
    >
      <div ref={text1Ref} className="inline-block px-10">
        OUR SERVICES • OUR SERVICES • OUR SERVICES • OUR SERVICES • OUR SERVICES •
      </div>
      <div ref={text2Ref} className="inline-block px-10 absolute top-0 left-0">
        OUR SERVICES • OUR SERVICES • OUR SERVICES • OUR SERVICES • OUR SERVICES •
      </div>
    </div>
  );
}

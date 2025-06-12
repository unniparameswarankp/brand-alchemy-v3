'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: 1,
    title: 'Lightning Fast',
    description: 'Experience unmatched speed and responsiveness with our platform.',
    image: '/images/creative.png',
  },
  {
    id: 2,
    title: 'Smart Integration',
    description: 'Connect seamlessly with the tools and services you already use.',
    image: '/images/develop.png',
  },
  {
    id: 3,
    title: 'Built to Scale',
    description: 'Designed to grow with your needs — from startup to enterprise.',
    image: '/images/launch.png',
  },
];

export default function FeatureRevealSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const paragraphRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=250%',
          scrub: true,
          pin: true,
        },
      });

      // Step 1: Title fades to 0.5 opacity
      tl.to(titleRef.current, {
        opacity: 0.5,
        duration: 0.5,
        ease: 'none',
      });

      // Step 2: Cards start coming in
      tl.fromTo(
        cardsRef.current[0],
        { x: '-120vw', y: '100vh' },
        { x: '0', y: '0', duration: 2, ease: 'power3.out' },
        '-=0.3'
      );
      tl.fromTo(
        cardsRef.current[1],
        { x: '-120vw', y: '-100vh' },
        { x: '0', y: '0', duration: 2, ease: 'power3.out' },
        '-=2'
      );
      tl.fromTo(
        cardsRef.current[2],
        { x: '120vw' },
        { x: '0', duration: 2, ease: 'power3.out' },
        '-=2'
      );

      // Step 3: Continue title fade and scale
      tl.to(titleRef.current, {
        opacity: 0,
        scale: 0.5,
        y: -100,
        duration: 0.5,
        ease: 'power2.out',
      }, '-=1.5');

      // Step 4: Paragraph slides up
      tl.fromTo(
  paragraphRef.current,
  { y: 80, opacity: 0 },
  { y: 0, opacity: 1, duration: 1 },
  '+=0.5'
);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gray-100 py-32 px-4 flex flex-col items-center justify-center overflow-hidden why-us"
    >
      <h2
        ref={titleRef}
        className="text-4xl md:text-5xl font-light text-center mb-16 z-10"
      >
        What Makes Us Unique
      </h2>

      <div className="card-group flex flex-wrap justify-center gap-8 w-full max-w-6xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className="w-full sm:w-[300px] h-[350px] bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center text-center"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-40 object-contain rounded-lg mb-4"
            />
            <h3 className="text-2xl font-light mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      <div
        ref={paragraphRef}
        className="absolute bottom-16 max-w-2xl text-center opacity-0 z-10"
      >
        <p className="text-gray-700 text-lg mb-2 mt-5">
          Our approach blends creativity, cutting-edge technology, and a passion
          for perfection to deliver truly transformative digital experiences.
        </p>
        <Link href="#" className="inline-flex items-center gap-3 arrow-btn transition-all duration-300">
          Read More <img className="brightness-0" src="/arrow_right_white.svg" alt="arrow" />
        </Link>
      </div>
    </section>
  );
}

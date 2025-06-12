'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const paragraph =
  "In the heart of innovation, the Alchemy Project was born — a journey through code, creativity, and transformation that changes everything it touches.";

export default function ScrollRevealSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const paraRef = useRef<HTMLHeadingElement | null>(null);
  const buttonRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (!paraRef.current || !buttonRef.current || !sectionRef.current) return;

    const chars = paraRef.current.querySelectorAll('span') as NodeListOf<HTMLSpanElement>;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 50%',
        end: 'top top',
        scrub: true,
      },
    });

    tl.fromTo(
      chars,
      { opacity: 0 },
      {
        opacity: 1,
        stagger: 0.05,
        ease: 'none',
      }
    ).fromTo(
      buttonRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, ease: 'power2.out' },
      '+=0.2'
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="home-about">
      <div className="container">
        <h2
          ref={paraRef}
          className="text-xl md:text-2xl font-light mb-6 leading-relaxed"
        >
          {paragraph.split('').map((char, i) => (
            <span key={i} className="inline-block whitespace-pre">
              {char}
            </span>
          ))}
        </h2>

        <Link href="#" legacyBehavior>
          <a
            ref={buttonRef}
            className="inline-flex items-center gap-3 arrow-btn transition-all duration-300 opacity-0"
          >
            Read More
            <img
              className="brightness-0"
              src="/arrow_right_white.svg"
              alt="arrow"
            />
          </a>
        </Link>
      </div>
    </section>
  );
}

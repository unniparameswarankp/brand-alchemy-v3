'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as Fa from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    id: 1,
    title: 'Software Development',
    video: '/videos/webdevelopment.mp4',
    description: 'TWe craft scalable, secure, and intelligent software solutions that power your ideas. From dynamic websites to enterprise-grade systems, our code is clean, efficient, and future-proof — built to adapt and grow with your business.',
    items: [
      { icon: 'FaCode', label: 'Creative Code' },
      { icon: 'FaMagic', label: 'Digital Alchemy' },
      { icon: 'FaRocket', label: 'Launch Ready' },
      { icon: 'FaPuzzlePiece', label: 'Modular Design' },
      { icon: 'FaBolt', label: 'Performance' },
      { icon: 'FaCogs', label: 'Automation' },
      { icon: 'FaEye', label: 'Visual Strategy' },
    ],
  },
  {
    id: 2,
    title: 'App Development',
    video: '/videos/ecommerce.mp4',
    description: 'Build intuitive and high-performance mobile apps that deliver seamless experiences across devices. Whether its iOS, Android, or cross-platform, we focus on usability, performance, and real-world impact for every tap and swipe.',
    items: [
      { icon: 'FaBrain', label: 'AI Enhanced' },
      { icon: 'FaPaintBrush', label: 'Custom Design' },
      { icon: 'FaServer', label: 'Backend Ready' },
      { icon: 'FaCloud', label: 'Cloud Native' },
      { icon: 'FaMobileAlt', label: 'Responsive' },
      { icon: 'FaChartLine', label: 'Analytics' },
      { icon: 'FaShieldAlt', label: 'Security First' },
    ],
  },
  {
    id: 3,
    title: 'Designing',
    video: '/videos/designing.mp4',
    description: 'Design that doesn’t just look good — it feels right. From branding and UI/UX to print and motion graphics, we bring clarity, consistency, and emotion to every pixel, creating designs that speak louder than words.',
    items: [
      { icon: 'FaPalette', label: 'Visual Identity' },
      { icon: 'FaDraftingCompass', label: 'Precision Design' },
      { icon: 'FaPaintBrush', label: 'Illustration' },
      { icon: 'FaShapes', label: 'Modern Style' },
      { icon: 'FaVectorSquare', label: 'UI Components' },
      { icon: 'FaAdjust', label: 'Contrast Aware' },
      { icon: 'FaBezierCurve', label: 'Smooth Curves' },
    ],
  },
  {
    id: 4,
    title: 'Digital Art',
    video: '/videos/digitalart.mp4',
    description: 'Explore the intersection of imagination and pixels. We create captivating digital illustrations, concept art, and visual storytelling pieces — each one blending creativity, technology, and soul to turn your vision into visual masterpieces.',
    items: [
      { icon: 'FaPencilAlt', label: 'Sketch' },
      { icon: 'FaPaintRoller', label: 'Coloring' },
      { icon: 'FaCameraRetro', label: 'Photography' },
      { icon: 'FaFilm', label: 'Animation' },
      { icon: 'FaLayerGroup', label: 'Layered Workflow' },
      { icon: 'FaTools', label: 'Brushes' },
      { icon: 'FaSmileBeam', label: 'Emotion' },
    ],
  },
];

export default function Stacked3DSections() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.stack-panel').forEach((panel) => {
        const element = panel as HTMLElement;
        const title = element.querySelector('h2');
        const paragraph = element.querySelector('p');
        const items = element.querySelectorAll('.list-items');
        const video = element.querySelector('video');

        if (!element || !video) return;

        gsap.fromTo(
          video,
          { scale: 1.5 },
          {
            scale: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top bottom',
              end: 'top top',
              scrub: true,
            },
          }
        );

        gsap.from([title, paragraph, ...Array.from(items)], {
          opacity: 0,
          y: 30,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top center',
            toggleActions: 'play none none reverse',
          },
        });

        ScrollTrigger.create({
          trigger: element,
          start: 'top top',
          end: '+=100%',
          pin: true,
          pinSpacing: false,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {sections.map((section) => (
        <section
          key={section.id}
          className="stack-panel h-screen w-full relative overflow-hidden flex items-center justify-center text-white service-stack"
          style={{ perspective: '1000px' }}
        >
          <video
            className="absolute inset-0 object-cover w-full h-full -z-10"
            src={section.video}
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-black/30 -z-10" />

          <div
            className="z-10 text-center px-6 max-w-4xl"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-2">
              {section.title}
            </h2>
            <p className="text-lg mb-2">{section.description}</p>
            <div className="flex flex-wrap justify-center gap-4">
              {section.items.map((item, idx) => {
                const Icon = Fa[item.icon as keyof typeof Fa];
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2 border border-white rounded-4xl px-5 py-1 list-items"
                  >
                    {Icon && <Icon className="text-xl" />}
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Banner() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef(null);
  const bottomRef = useRef<HTMLHeadingElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const nextSectionRef = useRef<HTMLDivElement>(null); // target to scroll on click

  const title = "Own Your Identity.";

useEffect(() => {
  const video = videoRef.current;
  if (!video) return;

  // Scroll zoom effect
  gsap.fromTo(
    video,
    { scale: 1.05 },
    {
      scale: 1.5,
      ease: "none",
      scrollTrigger: {
        trigger: video,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    }
  );

  const tl = gsap.timeline();

  // 1. Fade in video
  tl.fromTo(
    videoWrapRef.current,
    { opacity: 0 },
    { opacity: 1, duration: 1.2, ease: "power2.out", delay: 0.5 }
  );

  // 2. Fade in logo
  tl.fromTo(
    logoRef.current,
    { opacity: 0, y: -20 },
    { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
    "+=0.3"
  );

  // 3. Animate title characters
  if (bottomRef.current) {
    const chars = bottomRef.current.querySelectorAll("span");
    tl.fromTo(
      chars,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, stagger: 0.05, ease: "power2.out" },
      "+=0.3"
    );
  }

  // 4. Animate marquee after title
  if (marqueeRef.current) {
    tl.fromTo(
      marqueeRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "power2.out" },
      "+=0.2"
    );

    gsap.to(marqueeRef.current, {
      xPercent: -100,
      repeat: -1,
      ease: "linear",
      duration: 100,
    });
  }
}, []);


  // Parallax on mouse move
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    const x = (clientX - left - width / 2) / 30;
    const y = (clientY - top - height / 2) / 30;

    gsap.to(videoRef.current, {
      x: x,
      y: y,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const scrollToNextSection = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section
        className="home-banner"
        onMouseMove={handleMouseMove}
        style={{ position: "relative", height: "100vh", overflow: "hidden" }}
      >
        {/* Video wrapper for fade-in and movement */}
        <div
          ref={videoWrapRef}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transformOrigin: "center center",
            }}
          >
            <source src="/videos/banner-qube.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Logo + Title */}
        <div className="absolute inset-0 z-10 pointer-events-none relative h-full">
          {/* Logo */}
          <div
            ref={logoRef}
            className="absolute top-10 left-10 opacity-0"
          >
            <Image
              src="/images/logo.png"
              alt="Brand Alchemy Logo"
              width={250}
              height={100}
              priority
              className="header-logo"
            />
          </div>

          {/* Title */}
          <h1
            ref={bottomRef}
            className="absolute bottom-10 left-10 text-white text-3xl md:text-4xl font-medium"
          >
            {title.split("").map((char, i) => (
              <span key={i} className="inline-block whitespace-pre">
                {char}
              </span>
            ))}
          </h1>

          {/* Horizontal scrolling text */}
          <div
            className="absolute bottom-5 right-5 flex justify-between text-white text-sm font-light cursor-pointer overflow-hidden w-48"
            onClick={scrollToNextSection}
            style={{ whiteSpace: "nowrap", pointerEvents: "auto" }}
          >
            <div ref={marqueeRef}>Scroll to Explore → Scroll to Explore → Scroll to Explore → Scroll to Explore → Scroll to Explore → Scroll to Explore → Scroll to Explore → Scroll to Explore → Scroll to Explore → Scroll to Explore → Scroll to Explore → Scroll to Explore → Scroll to Explore → Scroll to Explore → Scroll to Explore → Scroll to Explore → Scroll to Explore → Scroll to Explore → </div>
          </div>
        </div>
      </section>

      {/* Next section to scroll into */}
      <div
        ref={nextSectionRef}
      >
        {/* Replace this with your actual next section */}
      </div>
    </>
  );
}

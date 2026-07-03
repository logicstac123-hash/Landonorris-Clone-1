import React, { useRef } from 'react';
import NextRaceCard from '../../cards/next-race-card';
import BackgroundCurve from '../../ui/background-curve';
import WaterRipple from '../../ui/water-ripple';
import HeroLogo from './hero-logo';
import HeroFloatingElements from './hero-floating-elements';
import HeroMessage from './hero-message';
import HeroPortrait from './hero-portrait';
import HeroCustomCursor from './hero-custom-cursor';
import { useHeroScrollAnimations } from './hero-scroll-animations';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Apply scroll animations
  useHeroScrollAnimations({ containerRef, contentRef });

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[50rem] flex items-end justify-center bg-ln-cream cursor-none"
    >
      {/* Animated Background Green Curve */}
      <BackgroundCurve />

      {/* Next Race Sidebar Card */}
      {/* <NextRaceCard className="absolute left-[3rem] bottom-[4rem] z-20 hidden lg:block" /> */}

      {/* Top Center Logo */}
      <HeroLogo />

      {/* Custom Cursor for Hero */}
      <HeroCustomCursor containerRef={containerRef} />

      {/* Floating Playful Elements */}
      <HeroFloatingElements />

      {/* Main Composition */}
      <div ref={contentRef} className="relative z-10 w-full max-w-[90rem] h-full flex items-end justify-center px-[1rem]">
        {/* Water Ripple Effect Canvas */}
        <WaterRipple />

        {/* Hero Portrait - PixiJS Displacement Effect */}
        <HeroPortrait containerRef={containerRef} />

        {/* Scroll Message with Signature */}
        <HeroMessage containerRef={containerRef} />
      </div>
    </section>
  );
};

export default Hero;


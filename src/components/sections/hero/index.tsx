import React, { useRef } from 'react';
import HeroFloatingElements from './hero-floating-elements';
import HeroCustomCursor from './hero-custom-cursor';
import HeroLogo from './hero-logo';
import HeroPortrait from './hero-portrait';
import HeroMessage from './hero-message';
import { useHeroScrollAnimations } from './hero-scroll-animations';
import NextLaunchCard from '../../cards/next-race-card';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Hook up the scroll animations
  useHeroScrollAnimations({ containerRef, contentRef });

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full h-screen min-h-[45rem] bg-ln-dark overflow-hidden flex flex-col justify-between"
    >
      {/* Background Video with darkened overlay */}
      <div className="absolute inset-0 z-0">
        <video
          src="/images/drewverse/video_uganda.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111]/80 via-[#111]/30 to-[#111]/90" />
      </div>

      {/* Hero Floating Elements */}
      <HeroFloatingElements />

      {/* Centered Logo badge at top */}
      <HeroLogo />

      {/* Main content container (holds portrait & overlay messages) */}
      <div
        ref={contentRef}
        className="relative z-10 w-full flex-1 flex flex-col items-center justify-end md:justify-center px-6"
      >
        {/* Interactive Parallax Portrait */}
        <HeroPortrait containerRef={containerRef} />

        {/* Dynamic Animated Scroll message */}
        <HeroMessage containerRef={containerRef} />

        {/* Static Headline for instant impact on load */}
        <div className="absolute bottom-[20%] text-center pointer-events-none select-none z-10 px-4">
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] text-ln-yellow/90 block mb-3 animate-pulse">
            LogicStac Digital Creative Studio
          </span>
          <h1 className="font-display font-black text-4xl md:text-6xl lg:text-8xl xl:text-[7rem] leading-[0.85] tracking-tight uppercase text-white">
            REDEFINING <span className="font-serif italic font-normal text-ln-yellow lowercase">limits,</span><br />
            BRINGING THE FIGHT.
          </h1>
        </div>

        {/* Bottom Right - Floating Launch Info Card (Adapting Lando's mobile and desktop info layout) */}
        <NextLaunchCard className="absolute bottom-10 right-6 md:right-12 z-40 scale-90 md:scale-100 origin-bottom-right" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 text-white/50 animate-bounce pointer-events-none">
        <span className="text-[9px] font-mono tracking-[0.2em] uppercase">Scroll</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </svg>
      </div>

      {/* Custom trailing cursor animation */}
      <HeroCustomCursor containerRef={containerRef} />
    </section>
  );
};

export default Hero;

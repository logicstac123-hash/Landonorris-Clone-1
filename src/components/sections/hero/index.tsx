import React, { useRef } from 'react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full h-screen min-h-[40rem] bg-ln-cream overflow-hidden"
    >
      <video
        src="/images/drewverse/video_uganda.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
      />
    </section>
  );
};

export default Hero;

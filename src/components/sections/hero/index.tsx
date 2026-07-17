import React, { useRef } from 'react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full h-screen min-h-[40rem] flex items-center justify-center bg-ln-cream overflow-hidden"
    >
      {/* Centered Retro CRT TV Video */}
      <div className="relative w-full h-full max-w-[1400px] flex items-center justify-center px-4 md:px-8">
        <video
          src="/images/drewverse/video_uganda.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full max-h-[85vh] object-contain select-none pointer-events-none rounded-lg"
        />
      </div>
    </section>
  );
};

export default Hero;

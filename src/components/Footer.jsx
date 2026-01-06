import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const Footer = () => {
    const containerRef = useRef(null);
    const marqueeRef = useRef(null);

    const logos = [
        { src: '/images/green-svgs/monster.svg', alt: 'Monster Energy' },
        { src: '/images/green-svgs/hilton.svg', alt: 'Hilton' },
        { src: '/images/logos-icons/weargrip.svg', alt: 'Weargrip' },
        { src: '/images/logos-icons/uber.svg', alt: 'Uber' },
        { src: '/images/green-svgs/android.svg', alt: 'Android' },
        { src: '/images/logos-icons/pure.svg', alt: 'Pure Electric' },
        { src: '/images/logos-icons/bell.svg', alt: 'Bell Helmets' },
        { src: '/images/green-svgs/google-green.svg', alt: 'Google' },
        { src: '/images/green-svgs/ralph-lauren-green.svg', alt: 'Ralph Lauren' },
        { src: '/images/logos-icons/quadrant-with-q-black.svg', alt: 'Quadrant' },
    ];

    useGSAP(() => {
        if (!containerRef.current) return;

        // Marquee animation
        const marquee = marqueeRef.current;
        if (marquee) {
            const totalWidth = marquee.scrollWidth / 2;
            const animation = gsap.to(marquee, {
                x: -totalWidth,
                duration: 40,
                ease: 'none',
                repeat: -1,
            });

            ScrollTrigger.create({
                trigger: containerRef.current,
                start: 'top bottom',
                end: 'bottom top',
                onUpdate: (self) => {
                    const vel = self.getVelocity();
                    const targetScale = vel > 10 ? 2 : vel < -10 ? -2 : 1;
                    gsap.to(animation, { timeScale: targetScale, duration: 0.6 });
                }
            });
        }

        // Rolling text animation
        const links = containerRef.current.querySelectorAll('.rolling-link');
        links.forEach(link => {
            const topChars = link.querySelectorAll('.top-char');
            const bottomChars = link.querySelectorAll('.bottom-char');
            
            const tl = gsap.timeline({ paused: true });
            
            tl.to(topChars, {
                y: '-100%',
                stagger: 0.02,
                duration: 0.45,
                ease: 'power4.inOut'
            })
            .to(bottomChars, {
                y: '-100%',
                stagger: 0.02,
                duration: 0.45,
                ease: 'power4.inOut'
            }, 0);

            link.addEventListener('mouseenter', () => tl.play());
            link.addEventListener('mouseleave', () => tl.reverse());
        });

        // Signature float
        gsap.to('.footer-signature', {
            y: -15,
            x: '+=10',
            rotation: -2,
            duration: 3.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });

        // Content entrance
        gsap.from('.reveal-item', {
            y: 40,
            opacity: 0,
            duration: 1.5,
            stagger: 0.15,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 85%',
            }
        });

    }, { scope: containerRef, dependencies: [] });

    const RollingText = ({ text }) => {
        return (
            <div className="relative overflow-hidden h-[1.1em] flex items-center font-display font-bold">
                <div className="flex">
                    {text.split('').map((char, i) => (
                        <span key={i} className="top-char inline-block">
                            {char === ' ' ? '\u00A0' : char}
                        </span>
                    ))}
                </div>
                <div className="flex absolute top-full left-0">
                    {text.split('').map((char, i) => (
                        <span key={i} className="bottom-char inline-block text-ln-yellow">
                            {char === ' ' ? '\u00A0' : char}
                        </span>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <footer ref={containerRef} className="relative w-full p-4 pt-24 bg-gradient-to-b from-ln-cream to-ln-yellow">
            {/* Main masked container */}
            <div 
                className="relative w-full min-h-screen flex flex-col items-center overflow-visible rounded-t-[4rem]"
                style={{
                    maskImage: 'url("/images/masks/footer-desktop-mask.svg")',
                    WebkitMaskImage: 'url("/images/masks/footer-desktop-mask.svg")',
                    maskSize: '100% 100%',
                    WebkitMaskSize: '100% 100%',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                }}
            >
                {/* Dark background */}
                <div className="absolute inset-0 bg-ln-onyx -z-10" />
                {/* Texture layers */}
                <div className="absolute inset-0 bg-image-noise opacity-15 mix-blend-overlay pointer-events-none" />
                <div 
                    className="absolute inset-0 opacity-[0.06] pointer-events-none"
                    style={{
                        backgroundImage: 'url("/images/green-svgs/background-lines.svg")',
                        backgroundSize: '140% auto',
                        backgroundPosition: 'center',
                    }}
                />

                {/* Background figure - downsized */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] z-10 pointer-events-none select-none">
                    <img 
                        src="/images/footer/main.webp" 
                        alt="Lando" 
                        className="w-full h-auto object-contain"
                    />
                </div>

                {/* Title and signature - repositioned and downsized */}
                <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl text-center z-20">
                     <img 
                        src="/images/logos-and-signatures/signature-big.svg" 
                        alt="" 
                        className="footer-signature absolute -top-10 left-1/2 -translate-x-1/2 w-64 md:w-[25vw] pointer-events-none select-none z-0"
                        style={{ 
                            filter: 'invert(91%) sepia(94%) saturate(7446%) hue-rotate(15deg) brightness(101%) contrast(106%)',
                            transform: 'translateX(-50%) rotate(-5deg)' 
                        }}
                    />
                    <h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-display font-black leading-[0.85] tracking-tighter uppercase z-10 relative">
                        ALWAYS <span className="text-ln-yellow">BRINGING</span> <br />
                        THE FIGHT.
                    </h2>
                </div>

                {/* Navigation - compressed and downsized */}
                <div className="absolute bottom-28 left-0 right-0 z-20">
                    <div className="w-full max-w-7xl mx-auto px-12 flex justify-between items-start">
                        {/* PAGES */}
                        <div className="flex flex-col gap-3">
                            <span className="text-white/20 text-[8px] uppercase font-bold tracking-[0.4em] font-sans">PAGES</span>
                            <nav className="flex flex-col gap-0 items-start">
                                {['HOME', 'ON TRACK', 'OFF TRACK', 'CALENDAR'].map(link => (
                                    <a key={link} href={`#${link}`} className="rolling-link text-white text-2xl md:text-3xl lg:text-4xl font-display font-black leading-[1.1] hover:text-ln-yellow transition-colors uppercase">
                                        <RollingText text={link} />
                                    </a>
                                ))}
                                <a href="#store" className="rolling-link text-ln-yellow text-lg md:text-xl font-display font-bold mt-3 underline decoration-[2px] underline-offset-[0.4rem] uppercase">
                                    <RollingText text="STORE" />
                                </a>
                            </nav>
                        </div>

                         {/* FOLLOW ON */}
                         <div className="flex flex-col gap-3 items-end text-right">
                            <span className="text-white/20 text-[8px] uppercase font-bold tracking-[0.4em] font-sans">FOLLOW ON</span>
                            <nav className="flex flex-col gap-0 items-end">
                                {['TIKTOK', 'INSTAGRAM', 'YOUTUBE', 'TWITCH'].map(link => (
                                    <a key={link} href={`#${link}`} className="rolling-link text-white text-2xl md:text-3xl lg:text-4xl font-display font-black leading-[1.1] hover:text-ln-yellow transition-colors uppercase">
                                        <RollingText text={link} />
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>

                {/* Business button - centered and downsized */}
                <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-30">
                    <button className="bg-ln-yellow text-black px-7 py-2.5 rounded-lg font-sans font-black text-[11px] tracking-wider flex items-center gap-2 hover:shadow-[0_0_2rem_rgba(210,255,0,0.3)] transition-shadow duration-400 cursor-pointer uppercase">
                        BUSINESS ENQUIRIES <span className="text-sm">⤴</span>
                    </button>
                </div>

                {/* Marquee - same bottom position as button, behind image, logos downsized */}
                <div className="absolute bottom-14 w-full overflow-hidden z-5">
                    <div 
                        ref={marqueeRef}
                        className="flex whitespace-nowrap gap-20 items-center justify-start min-w-max px-20"
                    >
                        {[...logos, ...logos, ...logos].map((logo, idx) => (
                            <img 
                                key={idx} 
                                src={logo.src} 
                                alt={logo.alt} 
                                className="h-6 md:h-8 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Legal bar */}
            <div className="relative w-full bg-ln-yellow px-14 py-10 flex flex-col md:flex-row justify-between items-center gap-8 z-30">
                 <p className="text-black text-[10px] font-bold uppercase tracking-[0.25em] font-sans opacity-75">© 2025 Lando Norris. All rights reserved</p>
                 <div className="flex gap-14 font-sans">
                    <a href="/privacy" className="text-black text-[10px] font-bold uppercase tracking-[0.25em] hover:underline decoration-2 underline-offset-6 opacity-75">PRIVACY POLICY</a>
                    <a href="/terms" className="text-black text-[10px] font-bold uppercase tracking-[0.25em] hover:underline decoration-2 underline-offset-6 opacity-75">TERMS</a>
                 </div>
            </div>
        </footer>
    );
};

export default Footer;

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
            <div className="relative overflow-hidden h-[1.1em] flex items-center font-display font-bold italic">
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
        <footer ref={containerRef} className="relative w-full bg-ln-yellow pt-20">
            {/* Top gradient area */}
            <div className="absolute inset-x-0 top-0 h-48 bg-ln-yellow" />

            {/* Main masked container */}
            <div 
                className="relative w-[99%] mx-auto min-h-screen flex flex-col items-center overflow-hidden mb-1 rounded-t-[4rem]"
                style={{
                    maskImage: 'url("/images/masks/footer-desktop-mask.svg")',
                    WebkitMaskImage: 'url("/images/masks/footer-desktop-mask.svg")',
                    maskSize: '100% 100%',
                    WebkitMaskSize: '100% 100%',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    backgroundColor: '#111311'
                }}
            >
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

                {/* Background figure */}
                <div className="absolute bottom-[-2%] left-1/2 -translate-x-1/2 w-full max-w-[1340px] z-0 pointer-events-none select-none opacity-90">
                    <img 
                        src="/images/footer/main.webp" 
                        alt="Lando" 
                        className="w-full h-auto object-contain brightness-90 contrast-110"
                    />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center w-full max-w-7xl px-12 pt-24 h-full flex-1">
                    
                    {/* Title and signature */}
                    <div className="relative text-center mb-16 reveal-item">
                         <img 
                            src="/images/logos-and-signatures/signature-big.svg" 
                            alt="" 
                            className="footer-signature absolute -top-20 left-1/2 -translate-x-1/2 w-80 md:w-[35vw] pointer-events-none select-none z-0"
                            style={{ 
                                filter: 'invert(91%) sepia(94%) saturate(7446%) hue-rotate(15deg) brightness(101%) contrast(106%)',
                                transform: 'translateX(-45%) rotate(-5deg)' 
                            }}
                        />
                        <h2 className="text-white text-5xl md:text-[8.5vw] font-display font-black leading-[0.82] tracking-tighter uppercase italic z-10 relative">
                            ALWAYS <span className="text-ln-yellow not-italic">BRINGING</span> <br />
                            THE FIGHT.
                        </h2>
                    </div>

                    {/* Links */}
                    <div className="w-full flex justify-between items-start mt-12 reveal-item">
                        {/* PAGES */}
                        <div className="flex flex-col gap-6">
                            <span className="text-white/20 text-[10px] uppercase font-bold tracking-[0.6em] font-sans">PAGES</span>
                            <nav className="flex flex-col gap-0 items-start">
                                {['HOME', 'ON TRACK', 'OFF TRACK', 'CALENDAR'].map(link => (
                                    <a key={link} href={`#${link}`} className="rolling-link text-white text-4xl md:text-[3.9vw] leading-[1.05] hover:text-ln-yellow transition-colors uppercase">
                                        <RollingText text={link} />
                                    </a>
                                ))}
                                <a href="#store" className="rolling-link text-ln-yellow text-xl md:text-[1.8vw] mt-8 underline decoration-[3px] underline-offset-[12px] uppercase">
                                    <RollingText text="STORE" />
                                </a>
                            </nav>
                        </div>

                         {/* FOLLOW ON */}
                         <div className="flex flex-col gap-6 items-end text-right">
                            <span className="text-white/20 text-[10px] uppercase font-bold tracking-[0.6em] font-sans">FOLLOW ON</span>
                            <nav className="flex flex-col gap-0 items-end">
                                {['TIKTOK', 'INSTAGRAM', 'YOUTUBE', 'TWITCH'].map(link => (
                                    <a key={link} href={`#${link}`} className="rolling-link text-white text-4xl md:text-[3.9vw] leading-[1.05] hover:text-ln-yellow transition-colors uppercase">
                                        <RollingText text={link} />
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Business button */}
                    <div className="mt-auto pt-24 pb-48 z-20 reveal-item">
                        <button className="bg-ln-yellow text-black px-12 py-4 rounded-xl font-sans font-black text-[12px] tracking-[0.25em] flex items-center gap-3 hover:scale-110 hover:shadow-[0_0_50px_rgba(210,255,0,0.4)] transition-all duration-400 cursor-pointer">
                            BUSINESS ENQUIRIES <span className="text-xl">⤴</span>
                        </button>
                    </div>
                </div>

                {/* Marquee */}
                <div className="absolute bottom-12 w-full overflow-hidden pb-12 reveal-item">
                    <div 
                        ref={marqueeRef}
                        className="flex whitespace-nowrap gap-28 items-center justify-start min-w-max px-24"
                    >
                        {[...logos, ...logos, ...logos].map((logo, idx) => (
                            <img 
                                key={idx} 
                                src={logo.src} 
                                alt={logo.alt} 
                                className="h-4 md:h-5 object-contain opacity-20 invert grayscale brightness-[5] hover:opacity-100 transition-opacity duration-300"
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

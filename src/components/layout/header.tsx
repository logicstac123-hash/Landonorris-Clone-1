import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import AnimatedTextButton from '../ui/animated-text-button';

const MenuButton: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);
    const topBarRef = useRef<HTMLDivElement>(null);
    const bottomBarRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (isHovered) {
            gsap.to(topBarRef.current, {
                width: '100%',
                duration: 0.3,
                ease: 'power2.out'
            });
            gsap.to(bottomBarRef.current, {
                width: '100%',
                duration: 0.3,
                ease: 'power2.out',
                delay: 0.05
            });
        } else {
            gsap.to(topBarRef.current, {
                width: '60%',
                duration: 0.3,
                ease: 'power2.out'
            });
            gsap.to(bottomBarRef.current, {
                width: '60%',
                duration: 0.3,
                ease: 'power2.out',
                delay: 0.05
            });
        }
    }, { dependencies: [isHovered] });

    return (
        <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="menu-button group bg-ln-white p-[0.7rem] md:p-[0.95rem] hover:bg-ln-offwhite transition-all duration-300 flex items-center justify-center border-none shadow-none cursor-pointer aspect-square rounded-[0.5rem] hover:scale-105 active:scale-95"
        >
            <div className="menu-inner flex flex-col gap-[0.35rem] w-[1.4rem] md:w-[1.7rem]">
                <div
                    ref={topBarRef}
                    className="h-[2.5px] w-[60%] bg-ln-deep-forest self-end rounded-full"
                ></div>
                <div
                    ref={bottomBarRef}
                    className="h-[2.5px] w-[60%] bg-ln-deep-forest self-start rounded-full"
                ></div>
            </div>
        </button>
    );
};

const Header: React.FC = () => {
    const headerRef = useRef<HTMLElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const actionsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Entrance animation
        const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.2 } });

        tl.from(headerRef.current, {
            y: -100,
            opacity: 0,
        })
            .from([logoRef.current, actionsRef.current], {
                y: 20,
                opacity: 0,
                stagger: 0.1,
            }, "-=0.8");

        // Scroll-based shrink animation using ScrollTrigger
        const shrinkTl = gsap.timeline({
            scrollTrigger: {
                trigger: 'body',
                start: 'top top',
                end: '+=150',
                scrub: true,
            }
        });

        shrinkTl.to(headerRef.current, {
            paddingTop: '0.6rem',
            paddingBottom: '0.6rem',
            duration: 1,
            ease: 'none'
        }, 0)
            .to(logoRef.current?.querySelectorAll('span') || [], {
                fontSize: window.innerWidth >= 768 ? '2rem' : '1.6rem',
                duration: 1,
                ease: 'none'
            }, 0)
            .to('.store-button', {
                paddingTop: window.innerWidth >= 768 ? '0.85rem' : '0.7rem',
                paddingBottom: window.innerWidth >= 768 ? '0.85rem' : '0.7rem',
                duration: 1,
                ease: 'none'
            }, 0)
            .to('.store-button-icon', {
                width: '1rem',
                height: '1rem',
                duration: 1,
                ease: 'none'
            }, 0)
            .to('.store-button-text', {
                fontSize: window.innerWidth >= 768 ? '0.95rem' : '0.85rem',
                duration: 1,
                ease: 'none'
            }, 0)
            .to('.menu-button', {
                padding: window.innerWidth >= 768 ? '0.75rem' : '0.55rem',
                duration: 1,
                ease: 'none'
            }, 0)
            .to('.menu-inner', {
                width: window.innerWidth >= 768 ? '1.5rem' : '1.2rem',
                duration: 1,
                ease: 'none'
            }, 0);
    }, { scope: headerRef });

    return (
        <div className="fixed top-0 left-0 w-full z-50 pointer-events-none">


            <header
                ref={headerRef}
                className="w-full px-[1.5rem] py-[1.2rem] flex justify-between items-center bg-transparent"
            >
                {/* Left Logo - Vertically Stacked */}
                <div ref={logoRef} className="flex-shrink-0 pointer-events-auto leading-[0.85]">
                    <a href="/" className="flex flex-col items-start group">
                        <span className="font-serif mix-blend-difference text-ln-deep-forest group-hover:text-ln-black transition-all duration-300 uppercase tracking-tight text-[1.9rem] md:text-[2.3rem]">
                            LOGIC
                        </span>
                        <span className="font-sans font-black text-ln-deep-forest group-hover:text-ln-black transition-all duration-300 uppercase tracking-tight text-[1.9rem] md:text-[2.3rem]">
                            STAC
                        </span>
                    </a>
                </div>

                {/* Right Actions */}
                <div ref={actionsRef} className="flex items-center gap-[0.9rem] pointer-events-auto">
                    <AnimatedTextButton
                        text="Contact"
                        href="#contact"
                        icon="/images/logos-icons/cart.svg"
                        iconAlt="Contact"
                        className="store-button group flex items-center gap-[0.55rem] bg-ln-yellow text-ln-deep-forest px-[1.6rem] md:px-[2rem] py-[0.95rem] md:py-[1.1rem] font-sans font-black uppercase tracking-tight hover:brightness-105 hover:scale-105 active:scale-95 transition-all duration-300 rounded-[0.6rem] shadow-none border-none"
                        iconClassName="store-button-icon w-[1.2rem] h-[1.2rem]"
                        textClassName="store-button-text text-[0.95rem] md:text-[1.05rem]"
                    />
                    <MenuButton />
                </div>
            </header>
        </div>
    );
};

export default Header;

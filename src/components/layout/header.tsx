import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import AnimatedTextButton from '../ui/animated-text-button';

const MenuButton: React.FC<{ isScrolled: boolean }> = ({ isScrolled }) => {
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
            className={`group bg-ln-white hover:bg-ln-offwhite transition-all duration-300 flex items-center justify-center border-none shadow-none cursor-pointer aspect-square rounded-[0.5rem] hover:scale-105 active:scale-95 ${isScrolled ? 'p-[0.55rem] md:p-[0.75rem]' : 'p-[0.7rem] md:p-[0.95rem]'
                }`}
        >
            <div className={`flex flex-col gap-[0.35rem] transition-all duration-300 ${isScrolled ? 'w-[1.2rem] md:w-[1.5rem]' : 'w-[1.4rem] md:w-[1.7rem]'
                }`}>
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
    const [isScrolled, setIsScrolled] = useState(false);

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
    }, { scope: headerRef });

    // Handle scroll to shrink header
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full z-50 pointer-events-none">


            <header
                ref={headerRef}
                className={`w-full px-[1.5rem] flex justify-between items-center bg-transparent transition-all duration-300 ${isScrolled ? 'py-[0.6rem]' : 'py-[1.2rem]'
                    }`}
            >
                {/* Left Logo - Vertically Stacked */}
                <div ref={logoRef} className="flex-shrink-0 pointer-events-auto leading-[0.85]">
                    <a href="/" className="flex flex-col items-start group">
                        <span className={`font-serif mix-blend-difference text-ln-deep-forest group-hover:text-ln-black transition-all duration-300 uppercase tracking-tight ${isScrolled ? 'text-[1.6rem] md:text-[2rem]' : 'text-[1.9rem] md:text-[2.3rem]'
                            }`}>
                            LANDO
                        </span>
                        <span className={`font-sans font-black text-ln-deep-forest group-hover:text-ln-black transition-all duration-300 uppercase tracking-tight ${isScrolled ? 'text-[1.6rem] md:text-[2rem]' : 'text-[1.9rem] md:text-[2.3rem]'
                            }`}>
                            NORRIS
                        </span>
                    </a>
                </div>

                {/* Right Actions */}
                <div ref={actionsRef} className="flex items-center gap-[0.9rem] pointer-events-auto">
                    <AnimatedTextButton
                        text="Store"
                        href="https://store.landonorris.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        icon="/images/logos-icons/cart.svg"
                        iconAlt="Cart"
                        className={`group flex items-center gap-[0.55rem] bg-ln-yellow text-ln-deep-forest px-[1.6rem] md:px-[2rem] font-sans font-black uppercase tracking-tight hover:brightness-105 hover:scale-105 active:scale-95 transition-all duration-300 rounded-[0.6rem] shadow-none border-none ${isScrolled ? 'py-[0.7rem] md:py-[0.85rem]' : 'py-[0.95rem] md:py-[1.1rem]'
                            }`}
                        iconClassName={isScrolled ? 'w-[1rem] h-[1rem]' : 'w-[1.2rem] h-[1.2rem]'}
                        textClassName={isScrolled ? 'text-[0.85rem] md:text-[0.95rem]' : 'text-[0.95rem] md:text-[1.05rem]'}
                    />
                    <MenuButton isScrolled={isScrolled} />
                </div>
            </header>
        </div>
    );
};

export default Header;

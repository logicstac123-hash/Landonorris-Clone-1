import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import Header from './components/layout/header';
import Hero from './components/sections/hero/index';
import Footer from './components/layout/footer';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {

    useEffect(() => {
        // Create ScrollSmoother instance
        const smoother = ScrollSmoother.create({
            smooth: 1.2,
            effects: true,
            smoothTouch: 0.1,
        });

        return () => {
            smoother.kill();
        };
    }, []);

    // Loader overlay animation
    useEffect(() => {
        const tl = gsap.timeline();
        tl.to('.loader-overlay', {
            height: 0,
            duration: 1.2,
            ease: 'power4.inOut',
            delay: 0.2
        });
    }, []);

    return (
        <div id="smooth-wrapper">
            <div id="smooth-content">
                <div className="relative w-full min-h-screen bg-ln-cream text-ln-dark overflow-x-hidden selection:bg-ln-yellow selection:text-black">

                    {/* Intro Loader Overlay */}
                    <div className="loader-overlay fixed inset-0 bg-ln-yellow z-[100] flex items-center justify-center overflow-hidden">
                        <h1 className="font-display font-bold text-6xl md:text-9xl tracking-tighter text-black uppercase animate-pulse">
                            LN4
                        </h1>
                    </div>

                    <Header />
                    {/* 
                    <main className="relative z-10 w-full flex flex-col items-center">
                        <Hero />
                    </main> */}

                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default App;
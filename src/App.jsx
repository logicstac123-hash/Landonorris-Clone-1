import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from './components/Footer';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
    const lenisRef = useRef(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
        });

        lenisRef.current = lenis;

        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        // Integrate Lenis with GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
            gsap.ticker.remove(lenis.raf);
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
        <div className="relative w-full min-h-screen bg-black text-white overflow-x-hidden selection:bg-ln-yellow selection:text-black">

            {/* Intro Loader Overlay */}
            <div className="loader-overlay fixed inset-0 bg-ln-yellow z-[100] flex items-center justify-center overflow-hidden">
                <h1 className="font-display font-bold text-6xl md:text-9xl tracking-tighter text-black uppercase animate-pulse">
                    LN4
                </h1>
            </div>

            <main className="relative z-10 w-full flex flex-col items-center">
                <Footer />
            </main>
        </div>
    );
}

export default App;

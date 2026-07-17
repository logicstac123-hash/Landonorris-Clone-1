import React from 'react';

interface NextLaunchCardProps {
    className?: string;
}

const NextLaunchCard: React.FC<NextLaunchCardProps> = ({ className }) => {
    return (
        <div className={`hero-info-card ${className}`}>
            <p className="text-[0.6rem] font-black uppercase tracking-[0.3em] text-white/50 mb-[1rem] ml-[0.5rem]">Next Launch</p>
            <div
                className="relative w-[11rem] h-[15rem] bg-[#1a1c16]/95 border border-white/10 flex flex-col items-center justify-between py-[1.5rem] px-[1rem] shadow-2xl backdrop-blur-md"
                style={{ clipPath: 'polygon(0 0, 75% 0, 100% 18%, 100% 100%, 0 100%)' }}
            >
                {/* Circuit Graphics Placeholder -> Styled as clean node system connection */}
                <div className="w-full h-[40%] flex items-center justify-center opacity-80">
                    <svg viewBox="0 0 100 80" className="w-[8rem] h-auto text-ln-yellow" fill="none" stroke="currentColor" strokeWidth="1.5">
                        {/* Interactive digital nodes network representation */}
                        <circle cx="20" cy="40" r="4" fill="currentColor" />
                        <circle cx="50" cy="20" r="4" fill="currentColor" />
                        <circle cx="80" cy="50" r="4" fill="currentColor" />
                        <circle cx="50" cy="60" r="4" fill="currentColor" />
                        <line x1="20" y1="40" x2="50" y2="20" stroke="currentColor" strokeWidth="1" />
                        <line x1="50" y1="20" x2="80" y2="50" stroke="currentColor" strokeWidth="1" />
                        <line x1="80" y1="50" x2="50" y2="60" stroke="currentColor" strokeWidth="1" />
                        <line x1="50" y1="60" x2="20" y2="40" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                        <line x1="50" y1="20" x2="50" y2="60" stroke="currentColor" strokeWidth="1" />
                    </svg>
                </div>

                <div className="w-full text-center">
                    <h3 className="text-[0.8rem] font-sans font-black uppercase tracking-tighter mb-[0.25rem] text-white">Aether 3D</h3>
                    <p className="text-[0.6rem] font-sans font-bold uppercase text-ln-yellow">Immersive Portal</p>

                    <div className="mt-[1rem] pt-[1rem] border-t border-white/10">
                        <p className="text-[0.6rem] font-sans font-black uppercase leading-tight tracking-[0.1em] text-white/80">
                            Studio Capacity <br /> 2 Slots Open
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NextLaunchCard;

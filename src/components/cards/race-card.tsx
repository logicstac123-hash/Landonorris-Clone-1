import React from 'react';

const RaceCard: React.FC = () => {
  return (
    <div className="fixed top-1/2 -translate-y-1/2 left-6 z-40 hidden lg:block pointer-events-auto">
      <div className="flex flex-col gap-4">
        {/* Main Card */}
        <div className="w-24 h-40 border border-white/10 rounded-lg p-2.5 flex flex-col items-center justify-between bg-[#1a1c16]/90 backdrop-blur-md shadow-2xl">
            <span className="text-[8px] font-sans font-bold uppercase tracking-wider text-white/50 w-full text-left">Next Launch</span>
            
            {/* Tech nodes / connection shape */}
            <div className="w-full flex-1 flex items-center justify-center py-2 text-ln-yellow">
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                   <circle cx="50" cy="50" r="10" />
                   <circle cx="20" cy="30" r="6" />
                   <circle cx="80" cy="30" r="6" />
                   <circle cx="50" cy="80" r="6" />
                   <line x1="25" y1="35" x2="42" y2="45" stroke="currentColor" />
                   <line x1="75" y1="35" x2="58" y2="45" stroke="currentColor" />
                   <line x1="50" y1="74" x2="50" y2="60" stroke="currentColor" />
                </svg>
            </div>

            <div className="w-full border-t border-white/10 pt-1">
                <span className="text-[8px] font-bold font-display uppercase block text-center text-white">Aether 3D</span>
            </div>
        </div>

        {/* Laurel Wreath Badge adapted to Agency Milestone */}
        <div className="w-24 flex flex-col items-center text-center opacity-90">
            <div className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full mb-1 bg-[#1a1c16]/50 text-ln-yellow backdrop-blur-sm">
                 {/* Styled code/bracket/design icon instead of driver helmet */}
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                     <polyline points="16 18 22 12 16 6" />
                     <polyline points="8 6 2 12 8 18" />
                 </svg>
            </div>
            <p className="text-[8px] font-sans font-extrabold uppercase leading-tight text-white">LogicStac<br/>Agency</p>
        </div>
      </div>
    </div>
  );
};

export default RaceCard;
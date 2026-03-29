import React from 'react';

export const RAMStick: React.FC = () => {
  return (
    <div className="relative w-80 h-24 sm:w-96 sm:h-28 animate-float group">
      <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full group-hover:bg-blue-500/30 transition-all duration-700"></div>
      <div className="absolute inset-0 bg-[#0a0a0a] border border-white/10 rounded-sm overflow-hidden flex flex-col shadow-2xl transform perspective-1000 rotate-x-12 rotate-y-[-5deg]">
        <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-50"></div>
        <div className="flex-1 relative overflow-hidden bg-gradient-to-b from-black to-[#111]">
          <div className="absolute inset-0 opacity-10" 
               style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 11px)' }}>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/20 font-bold tracking-[0.3em] text-2xl select-none">ACC FURY</span>
          </div>
        </div>
        <div className="h-3 w-full bg-[#1a1a1a] border-t border-white/5 flex gap-[2px] px-2 items-end pb-[1px]">
          {[...Array(40)].map((_, i) => (
            <div key={i} className={`flex-1 h-full bg-gradient-to-t from-[#c5a059] to-[#ebd08c] rounded-t-[1px] ${i === 20 ? 'mx-1 opacity-0' : ''}`}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

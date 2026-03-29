import React from 'react';

interface BorderBeamButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const BorderBeamButton: React.FC<BorderBeamButtonProps> = ({ children, onClick, className = "" }) => {
  return (
    <button 
      onClick={onClick}
      className={`relative inline-flex h-14 items-center justify-center overflow-hidden rounded-md p-[1px] font-medium text-white transition-all hover:scale-[1.02] focus:outline-none ${className}`}
    >
      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#0070F3_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full items-center justify-center rounded-md bg-black px-8 py-1 text-sm font-semibold uppercase tracking-widest backdrop-blur-3xl transition-colors hover:bg-black/80">
        {children}
      </span>
    </button>
  );
};

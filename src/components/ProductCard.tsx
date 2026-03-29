import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ProductCardProps {
  brand: string;
  series: string;
  desc: string;
  frequencies: number[];
}

export const ProductCard: React.FC<ProductCardProps> = ({ brand, series, desc, frequencies }) => {
  const [activeFreq, setActiveFreq] = useState(frequencies[0]);
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div 
      ref={ref}
      className={`group relative flex flex-col justify-between p-8 border border-white/10 bg-black/50 backdrop-blur-sm transition-all duration-500 ease-in-out hover:-translate-y-1 hover:scale-[1.02] hover:border-blue-500/50 reveal-up ${isVisible ? 'active' : ''}`}
    >
      {/* Bottom to Top Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      <div className="relative z-10">
        <h3 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2 group-hover:text-blue-400 transition-colors duration-500">{brand}</h3>
        <h2 className="text-2xl font-bold tracking-tight text-white mb-4">{series}</h2>
        <p className="text-sm text-gray-400 mb-8 leading-relaxed">{desc}</p>
      </div>
      <div>
        <div className="flex flex-wrap gap-2 mb-6">
          {frequencies.map((freq) => (
            <button
              key={freq}
              onClick={() => setActiveFreq(freq)}
              className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                activeFreq === freq ? 'bg-white text-black' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {freq} MHz
            </button>
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-dashed border-white/10 pt-6 mt-auto">
          <div>
            <span className="block text-xs text-gray-500 mb-1">Комплект 32GB (2x16)</span>
            <span className="text-sm font-medium text-blue-400 tracking-tight">Лучшая цена в РФ</span>
          </div>
          <button 
            onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
            className="h-10 px-4 flex items-center justify-center rounded-full bg-white/5 text-xs font-medium text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
          >
            Узнать <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

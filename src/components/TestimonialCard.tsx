import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  logo: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, content, rating, logo }) => (
  <div className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md flex flex-col justify-between transition-all duration-500 ease-in-out hover:-translate-y-1 hover:scale-[1.02] hover:border-blue-500/50">
    {/* Radial Glow Effect */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
    
    <div className="relative z-10">
      <div className="flex items-center justify-between mb-6">
        <span className="text-lg font-bold tracking-tighter text-white uppercase group-hover:text-blue-400 transition-colors duration-500">{logo}</span>
        <div className="flex items-center gap-1">
          <span className="text-sm font-medium text-gray-400">{rating}</span>
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
        </div>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed italic mb-8">"{content}"</p>
    </div>
    <div className="relative z-10 flex flex-col">
      <span className="text-white font-medium">{name}</span>
      <span className="text-xs text-gray-500">{role}</span>
    </div>
  </div>
);

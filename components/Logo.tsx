
import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "", size, light = false }) => {
  return (
    <div 
      className={`relative group cursor-pointer transition-all duration-700 ease-out hover:scale-110 active:scale-95 ${className}`}
      style={size ? { width: size, height: size } : { width: '100%', height: '100%' }}
    >
      {/* Premium Glow Effect on Hover */}
      <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full drop-shadow-2xl overflow-visible"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* The Pentagon Border - Animado */}
        <path 
          d="M50 5 L95 38 L78 92 L22 92 L5 38 Z" 
          stroke={light ? "#ffffff" : "#1b3a61"} 
          strokeWidth="7" 
          strokeLinejoin="round"
          className="transition-all duration-700 group-hover:stroke-primary group-hover:drop-shadow-[0_0_15px_rgba(90,111,166,0.6)]"
        />
        
        {/* The Center "I" - Efeito de Pulso */}
        <rect 
          x="43" 
          y="26" 
          width="14" 
          height="48" 
          rx="3"
          fill={light ? "#ffffff" : "#5a6fa6"}
          className="transition-all duration-700 group-hover:fill-primary group-hover:scale-y-110 origin-center"
        />

        {/* Glossy Overlay for Premium Look */}
        <path 
          d="M25 25 Q 50 12 75 25" 
          stroke="white" 
          strokeWidth="1.5" 
          strokeOpacity="0.4" 
          fill="none" 
        />
      </svg>
    </div>
  );
};

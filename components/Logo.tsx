
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
      <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full drop-shadow-xl overflow-visible"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* The Pentagon Border */}
        <path 
          d="M50 5 L95 38 L78 92 L22 92 L5 38 Z" 
          stroke={light ? "#ffffff" : "#1b3a61"} 
          strokeWidth="6" 
          strokeLinejoin="round"
          className="transition-all duration-700 group-hover:stroke-primary"
        />
        
        {/* The Center "I" */}
        <rect 
          x="44" 
          y="28" 
          width="12" 
          height="44" 
          rx="2"
          fill={light ? "#ffffff" : "#5a6fa6"}
          className="transition-all duration-700 group-hover:fill-primary"
        />

        {/* Highlight for depth */}
        <path 
          d="M30 30 Q 50 15 70 30" 
          stroke="white" 
          strokeWidth="1" 
          strokeOpacity="0.3" 
          fill="none" 
        />
      </svg>
    </div>
  );
};

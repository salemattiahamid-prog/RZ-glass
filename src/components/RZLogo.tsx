import React from 'react';

interface RZLogoProps {
  className?: string;
  variant?: 'original' | 'badge' | 'dark';
}

/**
 * Official RZ Glass Logo (Safety Glass Technology)
 * Recreated with vector precision matching the uploaded X2.png:
 * - 3 angled layered glass sheets on the left
 * - 3 floating geometric glass shards
 * - Bold italic "RZ Glass" brand typography
 * - "SAFETY GLASS TECHNOLOGY" tracked subtitle
 */
export const RZLogo: React.FC<RZLogoProps> = ({ 
  className = "h-10", 
  variant = 'badge' 
}) => {
  const logoSvg = (
    <svg 
      viewBox="0 0 540 160" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={`w-auto select-none ${className}`}
    >
      {/* ========================================================= */}
      {/* 1. LAYERED GLASS EMBLEM ON THE LEFT                       */}
      {/* ========================================================= */}
      
      {/* Layer 1: Back Dark Blue Glass Sheet */}
      <polygon 
        points="32,44 86,22 72,126 18,148" 
        fill="#005da8" 
      />

      {/* Layer 2: Middle Blue Glass Sheet with White Highlight Top Edge */}
      <polygon 
        points="46,36 104,14 88,128 30,150" 
        fill="#008ee0" 
      />
      {/* White Bevel Edge Highlight on Middle Sheet */}
      <polygon 
        points="46,36 104,14 102,18 48,39" 
        fill="#ffffff" 
        opacity="0.95" 
      />

      {/* Layer 3: Front Bright Cyan/Sky-Blue Sheet with Pointed Drop Tail */}
      <polygon 
        points="70,28 142,24 142,112 62,158" 
        fill="#009fe3" 
      />

      {/* Floating Glass Splinters / Shards above Front Sheet */}
      {/* Shard 1: Small angled quadrilateral */}
      <polygon 
        points="124,18 135,11 139,19 128,24" 
        fill="#009fe3" 
      />
      {/* Shard 2: Small triangle */}
      <polygon 
        points="143,8 152,4 153,13 145,15" 
        fill="#008ee0" 
      />
      {/* Shard 3: Small diamond/polygon */}
      <polygon 
        points="155,10 164,12 165,21 157,18" 
        fill="#009fe3" 
      />

      {/* ========================================================= */}
      {/* 2. "RZ Glass" TYPOGRAPHY (Deep Navy Bold Italic)           */}
      {/* ========================================================= */}
      <text
        x="154"
        y="108"
        fill="#10447e"
        fontSize="76"
        fontWeight="900"
        fontStyle="italic"
        fontFamily="system-ui, -apple-system, 'Montserrat', 'Arial Black', sans-serif"
        letterSpacing="-1.5"
      >
        <tspan fill="#10447e">RZ</tspan>
        <tspan dx="16" fill="#10447e">Glass</tspan>
      </text>

      {/* ========================================================= */}
      {/* 3. "SAFETY GLASS TECHNOLOGY" SUBTITLE                     */}
      {/* ========================================================= */}
      <text
        x="158"
        y="142"
        fill="#10447e"
        fontSize="17.5"
        fontWeight="800"
        letterSpacing="6.8"
        fontFamily="system-ui, -apple-system, 'Montserrat', sans-serif"
      >
        SAFETY GLASS TECHNOLOGY
      </text>
    </svg>
  );

  if (variant === 'badge') {
    return (
      <div className="bg-white px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.5)] border border-white/90 inline-flex items-center transition-transform hover:scale-[1.02]">
        {logoSvg}
      </div>
    );
  }

  return logoSvg;
};

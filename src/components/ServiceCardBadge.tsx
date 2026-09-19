import React from 'react';
import { Layers, Shield, Bath } from 'lucide-react';

interface ServiceCardBadgeProps {
  iconType: 'smartphone' | 'layers' | 'window' | 'shield' | 'shower';
  className?: string;
}

export const ServiceCardBadge: React.FC<ServiceCardBadgeProps> = ({ iconType, className = "w-10 h-10 sm:w-11 sm:h-11" }) => {
  return (
    <div className={`rounded-full bg-[#0066ff] border-2 border-cyan-300 shadow-[0_2px_12px_rgba(0,102,255,0.5)] flex items-center justify-center text-white shrink-0 ${className}`}>
      {iconType === 'smartphone' && (
        // Door / Hardware accessories icon
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <line x1="8" y1="2" x2="8" y2="22" />
          <circle cx="16" cy="12" r="1.5" fill="currentColor" />
        </svg>
      )}

      {iconType === 'layers' && (
        <Layers className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
      )}

      {iconType === 'window' && (
        // Double window panes icon
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="12" y1="3" x2="12" y2="21" />
          <line x1="3" y1="12" x2="21" y2="12" />
        </svg>
      )}

      {iconType === 'shield' && (
        <Shield className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
      )}

      {iconType === 'shower' && (
        // Shower cabin / glass partition icon
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
          <rect x="3" y="2" width="18" height="20" rx="1.5" />
          <line x1="12" y1="2" x2="12" y2="22" />
          <line x1="7" y1="11" x2="7" y2="13" />
          <line x1="17" y1="11" x2="17" y2="13" />
        </svg>
      )}
    </div>
  );
};

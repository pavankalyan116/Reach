import React from 'react';
import { ArrowRight } from 'lucide-react';

interface BrandMarkProps {
  className?: string;
  textColor?: string;
}

export const BrandMark: React.FC<BrandMarkProps> = ({ className = '', textColor = 'var(--hero-foreground)' }) => {
  return (
    <a href="#top" className={`brand-mark ${className}`} aria-label="Reach Home">
      <div className="brand-logo-box">
        <ArrowRight size={20} strokeWidth={2.6} color="#ffffff" />
      </div>
      <span className="brand-wordmark" style={{ color: textColor }}>
        Reach
      </span>
    </a>
  );
};

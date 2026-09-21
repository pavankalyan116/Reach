import React from 'react';
import ReachLogo from '../assets/icons/Reach Logo White 1.png';

interface BrandMarkProps {
  className?: string;
}

export const BrandMark: React.FC<BrandMarkProps> = ({ className = '' }) => {
  return (
    <a href="#top" className={`brand-mark ${className}`} aria-label="Reach Home">
      <img src={ReachLogo} alt="Reach Logo" className="brand-logo-image" />
    </a>
  );
};

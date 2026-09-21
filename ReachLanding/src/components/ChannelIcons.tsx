import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
  color?: string;
}

export const MailIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => {
  return (
    <img
      src={`${import.meta.env.BASE_URL}icons/gmail.png`}
      alt="Email"
      width={size}
      height={size}
      className={className}
      style={{ width: `${size}px`, height: `${size}px`, objectFit: 'contain', flexShrink: 0, display: 'inline-block' }}
    />
  );
};

export const WhatsAppIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => {
  return (
    <img
      src={`${import.meta.env.BASE_URL}icons/whatsapp.png`}
      alt="WhatsApp"
      width={size}
      height={size}
      className={className}
      style={{ width: `${size}px`, height: `${size}px`, objectFit: 'contain', flexShrink: 0, display: 'inline-block' }}
    />
  );
};

export const SmsIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => {
  return (
    <img
      src={`${import.meta.env.BASE_URL}icons/sms.png`}
      alt="SMS"
      width={size}
      height={size}
      className={className}
      style={{ width: `${size}px`, height: `${size}px`, objectFit: 'contain', flexShrink: 0, display: 'inline-block' }}
    />
  );
};

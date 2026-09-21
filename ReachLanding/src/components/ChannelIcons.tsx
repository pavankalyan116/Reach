import React from 'react';
import emailIcon from '../assets/icons/gmail.png';
import whatsappIcon from '../assets/icons/whatsapp.png';
import smsIcon from '../assets/icons/sms.png';
import multichannelIcon from '../assets/icons/multi-channel.png';
import replyIcon from '../assets/icons/reply.png';
import scheduledIcon from '../assets/icons/Scheduled.png';
import personalizedIcon from '../assets/icons/Personalized.png';

interface IconProps {
  size?: number;
  className?: string;
  color?: string;
}

export const MailIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => {
  return (
    <img
      src={emailIcon}
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
      src={whatsappIcon}
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
      src={smsIcon}
      alt="SMS"
      width={size}
      height={size}
      className={className}
      style={{ width: `${size}px`, height: `${size}px`, objectFit: 'contain', flexShrink: 0, display: 'inline-block' }}
    />
  );
};


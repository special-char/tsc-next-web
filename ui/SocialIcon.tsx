import React from 'react';
import '@/styles/socialicon.css';
import Icon from '@/ui/Icon';
import Link from 'next/link';
type Props = {};

const socialicon = [
  {
    icon: 'facebook',
    link: 'https://www.facebook.com',
  },
  {
    icon: 'twitter',
    link: 'https://www.twitter.com',
  },
  {
    icon: 'instagram',
    link: 'https://www.instagram.com',
  },
  {
    icon: 'linkedin',
    link: 'https://www.linkedin.com',
  },
  {
    icon: 'youtube',
    link: 'https://www.youtube.com',
  },
  {
    icon: 'whatsapp',
    link: 'https://www.whatsapp.com',
  },
];

const SocialIcon = (props: Props) => {
  return (
    <div className="socialicons">
      {socialicon.map((icon) => (
        <span className="rounded-full bg-neutral-500 p-2 hover:bg-primary">
          <Link key={icon.icon} href={icon.link} target="_blank">
            <Icon name={icon.icon} height={20} width={20} />
          </Link>
        </span>
      ))}
    </div>
  );
};

export default SocialIcon;

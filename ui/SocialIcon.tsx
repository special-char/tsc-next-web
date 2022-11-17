import React from 'react';
import FacebookSvg from '@/public/icons/facebook.svg';
import TwitterSvg from '@/public/icons/twitter.svg';
import InstagramSvg from '@/public/icons/instagram.svg';
import LinkedinSvg from '@/public/icons/linkedin.svg';
import YoutubeSvg from '@/public/icons/youtube.svg';
import WhatsappSvg from '@/public/icons/whatsapp.svg';
import '@/styles/socialicon.css';
type Props = {};

const data = [
  {
    svg: <FacebookSvg />,
  },
  {
    svg: <TwitterSvg />,
  },
  {
    svg: <InstagramSvg />,
  },
  {
    svg: <LinkedinSvg />,
  },
  {
    svg: <YoutubeSvg />,
  },
  {
    svg: <WhatsappSvg />,
  },
];

const SocialIcon = (props: Props) => {
  return (
    <div className="socialicons">
      {data.map((val) => (
        <figure>{val.svg}</figure>
      ))}
    </div>
  );
};

export default SocialIcon;

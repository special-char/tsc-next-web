'use client';

import Link from 'next/link';
import React from 'react';
import '@/styles/footer.css';
import SocialIcon from '@/ui/SocialIcon';
import TscBlueLogoSvg from '@/public/icons/tscBlueLogo.svg';
import Newsletter from '@/ui/Newsletter';
import EmailSvg from '@/public/icons/email.svg';

type Props = {};

const data = [
  {
    icon: 'https://assets.website-files.com/607de2d8e8911e32707a3efe/607f5ea5d227324cf40fa52d_icon-newsletter-footer-education-x-template.svg',
  },
  {
    icon: 'https://assets.website-files.com/607de2d8e8911e32707a3efe/607f5ea5d227324cf40fa52d_icon-newsletter-footer-education-x-template.svg',
  },
  {
    icon: 'https://assets.website-files.com/607de2d8e8911e32707a3efe/607f5ea5d227324cf40fa52d_icon-newsletter-footer-education-x-template.svg',
  },
  {
    icon: 'https://assets.website-files.com/607de2d8e8911e32707a3efe/607f5ea5d227324cf40fa52d_icon-newsletter-footer-education-x-template.svg',
  },
  {
    icon: 'https://assets.website-files.com/607de2d8e8911e32707a3efe/607f5ea5d227324cf40fa52d_icon-newsletter-footer-education-x-template.svg',
  },
];

const links = [
  { page: 'Home' },
  { page: 'About' },
  { page: 'Courses' },
  { page: 'Individual Course' },
  { page: 'Blog' },
  { page: 'Blog post' },
  { page: 'Events' },
  { page: 'Individual Event' },
  { page: 'Teacher' },
  { page: 'Individual Teacher' },
  { page: 'Contact' },
];

function validateEmail(values: any) {
  let error;
  if (!values) {
    error = 'Required email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values)) {
    error = 'Invalid email address';
  }
  return error;
}
const Footer = (props: Props) => {
  return (
    <section id="footer" className="footer">
      <TscBlueLogoSvg className="w-64" />

      <p className="footer__description ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt aliqua.
      </p>

      <hr className="col-span-full" />
      <div className="footer__newsletter">
        <figure className="mb-3 h-20 w-20 overflow-hidden rounded-full bg-secondary1">
          <EmailSvg />
        </figure>
        <h3 className="mb-3 text-neutral-100">Subscribe to our newsletter</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmo.
        </p>
        <Newsletter />
      </div>

      <div className="footer__pages">
        <h3 className="text-neutral-100">Pages</h3>
        <div className="footer__links">
          {links.map((val) => (
            <Link href={'#'} key={val.page}>
              {val.page}
            </Link>
          ))}
        </div>
      </div>
      <hr className="col-span-full" />
      <SocialIcon
        icons={[
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
        ]}
      />
      <p className="footer__copyright">
        Copyright © TSC | Designed by TSC - Powered by TSC
      </p>
    </section>
  );
};

export default Footer;

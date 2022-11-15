import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import '@/styles/footer.css';

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
  { page: 'individual Course' },
  { page: 'Blog' },
  { page: 'Blog post' },
  { page: 'Events' },
  { page: 'individual Course Events' },
  { page: 'Teacher' },
  { page: 'Individual Teacher' },
  { page: 'Contact' },
];
const Footer = (props: Props) => {
  return (
    <section id="footer" className="footer">
      <h1 className="text-neutral-100">TSC</h1>
      <p className="text-neutral-100">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
      <div className="footer__line"></div>
      <div className="footer__newsletter">
        <Image
          className="mb-3 rounded-full"
          src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607f5ea5d227324cf40fa52d_icon-newsletter-footer-education-x-template.svg"
          alt=""
          height={90}
          width={90}
        />
        <h3 className="mb-3 text-neutral-100">Subscribe to our newsletter</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmo.
        </p>
        <div className="newsletter">
          <input
            className="newsletter__input"
            placeholder="Enter your email"
            type="text"
            name=""
            id=""
          />

          <button className="btn btn--primary newsletter__btn">Submit</button>
        </div>
      </div>

      <div className="footer__pages">
        <h3 className="text-neutral-100">Pages</h3>
        <div className="footer__links">
          {links.map((val) => (
            <Link href={'#'}>{val.page}</Link>
          ))}
        </div>
      </div>
      <div className="footer__line"></div>
      <div className="footer__socialicons">
        {data.map((val) => (
          <Image
            className="rounded-full"
            src={val.icon}
            alt=""
            height={40}
            width={40}
          />
        ))}
      </div>
      <p className="mb-0 text-neutral-100">
        Copyright © TSC | Designed by TSC - Powered by TSC
      </p>
    </section>
  );
};

export default Footer;

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
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
      <div className="footer__title_section">
        <div className="grid lg:grid-cols-2 ">
          <h1 className="text-neutral-100">TSC</h1>
          <p className="text-neutral-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt aliqua.
          </p>
        </div>
      </div>
      <div className="footer__line"></div>
      <div className="footer__newsletter">
        <Image
          className="rounded-full"
          src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607f5ea5d227324cf40fa52d_icon-newsletter-footer-education-x-template.svg"
          alt=""
          height={100}
          width={100}
        />

        <h3 className="text-neutral-100">Subscribe to our newsletter</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmo.
        </p>
        <div className="footer__email">
          <input
            className="w-full rounded-full py-5 px-6"
            placeholder="Enter your email"
            type="text"
            name=""
            id=""
          />

          <span className="submit-btn btn btn--primary top-2 right-2 p-0 md:absolute">
            Submit
          </span>
        </div>
      </div>
      <div className="footer__pageslinks">
        <h3 className="text-neutral-100">Pages</h3>
        <div
          className="grid grid-cols-1 gap-4
         md:grid-cols-2"
        >
          {links.map((val) => (
            <Link href={'#'}>{val.page}</Link>
          ))}
        </div>
      </div>
      <div className="footer__line"></div>
      <div className="footer__sociallinks">
        <div className="grid gap-6 lg:grid-cols-2 ">
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
          <p className="text-neutral-100">
            Copyright © TSC | Designed by TSC - Powered by TSC
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;

// grid w-4/5 grid-cols-5 grid-rows-2 gap-2 py-4 md:w-2/4

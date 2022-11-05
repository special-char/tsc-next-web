import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import Link from 'next/link';

const UtilityLink = [
  {
    link: '#',
    title: 'Link',
  },
  {
    link: '#',
    title: 'Link',
  },
  { link: '#', title: 'Home' },
  { link: '#', title: 'Home' },
  { link: '#', title: 'Home' },
  { link: '#', title: 'Home' },
];

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="grid grid-cols-2">
      <div className="main">
        <div className={styles.footer}>
          <div className={styles.education__header}>
            <h1>TSC</h1>

            <Image
              src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607f5ea5d227324cf40fa52d_icon-newsletter-footer-education-x-template.svg"
              alt=""
              className="rounded-full"
              width={30}
              height={30}
            />
            <h2>Subscribe to our newsletter</h2>

            <p>
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              cupiditate.
            </p>
          </div>
          <div>
            <h3>Pages</h3>
            <div className="text-red grid grid-cols-1 gap-4 md:grid-cols-2">
              <Link href={'#'}>Home</Link>
              <Link href={'#'}>About</Link>
              <Link href={'#'}>Courses</Link>
              <Link href={'#'}>Individual Course</Link>
              <Link href={'#'}>Blog</Link>
              <Link href={'#'}>Blog Post</Link>
              <Link href={'#'}>Events</Link>
              <Link href={'#'}>Individual Event</Link>
              <Link href={'#'}>Teachers</Link>
              <Link href={'#'}>Individual Teacher</Link>
              <Link href={'#'}>Contact</Link>
            </div>

            <div className="flex items-center justify-start pl-20">
              <div className="text-lg text-secondary2">Copyright © TSC</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;

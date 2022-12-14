import Link from 'next/link';
import React, { use } from 'react';
import '@/styles/footer.css';
// import SocialIcon from '@/ui/SocialIcon';
import TscBlueLogoSvg from '@/public/icons/tscBlueLogo.svg';
import Newsletter from '@/ui/Newsletter';
import EmailSvg from '@/public/icons/email.svg';
import { getSocialMediaLinks } from '@/lib/getSocialMediaDetails';
import Image from 'next/image';
import { getMenuData } from '@/lib/getMenu';

type Props = {};

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

const Footer = (props: Props) => {
  const socialMediaLInks = use(getSocialMediaLinks());
  const menuData = use(getMenuData());

  if (!menuData) return null;
  if (!socialMediaLInks) return null;

  if (!socialMediaLInks) return null;
  const { socialMedia } = socialMediaLInks.data.contactDetail.data?.attributes;
  const array = menuData.data.data?.attributes?.items.data;

  const flatten = (array, initial = []) => {
    return array.reduce((acc, curr) => {
      if (Array.isArray(curr?.attributes?.children?.data)) {
        acc = flatten(curr.attributes.children.data, acc);
      }
      acc.push(curr);
      return acc;
    }, initial);
  };

  return (
    <section id="footer" className="footer">
      <TscBlueLogoSvg className="w-64" />
      <p className="footer__description text-xl font-bold">
        Take your development skills to the next level with our comprehensive
        courses.
      </p>

      <hr className="col-span-full" />
      <div className="footer__newsletter">
        <figure className="mb-3 h-20 w-20 overflow-hidden rounded-full bg-secondary1">
          <EmailSvg />
        </figure>
        <h3 className="mb-3 text-neutral-100">Subscribe to our newsletter</h3>
        <p>Stay up-to-date with the latest news and insights from TSC</p>
        <Newsletter />
      </div>

      <div className="footer__pages">
        <h3 className="text-neutral-100">Pages</h3>
        <div className="footer__links">
          {flatten(array).map((val) => (
            <Link href={'#'} key={val.id}>
              {val.attributes.title}
            </Link>
          ))}
        </div>
      </div>
      <hr className="col-span-full" />
      {socialMedia.length > 0 && (
        <div className="flex gap-4">
          {socialMedia.map((val) => (
            <Link
              key={val.id}
              href={val.url}
              className="flex aspect-square w-12 items-stretch justify-center rounded-full bg-primary"
            >
              <Image
                src={val.icon.data?.attributes?.url || ''}
                alt="social media icon"
                height={26}
                width={26}
              />
            </Link>
          ))}
        </div>
      )}
      <p className="footer__copyright">
        Copyright ?? TSC | Designed by TSC - Powered by Next.js
      </p>
    </section>
  );
};

export default Footer;
{
  /* <SocialIcon
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
      /> */
}

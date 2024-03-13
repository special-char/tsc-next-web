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
import PrivacyPolicy from './privacy-policy/page';
import RefundPolicy from './refund-policy/page';

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
        <p className="mb-4 text-xl font-bold text-neutral-100 sm:text-xxl md:text-2xl">
          Pages
        </p>
        <div className="footer__links">
          {flatten(array).map((val) => (
            <Link href={val.attributes.url} key={val.id}>
              {val.attributes.title}
            </Link>
          ))}
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/refund-policy">Cancellation and Refund</Link>
          <Link href="/terms-service">Terms Service</Link>
          <Link href="https://merchant.razorpay.com/policy/NEWBJzhrp8leG4/shipping">
            Shipping and Delivery
          </Link>
        </div>
      </div>
      <hr className="col-span-full" />
      {socialMedia.length > 0 && (
        <div className="flex gap-4">
          {socialMedia.map((val) => (
            <Link
              key={val.id}
              href={val.url}
              className="flex aspect-square w-10 items-stretch justify-center rounded-full bg-neutral-500 hover:bg-primary"
            >
              <Image
                src={val.icon.data?.attributes?.url || 'social media link'}
                alt="social media icon"
                title="social media icon"
                height={20}
                width={20}
              />
            </Link>
          ))}
        </div>
      )}
      <p className="footer__copyright">Copyright © Specialchar Pvt Ltd</p>
    </section>
  );
};

export default Footer;

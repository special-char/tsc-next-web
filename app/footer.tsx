'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import '@/styles/footer.css';
import SocialIcon from '@/ui/SocialIcon';
import Button from '@/ui/Button';
import TscBlueLogoSvg from '@/public/icons/tscBlueLogo.svg';
import { Field, Form, Formik } from 'formik';

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
  // const [submit, setsubmit] = useState(false);
  // const buttonHandler = () => {
  //   console.log('buttonHandler clicked');
  //   setsubmit(!submit);
  //   console.log(submit);
  // };
  return (
    <section id="footer" className="footer">
      <TscBlueLogoSvg className="w-64" />

      <p className="footer__description ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt aliqua.
      </p>

      <hr className="col-span-full" />
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
        <div className="">
          <Formik
            initialValues={{ email: '' }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="newsletter relative">
                <Field
                  className="newsletter__input"
                  type="email"
                  name="email"
                  id=""
                />
                <Button
                  type="submit"
                  as="button"
                  variant="primary"
                  className="newsletter__btn"
                >
                  Submit
                </Button>
                {isSubmitting && (
                  <div className="absolute top-0 col-span-2 flex h-40 w-full items-center justify-center rounded-xl bg-primary md:h-20">
                    <p className=" mb-0 text-center text-secondary2">
                      Thanks for joining our newsletter....
                    </p>
                  </div>
                )}
              </Form>
            )}
          </Formik>
        </div>
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
      {/* <div className="footer__line"></div> */}
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

// lg:mr-[46px] lg:w-2/3

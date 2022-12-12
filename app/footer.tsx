'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import '@/styles/footer.css';
import SocialIcon from '@/ui/SocialIcon';
import { Field, Form, Formik } from 'formik';
import { error } from 'console';

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
      <h1 className="footer__title">TSC</h1>

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
            initialValues={{ name: 'email new' }}
            onSubmit={(values) => {
              console.log('data of submit:', values);
            }}
          >
            {({ isSubmitting, touched, errors }) => (
              <Form className="footer__email_section relative">
                <div hidden={isSubmitting}>
                  <Field
                    className="newsletter__input  relative"
                    placeholder="Enter your email"
                    type="text"
                    name="email"
                    id=""
                    validate={validateEmail}
                  ></Field>
                  <p className="py-2 pl-9 text-error">
                    {errors.email && touched.email && <div>{errors.email}</div>}
                  </p>
                  <button
                    type="submit"
                    className="newsletter__btn btn btn--primary"
                  >
                    Submit
                  </button>
                </div>
                <div className="m-0 py-2" hidden={!isSubmitting}>
                  {isSubmitting && (
                    <p className="z-50 m-0  w-[80%] rounded-2xl bg-primary py-6 px-10 text-center text-secondary1 line-clamp-2">
                      Thanks for joining our newsletter.
                    </p>
                  )}
                </div>
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
        wrapperClass="mb-6"
      />
      <p className="footer__copyright">
        Copyright © TSC | Designed by TSC - Powered by TSC
      </p>
    </section>
  );
};

export default Footer;

// lg:mr-[46px] lg:w-2/3

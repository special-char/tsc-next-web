import React from 'react';
import Image from 'next/image';
import BannerImage from '@/public/icons/home-hero.jpeg';

const Banner2 = () => {
  return (
    <section className="bg-neutral-700 ">
      <div className=" flex flex-col items-center">
        <div className="grid items-center px-8  py-14 lg:px-28 ">
          <div className="relative aspect-video">
            <Image src={BannerImage} alt={'image'} fill />
          </div>
          <div className="py-4 text-center">
            <h3 className="font-bold text-neutral-100 ">
              What is Webflow, and why should you care?
            </h3>
            <p className="font-normal text-neutral-100">
              Webflow is a magical tool that helps normal people like you and I,
              who do not know how to write code, to build beautiful websites. We
              have built websites for India's biggest startups on Webflow, and
              you can do it too. It's not that hard!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner2;

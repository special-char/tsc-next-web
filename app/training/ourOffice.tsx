import React from 'react';
import '@/styles/ourOffice.css';
import OfficeSvg from '@/public/icons/office.svg';
import Image from 'next/image';
import WorldMap from '@/public/images/world map.jpg';
// import '@/styles/dist.css';

type Props = {};

const ourOffice = (props: Props) => {
  return (
    <section id="ourOffice" className="ourOffice">
      <div className="text-center md:mx-24 md:mb-6 lg:mx-40">
        <h2 className="ourOffice__title">Our Offices</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>

      <div className="ourOffice__content">
        <div className="ourOffice__item">
          <div className="card relative">
            <div className="card__content">
              <OfficeSvg className="w-16" />
              <h3 className="card__title">Ahmedabad</h3>
              <address className="text-neutral-600">
                <a className="w-auto" href={`#`}>
                  thespecial@character.com
                </a>
                <br />
                <a className="w-auto" href={`#`}>
                  +91 1800180018
                </a>
                <div className="pr-20">
                  Lorem ipsum, dolorsitamet consectetur adipisicing elit.
                </div>
              </address>
            </div>
            <div className="absolute -right-8 -bottom-16 h-32 w-32 rounded-full bg-primary"></div>
          </div>
        </div>
        <Image
          src={WorldMap}
          alt="office"
          className="fill -z-10 -mt-5 md:-mt-16 lg:-mt-24"
        />
      </div>
    </section>
  );
};

export default ourOffice;

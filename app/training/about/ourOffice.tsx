import React from 'react';
import '@/styles/ourOffice.css';
import OfficeSvg from '@/public/icons/office.svg';
import Image from 'next/image';
import WorldMap from '@/public/images/world map.jpg';
// import '@/styles/dist.css';

type Props = {};

const OurOffice = (props: Props) => {
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
          <div className="ourOffice__card relative overflow-hidden">
            <div className="ourOffice__card__content">
              <OfficeSvg className="w-16" />
              <h3 className="ourOffice__card__title">Ahmedabad</h3>
              <address className="grid-rows-span-3 grid text-neutral-600">
                <a className="w-auto pb-2" href={`#`}>
                  thespecial@character.com
                </a>
                <a className="w-auto pb-2" href={`#`}>
                  +91 1800180018
                </a>
                <div className="mb-2">
                  B-604/605, Ganesh Glory11 Jagatpur Road, Sarkhej-Gandhinagar
                  Hwy,Ahmedabad, Gujrat 382470
                </div>
              </address>
            </div>
            <div className="absolute -right-14 -bottom-20 h-32 w-32 rounded-full bg-primary"></div>
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

export default OurOffice;

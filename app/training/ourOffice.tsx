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
          <div className="ourOffice__card relative ">
            <div className="ourOffice__card__content">
              <OfficeSvg className="w-16" />
              <h3 className="ourOffice__card__title">Ahmedabad</h3>
              <address className="text-neutral-600">
                <a className="w-auto pb-1" href={`#`}>
                  thespecial@character.com
                </a>
                <br />
                <a className="w-auto pb-1" href={`#`}>
                  +91 1800180018
                </a>
                <div className="pb-1">
                  Lorem ipsum, dolorsitamet consectetur adipisicing elit.
                </div>
              </address>
            </div>
            <div className="absolute -right-2 -bottom-2 h-12 w-12 rounded-full bg-primary  md:-right-4 md:-bottom-5 md:h-16 md:w-16 lg:-bottom-24 lg:-right-10 lg:h-32 lg:w-32"></div>
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

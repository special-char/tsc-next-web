import React from 'react';
import '@/styles/ourOffice.css';
import Image from 'next/image';
import { getContactDetail } from '@/lib/getContactDetail';
import { ContactDetail, UploadFile } from 'types/types';

export const OurOfficeSkeleton = () => {
  return (
    <section id="ourOffice" className="ourOffice">
      <div className="ourOffice__body animate-pulse">
        <h2 className="ourOffice__title font-cursive">Our Offices</h2>
        <p className="font-cursive">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>

      <div className="ourOffice__content">
        <div className="ourOffice__item">
          <div className="ourOffice__card relative overflow-hidden">
            <div className="ourOffice__card__content bg-neutral-300">
              <div></div>
              <h3 className="ourOffice__card__title font-cursive">Ahmedabad</h3>
              <address className="ourOffice__card__connect text-neutral-600">
                <a className="w-auto pb-2 font-cursive" href={`#`}>
                  thespecial@character.com
                </a>
                <a className="w-auto pb-2 font-cursive" href={`#`}>
                  +91 1800180018
                </a>
                <div className="mb-2 font-cursive">
                  B-604/605, Ganesh Glory11
                  <br />
                  SG-Hwy, Ahmedabad, <br />
                  Gujrat 382470
                </div>
              </address>
            </div>
            <div className="ouroffice__circle"></div>
          </div>
        </div>
        <div className="bg-neutral-300"></div>
      </div>
    </section>
  );
};
type Props = {};

const OurOffice = async (props: Props) => {
  const contactDetail = await getContactDetail();

  if (!contactDetail) return null;

  const { map, addresses, phoneNumber, email, title, description } =
    contactDetail.data.contactDetail.data?.attributes as ContactDetail;

  const { url, alternativeText } = map?.data?.attributes as UploadFile;
  return (
    <section id="ourOffice" className="ourOffice">
      <div className="ourOffice__body">
        <h2 className="ourOffice__title">{title}</h2>
        <p>{description}</p>
      </div>

      <div className="ourOffice__content">
        <div className="ourOffice__item">
          {addresses?.map((val) => {
            const { url, alternativeText } = val?.icon?.data
              ?.attributes as UploadFile;
            return (
              <div className="ourOffice__card relative overflow-hidden">
                <div className="ourOffice__card__content">
                  <div className="ourOffice__card__image">
                    <Image src={url} alt={`${alternativeText}`} fill />
                  </div>
                  <h3 className="ourOffice__card__title">{val?.city}</h3>
                  <address className="ourOffice__card__connect">
                    <a className="w-auto pb-2" href={`#`}>
                      {email}
                    </a>
                    <a className="w-auto pb-2" href={`#`}>
                      {phoneNumber}
                    </a>
                    <div className="mb-2">
                      {val?.line1}
                      <br />
                      {val?.line2} <br />
                      {val?.state} {val?.pincode}
                    </div>
                  </address>
                </div>
                <div className="ouroffice__circle"></div>
              </div>
            );
          })}
        </div>
        <div className="ourOffice__map">
          <Image
            src={url}
            fill
            alt={`${alternativeText}`}
            className="-z-10 min-h-[300px]"
          />
        </div>
      </div>
    </section>
  );
};

export default OurOffice;

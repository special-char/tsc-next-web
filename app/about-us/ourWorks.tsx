import React from 'react';
import '@/styles/ourWorks.css';
import PinkSeparatorArrow from '@/ui/PinkSeparatorArrow';
import { getOurWorksData } from '@/lib/getOurWorks';
import Image from 'next/image';
import { AboutWorkValue, UploadFile } from 'types/types';

export const OurWorksSkeleton = () => {
  return (
    <section id="OurWorks" className="ourWorks">
      <div className="ourWorks__header animate-pulse">
        <h2 className="font-cursive text-neutral-100">Our work values</h2>
        <p className="ourWorks__line font-cursive">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
      <div className="ourWorks__content mx-auto lg:w-4/5">
        {[1, 2, 3, 4].map((val) => (
          <div className="ourWorks__sections" key={val}>
            <div className="ourWorks__chipLine">
              <div className="ourWorks__svg h-12 w-12 rounded-full bg-neutral-300">
                <div></div>
              </div>
              <div className="ourWorks__chip chip chip--white font-bold text-neutral-700">
                <h3 className="font-cursive">01</h3>
              </div>
            </div>
            <h3 className="ourWorks__h3 font-cursive">Company Name</h3>
            <p className="ourWorks__p font-cursive">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus
              egestas non consequat pellentesque iaculis nunc, est, mollis.
              Nulla.
            </p>
          </div>
        ))}
      </div>
      <div>
        {' '}
        <div className="ourWorks__arrow">
          <PinkSeparatorArrow />
        </div>
      </div>
    </section>
  );
};

const OurWorks = async () => {
  const aboutWorkValue = await getOurWorksData();

  if (!aboutWorkValue) {
    throw new Error(
      'something went wrong! try refreshing the page or please come back later.',
    );
  }

  const { title, description, values } = aboutWorkValue.data?.aboutWorkValue
    .data?.attributes as AboutWorkValue;

  return (
    <section id="OurWorks" className="ourWorks">
      <div className="ourWorks__header">
        <h2 className="text-neutral-100">{title}</h2>
        <p className="ourWorks__line">{description}</p>
      </div>
      <div className="ourWorks__content mx-auto lg:w-4/5">
        {values?.map((val, index) => {
          const { url, alternativeText } = val?.image?.data
            ?.attributes as UploadFile;

          return (
            <div className="ourWorks__sections" key={val?.id}>
              <div className="ourWorks__chipLine">
                <div className="ourWorks__svg">
                  <Image
                    src={`${url}?tr=h-200,w-200`}
                    className="rounded-full"
                    alt={`${alternativeText || 'OurWorks image'}`}
                    title={`${alternativeText || 'OurWorks image'}`}
                    width={200}
                    height={200}
                  />
                </div>
                <div className="ourWorks__chip chip chip--white px-7 font-bold text-neutral-700">
                  0{index + 1}
                </div>
              </div>
              <h3 className="ourWorks__h3 ">{val?.title}</h3>
              <p className="ourWorks__p">{val?.description}</p>
            </div>
          );
        })}
      </div>
      <div>
        <div className="ourWorks__arrow">
          <PinkSeparatorArrow />
        </div>
      </div>
    </section>
  );
};

export default OurWorks;

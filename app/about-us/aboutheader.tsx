import '@/styles/aboutheader.css';
import React from 'react';
import Image from 'next/image';
import { getAboutDetailData } from '@/lib/getAboutDetails';
import { AboutDetail, UploadFile } from 'types/types';

type Props = {};

export const AboutheaderSkeleton = () => {
  return (
    <section className="about">
      {[1, 2].map((x) => (
        <div className="about__item" key={x}>
          <div className="about__image"></div>
          <div>
            <h2 className=" text-3xl md:text-6xl"></h2>
            <p className="m-0 lg:text-lg"></p>
          </div>
        </div>
      ))}
    </section>
  );
};

const Aboutheader = async (props: Props) => {
  const aboutDetailsData = await getAboutDetailData();

  if (!aboutDetailsData) {
    throw new Error(
      'something went wrong! try refreshing the page or please come back later.',
    );
  }

  const { detail } = aboutDetailsData.data.aboutDetail.data
    ?.attributes as AboutDetail;

  return (
    <section className="about">
      {detail?.map((x) => {
        const { url, alternativeText } = x?.image?.data
          ?.attributes as UploadFile;
        return (
          <div className="about__item" key={x?.id}>
            <div className="about__image">
              <Image
                src={`${url}?tr=ar-1-1`}
                alt={`${alternativeText || 'about image'}`}
                title={`${alternativeText || 'about image'}`}
                fill
                sizes="(max-width: 1024px) 100vw,
                        (max-width: 1280px) 50vw,
                         604px"
              />
            </div>
            <div>
              <h2 className="text-center text-3xl md:text-6xl lg:text-left">
                {x?.title}
              </h2>
              <p className="m-0 text-center lg:text-left lg:text-lg">
                {x?.description}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Aboutheader;

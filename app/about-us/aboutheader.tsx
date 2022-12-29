import '@/styles/aboutheader.css';
import React from 'react';
import Image from 'next/image';
import { getAboutDetailData } from '@/lib/getAboutDetails';
import { AboutDetail, UploadFile } from 'types/types';

type Props = {};

export const AboutheaderSkeleton = () => {
  return (
    <section className="px-container py-20 sm:px-sm-container lg:px-container">
      <div className="aboutheader animate-pulse">
        {[1, 2].map((x) => (
          <>
            <div className="aboutheader__image bg-neutral-300">
              <div></div>
            </div>
            <div className="aboutheader__title">
              <h2 className=" font-cursive text-3xl md:text-6xl">
                The mission behind Education platform
              </h2>
              <p className="font-cursive lg:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                viverra praesent felis consequat pellentesque turpis et quisque
                platea. Eu, elit ut nunc ac mauris bibendum nulla placerat.
                Sagittis sit eu sit massa sapien, risus diam. In lorem eu sed
                euismod laoreet urna, feugiat et. Euismod sem purus rutrum in.
                Tortor varius a bibendum nisl et tellus. Aliquet elit senectus
                iaculis netus gravida.
              </p>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

const Aboutheader = async (props: Props) => {
  const aboutDetailsData = await getAboutDetailData();

  if (!aboutDetailsData) return null;

  const { detail } = aboutDetailsData.data.aboutDetail.data
    ?.attributes as AboutDetail;

  return (
    <section className="px-container py-20">
      <div className="aboutheader mx-0 md:mx-20 lg:mx-0">
        {detail?.map((x) => {
          const { url, alternativeText } = x?.image?.data
            ?.attributes as UploadFile;
          return (
            <>
              <div key={x?.id} className="aboutheader__image">
                <Image src={url} alt={`${alternativeText}`} fill />
              </div>
              <div className="aboutheader__title">
                <h2 className=" text-3xl md:text-6xl">{x?.title}</h2>
                <p className="m-0 lg:text-lg">{x?.description}</p>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Aboutheader;

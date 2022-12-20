import '@/styles/aboutheader.css';
import React from 'react';
import Image from 'next/image';
import { getAboutDetailData } from '@/lib/getAboutDetails';
import { AboutDetail, UploadFile } from 'types/types';
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
type Props = {};
const aboutheaderdata = [
  {
    id: 1,
    image:
      'https://assets.website-files.com/607de2d8e8911e32707a3efe/60805c3c724dc80aee6e64bd_image-1-about-story-education-x-template-p-500.jpeg',
    title: 'The mission behind Education platform',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus viverra
    praesent felis consequat pellentesque turpis et quisque platea. Eu,
    elit ut nunc ac mauris bibendum nulla placerat. Sagittis sit eu sit
    massa sapien, risus diam. In lorem eu sed euismod laoreet urna,
    feugiat et. Euismod sem purus rutrum in. Tortor varius a bibendum nisl
    et tellus. Aliquet elit senectus iaculis netus gravida.`,
  },
  {
    id: 2,
    image:
      'https://assets.website-files.com/607de2d8e8911e32707a3efe/60805c3c3415f8f033e0f7c7_image-2-about-story-education-x-template-p-800.jpeg',
    title: 'The story of our founders',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus viverra
    praesent felis consequat pellentesque turpis et quisque platea. Eu,
    elit ut nunc ac mauris bibendum nulla placerat. Sagittis sit eu sit
    massa sapien, risus diam. In lorem eu sed euismod laoreet urna,
    feugiat et. Euismod sem purus rutrum in. Tortor varius a bibendum nisl
    et tellus. Aliquet elit senectus iaculis netus gravida.`,
  },
];

const Aboutheader = async (props: Props) => {
  const aboutDetailsData = await getAboutDetailData();

  if (!aboutDetailsData) return null;

  const { detail } = aboutDetailsData.data.data.aboutDetail.data
    ?.attributes as AboutDetail;

  return (
    <section className="px-container py-20">
      <div className="aboutheader mx-0 md:mx-20 lg:mx-0">
        {detail?.map((x) => {
          const { url, alternativeText } = x?.image?.data
            ?.attributes as UploadFile;
          return (
            <>
              <div className="aboutheader__image">
                <Image src={url} alt={`${alternativeText}`} fill />
              </div>
              <div className="aboutheader__title">
                <h2 className=" text-3xl md:text-6xl">{x?.title}</h2>
                <p className="lg:text-lg">{x?.description}</p>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Aboutheader;

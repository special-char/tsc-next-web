import '@/styles/education.css';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { getEducationData } from '@/lib/getEducation';
import { AboutTsc, ComponentCommonDetail, UploadFile } from 'types/types';

const Education = async () => {
  const educationData = await getEducationData();

  if (!educationData) return null;

  const { title, description, details, image } = educationData.data.data
    .aboutTsc.data?.attributes as AboutTsc;

  const { url, alternativeText } = image?.data?.attributes as UploadFile;

  return (
    <section className="education ">
      <div className=" education__header col-span-2">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="education__body col-span-2">
        <div className="education__image">
          <Image src={`${url}`} alt={`${alternativeText}`} fill />
        </div>
        <div className="education__content ">
          {details?.map((x) => {
            const { title, description, image } = x as ComponentCommonDetail;
            const { url, alternativeText } = image.data
              ?.attributes as UploadFile;
            return (
              <>
                <figure className="relative aspect-square w-16 overflow-hidden rounded-full">
                  <Image src={url} alt={`${alternativeText}`} fill />
                </figure>
                <div className="">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="education__header col-span-2">
        <Link href="/" className="btn btn--secondary">
          About Education
        </Link>
      </div>
      <span className="education__line"></span>
    </section>
  );
};

export default Education;

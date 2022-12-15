import '@/styles/education.css';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { getEducationData } from '@/lib/getEducation';
import { AboutTsc, ComponentCommonDetail, UploadFile } from 'types/types';
import Button from '@/ui/Button';

export const EducationSkeleton = () => {
  return (
    <section className="education animate-pulse ">
      <div className=" education__header col-span-2">
        <h2 className="font-cursive">About Education</h2>
        <p className="font-cursive">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
      <div className="education__body col-span-2">
        <div className="education__image"></div>
        <div className="education__content ">
          {[1, 2, 3]?.map((x) => {
            return (
              <>
                <figure className="relative aspect-square w-16 overflow-hidden rounded-full bg-neutral-300">
                  <div></div>
                </figure>
                <div className="font-cursive">
                  <h3>Industry expert teachers</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur dolorili adipiscing
                    elit. Felis donec massa aliquam id dolor .
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="education__header col-span-2">
        <div className="btn btn--secondary font-cursive">About Education</div>
      </div>
      <span className="education__line"></span>
    </section>
  );
};

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
      <div className="education__header col-span-2 mb-20 lg:mb-32">
        <Button as={Link} href="/" variant="secondary">
          About Education
        </Button>
      </div>
      <span className="education__line"></span>
    </section>
  );
};

export default Education;

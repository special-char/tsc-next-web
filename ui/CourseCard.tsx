import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Course, CourseEntity, UploadFile } from 'types/types';
import Icon from './Icon';
import '@/styles/courseCard.css';
import clsx from 'clsx';

type Props = {
  course: CourseEntity;
  isHorizontal?: boolean;
};

export const CourseCardSkeleton = ({
  isHorizontal,
}: {
  isHorizontal?: boolean;
}) => {
  return (
    <div
      className={clsx('course_card', {
        'course_card--hoz': !!isHorizontal,
      })}
    >
      <div className="animate-pulse">
        <div className="course_card__img bg-neutral-300">
          <div></div>
          <div className="course_card__chips">
            <span className="chip chip--white font-cursive">4 months</span>
            <span className="chip chip--primary font-cursive">5,000/Month</span>
          </div>
        </div>
      </div>
      <div className="course_card__body">
        <div className="course_card__main">
          <h3 className="course_card__title font-cursive">
            Full-stack Development
          </h3>
          <p className="course_card__desc font-cursive">
            Full-stack development refers to the end-to-end application software
            development, including the front end and back end. The front end
            consists of the user interface, and the back end takes care of the
            business logic and application workflows.
          </p>
        </div>
        <div className="course_card__footer">
          <div className="course_card__action font-cursive">
            <div></div>
            Download Curriculum
          </div>
        </div>
      </div>
    </div>
  );
};

const CourseCard = ({ course, isHorizontal }: Props) => {
  const {
    title,
    description,
    courseVideoPoster,
    brochure,
    duration,
    price,
    slug,
  } = course.attributes as Course;
  const { url, alternativeText } = courseVideoPoster?.data
    ?.attributes as UploadFile;
  const brochureUrl = brochure?.data?.attributes?.url;

  return (
    <div
      className={clsx('course_card', {
        'course_card--hoz': !!isHorizontal,
      })}
    >
      <Link prefetch={false} href={`/courses/${encodeURIComponent(slug)}`}>
        <figure className="course_card__img">
          <Image
            src={`${url}?tr=ar-16-9`}
            alt={`${alternativeText}`}
            fill
            sizes="(max-width: 640px) 100vw,576px"
          />
          <div className="course_card__chips">
            {/* <div className="chip chip--white">{duration}</div> */}
            {/* {price && (
              <div className="chip chip--primary">
                {`${new Intl.NumberFormat(price.format.replace('_', '-'), {
                  style: 'currency',
                  currency: price.currency,
                  minimumFractionDigits: 0,
                }).format(price.price)}/${price.unit}`}
              </div>
            )
            } */}
          </div>
        </figure>
      </Link>
      <div className="course_card__body">
        <Link
          prefetch={false}
          href={`/courses/${encodeURIComponent(slug)}`}
          className="course_card__main"
        >
          <h3 className="course_card__title">{title}</h3>
          <p className="course_card__desc">{description}</p>
        </Link>

{/* ***{Dont Remove It This Code , no Body Touch it }*** */}

        {/* <div className="course_card__footer">
          {brochureUrl && (
            <Link
              href={brochureUrl}
              prefetch={false}
              className="course_card__action"
              download
            >
              <Icon name="download" height={24} width={24} />
              Download Curriculum
            </Link>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default CourseCard;

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

const CourseCard = ({ course, isHorizontal }: Props) => {
  const { title, description, courseVideoPoster } = course.attributes as Course;
  const { url, alternativeText } = courseVideoPoster?.data
    ?.attributes as UploadFile;
  return (
    <div
      className={clsx('course_card', {
        'course_card--hoz': !!isHorizontal,
      })}
    >
      <Link href="#">
        <figure className="course_card__img">
          <Image src={url} alt={`${alternativeText}`} fill />
          <div className="course_card__chips">
            <div className="chip chip--white">24 days</div>
            <div className="chip chip--primary">Rs. 40,000</div>
          </div>
        </figure>
      </Link>
      <div className="course_card__body">
        <Link href="#" className="course_card__main">
          <h3 className="course_card__title">{title}</h3>
          <p className="course_card__desc">{description}</p>
        </Link>
        <div className="course_card__footer">
          <Link href="#" className="course_card__action">
            <Icon name="download" height={24} width={24} />
            Download Curriculum
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

import React from 'react';
import '@/styles/price.css';
import LevelSvg from '@/public/icons/level.svg';
import DurationSvg from '@/public/icons/duration.svg';
import LessonSvg from '@/public/icons/lesson.svg';
import LifetimeSvg from '@/public/icons/lifetime.svg';
import AccessSvg from '@/public/icons/access.svg';
export const CoursesPriceSkeleton = () => {
  return (
    <div className=" price__features animate-pulse">
      {[1, 2, 3, 4].map((data) => (
        <div key={data} className="price__content">
          <div className="h-9 w-9 overflow-hidden rounded-2xl bg-neutral-300">
            <div></div>
          </div>
          <p className="pl-5 font-cursive text-lg">Level</p>
          <p className="pl-2 font-cursive text-lg font-bold text-neutral-700">
            Lorem ipsum dolor sit.
          </p>
        </div>
      ))}
    </div>
  );
};

type Props = {};

const PriceData = [
  {
    svg: <LevelSvg />,
    title: 'Level: ',
    desc: ' Advanced',
  },
  {
    svg: <DurationSvg />,
    title: 'Duration: ',
    desc: '8hr 12m',
  },
  {
    svg: <LessonSvg />,
    title: 'Lesson: ',
    desc: '80',
  },
  {
    svg: <LifetimeSvg />,
    title: 'Lifetime Access',
  },
  {
    svg: <AccessSvg className=" xs:w-9 md:w-9" />,
    title: 'Access From Any Computer, Tablet or Mobile',
  },
];

const CoursesPrice = (props: Props) => {
  return (
    <div className=" price__features">
      {PriceData.map((data) => (
        <div key={data.title} className="price__content">
          <figure className="w-9">{data.svg}</figure>
          <p className="pl-5 text-lg">{data.title}</p>
          <p className="pl-2 text-lg font-bold text-neutral-700">{data.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default CoursesPrice;

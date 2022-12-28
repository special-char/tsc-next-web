import React from 'react';
import '@/styles/featuredcourse.css';
import CourseCard from '@/ui/CourseCard';
import { CourseEntity } from 'types/types';

type Props = {
  data: CourseEntity;
};

const Featuredcourse = ({ data }: Props) => {
  return (
    <section id="featuredcourse" className="featuredcourse">
      <h2 className="featuredcourse__title">Featured Course</h2>
      <CourseCard course={data} isHorizontal />
    </section>
  );
};

export default Featuredcourse;

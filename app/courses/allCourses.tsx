import React from 'react';
import Features from '../../ui/features';
import CourseCard from '@/ui/CourseCard';
import { CourseEntity } from 'types/types';

type Props = {
  courses: CourseEntity[];
};

const AllCourses = ({ courses }: Props) => {
  return (
    <section className="items bg-neutral-200">
      <Features
        title="All Courses"
        chips={[
          {
            name: 'All',
            selected: true,
          },
          {
            name: 'Development',
          },
          {
            name: 'Design',
          },
          {
            name: 'Marketing',
          },
        ]}
      />
      <div className="items__item">
        {courses.map((data) => {
          return <CourseCard key={data.id} course={data} />;
        })}
      </div>
    </section>
  );
};

export default AllCourses;

import React from 'react';
import Features from '../../ui/features';
import CourseCard from '@/ui/CourseCard';
import { getAllCoursesData } from '@/lib/getAllCourses';

type Props = {};

const AllCourses = async (props: Props) => {
  const coursesData = await getAllCoursesData();

  if (!coursesData) return null;

  const [, ...allCourses] = coursesData.data.courses.data;

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
        {allCourses.map((data) => {
          return <CourseCard key={data.id} course={data} />;
        })}
      </div>
    </section>
  );
};

export default AllCourses;

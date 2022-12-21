import React from 'react';
import Features from './features';
import '@/styles/allCourses.css';
import CourseCard from '@/ui/CourseCard';
import { getAllCoursesData } from '@/lib/getAllCourses';

type Props = {};

const AllCourses = async (props: Props) => {
  const coursesData = await getAllCoursesData();

  if (!coursesData) return null;

  const coursesInfo = coursesData.data.courses.data;

  return (
    <section id="allcourses">
      <Features />
      <div className="allcourses__content">
        {coursesInfo.map((data) => {
          return <CourseCard key={data.id} course={data} />;
        })}
      </div>
    </section>
  );
};

export default AllCourses;

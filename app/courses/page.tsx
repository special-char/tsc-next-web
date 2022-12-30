import React, { use } from 'react';
import PageHeader from '@/ui/pageHeader';
import Featuredcourse from './featuredcourse';
import AllCourses from './allCourses';
import { Suspense } from 'react';
import { getAllCoursesData } from '@/lib/getAllCourses';

type Props = {};

const page = ({ searchParams }: {
  searchParams?: { category?: string };
}) => {
  const coursesData = use(getAllCoursesData());

  if (!coursesData) return null;

  const [featuredCourse, ...allCourses] = coursesData.data.courses.data;

  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        {/* @ts-expect-error Async Server Component */}
        <PageHeader
          pageName="courses-page"
          className="customClass"
          circleRight="bg-secondary2"
          circleLeft="bg-secondary3"
        />
      </Suspense>
      <Featuredcourse data={featuredCourse} />
      <AllCourses courses={allCourses} category={searchParams?.category} />
    </>
  );
};

export default page;

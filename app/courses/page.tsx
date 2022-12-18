import React, { Suspense } from 'react';
import PageHeader from '@/ui/pageHeader';
import Featuredcourse from './featuredcourse';
import AllCourses from './allCourses';
import Courses from '../courses';

type Props = {};

const page = (props: Props) => {
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
      <Suspense fallback={<h1>Loading...</h1>}>
        {/* @ts-expect-error Async Server Component */}
        <Featuredcourse />
      </Suspense>
      <Suspense fallback={<h1>Loading...</h1>}>
        {/* @ts-expect-error Async Server Component */}
        <AllCourses />
      </Suspense>
    </>
  );
};

export default page;

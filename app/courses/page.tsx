import React from 'react';
import PageHeader from '@/ui/pageHeader';
import Featuredcourse from './featuredcourse';
import AllCourses from './allCourses';
import Courses from '../courses';

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <PageHeader
        title="Courses"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        className="customClass"
        circleRight="bg-secondary2"
        circleLeft="bg-secondary3"
      />
      <Featuredcourse />
      <AllCourses />
    </>
  );
};

export default page;

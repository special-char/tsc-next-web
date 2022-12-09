import Banner from './banner';
import Category from './category';
import Courses from './courses';
import Education from './education';
import GrowCareer from './growcareer';
import Leaders from './leaders';
import Perks from './perks';
import Testimonial from './testimonial';
import Blogs from './blogs';
import { Suspense } from 'react';

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <Banner />
      {/* @ts-expect-error Async Server Component */}
      <Courses />
      {/* @ts-expect-error Async Server Component */}
      <Perks />
      {/* @ts-expect-error Async Server Component */}
      <Leaders />
      {/* @ts-expect-error Async Server Component */}
      <GrowCareer />
      {/* @ts-expect-error Async Server Component */}
      <Education />
      {/* @ts-expect-error Async Server Component */}
      <Category />
      {/* @ts-expect-error Async Server Component */}
      <Testimonial />
      <Blogs />
    </>
  );
};

export default Page;

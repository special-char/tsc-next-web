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
import DescriptionSkeleton from '@/ui/DescriptionSkeleton';
import TitleSkeleton from '@/ui/TitleSkeleton';
import ButtonSkeleton from '@/ui/ButtonSkeleton';

const Page = () => {
  return (
    <>
      <TitleSkeleton />
      <DescriptionSkeleton />
      <ButtonSkeleton />
      <Suspense fallback={<h1>Loading...</h1>}>
        {/* @ts-expect-error Async Server Component */}
        <Banner />
      </Suspense>
      <Suspense fallback={<h1>Loading...</h1>}>
        {/* @ts-expect-error Async Server Component */}
        <Courses />
      </Suspense>
      <Suspense fallback={<h1>Loading...</h1>}>
        {/* @ts-expect-error Async Server Component */}
        <Perks />
      </Suspense>
      <Suspense fallback={<h1>Loading...</h1>}>
        {/* @ts-expect-error Async Server Component */}
        <Leaders />
      </Suspense>
      <Suspense fallback={<h1>Loading...</h1>}>
        {/* @ts-expect-error Async Server Component */}
        <GrowCareer />
      </Suspense>
      <Suspense fallback={<h1>Loading...</h1>}>
        {/* @ts-expect-error Async Server Component */}
        <Education />
      </Suspense>
      <Suspense fallback={<h1>Loading...</h1>}>
        {/* @ts-expect-error Async Server Component */}
        <Category />
      </Suspense>
      <Suspense fallback={<h1>Loading...</h1>}>
        {/* @ts-expect-error Async Server Component */}
        <Testimonial />
      </Suspense>
      <Blogs />
    </>
  );
};

export default Page;

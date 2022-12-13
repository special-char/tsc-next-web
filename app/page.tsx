import Banner, { BannerSkeleton } from './banner';
import Category from './category';
import Courses, { CoursesSkeleton } from './courses';
import Education, { EducationSkeleton } from './education';
import GrowCareer, { GrowCareerSkeleton } from './growcareer';
import Leaders, { LeadersSkeleton } from './leaders';
import Perks from './perks';
import Testimonial from './testimonial';
import Blogs from './blogs';
import { Suspense } from 'react';
import EventDetails from './training/allevents';
import Imageskeleton from '@/ui/Imageskeleton';

const Page = () => {
  return (
    <>
      <Suspense fallback={<BannerSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <Banner />
      </Suspense>
      <Suspense fallback={<CoursesSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <Courses />
      </Suspense>
      <Suspense fallback={<h1>Loading...</h1>}>
        {/* @ts-expect-error Async Server Component */}
        <Perks />
      </Suspense>
      <Suspense fallback={<LeadersSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <Leaders />
      </Suspense>
      <Suspense fallback={<GrowCareerSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <GrowCareer />
      </Suspense>
      <Suspense fallback={<EducationSkeleton />}>
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

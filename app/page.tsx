import Banner, { BannerSkeleton } from './banner';
import Category, { CategoriesSkeleton, CategorySkeleton } from './category';
import Courses, { CoursesSkeleton } from './courses';
import Education from './education';
import GrowCareer from './growcareer';
import Leaders from './leaders';
import Perks, { PerksSkeleton } from './perks';
import Testimonial, { TestimonialSkeleton } from './testimonial';
import Blogs from './blogs';
import { Suspense } from 'react';

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
      <Suspense fallback={<PerksSkeleton />}>
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
      <Suspense fallback={<CategorySkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <Category />
      </Suspense>
      <Suspense fallback={<TestimonialSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <Testimonial />
      </Suspense>
      <Blogs />
    </>
  );
};

export default Page;

import { Suspense } from 'react';
import type { Metadata } from 'next';
import Banner, { BannerSkeleton } from './banner';
import Category, { CategorySkeleton } from './category';
import Courses, { CoursesSkeleton } from './courses';
import Education, { EducationSkeleton } from './education';
import GrowCareer, { GrowCareerSkeleton } from './growcareer';
import Leaders, { LeadersSkeleton } from './leaders';
import Perks, { PerksSkeleton } from './perks';
import Testimonial, { TestimonialSkeleton } from './testimonial';
import Blogs, { BlogsSkeleton } from './blogs';
import Certificate from './certificate';
import PrivacyPolicy from './privacy-Policy';

const Page = () => {
  return (
    <>
      {/* error */}
      <h1 className="sr-only">The Special Character</h1>
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
      <Suspense fallback={<CategorySkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <Category />
      </Suspense>
      <Suspense fallback={<TestimonialSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <Testimonial />
      </Suspense>
      <Certificate />
      <Suspense fallback={<BlogsSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <Blogs />
      </Suspense>
    </>
  );
};

export default Page;

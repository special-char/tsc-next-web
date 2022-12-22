import Banner, { BannerSkeleton } from './banner';
import Category, { CategorySkeleton } from './category';
import Courses, { CoursesSkeleton } from './courses';
import Education, { EducationSkeleton } from './education';
import GrowCareer, { GrowCareerSkeleton } from './growcareer';
import Leaders, { LeadersSkeleton } from './leaders';
import Perks, { PerksSkeleton } from './perks';
import Testimonial, { TestimonialSkeleton } from './testimonial';
import Blogs, { BlogsSkeleton } from './blogs';
import { Suspense } from 'react';
import { ContactSkeleton } from './contact/contact';

const Page = () => {
  return (
    <>
      <Suspense fallback={<BannerSkeleton />}>
        <Banner />
      </Suspense>
      <Suspense fallback={<CoursesSkeleton />}>
        <Courses />
      </Suspense>
      <Suspense fallback={<PerksSkeleton />}>
        <Perks />
      </Suspense>
      <Suspense fallback={<LeadersSkeleton />}>
        <Leaders />
      </Suspense>
      <Suspense fallback={<GrowCareerSkeleton />}>
        <GrowCareer />
      </Suspense>
      <Suspense fallback={<EducationSkeleton />}>
        <Education />
      </Suspense>
      <Suspense fallback={<CategorySkeleton />}>
        <Category />
      </Suspense>
      <Suspense fallback={<TestimonialSkeleton />}>
        <Testimonial />
      </Suspense>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Blogs />
      </Suspense>
    </>
  );
};

export default Page;

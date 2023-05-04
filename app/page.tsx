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

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // const post = await fetch(`https://.../${params.slug}`).then((res) =>
  //   res.json(),
  // );

  const defaultSEO = {
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 1,
    },
    icons: {
      icon: [
        { url: '/icons/tsc.svg', type: 'image/svg+xml' },
        {
          url: '/favicon/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
        },
        {
          url: '/favicon/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
      ],
      shortcut: ['/shortcut-icon.png'],
      apple: [
        // { url: '/apple-icon.png' },
        {
          url: '/favicon/apple-touch-icon.png',
          sizes: '180x180',
          type: 'image/png',
        },
      ],
      other: [
        // {
        //   rel: 'apple-touch-icon-precomposed',
        //   url: '/apple-touch-icon-precomposed.png',
        // },
        {
          rel: 'mask-icon',
          url: '/favicon/safari-pinned-tab.svg',
          color: '#ffc40d',
        },
      ],
    },
    manifest: '/favicon/site.webmanifest',
    appleWebApp: {
      title: 'The Special Character',
      // statusBarStyle: 'black',
    },
    applicationName: 'The Special Character',
    themeColor: '#fff',
  };

  return {
    title: 'The Special Character',
    ...defaultSEO,
  };
}

const Page = () => {
  return (
    <>
      {/* error */}
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
      <Suspense fallback={<BlogsSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <Blogs />
      </Suspense>
    </>
  );
};

export default Page;

import PageHeader, { PageHeaderSkeleton } from '@/ui/pageHeader';
import React, { Suspense } from 'react';
import OurWorks, { OurWorksSkeleton } from './ourWorks';
import Achievements, { AchievementsSkeleton } from './achievements';
import CompanyHistory, { CompanyHistorySkeleton } from './companyhistory';
import OurOffice, { OurOfficeSkeleton } from './ourOffice';
import Aboutheader, { AboutheaderSkeleton } from './aboutheader';
import { Metadata } from 'next';

type Props = {};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // const post = await fetch(`https://.../${params.slug}`).then((res) =>
  //   res.json(),
  // );

  return {
    title: 'About',
  };
}

const Page = (props: Props) => {
  return (
    <>
      <Suspense fallback={<PageHeaderSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <PageHeader
          pageName="about"
          className="customClass"
          circleRight="bg-primary"
          circleLeft="bg-secondary3"
        />
      </Suspense>
      <Suspense fallback={<AchievementsSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <Achievements />
      </Suspense>
      <Suspense fallback={<AboutheaderSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <Aboutheader />
      </Suspense>
      <Suspense fallback={<OurWorksSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <OurWorks />
      </Suspense>
      <Suspense fallback={<CompanyHistorySkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <CompanyHistory />
      </Suspense>
      <Suspense fallback={<OurOfficeSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <OurOffice />
      </Suspense>
    </>
  );
};

export default Page;

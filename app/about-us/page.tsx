import PageHeader, { PageHeaderSkeleton } from '@/ui/pageHeader';
import React, { Suspense } from 'react';
import OurWorks, { OurWorksSkeleton } from './ourWorks';
import Achievements, { AchievementsSkeleton } from './achievements';
import CompanyHistory, { CompanyHistorySkeleton } from './companyhistory';
import OurOffice, { OurOfficeSkeleton } from './ourOffice';
import Aboutheader, { AboutheaderSkeleton } from './aboutheader';

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Suspense fallback={<PageHeaderSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <PageHeaderSkeleton />
        {/* <PageHeader
          pageName="about-page"
          className="customClass"
          circleRight="bg-primary"
          circleLeft="bg-secondary3"
        /> */}
      </Suspense>
      <Suspense fallback={<AchievementsSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <AchievementsSkeleton />
        {/* <Achievements /> */}
      </Suspense>
      <Suspense fallback={<AboutheaderSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <AboutheaderSkeleton />
        {/* <Aboutheader /> */}
      </Suspense>
      <Suspense fallback={<OurWorksSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <OurWorksSkeleton />
        {/* <OurWorks /> */}
      </Suspense>
      <Suspense fallback={<CompanyHistorySkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <CompanyHistorySkeleton />
        {/* <CompanyHistory /> */}
      </Suspense>
      <Suspense fallback={<OurOfficeSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <OurOfficeSkeleton />
        {/* <OurOffice /> */}
      </Suspense>
    </>
  );
};

export default page;

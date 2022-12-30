import PageHeader, { PageHeaderSkeleton } from '@/ui/pageHeader';
import React, { Suspense } from 'react';
import OurWorks, { OurWorksSkeleton } from './ourWorks';
import Achievements, { AchievementsSkeleton } from './achievements';
import CompanyHistory, { CompanyHistorySkeleton } from './companyhistory';
import OurOffice, { OurOfficeSkeleton } from './ourOffice';
import Aboutheader, { AboutheaderSkeleton } from './aboutheader';
import { getBannerHeaderData } from '@/lib/getBannerHeader';

type Props = {};

const page = async (props: Props) => {
  const bannerHeader = await getBannerHeaderData('about-page');

  if (!bannerHeader) return null;

  const bannerHeaderData =
    bannerHeader.data.bannerHeader.data?.attributes?.bannerHeader;

  if (!bannerHeaderData) return null;

  return (
    <>
      <Suspense fallback={<PageHeaderSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <PageHeader
          pageName="about-page"
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

export default page;

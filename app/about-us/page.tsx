import PageHeader, { PageHeaderSkeleton } from '@/ui/pageHeader';
import React, { Suspense, use } from 'react';
import OurWorks from './ourWorks';
import Achievements from './achievements';
import CompanyHistory from './companyhistory';
import OurOffice from './ourOffice';
import Aboutheader from './aboutheader';
import { getBannerHeaderData } from '@/lib/getBannerHeader';

type Props = {};

const page = async (props: Props) => {
  const bannerHeader = await getBannerHeaderData('about-page');

  if (!bannerHeader) return null;

  const bannerHeaderData =
    bannerHeader.data.data.bannerHeader.data?.attributes?.bannerHeader;

  if (!bannerHeaderData) return null;

  console.log(bannerHeaderData);

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
      <Achievements />

      <Aboutheader />
      <OurWorks />
      <CompanyHistory />
      <OurOffice />
    </>
  );
};

export default page;

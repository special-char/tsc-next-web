import PageHeader, { PageHeaderSkeleton } from '@/ui/pageHeader';
import React, { Suspense } from 'react';
import OurWorks, { OurWorksSkeleton } from './ourWorks';
import Achievements, { AchievementsSkeleton } from './achievements';
import CompanyHistory, { CompanyHistorySkeleton } from './companyhistory';
import OurOffice from './ourOffice';
import Aboutheader, { AboutheaderSkeleton } from './aboutheader';

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Suspense fallback={<PageHeaderSkeleton />}>
        <PageHeader
          title="The big mission behind Educationic"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium pulvinar ac molestie cursus malesuada enim. Massa nec tellus, elit tellus, erat faucibus aenean. Nunc, lacus, dignissim nec sit."
          className="customClass"
          circleRight="bg-primary"
          circleLeft="bg-secondary3"
        />
      </Suspense>
      <Suspense fallback={<AchievementsSkeleton />}>
        <Achievements />
      </Suspense>

      <Suspense fallback={<AboutheaderSkeleton />}>
        <Aboutheader />
      </Suspense>
      <Suspense fallback={<OurWorksSkeleton />}>
        <OurWorks />
      </Suspense>
      <Suspense fallback={<CompanyHistorySkeleton />}>
        <CompanyHistory />
      </Suspense>
      <OurOffice />
    </>
  );
};

export default page;

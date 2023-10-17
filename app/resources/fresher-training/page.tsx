import PageHeader, { PageHeaderSkeleton } from '@/ui/pageHeader';
import React, { Suspense } from 'react';
import Content from '../Content';
import Technolgy from '../Technolgy';

const page = (props: Props) => {
  return (
    <div>
      <Suspense fallback={<PageHeaderSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <PageHeader
          pageName="fresher-training"
          className="customClass"
          circleRight="bg-primary"
          circleLeft="bg-secondary3"
        />
      </Suspense>
      <Content />
      <Technolgy />
    </div>
  );
};

export default page;

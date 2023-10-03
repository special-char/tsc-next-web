import React, { Suspense } from 'react';
import PlanCards from '@/ui/PlanCards';
import PageHeader, { PageHeaderSkeleton } from '@/ui/pageHeader';

const data = [
  {
    id: 1,
    coursetype: 'BASIC COURSE',
    duration: '3 Months',
    description:
      '  In the realm of software development, there are no limits to innovation and excellence.',
    detils: [
      'In-depth Practical Training',
      'Offline Project Training Opportunities',
      'Guaranteed Job Support',
      'Interview Preparation',
      'Job guarantee - 50%',
    ],
    notincourse: ['Live Project Training Opportunities'],
  },
  {
    id: 2,
    coursetype: 'BASIC COURSE',
    duration: '6 Months',
    description:
      '  In the realm of software development, there are no limits to innovation and excellence.',
    detils: [
      'In-depth Practical Training',
      'Offline Project Training Opportunities',
      'Guaranteed Job Support',
      'Interview Preparation',
      'Job guarantee - 50%',
      'Live Project Training Opportunities',
    ],
    notincourse: [],
  },
];

const plan = () => {
  return (
    <main>
      <Suspense fallback={<PageHeaderSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <PageHeader
          pageName="about"
          className="customClass"
          circleRight="bg-primary"
          circleLeft="bg-secondary3"
        />
      </Suspense>

      <PlanCards data={data} />
    </main>
  );
};

export default plan;

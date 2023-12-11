import React, { Suspense } from 'react';
import PlanCards from '@/ui/PlanCards';
import PageHeader, { PageHeaderSkeleton } from '@/ui/pageHeader';

const data = [
  {
    id: 1,
    coursetype: 'Full Stack Advance Development Course',
    duration: '6 Months',
    description:
      ' In software development, limitless innovation thrives, breaking barriers to achieve excellence in the dynamic realm of technology and progress.',
    detils: [
      'In-depth Practical Training',
      'Offline Project Training Opportunities',

      'Interview Preparation',
      '100% Job Assistance',
      'Live Project Training Opportunities',
    ],
    notincourse: [],
    buttonText:[
      'enroll Now'
    ],

  },
  {
    id: 2,
    coursetype: 'Full Stack Development Course Fast Track',
    duration: '3 Months',
    description:
      'We excel in crafting dynamic, efficient software solutions, resonating with innovation and excellence systems that redefine standards in technology.',
    detils: [
      'In-depth Practical Training',
      'Offline / Online Project Training Opportunities',
      'Mentoring For Job Assistance',
      'Live Project Training Opportunities',
      'Exclusive For Working Professionals Weekend Batch',
    ],
    notincourse: [],
    buttonText:[
      'Register Now'
    ],
  },
];

const plan = () => {
  return (
    <main>
      <Suspense fallback={<PageHeaderSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <PageHeader
          pageName="plans"
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

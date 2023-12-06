import React, { Suspense } from 'react';
import PlanCards from '@/ui/PlanCards';
import PageHeader, { PageHeaderSkeleton } from '@/ui/pageHeader';

const data = [
  {
    id: 1,
    coursetype: 'Full Stack Advance Development Course',
    duration: '6 Months',
    description:
      '  In the realm of software development, there are no limits to innovation and excellence.',
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
      'Within the realm of software solutions, we craft dynamic and efficient systems that resonate with excellence and innovation.',
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

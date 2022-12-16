import React, { Suspense } from 'react';
import Register, { RegisterSkeleton } from './register';

type Props = {};

const Page = (props: Props) => {
  return (
    <div>
      <Suspense fallback={<RegisterSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <RegisterSkeleton />
        <Register />
      </Suspense>
    </div>
  );
};

export default Page;

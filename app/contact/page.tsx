import PageHeader from '@/ui/pageHeader';
import { Suspense } from 'react';
import Contact, { ContactSkeleton } from './contact';
import Faq, { FaqSkeleton } from './faq';

const Page = () => {
  return (
    <>
      <Suspense fallback={<ContactSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <Contact />
      </Suspense>
      <Suspense fallback={<FaqSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <Faq />
      </Suspense>
    </>
  );
};

export default Page;

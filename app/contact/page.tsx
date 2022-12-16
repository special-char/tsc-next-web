import PageHeader from '@/ui/pageHeader';
import { Suspense } from 'react';
import Contact, { ContactSkeleton } from './contact';
import Faq from './faq';

const Page = () => {
  return (
    <>
      <Suspense fallback={<ContactSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <Contact />
      </Suspense>

      <Faq />
    </>
  );
};

export default Page;

import PageHeader from '@/ui/pageHeader';
import { Suspense } from 'react';
import Contact, { ContactSkeleton } from './contact';
import Faq, { FaqSkeleton } from './faq';

const Page = () => {
  return (
    <>
      <Contact />
      <Suspense fallback={<FaqSkeleton />}>
        <Faq />
      </Suspense>
    </>
  );
};

export default Page;

import { Suspense } from 'react';
import Contact from './contact';
import ContactInfo from './contactInfo';
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

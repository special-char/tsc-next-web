import React from 'react';
import '@/styles/faq.css';
import Accordian, { AccordianType } from '@/ui/Accordian';
import { getFaqData } from '@/lib/getFaqData';

export const FaqSkeleton = () => {
  return (
    <section id="Faq" className="faq animate-pulse">
      <div className="faq__section ">
        <div className="faq__header font-cursive">
          <h2 className="font-cursive">Frequently Asked Questions.</h2>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="faq__body">
          <div>
            {[1, 2, 3, 4].map((val) => (
              <details key={val} className="rounded-2xl font-cursive md:py-8">
                <summary>Do you offer special pricing for big teams?</summary>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Facere laborum quaerat quis repellat velit harum cupiditate
                  pariatur aspernatur aperiam suscipit.
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface Props {}

const Faq = async (props: Props) => {
  const faqData = await getFaqData();

  if (!faqData) {
    throw new Error(
      'something went wrong! try refreshing the page or please come back later.',
    );
  }

  const faqInfo = faqData.data.faqs.data.map<AccordianType>((item) => {
    return {
      id: item.id || '',
      title: item.attributes?.question || '',
      description: item.attributes?.answer || '',
    };
  });

  return (
    <section id="Faq" className="faq">
      <div className="faq__section ">
        <div className="faq__header">
          <h2>Frequently Asked Questions.</h2>
        </div>
        <div className="faq__body">
          <Accordian data={faqInfo} />
        </div>
      </div>
    </section>
  );
};

export default Faq;

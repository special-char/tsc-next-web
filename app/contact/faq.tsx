import React, { use } from 'react';
import '@/styles/faq.css';
import Accordian from '@/ui/Accordian';

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
              <details className="rounded-2xl font-cursive md:py-8">
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
const data = [
  {
    id: '1',
    title: 'Do you offer discounts for students?',
    description:
      'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor.',
  },
  {
    id: '2',
    title: 'Do you offer discounts for students?',
    description:
      'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor.',
  },
  {
    id: '3',
    title: 'Do you offer discounts for students?',
    description:
      'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor.',
  },
  {
    id: '4',
    title: 'Do you offer discounts for students?',
    description:
      'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor.',
  },
  {
    id: '5',
    title: 'Do you offer discounts for students?',
    description:
      'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor.',
  },
];

async function getFaqData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
      method: 'POST',
      body: JSON.stringify({
        query: `{
          faqs{
            data{
              id
              attributes{
                question
                answer
              }
            }
          }
        }`,
      }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    return await res.json();
  } catch (error) {}
}

const Faq = async (props: Props) => {
  const faqData = await getFaqData();

  if (!faqData) return null;

  const faqInfo = faqData?.data?.faqs?.data;
  return (
    <section id="Faq" className="faq">
      <div className="faq__section ">
        <div className="faq__header">
          <h2>Frequently Asked Questions.</h2>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="faq__body">
          <Accordian data={faqInfo} />
        </div>
      </div>
    </section>
  );
};

export default Faq;

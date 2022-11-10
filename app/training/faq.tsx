import React from 'react';
import '@/styles/faq.css';
import Link from 'next/link';

interface Props {}
const Data = [
  {
    id: '1',
    title: 'Do you offer discounts for students?',
    Description:
      'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor.',
  },
  {
    id: '1',
    title: 'Do you offer discounts for students?',
    Description:
      'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor.',
  },
  {
    id: '1',
    title: 'Do you offer discounts for students?',
    Description:
      'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor.',
  },
  {
    id: '1',
    title: 'Do you offer discounts for students?',
    Description:
      'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor.',
  },
  {
    id: '1',
    title: 'Do you offer discounts for students?',
    Description:
      'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor.',
  },
];

const Faq = (props: Props) => {
  return (
    <section id="Faq" className="faq">
      <div className="faq__section ">
        <div className="faq__page ">
          <h2>Frequently Asked Questions.</h2>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="faq__downPage">
          {Data.map((val) => (
            <div key={val.id}>
              <div className="faq__pageSection">
                <details className="faq__pages">
                  <summary className="faq__summary">{val.title}</summary>
                  <p className=" faq__p">{val.Description}</p>
                </details>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;

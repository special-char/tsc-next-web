import React from 'react';
import '@/styles/faq.css';
import PluseSvg from '../../public/icons/pluse.svg';

interface Props {}
const Data = [
  {
    id: '1',
    title: 'Do you offer discounts for students?',
    Description:
      'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor.',
  },
  {
    id: '2',
    title: 'Do you offer discounts for students?',
    Description:
      'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor.',
  },
  {
    id: '3',
    title: 'Do you offer discounts for students?',
    Description:
      'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor.',
  },
  {
    id: '4',
    title: 'Do you offer discounts for students?',
    Description:
      'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor.',
  },
  {
    id: '5',
    title: 'Do you offer discounts for students?',
    Description:
      'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor.',
  },
];

const Faq = (props: Props) => {
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
          {Data.map((val) => (
            <details className="accordion">
              <summary className="accordion__summary">{val.title}</summary>
              <p className="accordion__content">{val.Description}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;

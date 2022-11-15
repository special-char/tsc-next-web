import React from 'react';
import '@/styles/faq.css';
import PluseSvg from '../../public/icons/pluse.svg';
import Accordian from '@/ui/Accordian';

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
          <Accordian data={data} />
        </div>
      </div>
    </section>
  );
};

export default Faq;

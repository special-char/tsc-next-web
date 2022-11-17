import React from 'react';
import RightSvg from '@/public/icons/right.svg';
import '@/styles/ourWorks.css';

type Props = {};
const Data2 = [
  {
    id: 1,
    svg: <RightSvg />,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus egestas non consequat pellentesque iaculis nunc, est, mollis. Nulla.',
    title: 'Company Name',
    chip: '01',
  },
  {
    id: 2,
    svg: <RightSvg />,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus egestas non consequat pellentesque iaculis nunc, est, mollis. Nulla.',
    title: 'Company Name',
    chip: '02',
  },
  {
    id: 3,
    svg: <RightSvg />,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus egestas non consequat pellentesque iaculis nunc, est, mollis. Nulla.',
    title: 'Company Name',
    chip: '03',
  },
  {
    id: 4,
    svg: <RightSvg />,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus egestas non consequat pellentesque iaculis nunc, est, mollis. Nulla.',
    title: 'Company Name',
    chip: '04',
  },
];

const OurWorks = (props: Props) => {
  return (
    <section id="OurWorks" className="ourWorks">
      <div className="ourWorks__header">
        <h2 className="text-neutral-100">Our work values</h2>
        <p className="ourWorks__line">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
      <div className="ourWorks__secondPage ">
        {Data2.map((val) => (
          <div className="ourWorks__sections">
            <div className="ourWorks__chipLine">
              <div className="ourWorks__svg rounded-full">{val.svg}</div>
              <div className="ourWorks__chip chip chip--white">
                <span className="font-bold text-neutral-700">{val.chip}</span>
              </div>
            </div>
            <h3 className="ourWorks__h3 ">{val.title}</h3>
            <p className="ourWorks__p">{val.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurWorks;

import React from 'react';
import RightSvg from '@/public/icons/right.svg';
import '@/styles/ourWorks.css';
import PinkSeparatorArrow from '@/ui/PinkSeparatorArrow';
export const OurWorksSkeleton = () => {
  return (
    <section id="OurWorks" className="ourWorks">
      <div className="ourWorks__header animate-pulse">
        <h2 className="text-neutral-100">Our work values</h2>
        <p className="ourWorks__line">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
      <div className="ourWorks__content mx-auto lg:w-4/5">
        {[1, 2, 3, 4].map((val) => (
          <div className="ourWorks__sections">
            <div className="ourWorks__chipLine">
              <div className="ourWorks__svg rounded-full">
                <div></div>
              </div>
              <div className="ourWorks__chip chip chip--white font-bold text-neutral-700">
                <div></div>
              </div>
            </div>
            <h3 className="ourWorks__h3 ">Company Name</h3>
            <p className="ourWorks__p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus
              egestas non consequat pellentesque iaculis nunc, est, mollis.
              Nulla.
            </p>
          </div>
        ))}
      </div>
      <div>
        {' '}
        <div className="ourWorks__arrow">
          <PinkSeparatorArrow />
        </div>
      </div>
    </section>
  );
};
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
      <div className="ourWorks__content mx-auto lg:w-4/5">
        {Data2.map((val) => (
          <div className="ourWorks__sections">
            <div className="ourWorks__chipLine">
              <div className="ourWorks__svg rounded-full">{val.svg}</div>
              <div className="ourWorks__chip chip chip--white font-bold text-neutral-700">
                {val.chip}
              </div>
            </div>
            <h3 className="ourWorks__h3 ">{val.title}</h3>
            <p className="ourWorks__p">{val.description}</p>
          </div>
        ))}
      </div>
      <div>
        {' '}
        <div className="ourWorks__arrow">
          <PinkSeparatorArrow />
        </div>
      </div>
    </section>
  );
};

export default OurWorks;

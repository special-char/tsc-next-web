import React from 'react';
import CircleSymbol from '@/public/icons/CircleSymbol.svg';
import CheckSymbol from '@/public/icons/check-symbol.svg';
import ButonArrow from '@/public/icons/ButonArrow.svg';

const ProgramList = [
  {
    id: '1',
    title: 'Designers',
    checkIcon: <CheckSymbol />,
    circleIcon: <CircleSymbol />,
  },
  {
    id: '2',
    title: 'Developers',
    checkIcon: <CheckSymbol />,
    circleIcon: <CircleSymbol />,
  },
  {
    id: '3',
    title: 'Entrepreneurs',
    checkIcon: <CheckSymbol />,
    circleIcon: <CircleSymbol />,
  },
  {
    id: '4',
    title: 'Product Managers',
    checkIcon: <CheckSymbol />,
    circleIcon: <CircleSymbol />,
  },
  {
    id: '5',
    title: 'Freelancers',
    checkIcon: <CheckSymbol />,
    circleIcon: <CircleSymbol />,
  },
  {
    id: '6',
    title: 'Digital Marketers',
    checkIcon: <CheckSymbol />,
    circleIcon: <CircleSymbol />,
  },
  {
    id: '7',
    title: 'Small Businesses',
    checkIcon: <CheckSymbol />,
    circleIcon: <CircleSymbol />,
  },
  {
    id: '8',
    title: 'Students',
    checkIcon: <CheckSymbol />,
    circleIcon: <CircleSymbol />,
  },
];

const Program = () => {
  return (
    <section className="text-white flex flex-col py-24 lg:px-container ">
      <div>
        <div className="px-5 py-5 text-center">
          <h2 className="text-2xl font-bold md:text-5xl ">
            Who is this program for?
          </h2>
        </div>

        <div className="my-14 grid justify-center gap-6 px-6 md:grid-cols-2">
          {ProgramList.map((val) => (
            <ul key={val.id}>
              <div className="flex items-center gap-4  rounded-3xl bg-neutral-800 px-5 py-8">
                <div className="relative rounded-full bg-secondary1 fill-primary ">
                  {val.circleIcon}{' '}
                  <div className=" absolute right-1 top-2 rounded-full p-3 text-secondary3">
                    {val.checkIcon}
                  </div>
                </div>
                <li className="text-2xl font-semibold text-neutral-100 md:text-3xl">
                  {val.title}
                </li>
              </div>
            </ul>
          ))}
        </div>

        <div className="flex">
          <button className="mx-6 hidden flex-1 rounded-xl bg-gradient-to-l from-[#ff7373] to-[#491eb8] px-12 py-7 text-3xl font-semibold md:list-item ">
            <div className="flex justify-between">
              <div>Enroll Now</div>
              <div>
                <ButonArrow />
              </div>
            </div>
          </button>
        </div>

        <p className="px-3 text-center text-sm md:py-5">
          Register before midnight of May 4, 2023, to unlock these bonusses.
          This offer is never heard before.
        </p>
      </div>
    </section>
  );
};

export default Program;

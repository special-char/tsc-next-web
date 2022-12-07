import Link from 'next/link';
import React from 'react';

const ChipNavData = [
  {
    link: 'https://facebook.com',
    label: 'About',
  },
  {
    link: 'https://google.com',
    label: 'Results',
  },
  {
    link: 'https://youtube.com',
    label: 'Topics',
  },
  {
    link: 'https://github.com',
    label: 'Reviews',
  },
];

const ChipNavigation = () => {
  return (
    <div className=" flex gap-4 rounded-3xl bg-neutral-200 px-8 py-4 md:rounded-full">
      {ChipNavData.map((data) => (
        <Link href={data.link}>
          <div className="chip chip--white flex items-center gap-1 border border-neutral-400 px-6 py-2 duration-300 hover:bg-neutral-700 hover:text-secondary1">
            <div className="font-bold">
              <span className="">{data.label}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ChipNavigation;

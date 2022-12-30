import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

export const ChipNavigationSkeleton = () => {
  return (
    <div className="grid shrink-0 grid-cols-2 gap-4 rounded-3xl bg-neutral-200 px-8 py-4 md:grid-flow-col-dense md:rounded-full">
      {[1, 2, 3, 4].map((data) => (
        <div key={data} className="chip chip--white w-full font-cursive">
          Design
        </div>
      ))}
    </div>
  );
};

const ChipNavigation = ({ chipData }) => {
  return (
    <div className="grid shrink-0 grid-cols-2 gap-4 rounded-3xl bg-neutral-200 px-8 py-4 md:grid-flow-col-dense md:rounded-full">
      {chipData.map((data) => (
        <Link
          key={data?.name}
          href={`${data?.link || ''}`}
          className={clsx('chip w-full', {
            'chip--primary': !!data.selected,
            'chip--white': !data.selected,
          })}
        >
          {data?.name}
        </Link>
      ))}
    </div>
  );
};

export default ChipNavigation;

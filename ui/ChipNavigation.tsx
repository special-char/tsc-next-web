import clsx from 'clsx';

import React from 'react';
import Button from './Button';

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

type ChipNavigationType = {
  selectedCategory?: string;
};

const ChipNavigation = ({ chipData, selectedCategory }) => {
  return (
    <div className="grid shrink-0 grid-cols-2 gap-4 rounded-3xl bg-neutral-200 px-8 py-4 md:grid-flow-col-dense md:rounded-full">
      {chipData.map(({ ...data }, index) => (
        <Button
          key={index}
          as="button"
          className={clsx('chip w-full', {
            'chip--primary': data.children === selectedCategory,
            'chip--white': data.children !== selectedCategory,
          })}
          {...data}
        />
      ))}
    </div>
  );
};
export default ChipNavigation;

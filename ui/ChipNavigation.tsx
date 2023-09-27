import clsx from 'clsx';
import Link from 'next/link';

import React from 'react';
import Button from './Button';

export const ChipNavigationSkeleton = () => {
  return (
    <div className="grid shrink-0 gap-4 rounded-3xl bg-neutral-200 px-8 py-4 md:grid-flow-col-dense md:grid-cols-2 md:rounded-full lg:grid-cols-none">
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
  attributes: any;
};

const ChipNavigation = ({ chipData, selectedCategory, attributes }) => {
  return (
    <div className="grid shrink-0 justify-items-center gap-y-2 rounded-3xl bg-neutral-200 py-4 md:grid-cols-2 md:rounded-full lg:flex">
      {chipData.map(({ ...data }, index) => {
        if (
          !attributes ||
          (attributes && attributes[`${data['key']}`].length > 0)
        ) {
          return (
            <Button
              key={index}
              as="button"
              className={clsx('chip w-full', {
                'chip--primary': data.children === selectedCategory,
                'chip--white': data.children !== selectedCategory,
              })}
              {...data}
            />
          );
        }
        return null;
      })}
    </div>
  );
};
export default ChipNavigation;

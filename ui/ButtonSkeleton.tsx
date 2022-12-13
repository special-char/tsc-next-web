import Link from 'next/link';
import React from 'react';

type Props = {};

const ButtonSkeleton = (props: Props) => {
  return (
    <section className="px-container pt-10 sm:px-sm-container lg:px-container">
      <div className=" animate-pulse space-x-4">
        <div className=" flex flex-col items-baseline gap-4 space-y-6 py-1 lg:flex-row">
          <div className=" h-16 w-72 rounded-full bg-neutral-300 md:w-[100%] lg:w-[25%]"></div>
          <div className=" h-16 w-72 rounded-full bg-neutral-300 md:w-[100%] lg:w-[25%]"></div>
        </div>
      </div>
    </section>
  );
};

export default ButtonSkeleton;

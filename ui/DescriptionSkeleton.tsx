import React from 'react';

type Props = {};

const DescriptionSkeleton = (props: Props) => {
  return (
    <section className="px-container pb-10 sm:px-sm-container lg:px-container">
      <div className="grid animate-pulse space-x-4">
        <div className=" space-y-6 py-1">
          <div className=" h-2 w-60 items-center rounded-2xl bg-neutral-300 md:hidden"></div>
          <div className="w-66 h-2 rounded-2xl bg-neutral-300 lg:w-[40%]"></div>
          <div className="h-2 w-64 items-center rounded-2xl bg-neutral-300 md:w-72 lg:w-80"></div>
          <div className="h-2 w-24 items-center rounded-2xl bg-neutral-300 md:hidden lg:w-36"></div>
        </div>
      </div>
    </section>
  );
};

export default DescriptionSkeleton;

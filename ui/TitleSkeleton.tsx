import React from 'react';

type Props = {};

const TitleSkeleton = (props: Props) => {
  return (
    <section className="px-container py-10 sm:px-sm-container lg:px-container">
      <div className="grid animate-pulse justify-items-center space-x-4 lg:justify-items-start">
        <div className=" space-y-6 py-1">
          <div className="mx-4 h-3 w-40 items-center rounded-2xl bg-neutral-300 md:w-96 lg:mx-0"></div>
          <div className="h-3 w-48 rounded-2xl bg-neutral-300 md:hidden"></div>
          <div className="mx-4 h-3 w-40 items-center rounded-2xl bg-neutral-300 md:w-96  lg:mx-0"></div>
        </div>
      </div>
    </section>
  );
};

export default TitleSkeleton;

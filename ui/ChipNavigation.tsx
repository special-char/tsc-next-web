import Link from 'next/link';
import React from 'react';

const ChipNavigation = ({ chipData }) => {
  return (
    <div className=" grid gap-4 rounded-3xl bg-neutral-200 px-8 py-4 xs:grid-cols-2 md:grid-cols-4 md:rounded-full">
      {chipData.map((data) => (
        <Link href={data.link}>
          <div className="chip chip--white items-center border border-neutral-400 duration-300 hover:bg-neutral-700 hover:text-secondary1">
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

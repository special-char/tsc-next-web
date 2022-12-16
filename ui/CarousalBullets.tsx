import React from 'react';

type Props = {};

const CarousalBullets = (props: Props) => {
  return (
    <div className="relative mx-auto  w-full">
      <div className=" absolute -top-8 flex w-full items-center justify-center gap-3 ">
        <div
          // onClick={() => {
          //   console.log('clicked button');
          // }}
          className="h-3 w-3 rounded-full bg-neutral-400"
        ></div>
        <div className="h-3 w-3 rounded-full bg-neutral-400"></div>
        <div className="h-3 w-3 rounded-full bg-neutral-400"></div>
      </div>
    </div>
  );
};

export default CarousalBullets;

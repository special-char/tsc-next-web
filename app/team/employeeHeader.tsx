import React from 'react';
import Image from 'next/image';

type Props = {};

const EmployeeHeader = (props: Props) => {
  return (
    <section className="main relative flex h-auto items-center overflow-hidden py-16 lg:py-32">
      <div className="container mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-4">
        <div className="text-content mx-auto flex-1 text-center md:max-w-[535px] lg:text-left">
          <h1 className="font-semibold">Kathie Corl</h1>
          <button className="btn btn--primary btn-small max-w-xs">
            Download Resume
          </button>
        </div>
        <div className="relative aspect-h-image h-auto basis-[550px] translate-x-1 translate-y-1 rotate-0 skew-x-0 skew-y-0 scale-100 overflow-hidden rounded-3xl transition-all delay-1000 duration-1000">
          <Image
            src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff4698e5af4686c9948_image-3-profile-picture-teacher-education-x-template.jpg"
            alt="/"
            fill
          />
        </div>
      </div>
      <div className="absolute -top-96 -left-96 -z-10 h-[500px] w-[500px] rounded-full bg-secondary2 lg:-top-52 lg:-left-52"></div>
      <div className="absolute  top-3/4 -z-10 h-[300px] w-full bg-primary lg:top-0 lg:right-0 lg:h-[100%] lg:w-5/12"></div>
      <div className="absolute -bottom-80 -right-72 -z-10 h-[500px] w-[500px] rounded-full  bg-secondary3 lg:-bottom-80 lg:-right-20"></div>
    </section>
  );
};

export default EmployeeHeader;

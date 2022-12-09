import React from 'react';
import Image from 'next/image';

const IndividualEventBanner = () => {
  return (
    <section className="h-auto w-full bg-primary">
      <div className="h-full overflow-hidden">
        <div className="relative mx-auto flex max-w-7xl py-20 px-8">
          <div className="absolute flex h-44 w-44 rounded-full md:h-32 lg:h-44">
            <Image
              src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/6081bc900fef3e8a43d23b44_image-3-events-education-x-template-p-1600.jpeg"
              alt=""
              height={700}
              width={800}
              className="mb-2"
            />
          </div>
          <div className="animate-bounce-slow absolute -top-28 -right-20 z-10 h-[167px] w-[167px] rounded-full bg-secondary3 md:-top-52 md:-right-40 md:h-[300px] md:w-[300px] lg:-top-56 lg:-right-28 lg:h-[350px] lg:w-[350px]"></div>
          <div className="animate-bounce-slow absolute -left-20 -bottom-36 z-10 h-[167px] w-[167px] rounded-full bg-secondary2 md:-left-40 md:-bottom-48  md:h-[300px] md:w-[300px] lg:-bottom-72 lg:-left-40 lg:h-[350px] lg:w-[350px]"></div>
        </div>
      </div>
    </section>
  );
};

export default IndividualEventBanner;

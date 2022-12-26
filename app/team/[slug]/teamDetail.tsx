import React from 'react';
import '@/styles/teamDetail.css';
import UserCard from '@/ui/UserCard';

type Props = {};

const page = (props: Props) => {
  return (
    <div className="wrapper">
      <div className="wrapper__header overflow-hidden">
        <div className="lg:-left-22 absolute -top-28 -left-32 h-52 w-52 rounded-full bg-secondary3 md:-top-24 md:-left-32 md:h-64 md:w-64 lg:-top-96 lg:h-[573px] lg:w-[573px]"></div>
        <div className="absolute bottom-0 -right-44 h-72 w-72 rounded-full bg-secondary2 md:-bottom-2 md:-right-28 md:h-64 md:w-64 lg:-bottom-96 lg:-right-24 lg:h-[573px] lg:w-[573px]"></div>
      </div>
      <div className="wrapper__body">
        <UserCard />
        <div className="wrapper__body__content ">
          <h2 className="">About Kathie Crol</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            viverra praesent felis consequat pellentesque turpis et quisque
            platea. Eu, elit ut nunc ac mauris bibendum nulla placerat. Sagittis
            sit eu sit massa sapien, risus diam. In lorem eu sed euismod laoreet
            urna, feugiat et. Euismod sem purus rutrum in. Tortor varius a
            bibendum nisl et tellus. Aliquet elit senectus iaculis netus
            gravida.
          </p>
          <hr className="my-20" />
        </div>
      </div>
    </div>
  );
};

export default page;

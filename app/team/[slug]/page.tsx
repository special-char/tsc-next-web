import IndividualTeacher from 'app/training/individualteacher';
import React from 'react';
import '@/styles/teamDetail.css';

type Props = {};

const TeamDetails = (props: Props) => {
  return (
    <>
      <section className="teamDetail">
        <div className="bg-wrapper relative -z-20 h-[426px] overflow-hidden bg-neutral-700">
          <div className="shape-1 lg:-left-22  absolute -top-16 -left-24 -z-10 h-40 w-40 rounded-full bg-secondary3 md:-top-24 md:-left-32 md:h-64 md:w-64 lg:-top-96 lg:h-[573px] lg:w-[573px]"></div>
          <div className="shape-2 absolute bottom-0 -right-44 -z-10 h-72 w-72 rounded-full bg-secondary2 md:-bottom-2 md:-right-28 md:h-64 md:w-64 lg:-bottom-96 lg:-right-24 lg:h-[573px] lg:w-[573px]"></div>
        </div>
        <div className="details absolute top-40 md:top-72">
          <IndividualTeacher />
        </div>

        <div className="lg:pt- mx-0 px-container pt-52  pb-20 md:pt-40 lg:mx-44">
          <div className="flex ">
            <h2 className="text-3xl md:text-5xl">About</h2>
            <h2 className="pl-1 text-3xl md:text-5xl"> Kathie Corl</h2>
          </div>

          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            viverra praesent felis consequat pellentesque turpis et quisque
            platea. Eu, elit ut nunc ac mauris bibendum nulla placerat. Sagittis
            sit eu sit massa sapien, risus diam. In lorem eu sed euismod laoreet
            urna, feugiat et. Euismod sem purus rutrum in. Tortor varius a
            bibendum nisl et tellus. Aliquet elit senectus iaculis netus
            gravida.
          </p>
        </div>
      </section>
    </>
  );
};

export default TeamDetails;

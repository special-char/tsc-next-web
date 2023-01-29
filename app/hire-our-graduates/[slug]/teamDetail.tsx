import React from 'react';
import '@/styles/teamDetail.css';
import UserCard from '@/ui/UserCard';

type Props = {};

const page = ({ data }: Props) => {
  return (
    <div className="wrapper">
      <div className="wrapper__header overflow-hidden">
        <div className="lg:-left-22 absolute -top-28 -left-32 h-52 w-52 rounded-full bg-secondary3 md:-top-24 md:-left-32 md:h-64 md:w-64 lg:-top-96 lg:h-[573px] lg:w-[573px]"></div>
        <div className="absolute bottom-0 -right-44 h-72 w-72 rounded-full bg-secondary2 md:-bottom-2 md:-right-28 md:h-64 md:w-64 lg:-bottom-96 lg:-right-24 lg:h-[573px] lg:w-[573px]"></div>
      </div>
      <div className="wrapper__body">
        <UserCard data={data} />
        <div className="wrapper__body__content ">
          <h2 className="text-6xl">About {data.firstName}</h2>
          <p>
            {data.about} Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Consequuntur non ipsum a? Labore expedita libero nostrum
            dignissimos sint asperiores, quod consequatur laudantium iste
            impedit vitae doloremque, magni, delectus illo qui.
          </p>
          <hr className="my-20" />
        </div>
      </div>
    </div>
  );
};

export default page;

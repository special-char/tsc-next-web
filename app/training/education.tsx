import '@/styles/education.css';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import IndustrySvg from '@/public/icons/industry.svg';
import UpdateSvg from '@/public/icons/update.svg';
import CommunitySvg from '@/public/icons/community.svg';

type Props = {};
const educationData = [
  {
    id: 1,
    name: 'Industry expert teachers',
    description:
      'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor ',
    svg: <IndustrySvg />,
  },
  {
    id: 2,
    name: 'Up-to-date course content',
    description:
      'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor ',
    svg: <UpdateSvg />,
  },
  {
    id: 3,
    name: 'Students community',
    description:
      'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor ',
    svg: <CommunitySvg />,
  },
];
const Education = (props: Props) => {
  return (
    <section className="education ">
      <div className=" education__header">
        <h2>About Educatoion</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, et!</p>
      </div>
      <div className="education__body">
        <div className="education__image">
          <Image
            src="https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fHNvbGlkJTIwY29sb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
            fill
          />
        </div>
        <div className="education__content">
          {educationData.map((x) => (
            <>
              <figure className="w-16 overflow-hidden rounded-full">
                {x.svg}
              </figure>
              <div className="">
                <h3>{x.name}</h3>
                <p>{x.description}</p>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="education__header">
        <Link href="/" className="btn btn--secondary">
          About Education
        </Link>
      </div>
    </section>
  );
};

export default Education;

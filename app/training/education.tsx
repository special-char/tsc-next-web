import '@/styles/education.css';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

type Props = {};
const educationDetails = [
  {
    id: 1,
    name: 'Industry expert teachers',
    description:
      'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor ',
    img: 'https://assets.website-files.com/607de2d8e8911e32707a3efe/607eedf6d7623a851c7feabb_icon-1-home-about-education-x-template.svg',
  },
  {
    id: 2,
    name: 'Up-to-date course content',
    description:
      'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor ',
    img: 'https://assets.website-files.com/607de2d8e8911e32707a3efe/607eedf6fe6961a78b192f8d_icon-2-home-about-education-x-template.svg',
  },
  {
    id: 3,
    name: 'Students community',
    description:
      'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor ',
    img: 'https://assets.website-files.com/607de2d8e8911e32707a3efe/607eedf6965e388154b41812_icon-3-home-about-education-x-template.svg',
  },
];
const Education = (props: Props) => {
  return (
    <section className="education">
      <div className=" education__header">
        <h2>About Educatoion</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, et!</p>
      </div>
      <div className=" main grid grid-cols-1 place-items-center justify-center gap-16 md:mx-auto lg:grid-cols-2">
        <div className="education__image relative">
          <Image
            src="https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fHNvbGlkJTIwY29sb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
            fill
          />
        </div>
        <div className="education__content">
          {educationDetails.map((x) => (
            <>
              <Image
                src={x.img}
                alt="test"
                height={48}
                width={48}
                className="rounded-full"
              />
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

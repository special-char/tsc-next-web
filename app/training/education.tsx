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
    <section className="education justify-center">
      <div className="">
        <h2>About Educatoion</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, et!</p>
      </div>

      <div className="education__content justify-center overflow-hidden">
        <div className="education__image ">
          <Image
            src="https://tse3.mm.bing.net/th?id=OIP.u2M0ZzimPJTVuTAJjHe8qQHaJ4&pid=Api&P=0"
            alt=""
            height={500}
            width={500}
            className="rounded-lg"
          />
        </div>
        <div
          className="education__content__tile item-center lg:w-fullmd:gap-2
         justify-items-center md:mx-auto md:w-[70%] lg:gap-4"
        >
          {educationDetails.map((x) => (
            <>
              <Image
                src={x.img}
                alt="test"
                height={48}
                width={48}
                className="mr-4 rounded-full "
              />
              <div className="">
                <h3>{x.name}</h3>
                <p>{x.description}</p>
              </div>
            </>
          ))}
        </div>
      </div>

      <div className="education__header  mt-8 ">
        <Link href="/" className="btn btn--secondary">
          About Education
        </Link>
      </div>
    </section>
  );
};

export default Education;

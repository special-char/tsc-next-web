import React from 'react';
import Image from 'next/image';
import FacebookSvg from '@/public/icons/facebook.svg';
import InstagramSvg from '@/public/icons/instagram.svg';
import TwitterSvg from '@/public/icons/twitter.svg';

type Props = {};
const teacherData = [
  {
    id: 1,
    img: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff4698e5af4686c9948_image-3-profile-picture-teacher-education-x-template.jpg',
    title: 'Andrew lorem',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    svg: [
      { svg: <FacebookSvg /> },
      { svg: <InstagramSvg /> },
      { svg: <TwitterSvg /> },
    ],
  },

  {
    id: 2,
    img: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff4698e5af4686c9948_image-3-profile-picture-teacher-education-x-template.jpg',
    title: 'Andrew lorem',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    svg: [
      { svg: <FacebookSvg /> },
      { svg: <InstagramSvg /> },
      { svg: <TwitterSvg /> },
    ],
  },
  {
    id: 3,
    img: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff4698e5af4686c9948_image-3-profile-picture-teacher-education-x-template.jpg',
    title: 'Andrew lorem',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    svg: [
      { svg: <FacebookSvg /> },
      { svg: <InstagramSvg /> },
      { svg: <TwitterSvg /> },
    ],
  },
];

const Teacherscard = (props: Props) => {
  return (
    <section className="px-container">
      <div className="main">
        {teacherData.map((x) => (
          <a href="#" className="card">
            <Image src={x.img} alt="" height={500} width={500} />
            <div className="card__body">
              <h3 className="card__title">{x.title}</h3>
              <p className="card__desc">{x.desc}</p>
              <div className="card__actions">
                {x.svg.map((val) => (
                  <a
                    href="#"
                    className="rounded-full bg-neutral-500 duration-300 ease-in-out hover:bg-primary"
                  >
                    <span className="overflow-hidden rounded-full">
                      {val.svg}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Teacherscard;

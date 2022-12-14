import '@/styles/hireourgraduates.css';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/ui/Icon';

type Props = {};
const graduateData = [
  {
    id: 1,
    img: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff4698e5af4686c9948_image-3-profile-picture-teacher-education-x-template.jpg',
    title: 'Andrew lorem',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },

  {
    id: 2,
    img: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff4698e5af4686c9948_image-3-profile-picture-teacher-education-x-template.jpg',
    title: 'Andrew lorem',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 3,
    img: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff4698e5af4686c9948_image-3-profile-picture-teacher-education-x-template.jpg',
    title: 'Andrew lorem',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 4,
    img: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff4698e5af4686c9948_image-3-profile-picture-teacher-education-x-template.jpg',
    title: 'Andrew lorem',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 5,
    img: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff4698e5af4686c9948_image-3-profile-picture-teacher-education-x-template.jpg',
    title: 'Andrew lorem',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 6,
    img: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff4698e5af4686c9948_image-3-profile-picture-teacher-education-x-template.jpg',
    title: 'Andrew lorem',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
];

const icons = [
  {
    icon: 'twitter',
    link: 'https://www.twitter.com',
  },
  {
    icon: 'instagram',
    link: 'https://www.instagram.com',
  },
  {
    icon: 'linkedin',
    link: 'https://www.linkedin.com',
  },
];

const Hirecard = (props: Props) => {
  return (
    <section className="px-container py-20">
      <h1 className="mb-10 text-center">Hire Our Graduates</h1>
      <div className="hirecard">
        {graduateData.map((x) => (
          <div key={x.id} className="overflow-hidden rounded-3xl">
            <div className="hirecard__image">
              <Image src={x.img} alt="" fill />
            </div>
            <div className="p-6">
              <Link href={'#'} className="w-full !no-underline">
                <div className="hirecard__body">
                  <h4 className="hirecard__title">{x.title}</h4>
                </div>
                <p className="hirecard__desc">{x.desc}</p>
              </Link>
              <div className="flex w-full items-center justify-center gap-4 md:justify-start">
                {icons.map((icon) => (
                  <span className="max-w-max rounded-full bg-neutral-500 p-2 hover:bg-primary">
                    <Link key={icon.icon} href={icon.link} target="_blank">
                      <Icon name={icon.icon} height={20} width={20} />
                    </Link>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hirecard;

import '@/styles/hireourgraduates.css';
import React from 'react';
import Image from 'next/image';
import SocialIcon from '@/ui/SocialIcon';

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

const Hirecard = (props: Props) => {
  return (
    <section className="px-container py-20">
      <h1 className="mb-10 text-center">Hire Our Graduates</h1>
      <div className="hirecard">
        {graduateData.map((x) => (
          <a key={x.id} href="#" className="overflow-hidden rounded-3xl">
            <div className="hirecard__image">
              <Image src={x.img} alt="" className="" fill />
            </div>
            <div className="hirecard__body">
              <h3 className="hirecard__title">{x.title}</h3>
              <p className="hirecard__desc">{x.desc}</p>
              <SocialIcon />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Hirecard;

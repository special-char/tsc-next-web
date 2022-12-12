import '@/styles/hireourgraduates.css';
import React from 'react';
import Image from 'next/image';
import SocialIcon from '@/ui/SocialIcon';
import Link from 'next/link';

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
  // {
  //   icon: 'facebook',
  //   link: 'https://www.facebook.com',
  // },
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
  // {
  //   icon: 'youtube',
  //   link: 'https://www.youtube.com',
  // },
  // {
  //   icon: 'whatsapp',
  //   link: 'https://www.whatsapp.com',
  // },
];

const Hirecard = (props: Props) => {
  return (
    <section className="px-container py-20">
      <h1 className="mb-10 text-center">Hire Our Graduates</h1>
      <div className="hirecard">
        {graduateData.map((x) => (
          <div key={x.id} className="overflow-hidden rounded-3xl">
            <Link href={'#'}>
              <div className="hirecard__image">
                <Image src={x.img} alt="" className="" fill />
              </div>
              <div className="hirecard__body">
                <h3 className="hirecard__title">{x.title}</h3>
                <p className="hirecard__desc">{x.desc}</p>
              </div>
            </Link>
            <SocialIcon icons={icons} wrapperClass="mb-6 px-6" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hirecard;

import React from 'react';
import Image from 'next/image';
import Icon from '@/ui/Icon';
import Link from 'next/link';
import '@/styles/teacherscard.css';
import Button from '@/ui/Button';

type Props = {};
const teacherData = [
  {
    id: 1,
    img: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff4698e5af4686c9948_image-3-profile-picture-teacher-education-x-template.jpg',
    title: 'Andrew lorem',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    svg: [
      {
        icon: 'facebook',
        link: 'https://www.facebook.com',
      },
      {
        icon: 'twitter',
        link: 'https://www.twitter.com',
      },
      {
        icon: 'instagram',
        link: 'https://www.instagram.com',
      },
    ],
  },

  {
    id: 2,
    img: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff4698e5af4686c9948_image-3-profile-picture-teacher-education-x-template.jpg',
    title: 'Andrew lorem',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    svg: [
      {
        icon: 'facebook',
        link: 'https://www.facebook.com',
      },
      {
        icon: 'twitter',
        link: 'https://www.twitter.com',
      },
      {
        icon: 'instagram',
        link: 'https://www.instagram.com',
      },
    ],
  },
  {
    id: 3,
    img: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff4698e5af4686c9948_image-3-profile-picture-teacher-education-x-template.jpg',
    title: 'Andrew lorem',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    svg: [
      {
        icon: 'facebook',
        link: 'https://www.facebook.com',
      },
      {
        icon: 'twitter',
        link: 'https://www.twitter.com',
      },
      {
        icon: 'instagram',
        link: 'https://www.instagram.com',
      },
    ],
  },
  {
    id: 1,
    img: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff4698e5af4686c9948_image-3-profile-picture-teacher-education-x-template.jpg',
    title: 'Andrew lorem',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    svg: [
      {
        icon: 'facebook',
        link: 'https://www.facebook.com',
      },
      {
        icon: 'twitter',
        link: 'https://www.twitter.com',
      },
      {
        icon: 'instagram',
        link: 'https://www.instagram.com',
      },
    ],
  },

  {
    id: 2,
    img: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff4698e5af4686c9948_image-3-profile-picture-teacher-education-x-template.jpg',
    title: 'Andrew lorem',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    svg: [
      {
        icon: 'facebook',
        link: 'https://www.facebook.com',
      },
      {
        icon: 'twitter',
        link: 'https://www.twitter.com',
      },
      {
        icon: 'instagram',
        link: 'https://www.instagram.com',
      },
    ],
  },
  {
    id: 3,
    img: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff4698e5af4686c9948_image-3-profile-picture-teacher-education-x-template.jpg',
    title: 'Andrew lorem',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    svg: [
      {
        icon: 'facebook',
        link: 'https://www.facebook.com',
      },
      {
        icon: 'twitter',
        link: 'https://www.twitter.com',
      },
      {
        icon: 'instagram',
        link: 'https://www.instagram.com',
      },
    ],
  },
];

const TeachersCard = (props: Props) => {
  return (
    <section id="teacherscard" className="teacherscard">
      <div className="teacherscard__main">
        {teacherData.map((x) => (
          <a href="#" className="card" key={x.id}>
            <Image src={x.img} alt="" height={500} width={500} />
            <div className="card__body">
              <h3 className="card__title">{x.title}</h3>
              <p className="card__desc">{x.desc}</p>
              <div className="card__actions">
                {x.svg.map((icon) => (
                  <span
                    key={icon.icon}
                    className="rounded-full bg-neutral-500 p-2 hover:bg-primary"
                  >
                    <Button
                      as={Link}
                      key={icon.icon}
                      href={icon.link}
                      target="_blank"
                    >
                      <Icon name={icon.icon} height={20} width={20} />
                    </Button>
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default TeachersCard;

import '@/styles/ourteam.css';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/ui/Icon';

type Props = {};
const teamData = [
  {
    id: 1,
    img: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f20a1af14fe2620952c2a_image-6-profile-picture-teacher-education-x-template.jpg',
    title: 'John Carter',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },

  {
    id: 2,
    img: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f20647c667f1ed18d9a0c_image-5-profile-picture-small-teacher-education-x-template.jpg',
    title: 'Sophie Moore',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 3,
    img: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2022b68f3c3ed2106fd9_image-4-profile-picture-small-teacher-education-x-template.jpg',
    title: 'Matt Cannon',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 4,
    img: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff4698e5af4686c9948_image-3-profile-picture-teacher-education-x-template.jpg',
    title: 'Kathie Corl',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 5,
    img: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1f0b341677736af5b3c5_image-2-profile-picture-small-teacher-education-x-template.jpg',
    title: 'Mike Wareen',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 6,
    img: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1dfbcab2cc44b2615e6d_image-1-profile-picture-small-teacher-education-x-template.jpg',
    title: 'Andy Smith',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
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

const Teamcard = (props: Props) => {
  return (
    <section className="px-container py-20">
      <h1 className="text-center">Our Team</h1>
      <p className="mb-10 text-center text-lg">
        Presenting Academy, the tech school of the future. We <br /> teach you
        the right skills to be prepared for tomorrow.
      </p>
      <div className="ourteamcard">
        {teamData.map((x) => (
          <div key={x.id} className="overflow-hidden rounded-3xl">
            <div className="ourteamcard__image">
              <Image src={x.img} alt="" fill />
            </div>
            <div className="p-6">
              <Link href={'#'} className="w-full !no-underline">
                <div className="ourteamcard__body">
                  <h4 className="ourteamcard__title">{x.title}</h4>
                </div>
                <p className="ourteamcard__desc">{x.desc}</p>
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

export default Teamcard;

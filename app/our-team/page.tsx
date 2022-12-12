import '@/styles/ourteam.css';
import React from 'react';
import Image from 'next/image';
import SocialIcon from '@/ui/SocialIcon';

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
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
];

const Teamcard = (props: Props) => {
  return (
    <section className="px-container py-20">
      <h1 className="text-center">Our Team</h1>
      <p className="mb-10 text-center">
        Presenting Academy, the tech school of the future. We <br /> teach you
        the right skills to be prepared for tomorrow.
      </p>
      <div className="ourteamcard">
        {teamData.map((x) => (
          <a key={x.id} href="#" className="overflow-hidden rounded-3xl">
            <div className="ourteamcard__image">
              <Image src={x.img} alt="" className="" fill />
            </div>
            <div className="ourteamcard__body">
              <h3 className="ourteamcard__title">{x.title}</h3>
              <p className="ourteamcard__desc">{x.desc}</p>
              <SocialIcon
                icons={[
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
                  {
                    icon: 'linkedin',
                    link: 'https://www.linkedin.com',
                  },
                  {
                    icon: 'youtube',
                    link: 'https://www.youtube.com',
                  },
                  {
                    icon: 'whatsapp',
                    link: 'https://www.whatsapp.com',
                  },
                ]}
                wrapperClass="mb-6"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Teamcard;

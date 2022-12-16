import '@/styles/hireourgraduates.css';
import React from 'react';
import Card from '@/ui/Card';

type Props = {};
const graduateData = [
  {
    id: 1,
    image_url: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff4698e5af4686c9948_image-3-profile-picture-teacher-education-x-template.jpg',
    heading: 'Andrew lorem',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },

  {
    id: 2,
    image_url: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff4698e5af4686c9948_image-3-profile-picture-teacher-education-x-template.jpg',
    heading: 'Andrew lorem',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 3,
    image_url: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff4698e5af4686c9948_image-3-profile-picture-teacher-education-x-template.jpg',
    heading: 'Andrew lorem',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 4,
    image_url: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff4698e5af4686c9948_image-3-profile-picture-teacher-education-x-template.jpg',
    heading: 'Andrew lorem',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 5,
    image_url: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff4698e5af4686c9948_image-3-profile-picture-teacher-education-x-template.jpg',
    heading: 'Andrew lorem',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 6,
    image_url: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff4698e5af4686c9948_image-3-profile-picture-teacher-education-x-template.jpg',
    heading: 'Andrew lorem',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
];

// const icons = [
//   {
//     icon: 'twitter',
//     link: 'https://www.twitter.com',
//   },
//   {
//     icon: 'instagram',
//     link: 'https://www.instagram.com',
//   },
//   {
//     icon: 'linkedin',
//     link: 'https://www.linkedin.com',
//   },
// ];

const Hirecard = (props: Props) => {
  return (
    <section className="px-container py-20">
      <h1 className="mb-10 text-center">Hire Our Graduates</h1>
      <div className="hirecard">
        {graduateData.map((x) => (
          <>
            <Card data={x} />
          </>
        ))
        }
      </div >
    </section >
  );
};

export default Hirecard;

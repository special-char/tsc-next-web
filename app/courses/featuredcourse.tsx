import React from 'react';
import Image from 'next/image';
import '@/styles/featuredcourse.css';
import ActionBar from '@/ui/ActionBar';
import Card from '@/ui/Card';
type Props = {};

const data = {
  image_url: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-1080.jpeg',
  time: '7hr56m',
  rate: '$199.00 USD',
  heading: 'Graphic Design 101',
  description:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptatibus eius nesciunt cupiditate iure obcaecati a dicta nontemporibus quis deserunt.',
  avatar_info: {
    avatar_url: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-1080.jpeg',
    avatar_name: 'Fname Lname',
    avatar_designation: 'Developer'
  },
}
const Featuredcourse = (props: Props) => {
  return (
    <section id="featuredcourse" className="featuredcourse">
      <h2 className="featuredcourse__title">Featured Course</h2>
      <Card data={data} className={'card--hoz'} />
    </section>
  );
};

export default Featuredcourse;

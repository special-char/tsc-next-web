import React from 'react';
import Features from '../features';
import Image from 'next/image';
import ActionBar from '@/ui/ActionBar';
import Link from 'next/link';
import '@/styles/allcourses.css';

type Props = {};

const CardData = [
  {
    img: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-1080.jpeg',
    chip1: '7hr56m',
    chip2: '$199.00 USD',
    title: 'Graphic Design 101',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptatibus eius nesciunt cupiditate iure obcaecati a dicta nontemporibus quis deserunt.',
    avtar: <ActionBar />,
  },
  {
    img: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-1080.jpeg',
    chip1: '7hr56m',
    chip2: '$199.00 USD',
    title: 'Graphic Design 101',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptatibus eius nesciunt cupiditate iure obcaecati a dicta nontemporibus quis deserunt.',
    avtar: <ActionBar />,
  },
  {
    img: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-1080.jpeg',
    chip1: '7hr56m',
    chip2: '$199.00 USD',
    title: 'Graphic Design 101',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptatibus eius nesciunt cupiditate iure obcaecati a dicta nontemporibus quis deserunt.',
    avtar: <ActionBar />,
  },
  {
    img: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-1080.jpeg',
    chip1: '7hr56m',
    chip2: '$199.00 USD',
    title: 'Graphic Design 101',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptatibus eius nesciunt cupiditate iure obcaecati a dicta nontemporibus quis deserunt.',
    avtar: <ActionBar />,
  },
  {
    img: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-1080.jpeg',
    chip1: '7hr56m',
    chip2: '$199.00 USD',
    title: 'Graphic Design 101',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptatibus eius nesciunt cupiditate iure obcaecati a dicta nontemporibus quis deserunt.',
    avtar: <ActionBar />,
  },
  {
    img: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-1080.jpeg',
    chip1: '7hr56m',
    chip2: '$199.00 USD',
    title: 'Graphic Design 101',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptatibus eius nesciunt cupiditate iure obcaecati a dicta nontemporibus quis deserunt.',
    avtar: <ActionBar />,
  },
];

const AllCourses = (props: Props) => {
  return (
    <section id="allcourses">
      <Features />
      <div className="allcourses__content">
        {CardData.map((Data) => {
          return (
            <Link href="#" className="allcourses__card">
              <div className="allcourses__card__image">
                <Image src={Data.img} alt="image" fill />
                <div className="allcourses__card__chipset right-5 flex-col md:flex-row">
                  <span className="chip chip--secondary">{Data.chip1}</span>
                  <span className="chip chip--primary">{Data.chip2}</span>
                </div>
              </div>

              <div className="allcourses__card__body">
                <h2 className="allcourses__card__title">{Data.title}</h2>
                <p className="allcourses__card__desc">{Data.description}</p>
                <figure>{Data.avtar}</figure>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default AllCourses;

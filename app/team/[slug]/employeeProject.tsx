import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '@/styles/employeeProjects.css';
import ActionBar from '@/ui/ActionBar';
type Props = {};

const CardData = [
  {
    id: '1',
    img: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-1080.jpeg',
    chip1: '7hr56m',
    chip2: '$199.00 USD',
    title: 'Graphic Design 101',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptatibus eius nesciunt cupiditate iure obcaecati a dicta nontemporibus quis deserunt.',
    avtar: <ActionBar />,
  },
  {
    id: '2',
    img: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-1080.jpeg',
    chip1: '7hr56m',
    chip2: '$199.00 USD',
    title: 'Graphic Design 101',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptatibus eius nesciunt cupiditate iure obcaecati a dicta nontemporibus quis deserunt.',
    avtar: <ActionBar />,
  },
  {
    id: '3',
    img: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-1080.jpeg',
    chip1: '7hr56m',
    chip2: '$199.00 USD',
    title: 'Graphic Design 101',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptatibus eius nesciunt cupiditate iure obcaecati a dicta nontemporibus quis deserunt.',
    avtar: <ActionBar />,
  },
  {
    id: '4',
    img: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-1080.jpeg',
    chip1: '7hr56m',
    chip2: '$199.00 USD',
    title: 'Graphic Design 101',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptatibus eius nesciunt cupiditate iure obcaecati a dicta nontemporibus quis deserunt.',
    avtar: <ActionBar />,
  },
];

const EmployeeProject = (props: Props) => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects__content">
        {CardData.map((Data) => {
          return (
            <Link href="#" className="projects__card">
              <div className="projects__card__image">
                <Image src={Data.img} alt="image" fill />
                <div className="projects__card__chipset right-5 flex-col md:flex-row">
                  <span className="chip chip--secondary">{Data.chip1}</span>
                  <span className="chip chip--primary">{Data.chip2}</span>
                </div>
              </div>

              <div className="projects__card__body">
                <h2 className="projects__card__title">{Data.title}</h2>
                <p className="projects__card__desc">{Data.description}</p>
                <figure>{Data.avtar}</figure>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default EmployeeProject;
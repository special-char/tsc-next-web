import React from 'react';
import '@/styles/employeeProjects.css';
import ProjectCard from '@/ui/ProjectCard';
type Props = {};

const data = [
  {
    id: '1',
    image_url:
      'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-1080.jpeg',
    heading: 'Graphic Design 101',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptatibus eius nesciunt cupiditate iure obcaecati a dicta nontemporibus quis deserunt.',
  },

  {
    id: '2',
    image_url:
      'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-1080.jpeg',
    heading: 'Graphic Design 101',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptatibus eius nesciunt cupiditate iure obcaecati a dicta nontemporibus quis deserunt.',
  },
  {
    id: '3',
    image_url:
      'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-1080.jpeg',
    heading: 'Graphic Design 101',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptatibus eius nesciunt cupiditate iure obcaecati a dicta nontemporibus quis deserunt.',
  },
  {
    id: '4',
    image_url:
      'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-1080.jpeg',
    heading: 'Graphic Design 101',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptatibus eius nesciunt cupiditate iure obcaecati a dicta nontemporibus quis deserunt.',
  },
];

const EmployeeProject = ({ data }: Props) => {
  return (
    <section id="projects" className="projects">
      <h2 className="text-6xl">Projects</h2>
      <div className="projects__content">
        <ProjectCard data={data} />
      </div>
    </section>
  );
};

export default EmployeeProject;

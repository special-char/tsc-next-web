import React from 'react';
import '@/styles/featuredcourse.css';
import CourseCard from '@/ui/CourseCard';
import { getAllCoursesData } from '@/lib/getAllCourses';
type Props = {};

const data = {
  image_url:
    'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-1080.jpeg',
  time: '7hr56m',
  rate: '$199.00 USD',
  heading: 'Graphic Design 101',
  description:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptatibus eius nesciunt cupiditate iure obcaecati a dicta nontemporibus quis deserunt.',
  avatar_info: {
    avatar_url:
      'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-1080.jpeg',
    avatar_name: 'Fname Lname',
    avatar_designation: 'Developer',
  },
};
const Featuredcourse = async (props: Props) => {
  const coursesData = await getAllCoursesData();

  if (!coursesData) return null;

  const coursesInfo = coursesData.data.data.courses.data;

  return (
    <section id="featuredcourse" className="featuredcourse">
      <h2 className="featuredcourse__title">Featured Course</h2>
      <CourseCard course={coursesInfo[0]} isHorizontal />
    </section>
  );
};

export default Featuredcourse;

import Link from 'next/link';
import React from 'react';
import '@/styles/blogs.css';
import { getHomeBlogData } from '@/lib/getHomeBlog';
import { HomeBlog } from 'types/types';
import BlogCard from '@/ui/BlogCard';

type Props = {};

const blogData = [
  {
    id: 1,
    image_url:
      'https://images.unsplash.com/photo-1667988152364-52ab908cd3bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    heading: 'Lorem ipsum dolor sit amet, consectetur adip',
  },
  {
    id: 2,
    image_url:
      'https://images.unsplash.com/photo-1667988152364-52ab908cd3bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',

    heading: 'Lorem ipsum dolor sit amet, consectetur adip',
  },
  {
    id: 3,
    image_url:
      'https://images.unsplash.com/photo-1667988152364-52ab908cd3bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',

    heading: 'Lorem ipsum dolor sit amet, consectetur adip',
  },
];
const data = {
  isHorizontal: false,
  // chip_align: 'left',
  image_url:
    'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template.jpg',
  heading: 'Graphic Design 101',
  time: '8hr 12m',
  rate: '99.00',
  publishedAt: {
    month: 'August',
    day: '11',
    year: '2022',
  },
  // description:
  //   'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, corrupti, eius quae accusantium alias eaque facere voluptatum aliquid fugit, harum sed quia quos dolorum nam!',
  avatar_info: {
    avatar_url:
      'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template.jpg',
    avatar_name: 'Yagnesh Modh',
    avatar_Designation: 'Designer',
  },
};
const data1 = {
  isHorizontal: true,
  image_url:
    'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template.jpg',
  heading: 'This is a lorem ipsum dummy text used to fill the text voids',
};
const Blogs = async (props: Props) => {
  const homeBlogData = await getHomeBlogData();

  if (!homeBlogData) return null;

  const blogList = homeBlogData.data.blogs.data;

  const { title, button } = homeBlogData.data.homeBlog.data
    ?.attributes as HomeBlog;

  return (
    <>
      <section className="blogs">
        <div className="blogs__header">
          <h2 className="blogs__title">{title}</h2>
          <Link
            href={`${button?.url}`}
            className="btn btn--secondary lg:ml-auto"
          >
            {button?.text}
          </Link>
        </div>
        <div className="blogs__grid">
          {blogList.map((x, i) => (
            <BlogCard key={x.id} blog={x} index={i} />
          ))}
          {/* <Card data={data} />
          {blogData.map((blog) => {
            return <Card key={blog.id} className="card--hoz" data={blog} />;
          })} */}
        </div>
      </section>
    </>
  );
};

export default Blogs;

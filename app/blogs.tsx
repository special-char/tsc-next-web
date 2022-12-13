import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import '@/styles/blogs.css';
import Button from '@/ui/Button';
import Card from '@/ui/Card';

type Props = {};

const blogData = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1667988152364-52ab908cd3bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Beatae, corrupti!',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1667988152364-52ab908cd3bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Beatae, ',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1667988152364-52ab908cd3bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Beatae, corrupti!',
  },
];
const data = {
  isHorizontal: true,
  // chip_align: 'left',
  image_url:
    'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template.jpg',
  // date: 'September 1, 2022',
  heading: 'This is a lorem ipsum dummy text used to fill the text voids',
  // time: '8hr 12m',
  // rate: '199.00',
  // description:
  //   'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, corrupti, eius quae accusantium alias eaque facere voluptatum aliquid fugit, harum sed quia quos dolorum nam!',
  // avatar_info: {
  //   avatar_url:
  //     'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template.jpg',
  //   avatar_name: 'Yagnesh Modh',
  //   avatar_Designation: 'Designer',
  // },
};
const Blogs = (props: Props) => {
  return (
    <>
      <section className="blogs mb-12 md:mb-16 lg:mb-28">
        <h2 className="blogs__title">Resources & News</h2>
        <Link href="/blogs" className="btn btn--secondary lg:ml-auto">
          Browse Blog
        </Link>
        <Link href="#" className="card">
          <figure className="card__image">
            <Image
              src="https://images.unsplash.com/photo-1661347335413-e4ef4c97d625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
              alt="image"
              fill
            />
            <span className="chip chip--secondary absolute top-4 right-3">
              $199.00 USD
            </span>
          </figure>
          <div className="card__body">
            <time className="card__date">December 1,2022</time>
            <h2 className="card__title line-clamp-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </h2>
          </div>
        </Link>
        <div className="blogs__horizontal">
          {[1, 2, 3].map((blog) => {
            return <Card className={'classname'} data={data} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Blogs;

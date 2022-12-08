import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import '@/styles/blogs.css';

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
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Beatae, corrupti!',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1667988152364-52ab908cd3bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Beatae, corrupti!',
  },
];

const Blogs = (props: Props) => {
  return (
    <>
      <section className="blogs">
        <h2 className="blogs__title">Resources & News</h2>
        <Link href="/blogs" className="btn btn--secondary lg:ml-auto">
          Browse Blog
        </Link>
        <a href="#" className="card">
          <figure className="card__image">
            <Image
              src="https://images.unsplash.com/photo-1661347335413-e4ef4c97d625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
              alt="image"
              fill
            />
            <span className=" chip chip--secondary absolute top-4 right-3">
              $199.00 USD
            </span>
          </figure>
          <div className="card__body">
            <time className="card__date">December 1,2022</time>
            <h2 className="card__title line-clamp-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </h2>
          </div>
        </a>
        <div className="grid grid-rows-3 gap-8 ">
          {blogData.map((blog) => {
            return (
              <a href="#" key={blog.id} className="card card--hoz">
                <figure className="card__image">
                  <Image src={blog.url} alt="" fill />
                </figure>
                <div className="card__body">
                  <h4 className="card__title m-0 line-clamp-3 lg:text-xl">
                    {blog.description}
                  </h4>
                </div>
              </a>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Blogs;

import Link from 'next/link';
import React from 'react';
import '@/styles/blogs.css';
import { getHomeBlogData } from '@/lib/getHomeBlog';
import { HomeBlog } from 'types/types';
import BlogCard from '@/ui/BlogCard';

type Props = {};

export const BlogsSkeleton = () => {
  return (
    <section className="blogs animate-pulse">
      <div className="blogs__header">
        <h2 className="blogs__title font-cursive">Resources & News</h2>
        <Link
          href="/blogs"
          className="btn btn--secondary font-cursive lg:ml-auto"
        >
          Browse Blog
        </Link>
      </div>
      <div className="blogs__grid bg-neutral-200 font-cursive">
        <div className="card">
          <figure className="card__image lg:h-96 bg-neutral-300">
            <div></div>
          </figure>
          {(data?.date || data?.time) && (
            <div className="card__chipset">
              {data?.time && (
                <div className="chip chip--white flex gap-2">
                  {data.icon && <div></div>}
                  {data.time}
                </div>
              )}
              {data?.rate && (
                <div className="chip chip--primary flex gap-2">{`$ ${data?.rate} USD`}</div>
              )}
            </div>
          )}
          <div className="card__body">
            {data?.publishedAt && (
              <div className="card__date ">
                <div className="h-5 w-5 bg-neutral-300"></div>
                <time>{`${data.publishedAt.day} ${data.publishedAt.month}, ${data.publishedAt.year}`}</time>
              </div>
            )}
            <div className="classy">
              <div className="card__heading">
                <h3 className="card__title">{data?.heading}</h3>
              </div>
            </div>
            {data.avatar_info && (
              <div className="profile-info">
                <div className="card__avatar relative w-12 bg-neutral-300">
                  <div></div>
                </div>
                <div>
                  <div className="profile-info__name">
                    {data.avatar_info.avatar_name}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="blogs__horizontal overflow-hidden bg-neutral-200 font-cursive">
          {[1, 2, 3].map((blog) => {
            return (
                <div className="card classname card--hoz font-cursive">
                    <figure className="card__image md:h-[184px]  bg-neutral-300">
                      <div></div>
                    </figure>
                    <div className="card__body">
                      <div className='classy'>
                         <p className="card__desc font-cursive">Lorem ipsum dolor sit amet, consectetur adipisicing</p>}
                      </div>
                    </div>
                  </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

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

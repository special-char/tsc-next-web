import React from 'react';
import '@/styles/blogs.css';
import { getHomeBlogData } from '@/lib/getHomeBlog';
import BlogCard from '@/ui/BlogCard';
import Features from '@/ui/features';

type Props = {};

const AllBlogs = async () => {
  const homeBlogData = await getHomeBlogData();

  if (!homeBlogData) return null;

  const blogList = homeBlogData.data.blogs.data;

  return (
    <section className="items bg-neutral-200">
      <Features
        title="All Courses"
        chips={[
          {
            name: 'All',
            selected: true,
          },
          {
            name: 'Development',
          },
          {
            name: 'Design',
          },
          {
            name: 'Marketing',
          },
        ]}
      />
      <div className="items__item">
        {blogList.map((x, i) => (
          <BlogCard key={x.id} blog={x} />
        ))}
      </div>
    </section>
  );
};

export default AllBlogs;

import React from 'react';
import '@/styles/blogs.css';
import { getHomeBlogData } from '@/lib/getHomeBlog';
import { HomeBlog } from 'types/types';
import BlogCard from '@/ui/BlogCard';

type Props = {};

const Blog = async () => {
  const homeBlogData = await getHomeBlogData();

  if (!homeBlogData) return null;

  const blogList = homeBlogData.data.blogs.data;

  return (
    <>
      <section className="blogs">
        <div className="blogs__grid">
          {blogList.map((x, i) => (
            <BlogCard key={x.id} blog={x} index={i} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;

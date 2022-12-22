import React from 'react';
import '@/styles/blogs.css';
import { getHomeBlogData } from '@/lib/getHomeBlog';
import BlogCard from '@/ui/BlogCard';

type Props = {};

const FeatureBlogs = async () => {
  const homeBlogData = await getHomeBlogData();

  if (!homeBlogData) return null;

  const blogList = homeBlogData.data.blogs.data;

  return (
    <div className="blogs__grid">
      {blogList.map((x, i) => (
        <BlogCard key={x.id} blog={x} index={i} />
      ))}
    </div>
  );
};

export default FeatureBlogs;

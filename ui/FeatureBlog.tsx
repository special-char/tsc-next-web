import React from 'react';
import '@/styles/blogs.css';
import { getHomeBlogData } from '@/lib/getHomeBlog';
import BlogCard, { BlogCardSkeleton } from '@/ui/BlogCard';

type Props = {};

export const FeatureBlogsSkeleton = () => {
  return (
    <div className="blogs__grid">
      {[1, 2, 3, 4].map((x, i) => (
        <BlogCardSkeleton key={x} index={i} />
      ))}
    </div>
  );
};

const FeatureBlogs = async () => {
  const homeBlogData = await getHomeBlogData({
    filters: {},
    pagination: {
      limit: 4
    }
  });

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

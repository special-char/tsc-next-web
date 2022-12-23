import React from 'react';
import '@/styles/blogs.css';
import { getHomeBlogData } from '@/lib/getHomeBlog';
import BlogCard, { BlogCardSkeleton } from '@/ui/BlogCard';
import Features, { FeaturesSkeleton } from '@/ui/features';

type Props = {};

export const AllBlogsSkeleton = () => {
  return (
    <section className="items bg-neutral-100">
      <FeaturesSkeleton />
      <div className="items__item">
        {['1', '2', '3', '4'].map((x) => (
          <BlogCardSkeleton key={x} index={0} />
        ))}
      </div>
    </section>
  );
};

const AllBlogs = async () => {
  const homeBlogData = await getHomeBlogData();

  if (!homeBlogData) return null;

  const blogList = homeBlogData.data.blogs.data;

  return (
    <section className="items bg-neutral-100">
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

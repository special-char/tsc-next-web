'use client';

import React, { useState } from 'react';
import '@/styles/blogs.css';
import BlogCard, { BlogCardSkeleton } from '@/ui/BlogCard';
import Features, { FeaturesSkeleton } from '@/ui/features';
import { BlogEntity } from 'types/types';

type Props = {
  blogList: BlogEntity[];
};

type ChipsType = { children: string; onClick?: () => void };

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

const AllBlogs = ({ blogList }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const chips = blogList.reduce(
    (acc: ChipsType[], blog) => {
      const children = blog.attributes?.category?.data?.attributes?.title;

      if (children && !acc.some((x) => x.children === children)) {
        return [
          ...acc,
          {
            children,
            onClick: () => {
              setSelectedCategory(children || 'All');
            },
          },
        ];
      }
      return acc;
    },
    [
      {
        children: 'All',
        onClick: () => {
          setSelectedCategory('All');
        },
      },
    ] as ChipsType[],
  );

  return (
    <section className="items bg-neutral-100">
      <Features
        title="All Blogs"
        chips={chips}
        selectedCategory={selectedCategory}
      />

      <div className="items__item">
        {blogList.map((data) => {
          if (
            selectedCategory === 'All' ||
            data.attributes?.category?.data?.attributes?.title ===
              selectedCategory
          ) {
            return <BlogCard key={data.id} blog={data} />;
          }
          return null;
        })}
      </div>
    </section>
  );
};

export default AllBlogs;

import Link from 'next/link';
import React, { Suspense } from 'react';
import '@/styles/blogs.css';
import { getHomeBlogData } from '@/lib/getHomeBlog';
import { HomeBlog } from 'types/types';
import BlogCard from '@/ui/BlogCard';
import FeatureBlog from '@/ui/FeatureBlog';

type Props = {};

const Blogs = async (props: Props) => {
  const homeBlogData = await getHomeBlogData();

  if (!homeBlogData) return null;

  const blogList = homeBlogData.data.blogs.data;

  const { title, button } = homeBlogData.data.homeBlog.data
    ?.attributes as HomeBlog;

  return (
    <section className="blogs">
      <div className="blogs__header">
        <h2 className="blogs__title">{title}</h2>
        <Link href={`${button?.url}`} className="btn btn--secondary lg:ml-auto">
          {button?.text}
        </Link>
      </div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <FeatureBlog />
      </Suspense>
    </section>
  );
};

export default Blogs;

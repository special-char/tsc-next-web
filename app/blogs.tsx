import Link from 'next/link';
import React, { Suspense } from 'react';
import '@/styles/blogs.css';
import { getHomeBlogData } from '@/lib/getHomeBlog';
import { HomeBlog } from 'types/types';
import FeatureBlog, { FeatureBlogsSkeleton } from '@/ui/FeatureBlog';

type Props = {};

export const BlogsSkeleton = () => {
  return (
    <section className="blogs animate-pulse">
      <div className="blogs__header">
        <h2 className="blogs__title font-cursive">Resources & News</h2>
        <div className="btn btn--secondary font-cursive lg:ml-auto">
          Browse Blog
        </div>
      </div>
      <FeatureBlogsSkeleton />
    </section>
  );
};

const Blogs = async (props: Props) => {
  const homeBlogData = await getHomeBlogData();

  if (!homeBlogData) {
    throw new Error(
      'something went wrong! try refreshing the page or please come back later.',
    );
  }

  const { title, button } = homeBlogData.data.homeBlog.data
    ?.attributes as HomeBlog;

  return (
    <section className="blogs">
      <div className="blogs__header text-center lg:text-left ">
        <h2 className="blogs__title">{title}</h2>
        <Link
          href={`${button?.url}`}
          prefetch={false}
          className="btn btn--secondary lg:ml-auto"
        >
          {button?.text}
        </Link>
      </div>
      <Suspense fallback={<FeatureBlogsSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <FeatureBlog />
      </Suspense>
    </section>
  );
};

export default Blogs;

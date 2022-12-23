import '@/styles/blogs.css';
import BlogSubscribe, { BlogSubscribeSkeleton } from './blogSubscribe';
import PageHeader, { PageHeaderSkeleton } from '@/ui/pageHeader';
import { Suspense } from 'react';
import FeatureBlog, { FeatureBlogsSkeleton } from '@/ui/FeatureBlog';
import AllBlogs, { AllBlogsSkeleton } from './allBlogs';

export default async function Page() {
  return (
    <>
      <Suspense fallback={<PageHeaderSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <PageHeader
          pageName="blog-page"
          className="customClass"
          circleRight="bg-primary"
          circleLeft="bg-secondary3"
        />
      </Suspense>
      <section className="blogs">
        <Suspense fallback={<FeatureBlogsSkeleton />}>
          {/* @ts-expect-error Async Server Component */}
          <FeatureBlog />
        </Suspense>
      </section>

      <Suspense fallback={<BlogSubscribeSkeleton />}>
        <BlogSubscribe />
      </Suspense>

      <Suspense fallback={<AllBlogsSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <AllBlogs />
      </Suspense>
    </>
  );
}

import '@/styles/blogs.css';
import BlogSubscribe, { BlogSubscribeSkeleton } from './blogSubscribe';
import PageHeader from '@/ui/pageHeader';
import { Suspense } from 'react';
import FeatureBlog from '@/ui/FeatureBlog';
import AllBlogs from './allBlogs';

export default async function Page() {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        {/* @ts-expect-error Async Server Component */}
        <PageHeader
          pageName="blog-page"
          className="customClass"
          circleRight="bg-primary"
          circleLeft="bg-secondary3"
        />
      </Suspense>
      <section className="blogs">
        <Suspense fallback={<h1>heading...</h1>}>
          {/* @ts-expect-error Async Server Component */}
          <FeatureBlog />
        </Suspense>
      </section>

      <Suspense fallback={<BlogSubscribeSkeleton />}>
        <BlogSubscribe />
      </Suspense>

      <Suspense fallback={<h1>heading...</h1>}>
        {/* @ts-expect-error Async Server Component */}
        <AllBlogs />
      </Suspense>
    </>
  );
}

import '@/styles/blogs.css';
import BlogSubscribe, { BlogSubscribeSkeleton } from './blogSubscribe';
import PageHeader, { PageHeaderSkeleton } from '@/ui/pageHeader';
import { Suspense, use } from 'react';
import FeatureBlog, { FeatureBlogsSkeleton } from '@/ui/FeatureBlog';
import AllBlogs from './allBlogs';
import { notFound } from 'next/navigation';
import { getAllBlogData } from '@/lib/getAllBlogs'
import { Metadata } from 'next';
import { ComponentSharedSeo } from 'types/types';
import { getSEOData } from '@/lib/getSEO';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const metaData = await getSEOData('blogs');

  const seo = metaData?.data?.banner?.data?.attributes
    ?.seo as ComponentSharedSeo;

  const facebook = seo.metaSocial?.find((x) => x?.socialNetwork === 'Facebook');
  const twitter = seo.metaSocial?.find((x) => x?.socialNetwork === 'Twitter');

  let twitterMeta: Metadata = {};
  if (twitter) {
    twitterMeta = {
      twitter: {
        card: 'summary_large_image',
        title: twitter.title,
        description: twitter.description,
        siteId: '1467726470533754880',
        creator: '@nextjs',
        creatorId: '1467726470533754880',
        images: [twitter.image?.data?.attributes?.url || ''],
      },
    };
  }

  let facebookMeta: Metadata = {};
  if (facebook) {
    facebookMeta = {
      openGraph: {
        title: facebook.title,
        description: facebook.description,
        url: `https://thespecialcharacter.com/blogs`,
        siteName: 'The Special Character',
        images: [
          {
            url: facebook.image?.data?.attributes?.url || '',
            width: 800,
            height: 600,
          },
        ],
        locale: 'en-US',
        type: 'website',
      },
    };
  }

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,
    ...twitterMeta,
    ...facebookMeta,
  };
}

export default async () => {
  const homeBlogData = await getAllBlogData();

  if (!homeBlogData) {
    notFound();
  }

  const blogList = homeBlogData.data.blogs.data;

  return (
    <>
      <Suspense fallback={<PageHeaderSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <PageHeader
          pageName="blogs"
          className="customClass"
          circleRight="bg-primary"
          circleLeft="bg-secondary3"
        />
      </Suspense>
      {/* <section className="blogs">
        <Suspense fallback={<FeatureBlogsSkeleton />}>
          <FeatureBlog />
        </Suspense>
      </section> */}

      <AllBlogs blogList={blogList} />
      <Suspense fallback={<BlogSubscribeSkeleton />}>
        <BlogSubscribe />
      </Suspense>
    </>
  );
};

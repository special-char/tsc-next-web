import '@/styles/blogs.css';
import BlogSubscribe, {
  BlogSubscribeSkeleton,
} from 'app/training/blogSubscribe';
import Features, { FeaturesSkeleton } from 'app/courses/features';
import PageHeader from '@/ui/pageHeader';
import Card from '@/ui/Card';
import { Suspense } from 'react';
import Blog from 'app/training/blog';

export default async function Page() {
  const moreblogData = [
    {
      id: 1,
      image_url:
        'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f23fe55a94aa127fb47b2_image-6-blog-education-x-template-p-1600.jpeg',
      // icon: 'design',
      // iconname: 'Design',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Beatae, corrupti!',
      publishedAt: {
        day: 1,
        month: 'Jan',
        year: 2022,
      },
    },
    {
      id: 2,
      image_url:
        'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2623f3809724753fbc65_image-5-blog-education-x-template-p-1600.jpeg',
      // icon: 'microphone',
      // iconname: 'Marketing',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Beatae, ',
      publishedAt: {
        day: 1,
        month: 'Jan',
        year: 2022,
      },
    },
    {
      id: 3,
      image_url:
        'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f25e9ca7a36bf7469e0c8_image-4-blog-education-x-template-p-1600.jpeg',
      // icon: 'design',
      // iconname: 'Design',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Beatae, corrupti!',
      publishedAt: {
        day: 1,
        month: 'Jan',
        year: 2022,
      },
    },
    {
      id: 4,
      image_url:
        'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f256ca6388c4207dbfb28_image-3-blog-education-x-template-p-1600.jpeg',
      // icon: 'microphone',
      // iconname: 'Marketing',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Beatae, corrupti!',
      publishedAt: {
        day: 1,
        month: 'Jan',
        year: 2022,
      },
    },
    {
      id: 5,
      image_url:
        'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f24e214c1a2aef22ce32b_image-2-blog-education-x-template.jpg',
      // icon: 'developer',
      // iconname: 'Development',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Beatae, corrupti!',
      publishedAt: {
        day: 1,
        month: 'Jan',
        year: 2022,
      },
    },
    {
      id: 6,
      image_url:
        'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2405097a4b97dde4f6d2_image-1-blog-education-x-template-p-1600.jpeg',
      // icon: 'microphone',
      // iconname: 'Marketing',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Beatae, corrupti!',
      publishedAt: {
        day: 1,
        month: 'Jan',
        year: 2022,
      },
    },
  ];

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
      <Suspense fallback={<h1>heading...</h1>}>
        {/* @ts-expect-error Async Server Component */}
        <Blog />
      </Suspense>

      <Suspense fallback={<BlogSubscribeSkeleton />}>
        <BlogSubscribe />
      </Suspense>
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
    </>
  );
}

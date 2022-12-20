import Image from 'next/image';
import Link from 'next/link';
import '@/styles/blogs.css';
import BlogSubscribe, {
  BlogSubscribeSkeleton,
} from 'app/training/blogSubscribe';
import Icon from '@/ui/Icon';
import Features, { FeaturesSkeleton } from 'app/courses/features';
import PageHeader, { PageHeaderSkeleton } from '@/ui/pageHeader';
import Card from '@/ui/Card';
import { Suspense } from 'react';
import Blogs from 'app/blogs';

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
  const blogData = [
    {
      id: 1,
      image_url:
        'https://images.unsplash.com/photo-1667988152364-52ab908cd3bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
      heading: 'Lorem ipsum dolor sit amet, consectetur adip',
    },
    {
      id: 2,
      image_url:
        'https://images.unsplash.com/photo-1667988152364-52ab908cd3bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',

      heading: 'Lorem ipsum dolor sit amet, consectetur adip',
    },
    {
      id: 3,
      image_url:
        'https://images.unsplash.com/photo-1667988152364-52ab908cd3bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',

      heading: 'Lorem ipsum dolor sit amet, consectetur adip',
    },
  ];
  const data = {
    isHorizontal: false,
    // chip_align: 'left',
    image_url:
      'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template.jpg',
    heading: 'Graphic Design 101',
    time: '8hr 12m',
    rate: '99.00',
    publishedAt: {
      month: 'August',
      day: '11',
      year: '2022',
    },
    // description:
    //   'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, corrupti, eius quae accusantium alias eaque facere voluptatum aliquid fugit, harum sed quia quos dolorum nam!',
    avatar_info: {
      avatar_url:
        'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template.jpg',
      avatar_name: 'Yagnesh Modh',
      avatar_Designation: 'Designer',
    },
  };
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
      <Suspense fallback={<BlogSkeleton />}>
        <Blogs />
      </Suspense>

      <Suspense fallback={<BlogSubscribeSkeleton />}>
        <BlogSubscribe />
      </Suspense>
      <Suspense fallback={<FeaturesSkeleton />}>
        <Features />
      </Suspense>
      <section className="blogs__moreblogs">
        {moreblogData.map((moreblogs: any) => {
          return <Card data={moreblogs} />;
        })}
      </section>
    </>
  );
}

import ActionBar from '@/ui/ActionBar';
import Image from 'next/image';
import Link from 'next/link';
import React, { use } from 'react';
import md from 'markdown-it';
import Design from '@/public/icons/design.svg';
import '@/styles/blogPost.css';
import Button from '@/ui/Button';
import { getBlogDetails, getBlogSiteMap } from '@/lib/getBlogDetails';
import BlogCard from '@/ui/BlogCard';
import { Blog } from 'types/types';
import Script from 'next/script';

export type PageProps = {
  params: {
    slug: string;
  };
  children?: React.ReactNode;
};

export default async ({ params }: PageProps) => {
  const blogData = await getBlogDetails(params.slug);
  const [{ attributes }] = blogData.data.individualBlog.data;
  const latestPosts = blogData.data.latestPost.data;

  const { title, bannerImage, readTime, author, category, content, seo } =
    attributes as Blog;

  return (
    <div className="wrapper">
      {seo?.structuredData && (
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seo.structuredData),
          }}
        />
      )}
      <div className="wrapper__header"></div>

      <div className="wrapper__body">
        <div className="wrapper__body__image">
          <Image
            alt="It is the image of the blog post that you are viewing"
            src={`${bannerImage.data.attributes.url}?tr=ar-16-9`}
            fill
            sizes="(min-width: 1024px) 100vw,
            600px"
          />
        </div>
        <div className="wrapper__body__content">
          <h1 className=" pt-10 text-5xl md:pt-0 md:text-8xl lg:pt-0 lg:text-9xl">
            {title}
          </h1>
          <div className="wrapper__body__content__author-info">
            <ActionBar data={author} />
            <span className="about-blog">
              <Link href={'#'}>
                <span className="about-blog__accessory chip chip--white">
                  <Design className="chip__icon w-4" />
                  <span>{category?.data?.attributes?.title}</span>
                </span>
              </Link>
              <span className="chip chip--secondary text-xs">{`${readTime} m`}</span>
            </span>
          </div>
          <hr className="my-10" />

          <div>
            {content && (
              <div
                dangerouslySetInnerHTML={{ __html: md().render(content) }}
              ></div>
            )}
          </div>
        </div>
      </div>
      <div className="blogs">
        <div className="blogs__header">
          <h2 className="blogs__header__heading">Latest posts</h2>
          <Button
            as={Link}
            href={`#`}
            variant="secondary"
            className="max-w-max place-self-end uppercase"
          >
            all posts
          </Button>
        </div>
        <div className="blogs__latest-blogs">
          {latestPosts.map((x, i) => (
            <BlogCard key={x.id} blog={x} />
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideSitemap() {
  const blogData = await getBlogSiteMap();
  return blogData.data.blogs.data.map((x) => ({
    slug: x.attributes?.slug,
  }));
}

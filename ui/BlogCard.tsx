import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import format from 'date-fns/format';
import { Blog, BlogEntity, UploadFile } from 'types/types';
import '@/styles/blogCard.css';
import clsx from 'clsx';

type Props = {
  blog: BlogEntity;
  index?: number;
};

export const BlogCardSkeleton = ({ index }: { index: number }) => {
  return (
    <Link
      href="#"
      className={clsx('blog_card animate-pulse', {
        'blog_card--hoz': index > 0,
      })}
    >
      <figure className="blog_card__img bg-neutral-300">
        {index === 0 && (
          <div className="blog_card__chips">
            <div className="chip chip--white font-cursive">Design</div>
          </div>
        )}
      </figure>
      <div className="blog_card__body">
        {index === 0 && (
          <time className="blog_card__time font-cursive">
            September 1, 2022
          </time>
        )}
        <h3 className="blog_card__title font-cursive">
          How to design a simple, yet unique and memorable brand identity
        </h3>
      </div>
    </Link>
  );
};

const BlogCard = ({ blog, index = 0 }: Props) => {
  const { title, bannerImage, updatedAt, category } = blog.attributes as Blog;
  const { url, alternativeText } = bannerImage?.data?.attributes as UploadFile;

  const categoryInfo = category?.data?.attributes;

  return (
    <Link
      href="#"
      className={clsx('blog_card', {
        'blog_card--hoz': index > 0,
      })}
    >
      <figure className="blog_card__img">
        {index > 0 ? (
          <Image
            src={`${url}?tr=ar-16-9`}
            alt={`${alternativeText}`}
            fill
            sizes="(max-width: 640px) 100vw,
                   (max-width: 1024px) 235px,
                   284px"
          />
        ) : (
          <Image
            src={`${url}?tr=ar-16-9`}
            alt={`${alternativeText}`}
            fill
            sizes="(max-width: 640px) 100vw,
                   (max-width: 1024px) 518px,
                   640px"
          />
        )}
        {index === 0 && (
          <div className="blog_card__chips">
            <div className="chip chip--white">{categoryInfo?.title}</div>
          </div>
        )}
      </figure>
      <div className="blog_card__body">
        {index === 0 && (
          <time className="blog_card__time">
            {format(new Date(updatedAt), 'MMMM d, yyyy')}
          </time>
        )}
        <h3 className="blog_card__title">{title}</h3>
      </div>
    </Link>
  );
};

export default BlogCard;

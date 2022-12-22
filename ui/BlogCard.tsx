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
        <Image src={url} alt={`${alternativeText}`} fill />
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

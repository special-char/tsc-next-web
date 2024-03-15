import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Category, CategoryEntity, UploadFile } from 'types/types';
import '@/styles/categoryCard.css';

type Props = {
  category: CategoryEntity;
};

export const CategoryCardSkeleton = () => {
  return (
    <div className="category_card animate-pulse">
      <figure className="category_card__img bg-neutral-300">
        <div></div>
        <div className="category_card__chips">
          <div className="chip chip--white font-cursive">1 courses</div>
        </div>
      </figure>
      <div className="category_card__body">
        <h3 className="category_card__title font-cursive">Moblie</h3>
        <p className="category_card__desc font-cursive">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          molestiae nostrum asperiores praesentium, repellendus aliquid mollitia
          quo dolorem quisquam necessitatibus eius natus, unde magni quia velit
          atque harum. Dolorum, fugit!
        </p>
      </div>
    </div>
  );
};

const CategoryCard = ({ category }: Props) => {
  console.log({ category: category.attributes?.slug });

  const { title, description, icon, courses, slug } =
    category.attributes as Category;

  const { url, alternativeText } = icon?.data?.attributes as UploadFile;

  const coursesLength = courses?.data.length || 0;

  return (
    <Link
      style={{
        maxWidth: '24rem',
      }}
      href={`/courses/category/${slug}`}
      className="category_card"
    >
      <figure className="category_card__img">
        <Image
          src={`${url}?tr=ar-4-3`}
          alt={`${alternativeText || 'category card image'}`}
          title={`${alternativeText || 'category card image'}`}
          fill
          sizes="(max-width: 640px) 100vw,384px"
        />
        <div className="category_card__chips">
          <div className="chip chip--white">{`${coursesLength} ${
            coursesLength > 1 ? 'Courses' : 'Course'
          }`}</div>
        </div>
      </figure>
      <div className="category_card__body">
        <h3 className="category_card__title">{title}</h3>
        <p className="category_card__desc">{description}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;

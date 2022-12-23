import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Category, CategoryEntity, UploadFile } from 'types/types';
import '@/styles/categoryCard.css';

type Props = {
  category: CategoryEntity;
};

const CategoryCard = ({ category }: Props) => {
  const { title, description, icon } = category.attributes as Category;
  const { url, alternativeText } = icon?.data?.attributes as UploadFile;

  return (
    <Link
      style={{
        maxWidth: '24rem',
      }}
      href="#"
      className="category_card"
    >
      <figure className="category_card__img">
        <Image src={url} alt={`${alternativeText}`} fill />
        <div className="category_card__chips">
          <div className="chip chip--white">24 days</div>
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

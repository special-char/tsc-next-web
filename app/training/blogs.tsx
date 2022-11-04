import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {};

const Blogs = (props: Props) => {
  return (
    <>
      <section className="blogs">
        <h2 className="blogs__title">Resources & News</h2>
        <Link href="/blogs" className="blogs__btn">
          Browse Blog
        </Link>
        <div className="card">
          <figure className="card__image">
            <Image
              src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f23fe55a94aa127fb47b2_image-6-blog-education-x-template.jpg"
              alt="title"
              fill
            />
          </figure>
          <div className="card__body">
            <h3 className="card__title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ut.
            </h3>
          </div>
        </div>
        <div className="card">
          <figure></figure>
        </div>
        <div className="card">
          <figure></figure>
        </div>
        <div className="card">
          <figure></figure>
        </div>
      </section>
    </>
  );
};

export default Blogs;

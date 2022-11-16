import '@/styles/found.css';
import React from 'react';
import Link from 'next/link';

type Props = {};

const Found = (props: Props) => {
  return (
    <section className="found">
      <div className="found__content">
        <p>Page not found</p>
        <h2>The page you are looking for doesn't exist or has been moved.</h2>
        <div className="found__btn">
          <Link href="/" className="btn btn--primary">
            EXPLORE COURSES
          </Link>
          <Link href="/" className="btn btn--secondary">
            GO HOME
          </Link>
        </div>
      </div>
      <div>
        <h2 className="text-9xl">404 </h2>
      </div>
    </section>
  );
};

export default Found;

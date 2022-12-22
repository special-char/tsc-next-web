import '@/styles/found.css';
import React from 'react';
import Link from 'next/link';
import Button from '@/ui/Button';

type Props = {};

const NotFound = (props: Props) => {
  return (
    <section className="found">
      <div className="found__content">
        <p className="text-2xl">Page not found</p>
        <h2 className="font-semibold">
          The page you are looking for doesn't exist or has been moved.
        </h2>
        <div className="found__btn">
          <Button as={Link} href="/" variant="primary">
            EXPLORE COURSES
          </Button>
          <Button as={Link} href="/" variant="secondary">
            GO HOME
          </Button>
        </div>
      </div>
      <h2 className="found__tile">404</h2>
    </section>
  );
};

export default NotFound;

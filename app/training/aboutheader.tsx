import '@/styles/about.css';
import React from 'react';
import Link from 'next/link';
import Button from '@/ui/Button';
type Props = {};

const Aboutheader = (props: Props) => {
  return (
    <section className="about">
      <div>
        <div className="grid items-center lg:grid-cols-2">
          <h1>The big mission behind Educationic</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
            pulvinar ac molestie cursus malesuada enim. Massa nec tellus, elit
            tellus, erat faucibus aenean. Nunc, lacus, dignissim nec sit.
          </p>
        </div>
        <div className="education__header justify-items-center">
          <Button as={Link} href="/" variant="primary">
            JOIN OUR TEAM
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Aboutheader;

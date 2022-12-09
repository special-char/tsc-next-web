import React from 'react';
import '@/styles/features.css';
import Link from 'next/link';
type Props = {};

const Features = (props: Props) => {
  return (
    <section id="features" className="features">
      <h2 className="features__title">All Courses</h2>
      <div className="features__body">
        <button className="chip chip--white features__chip bg-primary text-neutral-100 ">
          All
        </button>
        <button className="chip chip--white features__chip">Development</button>
        <button className="chip chip--white features__chip">Design</button>
        <button className="chip chip--white features__chip">Marketing</button>
      </div>
    </section>
  );
};

export default Features;

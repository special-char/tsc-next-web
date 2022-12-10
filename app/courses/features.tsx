import React from 'react';
import '@/styles/features.css';
type Props = {};

const Features = (props: Props) => {
  return (
    <section id="features" className="features">
      <h2 className="features__title">All Courses</h2>
      <div className="features__body">
        <span className="chip chip--primary">All</span>
        <span className="chip chip--white">Development</span>
        <span className="chip chip--white">Design</span>
        <span className="chip chip--white">Marketing</span>
      </div>
    </section>
  );
};

export default Features;

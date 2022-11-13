import React from 'react';
import '@/styles/features.css';
type Props = {};

const features = (props: Props) => {
  return (
    <section id="features" className="features">
      <h2 className="features__title">All Courses</h2>
      <div className="features__body">
        <span className="chip chip--primary">All</span>
        <span className="chip chip--secondary">Development</span>
        <span className="chip chip--secondary">Design</span>
        <span className="chip chip--secondary">Marketing</span>
      </div>
    </section>
  );
};

export default features;

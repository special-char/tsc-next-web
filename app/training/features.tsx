import React from 'react';
import '@/styles/features.css';
type Props = {};

const features = (props: Props) => {
  return (
    <section id="features" className="features">
      <h2 className="features__title">All Courses</h2>
      <div className="features__body">
        <button className="btn btn--secondary btn--small">All</button>
        <button className="btn btn--secondary btn--small">Development</button>
        <button className="btn btn--secondary btn--small">Design</button>
        <button className="btn btn--secondary btn--small">Marketing</button>
      </div>
    </section>
  );
};

export default features;

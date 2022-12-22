'use client';

import React from 'react';
import '@/styles/features.css';
import clsx from 'clsx';
type Props = {
  title: string;
  chips: {
    name: string;
    selected?: boolean;
  }[];
};

export const FeaturesSkeleton = () => {
  return (
    <section id="features" className="features animate-pulse">
      <h2 className="features__title font-cursive">All Courses</h2>
      <div className="features__body font-cursive">
        <button className="chip chip--white features__chip bg-primary font-cursive text-neutral-100">
          All
        </button>
        <button className="chip chip--white features__chip font-cursive">
          Development
        </button>
        <button className="chip chip--white features__chip font-cursive">
          Design
        </button>
        <button className="chip chip--white features__chip font-cursive">
          Marketing
        </button>
      </div>
    </section>
  );
};
const Features = ({ title, chips }: Props) => {
  return (
    <section id="features" className="features">
      <h2 className="features__title">{title}</h2>
      <div className="features__body">
        {chips.map((x) => (
          <button
            className={clsx('chip chip--white features__chip ', {
              'bg-primary text-neutral-100': x.selected,
            })}
            onClick={() => {}}
          >
            {x.name}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Features;

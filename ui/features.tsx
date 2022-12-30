'use client';

import React from 'react';
import '@/styles/features.css';
import clsx from 'clsx';
import ChipNavigation from './ChipNavigation';
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
      <div className="font-cursive">
        <ChipNavigation
          chipData={[
            {
              name: 'All',
              link: '#',
              selected: true,
            },
            {
              name: 'Development',
              link: '#',
            },
            {
              name: 'Design',
              link: '#',
            },
            {
              name: 'Marketing',
              link: '#',
            },
          ]}
        />
      </div>
    </section>
  );
};

const Features = ({ title, chips }: Props) => {
  return (
    <section id="features" className="features">
      <h2 className="features__title">{title}</h2>
      <ChipNavigation chipData={chips} />
    </section>
  );
};

export default Features;

'use client';

import React from 'react';
import '@/styles/features.css';
import clsx from 'clsx';
import ChipNavigation from './ChipNavigation';
import Link from 'next/link';
type Props = {
  title: string;
  chips: {
    children: string;
    selected?: boolean;
  }[];
  selectedCategory?: string;
};

export const FeaturesSkeleton = () => {
  return (
    <section id="features" className="features animate-pulse">
      <h2 className="features__title font-cursive">All Courses</h2>
      <div className="features__body font-cursive">
        <ChipNavigation
          chipData={[
            {
              href: '#about',
              children: 'About',
              as: Link
            },
            {
              href: '#topic',
              children: 'Results',
              as: Link
            },
            {
              href: '#result',
              children: 'Topics',
              as: Link
            },
            {
              href: '#review',
              children: 'Reviews',
              as: Link
            },
          ]}
        />
      </div>
    </section>
  );
};

const Features = ({ title, chips, selectedCategory }: Props) => {
  return (
    <section id="features" className="features">
      <h2 className="features__title">{title}</h2>
      <ChipNavigation chipData={chips} selectedCategory={selectedCategory} />
    </section>
  );
};

export default Features;

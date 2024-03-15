'use client';

import React, { useState } from 'react';
import Features from '../../ui/features';
import CourseCard from '@/ui/CourseCard';
import { CourseEntity } from 'types/types';
type Props = {
  courses: CourseEntity[];
  category?: string;
};

type ChipsType = { children: string; onClick?: () => void; slug?: string };

const AllCourses = ({ courses, category }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState(category || 'All');

  const chips = courses.reduce(
    (acc: ChipsType[], course) => {
      const children = course.attributes?.category?.data?.attributes?.title;
      const slug = course.attributes?.category?.data?.attributes?.slug;

      if (slug && !acc.some((x) => x.slug === slug)) {
        return [
          ...acc,
          {
            children,
            onClick: () => {
              setSelectedCategory(slug || 'all');
            },
            slug,
          },
        ];
      }
      return acc;
    },
    [
      {
        children: 'all',
        onClick: () => {
          setSelectedCategory('all');
        },
        slug: 'all',
      },
    ] as ChipsType[],
  );

  return (
    <section className="items bg-neutral-200">
      <Features
        title="All Courses"
        chips={chips}
        selectedCategory={selectedCategory}
      />
      {!chips.some((x) => x.slug === selectedCategory) && (
        <div className="mx-auto mt-5 max-w-max rounded-lg bg-primary p-5 text-neutral-100">
          Selected course category is not availabe
        </div>
      )}

      {chips.some((x) => x.slug === selectedCategory) && (
        <div className="items__item">
          {courses.map((data) => {
            if (
              selectedCategory === 'all' ||
              data.attributes?.category?.data?.attributes?.slug ===
                selectedCategory
            ) {
              return <CourseCard key={data.id} course={data} />;
            }
            return null;
          })}
        </div>
      )}
    </section>
  );
};

export default AllCourses;

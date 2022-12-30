'use client';

import React, { useState } from 'react';
import Features from '../../ui/features';
import CourseCard from '@/ui/CourseCard';
import { CourseEntity } from 'types/types';

type Props = {
  courses: CourseEntity[];
  category?: string;
};

type ChipsType = { children: string; onClick?: () => void };

const AllCourses = ({ courses, category }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState(category || 'All');

  const chips = courses.reduce(
    (acc: ChipsType[], course) => {
      const children = course.attributes?.category?.data?.attributes?.title;

      if (children && !acc.some((x) => x.children === children)) {
        return [
          ...acc,
          {
            children,
            onClick: () => {
              setSelectedCategory(children || 'All');
            },
          },
        ];
      }
      return acc;
    },
    [
      {
        children: 'All',
        onClick: () => {
          setSelectedCategory('All');
        },
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
      {!chips.some((x) => x.children === selectedCategory) && (
        <div className="mx-auto mt-5 max-w-max rounded-lg bg-primary p-5 text-neutral-100">
          Selected course category is not availabe
        </div>
      )}

      {chips.some((x) => x.children === selectedCategory) && (
        <div className="items__item">
          {courses.map((data) => {
            if (
              selectedCategory === 'All' ||
              data.attributes?.category?.data?.attributes?.title ===
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

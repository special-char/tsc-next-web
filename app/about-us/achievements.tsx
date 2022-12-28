import { getAboutNumberData } from '@/lib/getAboutNumber';
import '@/styles/achieve.css';
import React from 'react';
import { AboutNumber } from 'types/types';
export const AchievementsSkeleton = () => {
  return (
    <section className="achieve animate-pulse">
      <h2 className="mx-0 mb-10 text-center font-cursive  md:mb-8 lg:mx-72">
        A few numbers that we are proud of
      </h2>
      <div className="achieve__content">
        {[1, 2, 3].map((x) => (
          <div className="overflow-hidden">
            <h1 className="font-cursive text-secondary3">10,000+</h1>
            <h3 className="font-cursive">Students</h3>
            <p className="font-cursive">
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
type Props = {};
const achievedetails = [
  {
    id: 1,
    number: 10000,
    title: 'Students',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  },
  {
    id: 2,
    number: 5000,
    title: 'Five-star reviews',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  },
  {
    id: 3,
    number: 75000,
    title: 'Students community',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  },
];

const Achievements = async (props: Props) => {
  const achievementsData = await getAboutNumberData();

  if (!achievementsData) return null;

  const { title, numbers } = achievementsData.data.aboutNumber.data
    ?.attributes as AboutNumber;

  return (
    <section className="achieve">
      <h2 className="mx-0 mb-4 text-center md:mb-8 lg:mx-72">{title}</h2>
      <div className="achieve__content">
        {numbers?.map((x) => (
          <div className="overflow-hidden">
            <h1 className="text-secondary3">
              {new Intl.NumberFormat('en-IN', {
                maximumSignificantDigits: 3,
              }).format(x?.number || 0)}
              +
            </h1>
            <h3>{x?.title}</h3>
            <p>{x?.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;

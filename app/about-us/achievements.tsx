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
          <div className="overflow-hidden" key={x}>
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

const Achievements = async (props: Props) => {
  const achievementsData = await getAboutNumberData();

  if (!achievementsData) {
    throw new Error(
      'something went wrong! try refreshing the page or please come back later.',
    );
  }

  const { title, numbers } = achievementsData.data.aboutNumber.data
    ?.attributes as AboutNumber;

  return (
    <section className="achieve">
      <h2 className="mx-0  text-center  md:mb-8 lg:mx-72">{title}</h2>
      <div className="achieve__content">
        {numbers?.map((x) => (
          <div className="overflow-hidden" key={x?.id}>
            <h2 className="text-secondary3">
              {new Intl.NumberFormat('en-IN', {
                maximumSignificantDigits: 3,
              }).format(x?.number || 0)}
              +
            </h2>
            <h3>{x?.title}</h3>
            <p>{x?.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;

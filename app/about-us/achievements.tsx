import '@/styles/achieve.css';
import React from 'react';
export const AchievementsSkeleton = () => {
  return (
    <section className="achieve">
      <h2 className="mx-0 mb-10 text-center font-cursive text-6xl md:mb-8 lg:mx-72">
        A few numbers that we are proud of
      </h2>
      <div className="achieve__content">
        {[1, 2, 3].map((x) => (
          <div className="overflow-hidden">
            <h1 className="font-cursive text-secondary3">
              {new Intl.NumberFormat('en-IN', {
                maximumSignificantDigits: 3,
              }).format(10000)}
              +
            </h1>
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

const Achievements = (props: Props) => {
  return (
    <section className="achieve">
      <h2 className="mx-0 mb-10 text-center text-6xl md:mb-8 lg:mx-72">
        A few numbers that we are proud of
      </h2>
      <div className="achieve__content">
        {achievedetails.map((x) => (
          <div className="overflow-hidden">
            <h1 className="text-secondary3">
              {new Intl.NumberFormat('en-IN', {
                maximumSignificantDigits: 3,
              }).format(x.number)}
              +
            </h1>
            <h3>{x.title}</h3>
            <p>{x.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;

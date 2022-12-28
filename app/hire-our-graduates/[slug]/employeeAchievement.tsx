import React from 'react';
import '@/styles/employeeAchive.css';

type Props = {};
const AchievementData = [
  'Lorem ipsum dolor sit amet dolor sit amet .',
  'Lorem ipsum dolor sit amet dolor sit amet.',
  'Lorem ipsum dolor sit amet dolor sit amet.',
  'Lorem ipsum dolor sit amet dolor sit amet.',
];

const EmployeeAchievement = (props: Props) => {
  return (
    <section className="employeeAchive">
      <div className="employeeAchive__main">
        <div className="employeeAchive__content">
          <h2 className="text-6xl">Achievements</h2>
          <div className="flex-[2] pl-5">
            <ul id="list " className="employeeAchive__list">
              {AchievementData.map((item) => {
                return (
                  <li className="flex items-center gap-4">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <hr className="my-16" />
        </div>
      </div>
    </section>
  );
};

export default EmployeeAchievement;

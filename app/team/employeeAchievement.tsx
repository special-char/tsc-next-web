import React from 'react';
import '@/styles/employeeAchive.css';

type Props = {};
const AchievementData = [
  'Lorem ipsum dolor sit amet.',
  'Lorem ipsum dolor sit amet.',
  'Lorem ipsum dolor sit amet.',
  'Lorem ipsum dolor sit amet.',
];

const EmployeeAchievement = (props: Props) => {
  return (
    <section className="employeeAchive">
      <div className="employeeAchive__main">
        <div className="employeeAchive__content">
          <div className="employeeAchive__content-part ">
            <h2 className="mb-4">Achievements</h2>
            <span className="h-1 " />
          </div>
          <div className="flex-[2] px-4">
            <ul id="list " className="employeeAchive__list">
              {AchievementData.map((item) => {
                return (
                  <li className="flex items-center gap-4 ">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeAchievement;

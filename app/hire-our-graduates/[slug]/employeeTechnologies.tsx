import React from 'react';
import '@/styles/employeeTechno.css';

type Props = {};

const TechnologiesData = [
  {
    id: '1',
    title: 'Html',
    proficiency: 70,
  },
  {
    id: '2',
    title: 'Css',
    proficiency: 70,
  },
  {
    id: '3',
    title: 'Javascript',
    proficiency: 40,
  },
  {
    id: '4',
    title: 'React',
    proficiency: 60,
  },
  {
    id: '5',
    title: 'Tailwind css',
    proficiency: 60,
  },
  {
    id: '6',
    title: 'Next.js',
    proficiency: 50,
  },
];

const EmployeeTechnologies = ({ data }: Props) => {
  return (
    <>
      <section id="employeeTechno" className="employeeTechno">
        <div className="employeeTechno__main">
          <div className="employeeTechno__title">
            <h2 className="text-6xl">Technologies</h2>
          </div>
          <div className="flex-[2]">
            <div id="technologies" className="employeeTechno__content">
              {data.map((val) => (
                <div className="skill-item">
                  <span className="employeeTechno__content-item ">
                    <p>{val.technology.data.attributes.name}</p>
                    <p>{val.proficiency}%</p>
                  </span>
                  <div className="m-3 rounded-full bg-neutral-300">
                    <div
                      style={{
                        width: `${val.proficiency}%`,
                      }}
                      className="progress-in h-3 w-[100%] rounded-full bg-gradient-to-r from-primary to-neutral-500 duration-500 ease-linear"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <hr className="my-16" />
          </div>
        </div>
      </section>
    </>
  );
};

export default EmployeeTechnologies;

import React from 'react';
import '@/styles/employeeEdu.css';

type Props = {};

const EmployeeEducation = ({ data }: Props) => {
  const educations = [
    {
      id: '1',
      course: 'Bachelor of technology in Computer Engineering',
      university: 'Nirma Institute of Technology, Ahmedabad, Gujarat, India',
      startDate: 'Aug 2008',
      endDate: 'Jul 2011',
      shortDescription:
        'Completed B.Tech in Computer Engineering with First Class Honors',
    },
    {
      id: '2',
      course: 'Diploma in Computer Engineering',
      university:
        'Swami Sacchidanand Polytechnic College, Visnagar, Gujarat, India',
      startDate: 'Jan 2004',
      endDate: 'Jan 2008',
      shortDescription:
        'Completed Diploma in Computer Engineering with high distinction.',
    },
  ];
  return (
    <section className="employeeEdu">
      <div className="employeeEdu__main">
        <div className="employeeEdu__title">
          <h2 className="text-6xl">Education</h2>
        </div>
        <div className="employeeEdu__content">
          {data.map((education, index) => {
            return (
              <>
                <div className="employeeEdu__content-main">
                  <span className="employeeEdu__content-course">
                    {education.degree}
                  </span>
                  <span className="employeeEdu__content-univ">
                    {education.school}
                  </span>
                  <span className="mb-4 text-xs italic md:text-sm">{`${education.startDate} - ${education.endDate}`}</span>
                  <p className="text-sm font-medium text-neutral-700">
                    {education.shortDescription}
                  </p>
                </div>
                {index !== educations.length - 1 && (
                  <div className="my-12 h-[0.5px] w-full rounded-md bg-neutral-300" />
                )}
              </>
            );
          })}
        </div>
        <hr className="my-16" />
      </div>
    </section>
  );
};

export default EmployeeEducation;

import React from 'react';

import EmployeeAchievement from './[slug]/employeeAchievement';
import EmployeeCertificates from './[slug]/employeeCertificates';
import EmployeeEducation from './[slug]/employeeEducation';
import EmployeeProject from './[slug]/employeeProject';
import EmployeeTechnologies from './[slug]/employeeTechnologies';
import TeamDetails from './[slug]/teamDetail';

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <TeamDetails />
      <EmployeeEducation />
      <EmployeeAchievement />
      <EmployeeCertificates />
      <EmployeeTechnologies />
      <EmployeeProject />
    </>
  );
};

export default page;

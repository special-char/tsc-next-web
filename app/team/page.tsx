import React from 'react';
import EmployeeAchievement from './employeeAchievement';
import EmployeeCertificates from './employeeCertificates';
import EmployeeEducation from './employeeEducation';
import EmployeeHeader from './employeeHeader';
import EmployeeProject from './employeeProject';
import EmployeeTechnologies from './employeeTechnologies';

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <EmployeeTechnologies />
      <EmployeeAchievement />
      <EmployeeCertificates />
      <EmployeeEducation />
      {/* <EmployeeProject /> */}
      {/* <EmployeeHeader /> */}
    </>
  );
};

export default page;

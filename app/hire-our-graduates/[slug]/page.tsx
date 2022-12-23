import EmployeeAchievement from './employeeAchievement';
import EmployeeCertificates from './employeeCertificates';
import EmployeeEducation from './employeeEducation';
import EmployeeProject from './employeeProject';
import EmployeeTechnologies from './employeeTechnologies';
import TeamDetails from './teamDetail';

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <TeamDetails />
      <hr />
      <EmployeeTechnologies />
      <hr />
      <EmployeeEducation />
      <EmployeeAchievement />
      <EmployeeCertificates />
      <EmployeeProject />
    </>
  );
};

export default page;

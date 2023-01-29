import { getGraduatesDetails } from '@/lib/getGraduatesDetails';
import { getOurGraduatesData } from '@/lib/getOurGraduates';
import { Team, TeamEntity } from 'types/types';
import EmployeeAchievement from './employeeAchievement';
import EmployeeCertificates from './employeeCertificates';
import EmployeeEducation from './employeeEducation';
import EmployeeProject from './employeeProject';
import EmployeeTechnologies from './employeeTechnologies';
import TeamDetails from './teamDetail';

type Props = {};

export type PageProps = {
  params: {
    slug: string;
  };
  children?: React.ReactNode;
};

export default async function Page({ params }: PageProps) {
  const ourGraduatesDetails = await getGraduatesDetails(params.slug);
  const [{ attributes }] = ourGraduatesDetails.data.teams.data as TeamEntity[];

  const {
    firstName,
    lastName,
    about,
    technology,
    certification,
    projects,
    education,
  } = attributes as Team;

  return (
    <>
      <TeamDetails data={attributes} />
      <EmployeeTechnologies data={technology} />
      <EmployeeEducation data={education} />
      <EmployeeCertificates data={certification} />
      {/* <EmployeeAchievement /> */}
      <EmployeeProject data={projects} />
    </>
  );
}

// export default page;

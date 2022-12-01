import PageHeader from '@/ui/pageHeader';
import React from 'react';
import OurWorks from '../teacher/ourWorks';
import Achievements from './achievements';
import CompanyHistory from './companyhistory';
import OurOffice from './ourOffice';

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <PageHeader
        title="The big mission behind Educationic"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium pulvinar ac molestie cursus malesuada enim. Massa nec tellus, elit tellus, erat faucibus aenean. Nunc, lacus, dignissim nec sit."
        className="customClass"
        circleRight="bg-primary"
        circleLeft="bg-secondary3"
      />
      <Achievements />
      <OurWorks />
      <CompanyHistory />
      <OurOffice />
    </>
  );
};

export default page;

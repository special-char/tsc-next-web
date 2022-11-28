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
        title="Blogs"
        desc="hello from desc"
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

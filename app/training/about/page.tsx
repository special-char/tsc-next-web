import React from 'react';
import CompanyHistory from './companyhistory';
import OurOffice from './ourOffice';

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <CompanyHistory />
      <OurOffice />
    </>
  );
};

export default page;

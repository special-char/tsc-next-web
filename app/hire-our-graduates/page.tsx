import '@/styles/hireourgraduates.css';
import React from 'react';
import HireCard from '@/ui/HireCard';
import { getOurGraduatesData } from '@/lib/getOurGraduates';
import { notFound } from 'next/navigation';

type Props = {};

const HireOurGraduates = async (props: Props) => {
  const ourGraduatesData = await getOurGraduatesData();
  if (!ourGraduatesData) {
    notFound();
  }
  const graduates = ourGraduatesData.data.teams.data;

  return (
    <section className="hireourgraduates ">
      <h1 className="mb-10 text-center">Hire Our Graduates</h1>
      <div className="hireourgraduates__card__body">
        {graduates.map((graduate): any => (
          <>
            <HireCard data={graduate} key={graduate.firstname} />
          </>
        ))}
      </div>
    </section>
  );
};

export default HireOurGraduates;

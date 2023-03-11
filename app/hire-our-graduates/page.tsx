import '@/styles/hireourgraduates.css';
import React from 'react';
import HireCard from '@/ui/HireCard';
import { getOurGraduatesData } from '@/lib/getOurGraduates';

const HireOurGraduates = async () => {
  const ourGraduatesData = await getOurGraduatesData();

  const graduates = ourGraduatesData.data.teams.data;

  return (
    <section className="hireourgraduates ">
      <h1 className="mb-10 text-center">Hire Our Graduates</h1>
      <div className="hireourgraduates__card__body">
        {graduates.map((graduate): any => (
          <HireCard data={graduate} key={graduate.id} />
        ))}
      </div>
    </section>
  );
};

export default HireOurGraduates;

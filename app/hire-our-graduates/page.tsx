import '@/styles/hireourgraduates.css';
import React from 'react';
import HireCard from '@/ui/HireCard';
import { getOurGraduatesData } from '@/lib/getOurGraduates';
import { notFound } from 'next/navigation';

type Props = {};
export type PageProps = {
  params: {
    slug: string;
  };
  children?: React.ReactNode;
};

const HireOurGraduates = async ({ params }: PageProps) => {
  const ourGraduatesData = await getOurGraduatesData(params.slug);
  // if (!ourGraduatesData) {
  //   notFound();
  // }
  if (!ourGraduatesData) {
    throw new Error(
      'something went wrong! try refreshing the page or please come back later.',
    );
  }
  const graduates = ourGraduatesData.data.teams.data;

  return (
    <section className="hireourgraduates ">
      <h1 className="mb-10 text-center">Hire Our Graduates</h1>
      <div className="hireourgraduates__card__body">
        {graduates.map((graduate): any => (
          <>
            <HireCard data={graduate} key={graduate.id} />
          </>
        ))}
      </div>
    </section>
  );
};

export default HireOurGraduates;

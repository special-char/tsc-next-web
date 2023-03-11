import Accordian, { AccordianType } from '@/ui/Accordian';
import React from 'react';
import DownloadSvg from '@/public/icons/download.svg';
import '@/styles/corporateTraining.css';
import { getTrainingCourses } from '@/lib/getTrainingCourses';
import { Course, CourseEntity } from 'types/types';
import FieldItem from '@/ui/Field';

type Props = {};

const Page = async (props: Props) => {
  const trainingData = await getTrainingCourses();

  const { data } = trainingData.data.courses;

  const accordianData = data?.map<AccordianType>((item) => {
    return {
      id: item?.id || '',
      title: item?.attributes?.title || '',
      description: '' || '',
      curriculam: item?.attributes?.curriculam || [],
      brochure: item.attributes?.brochure.data?.attributes || {},
    };
  });

  return (
    <section id="Corporate" className="corporate">
      <div className="corporate__section ">
        <div className="corporate__header">
          <h2>Corporate Tranning Course Datails</h2>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="corporate__body">
          <Accordian data={accordianData} hasTag />
        </div>
      </div>
    </section>
  );
};
export default Page;

import Accordian from '@/ui/Accordian';
import React, { use } from 'react';
import DownloadSvg from '@/public/icons/download.svg';
import '@/styles/corporatetraining.css';
export const CorporatePageSkeleton = () => {
  return (
    <section id="Corporate" className="corporate animate-pulse">
      <div className="corporate__section">
        <div className="corporate__header font-cursive">
          <h2>Corporate Tranning Course Datails</h2>
          <p className="font-cursive">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="corporate__body">
          <Accordian data={data} hasTag />
        </div>
      </div>
    </section>
  );
};

type Props = {};

const data = [
  {
    id: '1',
    title: 'courses',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    chip: 'download',
    svg: <DownloadSvg />,
  },
  {
    id: '1',
    title: 'courses',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    chip: 'download',
    svg: <DownloadSvg />,
  },
  {
    id: '1',
    title: 'courses',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    chip: 'download',
    svg: <DownloadSvg />,
  },
  {
    id: '1',
    title: 'courses',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    chip: 'download',
    svg: <DownloadSvg />,
  },
];

const CorporatePage = (props: Props) => {
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
          <Accordian data={data} hasTag />
        </div>
      </div>
    </section>
  );
};
export default CorporatePage;
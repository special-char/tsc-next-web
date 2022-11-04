import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';

type Props = {};
const Data = [
  {
    Date: '2023',
    title: 'Launched course #500',
    Description:
      'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor.',
  },
  {
    Date: '2024',
    title: 'Launched course #500',
    Description:
      'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor.',
  },
  {
    Date: '2025',
    title: 'Launched course #500',
    Description:
      'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor.',
  },
];

const CompanyHistory = (props: Props) => {
  return (
    <section id="companyHistory" className={`${styles.companyHistory}`}>
      <div className={`${styles.page} grid md:grid-cols-2`}>
        <div>
          <div className="top-0 flex flex-col items-stretch md:sticky md:mr-8 md:items-start">
            <h2 className="text-primary">Our company history</h2>
            <p className="text-neutral-500">
              Presenting Academy, the tech school of the future. We teach you
              the right skills to be prepared for tomorrow.
            </p>
            <Link href="/" className="btn btn--primary">
              JOIN OUR TEAM
            </Link>
          </div>
        </div>

        <div className={styles.companyHistory__contents}>
          {Data.map((val) => (
            <div key={val.Date} className="relative pl-8">
              <div className="chip chip--white gap-20 border border-neutral-300 px-6 md:mb-6">
                <span className=" text-lg font-bold text-neutral-700">
                  {val.Date}
                </span>
              </div>
              <h3 className="py-3">{val.title}</h3>
              <p className="text-neutral-500">{val.Description}</p>
              <div className="absolute top-4 -left-2.5 z-50 h-5 w-5 rounded-full bg-secondary3"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;

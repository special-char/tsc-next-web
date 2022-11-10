import React from 'react';
import Link from 'next/link';
import '@/styles/companyhistory.css';

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
    <section id="companyHistory" className="companyHistory">
      <div className="companyHistory__section">
        <div>
          <div className="companyHistory__leftSection">
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

        <div className="companyHistory__info">
          {Data.map((val) => (
            <div key={val.Date} className="companyHistory__RightSection">
              <div className="companyHistory__ChipSection chip chip--white">
                <span className="companyHistory__Date">{val.Date}</span>
              </div>
              <h3 className="py-3">{val.title}</h3>
              <p className="text-neutral-500">{val.Description}</p>
              <div className="companyHistory__circle"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;

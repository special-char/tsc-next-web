import React from 'react';
import Link from 'next/link';
import '@/styles/companyhistory.css';
import Button from '@/ui/Button';
import { getAboutHistory } from '@/lib/getAboutHistory';
import { AboutHistory } from 'types/types';
export const CompanyHistorySkeleton = () => {
  return (
    <section id="companyHistory" className="companyHistory">
      <div className="companyHistory__section animate-pulse">
        <div>
          <div className="companyHistory__leftSection">
            <h2 className="font-cursive text-6xl text-primary">
              Our company history
            </h2>
            <p className="font-cursive text-neutral-500">
              Presenting Academy, the tech school of the future. We teach you
              the right skills to be prepared for tomorrow.
            </p>
            <div>
              <Button
                as={Link}
                href="/"
                variant="primary"
                className="font-cursive"
              >
                JOIN OUR TEAM
              </Button>
            </div>
          </div>
        </div>

        <div className="companyHistory__info">
          {[1, 2, 3].map((val) => (
            <div key={val} className="companyHistory__RightSection">
              <div className="companyHistory__ChipSection chip chip--white w-1/4 lg:w-[20%]">
                <span className="companyHistory__Date font-cursive">2023</span>
              </div>
              <h3 className="py-3 font-cursive">Launched course #500</h3>
              <p className="font-cursive text-neutral-500">
                Lorem ipsum dolor sit amet, consectetur dolorili adipiscing
                elit. Felis donec massa aliquam id dolor
              </p>
              <div className="companyHistory__circle"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CompanyHistory = async () => {
  const aboutHistory = await getAboutHistory();

  if (!aboutHistory) {
    throw new Error(
      'something went wrong! try refreshing the page or please come back later.',
    );
  }

  const { title, description, history, button } = aboutHistory.data.aboutHistory
    .data?.attributes as AboutHistory;

  return (
    <section id="companyHistory" className="companyHistory">
      <div className="companyHistory__section">
        <div>
          <div className="companyHistory__leftSection">
            <h2 className="companyHistory__h2">{title}</h2>
            <p className="text-neutral-500">{description}</p>
            <div>
              {button?.map((x) => (
                <Button key={x?.id} as={Link} href={x?.url} variant="primary">
                  {x?.text}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="companyHistory__info">
          {history?.map((val) => (
            <div key={val?.id} className="companyHistory__RightSection">
              <span className="chip chip--white max-w-max text-lg text-neutral-700">
                {val?.number}
              </span>
              <h3 className="py-3">{val?.title}</h3>
              <p className="text-neutral-500">{val?.description}</p>
              <div className="companyHistory__circle"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;

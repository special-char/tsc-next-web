import React from 'react';
import '@/styles/pageHeader.css';

import SeparatorArray from './SeparatorArray';

type Props = {};

const pageHeader = (props: Props) => {
  return (
    <section className="page__section">
      <div className="page__body">
        <div className="page__pages">
          <div className="page__detail">
            <h1 className="text-neutral-700">Blog</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
        </div>
        <div className="circle__blue"></div>
        <div className="circle__orange"></div>
      </div>
      <SeparatorArray />
    </section>
  );
};
export default pageHeader;

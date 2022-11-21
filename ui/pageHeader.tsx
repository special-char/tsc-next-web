import React from 'react';
import '@/styles/pageHeader.css';
import clsx from 'clsx';
import SeparatorArray from './SeparatorArray';
type Props = {
  className: any;
  title: string;
  desc: string;
  circleRight: any;
  circleLeft: any;
};

const PageHeader = ({
  className,
  title,
  desc,
  circleRight,
  circleLeft,
}: Props) => {
  return (
    <section className={clsx('page__section', { [className]: !!className })}>
      <div className={clsx('page__body', { [className]: !!className })}>
        <div className="page__pages">
          <div className="page__detail">
            <h1 className="text-neutral-700">{title}</h1>
            <p>{desc}</p>
          </div>
        </div>
        <div
          className={clsx('circle__right', { [circleRight]: !!circleRight })}
        ></div>
        <div
          className={clsx('circle__left', { [circleRight]: !circleLeft })}
        ></div>
      </div>
      <SeparatorArray />
    </section>
  );
};
export default PageHeader;

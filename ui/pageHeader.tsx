import React from 'react';
import '@/styles/pageHeader.css';
import clsx from 'clsx';
import { getBannerHeaderData } from '@/lib/getBannerHeader';
import { Banner, ComponentCommonHeaders } from 'types/types';
import SeparatorArray from './SeparatorArray';
import { getBannerData } from '@/lib/getBanner';
import Script from 'next/script';

export const PageHeaderSkeleton = () => {
  return (
    <section className={'page__section animate-pulse'}>
      <div className="page__body">
        <div className="page__pages">
          <div className="page__detail">
            <h1 className="font-cursive text-neutral-700">
              The big mission behind Educationic
            </h1>
            <p className="font-cursive">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
              pulvinar ac molestie cursus malesuada enim. Massa nec tellus, elit
              tellus, erat faucibus aenean. Nunc, lacus, dignissim nec sit.
            </p>
          </div>
        </div>
        <div className="circle__right"></div>
        <div className="circle__left"></div>
      </div>
    </section>
  );
};

type Props = {
  className: any;
  pageName: string;
  circleRight: any;
  circleLeft: any;
  hasSeprator?: boolean;
};

const PageHeader = async ({
  className,
  pageName,
  circleRight,
  circleLeft,
  hasSeprator = true,
}: Props) => {
  const bannerData = await getBannerData(pageName);

  const { title, description, seo } = bannerData.data.banner.data
    ?.attributes as Banner;

  return (
    <section className={clsx('page__section', { [className]: !!className })}>
      <div className={clsx('page__body', { [className]: !!className })}>
        <div className="page__pages">
          <div className="page__detail">
            {title && (
              <h1 className="text-neutral-700">
                {title.split('<br />').map((x) => (
                  <div className="sm:whitespace-nowrap">{x}</div>
                ))}
              </h1>
            )}
            {description && <p className='text-center'>{description}</p>}
          </div>
        </div>
        <div
          className={clsx('circle__right', { [circleRight]: !!circleRight })}
        ></div>
        <div
          className={clsx('circle__left', { [circleRight]: !circleLeft })}
        ></div>
      </div>
      {hasSeprator && <SeparatorArray />}
      {seo?.structuredData && (
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seo.structuredData),
          }}
        />
      )}
    </section>
  );
};
export default PageHeader;

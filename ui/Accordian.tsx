'use client';

import clsx from 'clsx';
import md from 'markdown-it';
import Link from 'next/link';
import Icon from './Icon';

export type AccordianType = {
  id: string;
  title: string;
  description: string;
  curriculam?: { title: string; content: string }[];
  brochure?: { url: string; alternativeText: string }[];
};

type Props = {
  data: AccordianType[];
  hasTag?: boolean;
};

const Accordian = ({ data, hasTag }: Props) => {
  return (
    <>
      {data.map((val, index) => {
        return (
          <details
            key={val.id}
            // className={clsx({
            //   'with-tag': hasTag,
            // })}
          >
            <summary>
              <div className="flex w-full items-center justify-between">
                {val.title}
              </div>
              {val.brochure ? (
                <Link
                  className="flex items-center gap-3"
                  href={val.brochure?.url}
                >
                  <Icon name="download" height={24} width={24} />
                  <span className="hover:text-primary">Download</span>
                </Link>
              ) : (
                ''
              )}
            </summary>
            {val?.curriculam?.map((item) => (
              <div className="pl-16 ">
                <h6
                  className="pt-3 text-xl"
                  dangerouslySetInnerHTML={{
                    __html: md().render(item.title),
                  }}
                ></h6>
                <div
                  dangerouslySetInnerHTML={{
                    __html: md().render(item.content),
                  }}
                ></div>
              </div>
            ))}
            {
              <div
                dangerouslySetInnerHTML={{
                  __html: md().render(val.description),
                }}
              ></div>
            }
          </details>
        );
      })}
      {/* <div>
        {descriptiondata.map((val) => {
          return (
            <>
              <span>
                {val.attributes?.curriculam?.map((val) => {
                  return (
                    <>
                      <h6>{val?.title}</h6>
                      <p>{val?.content}</p>
                    </>
                  );
                })}
              </span>
            </>
          );
        })}
      </div> */}
    </>
  );
};

export default Accordian;

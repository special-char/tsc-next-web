'use client';

import clsx from 'clsx';
import md from 'markdown-it';
import Link from 'next/link';

export type AccordianType = {
  id: string;
  title: string;
  description: string;
  curriculam?: { title: string; content: string }[];
  brochure?: {};
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
            className={clsx({
              'with-tag': hasTag,
            })}
          >
            <summary>{val.title}</summary>
            {val?.curriculam?.map((item) => (
              <>
                <div
                  dangerouslySetInnerHTML={{
                    __html: md().render(item.title),
                  }}
                ></div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: md().render(item.content),
                  }}
                ></div>
              </>
            ))}
            {typeof val.description === 'string' &&
              index === data.length - 1 && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: md().render(val.description),
                  }}
                ></div>
              )}
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

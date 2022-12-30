'use client';

import clsx from 'clsx';
import md from 'markdown-it';

export type AccordianType = {
  id: string;
  title: string;
  description: string;
};

type Props = {
  data: AccordianType[];
  hasTag?: boolean;
};

const Accordian = ({ data, hasTag }: Props) => {
  return (
    <>
      {data.map((val) => (
        <details
          key={val.id}
          className={clsx({
            'with-tag': hasTag,
          })}
        >
          <summary>{val.title}</summary>
          <div
            dangerouslySetInnerHTML={{
              __html: md().render(val.description),
            }}
          ></div>
        </details>
      ))}
    </>
  );
};

export default Accordian;

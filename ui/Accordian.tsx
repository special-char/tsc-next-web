'use client';

import md from 'markdown-it';

export type AccordianType = {
  id: string;
  title: string;
  description: string;
};

type Props = {
  data: AccordianType[];
};

const Accordian = ({ data }: Props) => {
  return (
    <>
      {data.map((val) => (
        <details key={val.id} className="rounded-2xl md:py-8">
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

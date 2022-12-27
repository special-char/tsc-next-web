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
<<<<<<< HEAD
        <details key={val.id} className="!mb-2 rounded-2xl !px-2 md:py-8">
          <summary className="items-center !text-xl lg:!text-xxl">
            {val.title}
          </summary>
          <p
=======
        <details key={val.id} className="rounded-2xl md:py-8">
          <summary>{val.title}</summary>
          <div
>>>>>>> dd4b4bf404f3a8dccee0a6a75c6936c73a01c8ac
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

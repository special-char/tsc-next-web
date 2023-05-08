'useClient';
import React from 'react';
import Image from 'next/image';
import Portfolio from '@/public/icons/portfolio.png';
import Carti from '@/public/icons/demo-cartificate.png';
import Btn from '../../../app/full-stack-development/btn';

const data = [
  {
    id: '1',
    src: Portfolio,
    title: 'Introduction to Webflow',
    list: 'What is No-Code web design',
    list1: 'Technologies involved in web design',
    list2: 'Overview of the Webflow designer',
    btn: <Btn />,
  },
  {
    id: '2',
    src: Portfolio,
    title: 'Introduction to Webflow',
    list: 'What is No-Code web design',
    list1: 'Technologies involved in web design',
    list2: 'Overview of the Webflow designer',
    btn: <Btn />,
  },
  {
    id: '3',
    src: Portfolio,
    title: 'Introduction to Webflow',
    list: 'What is No-Code web design',
    list1: 'Technologies involved in web design',
    list2: 'Overview of the Webflow designer',
    btn: <Btn />,
  },
  {
    id: '4',
    src: Portfolio,
    title: 'Introduction to Webflow',
    list: 'What is No-Code web design',
    list1: 'Technologies involved in web design',
    list2: 'Overview of the Webflow designer',
    btn: <Btn />,
  },
  {
    id: '5',
    src: Portfolio,
    title: 'Introduction to Webflow',
    list: 'What is No-Code web design',
    list1: 'Technologies involved in web design',
    list2: 'Overview of the Webflow designer',
    btn: <Btn />,
  },
];

const Projects = () => {
  const content = (val) => {
    return (
      <div className="flex flex-col items-center bg-neutral-700 ">
        <div className="mb-5 flex aspect-square items-center justify-center">
          <Image src={val.src} alt={'image'} width={350} />
        </div>
        <div>
          <h3 className="my-2 text-3xl font-bold text-neutral-100">
            {val.title}
          </h3>
          <ul className="my-4 text-neutral-400">
            <li> {val.list}</li>
            <li>{val.list1}</li>
            <li>{val.list2}</li>
          </ul>
          <div>{val.btn}</div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-neutral-700 px-6 py-16 lg:px-container">
      <h2 className="mb-6 flex items-center justify-center text-center text-[42px] font-bold  text-neutral-100 lg:mx-60">
        What will you learn in the program?
      </h2>

      <div className="mx-auto grid items-center gap-x-1 bg-[#ff7374] md:grid-cols-2 md:grid-rows-5 ">
        {data.map((val, i) => {
          if (i % 2 === 0) {
            return (
              <>
                {content(val)}
                <div key={val.id} className="h-full w-full bg-neutral-700" />
              </>
            );
          } else {
            return (
              <>
                <div className="h-full w-full bg-neutral-700" />
                {content(val)}
              </>
            );
          }
        })}
      </div>
      <div className="mt-6 flex aspect-video items-start justify-center ">
        <Image
          src={Carti}
          alt={'image'}
          width={500}
          className="rounded-3xl border-4 border-[#ff7374]"
        />
      </div>
    </section>
  );
};

export default Projects;

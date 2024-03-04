'use client'; 
import clsx from 'clsx';
import md from 'markdown-it';
import Link from 'next/link';
import Icon from './Icon';
import React ,{useState}from 'react';


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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };


  const All_Details = document.querySelectorAll('details');

  All_Details.forEach(deet=>{
    deet.addEventListener('toggle', toggleOpenOneOnly)
  })
  
  function toggleOpenOneOnly(_e: any) {
    if (this.open) {
      All_Details.forEach(deet=>{
        if (deet!=this && deet.open) deet.open = false
      });
    }
  }

  return (
    <>
      {data.map((val, index) => {
        return (
          <div key={val.id}>

          <details
            open={index === openIndex}
            onClick={() => handleToggle(index)}
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
          </div> 
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

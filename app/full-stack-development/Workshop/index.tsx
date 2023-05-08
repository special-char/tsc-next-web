import React from 'react';
import ButonArrow from '@/public/icons/buton-arrow.svg';

const CheckBoxList = [
  {
    id: '1',
    title:
      'I am a designer who wants to bring designs to life, but sadly doesn’t know how to write code',
  },
  {
    id: '2',
    title: 'I am a Non-Techie who wants to generate a good passive income',
  },
  {
    id: '3',
    title:
      'I am an Entrepreneur who doesn’t want to spend a fortune on website development, but still needs a beautiful website.',
  },
  {
    id: '4',
    title:
      'I am a Marketer who wants to build landing pages superfast, make optimizations superfast, and get audience feedback superfast.',
    cost: ' ₹2,000',
  },
  {
    id: '5',
    title:
      'I am a Product Manager who wants to test out ideas and build MVP(s) without relying on the dev team.',
  },
  {
    id: '6',
    title:
      'I am a Developer who doesn’t want to waste time writing HTML/CSS, and much rather use a tool to generate it for me quickly.',
  },
];

const WorkShop = () => {
  return (
    <section className="text-white grid gap-6 bg-neutral-700 px-6 py-14 md:grid-cols-2 md:py-24 lg:px-container">
      <div className="flex flex-col text-center md:text-left">
        <h2 className="text-3xl font-bold leading-normal text-neutral-100">
          Still wondering if the program is for you?
        </h2>
        <p className="my-5 text-base text-neutral-400">
          Please Check All Boxes, Where Your Answer is YES! , If you checked ANY
          of the boxes above, then this Webflow Web Design Workshop is perfect
          for you😁
        </p>

        <div className="flex py-4">
          <button className="hidden flex-1 rounded-xl bg-gradient-to-l from-[#ff7373] to-[#491eb8] px-10 py-8 text-3xl font-semibold md:list-item ">
            <div className="flex justify-between">
              <div>Enroll Now</div>
              <div>
                <ButonArrow />
              </div>
            </div>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 text-xl">
        {CheckBoxList.map((val) => (
          <ul key={val.id}>
            <div className=" relative flex items-center rounded-3xl bg-[rgba(240,242,255,.1)] py-6 text-center md:py-10">
              <label>
                <input type="checkbox" className="absolute left-10 scale-[5]" />
              </label>
              <p className="pl-24 pr-5 text-left text-base text-neutral-200">
                {val.title}
              </p>
            </div>
          </ul>
        ))}
      </div>
    </section>
  );
};

export default WorkShop;

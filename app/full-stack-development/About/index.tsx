import Image from 'next/image';
import React from 'react';
import ProfileImage from '@/public/icons/yagnesh.webp';

const About = () => {
  return (
    <section className="bg-neutral-100 px-4 py-14 lg:px-container lg:py-24 ">
      <h2 className="flex justify-center text-center md:my-16 ">
        Meet the Instructor
      </h2>

      <div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-2 xl:gap-16">
        <div className="relative flex aspect-[3/3] items-center justify-center lg:p-5">
          <Image src={ProfileImage} alt={'ProfileImage'} fill />
        </div>

        <div className="flex flex-col items-start lg:p-5">
          <div>
            <h3 className="mb-0 bg-gradient-to-l from-[#ff7373] to-[#491eb8] bg-clip-text text-transparent">
              Yagnesh Modh
            </h3>
            <h5 className="pb-2">
              Founder Of The Special Character It Services
            </h5>
          </div>
          <div className="max-w-2xl">
            Hey! I am Yagnesh Modh, a designer turned No-Code entrepreneur and I
            help businesses save precious time and money by building software
            without code.
            <p className="py-6  ">
              I started India's first No-Code studio(EPYC) along with my bud
              Mayank 👉We've built products for startups without code that
              scaled to become unicorns later.
            </p>
            <p>
              In the past couple of years, I've trained and mentored 6000+
              students in No-Code, and helped them build their dream products,
              without ever learning to code. EVER!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

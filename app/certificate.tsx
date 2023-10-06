import Image from 'next/image';
import React from 'react';
import OKIcon from '@/public/icons/ok.svg';
const data = [
  ' Supported by the vision of PM Shri Narendra Modi',
  ' Valid for all Jobs and College Training',
  ' International Recognition',
  ' Acquire recognized credentials to boost your resume',
];
const Certificate = () => {
  return (
    <section className="px-container pt-6">
      <h1 className="text-center">
        Get a Training Certificate from a The Special character edtech Company
        in India
      </h1>

      <div className="flex flex-col pt-3 md:flex-row">
        <div className="flex-1">
          {data.map((detail, index) => (
            <div className="flex items-center gap-4 py-3" key={index}>
              <OKIcon />
              <p className="font-semibold">{detail}</p>
            </div>
          ))}
        </div>
        <div className="relative aspect-[4/3] bg-primary md:flex-1">
          <Image
            src="https://ik.imagekit.io/p99x3nxgz/tsc%20cartificate.jpg?updatedAt=1696594450480"
            alt="img"
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default Certificate;

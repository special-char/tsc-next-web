import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PaymentRecived = () => {
  return (
    <section className="px-container">
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='relative py-8'>
        <Image
          src="https://ik.imagekit.io/p99x3nxgz/check.png?updatedAt=1699001682787"
          width={200}
          height={200}
          alt="Picture of the author"
        />
      </div>
      <h1 className='m-0'>Thank You</h1>
      <p className='pb-4 font-semibold'>your submission is received and we will contact you soon</p>
      <Link href="#home"><button className='btn btn--primary px-20 '>Done</button></Link>

    </div>
    </section>
  );
};

export default PaymentRecived;

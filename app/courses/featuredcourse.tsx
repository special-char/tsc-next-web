import React from 'react';
import Image from 'next/image';
import '@/styles/featuredcourse.css';
import ActionBar from '@/ui/ActionBar';
type Props = {};

const Featuredcourse = (props: Props) => {
  return (
    <section id="featuredcourse" className="featuredcourse">
      <h2 className="featuredcourse__title">Featured Course</h2>
      <a href="#" className="card card__hori m-0 ">
        <div className="relative ">
          <Image
            className="card__image aspect-[3/2] h-full"
            src="https://images.unsplash.com/photo-1667988152364-52ab908cd3bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="image"
            height={6000}
            width={600}
          />
          <div className=" chip chip--primary absolute top-20 left-3  md:top-6  md:left-32 lg:left-36 ">
            $199.00 USD
          </div>
          <div className="chip chip--secondary absolute top-6 left-3 lg:left-6">
            7hr56m
          </div>
        </div>
        <div className="featuredcourse__body">
          <h3 className=" mb-4">Brand & Indentity Design</h3>
          <p className=" mb-8 text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatibus eius nesciunt cupiditate iure obcaecati a dicta non
            temporibus quis deserunt.
          </p>
          <ActionBar />
        </div>
      </a>
    </section>
  );
};

export default Featuredcourse;

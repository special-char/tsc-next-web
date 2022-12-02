import React from 'react';
import Image from 'next/image';
type Props = {};

const Featuredcourse = (props: Props) => {
  return (
    <section
      id="featuredcourses"
      className="overflow-hidden px-container py-20"
    >
      <div className="grid">
        <a href="#" className="card  card__fc  lg:grid-cols-2">
          <div className="relative ">
            <Image
              className="card__image min-h-[200px]"
              src="https://images.unsplash.com/photo-1667988152364-52ab908cd3bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="image"
              fill
            />
            <div className=" chip chip--primary absolute top-20 left-3  md:top-6  md:left-32 lg:left-36">
              $199.00 USD
            </div>
            <div className="chip chip--secondary absolute top-6 left-3 lg:left-6">
              7hr56m
            </div>
          </div>
          <div className="card__body  lg:my-auto">
            <h3 className="card__title mb-4">Lorem, ipsum dolor.</h3>
            <p className="card__desc mb-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatibus eius nesciunt cupiditate iure obcaecati a dicta non
              temporibus quis deserunt.
            </p>
            <div className="flex items-center">
              <img
                className="card__avatar"
                src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template.jpg"
                alt="Kathie Corl"
              />
              <h3>lakshya</h3>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Featuredcourse;

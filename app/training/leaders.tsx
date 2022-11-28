import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import '@/styles/leaderSection.css';

const Leaders = () => {
  return (
    <section id="Leaders" className="leader">
      <div className="leader__details">
        <h2 className="leader__title text-center">
          Courses taught by industry leaders around the world
        </h2>
        <p className="leader__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
        <div className="leader__actions ">
          <Link href="/" className="btn btn--primary text-xs">
            BROWSE TEACHERS
          </Link>
          <Link href="/" className="btn btn--secondary text-xs">
            BECOME A TEACHER
          </Link>
        </div>
      </div>
      <div className="leader__image_content">
        <div className="leader__image">
          <Image
            src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607ee9511b8768627aa63e05_image-home-about-education-x-template.jpg"
            alt="logo"
            fill
          />
        </div>
        <div className="leader__content">
          <span className="leader__ContentData">Featured Teacher</span>
          <h3 className="py-4 text-neutral-700">
            “Teaching on Educationic platform has been an amazing experience”
          </h3>
          <h5 className="text-neutral-700">Yagnesh modh</h5>
          <h6 className="mb-0 text-neutral-600">CEO</h6>
        </div>
      </div>
    </section>
  );
};

export default Leaders;

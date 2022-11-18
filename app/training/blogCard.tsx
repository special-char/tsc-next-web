import React from 'react';
import '@/styles/blogs.css';

type Props = {};

const Blogcard = (props: Props) => {
  return (
    <div className="grid gap-10  py-10 px-container sm:px-sm-container lg:grid-cols-2 lg:px-container">
      <a href="#" className="card">
        <figure className="relative">
          <img
            className="card__image aspect-video"
            src="https://images.unsplash.com/photo-1661347335413-e4ef4c97d625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
            alt="image"
          />
          <span className=" chip chip--secondary absolute top-4 right-3">
            $199.00 USD
          </span>
        </figure>
        <div className="card__body">
          <h4 className="card__desc">December 1,2022</h4>
          <h2 className="card__title">
            Lorem, ipsum dolor sit amet consectetur adipisicing.
          </h2>
        </div>
      </a>
      <div className="grid grid-rows-3 gap-8 ">
        <a href="#" className="card md:grid-cols-2">
          <div>
            <img
              className="card__image aspect-video"
              src="https://images.unsplash.com/photo-1667988152364-52ab908cd3bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="image"
            />
          </div>
          <div className="card__body">
            <h4 className="card__title">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae,
              corrupti!
            </h4>
          </div>
        </a>
        <a href="#" className="card md:grid-cols-2">
          <div>
            <img
              className="card__image aspect-video "
              src="https://images.unsplash.com/photo-1661347335413-e4ef4c97d625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
              alt="image"
            />
          </div>
          <div className="card__body">
            <h4 className="card__title lg:text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae,
              corrupti!
            </h4>
          </div>
        </a>
        <a href="#" className="card md:grid-cols-2">
          <div>
            <img
              className="card__image aspect-video"
              src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff4698e5af4686c9948_image-3-profile-picture-teacher-education-x-template.jpg"
              alt="image"
            />
          </div>
          <div className="card__body">
            <h4 className="card__title lg:text-sm ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae,
              corrupti!
            </h4>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Blogcard;

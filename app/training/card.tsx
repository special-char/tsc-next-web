'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/link';

type Props = {};

const Card = (props: Props) => {
  const [price, setprice] = useState('$99.00USD');

  return (
    <section>
      {/* price card */}
      <div className="price">
        <div>
          <h2>{price}!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
            nostrum, amet inventore doloremque quibusdam est!
          </p>
          <div className="">
            <div>
              <select
                className="mb-8 h-16 w-full rounded-full bg-neutral-300 px-7 transition ease-in-out hover:border-2 hover:border-primary"
                // className=" my-1 h-14 w-full bg-neutral-300"
                onChange={() => setprice('$199.00USD')}
              >
                <option value="">Select Course Plan</option>
                <option value="basic">Basic</option>
                <option value="premium">Premium</option>
              </select>
            </div>
            <div className=" pb-4">
              <a href="/" className="btn btn--primary w-full">
                Add to cart
              </a>
            </div>
          </div>
        </div>
        <div className=" sm:text-sm md:text-2xl">
          <div className="mb-4 flex">
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-3"
            >
              <path
                d="M14.6387 12.3652V21.0344"
                stroke="#064EA4"
                stroke-width="2.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20.8518 8.2168V21.0341"
                stroke="#064EA4"
                stroke-width="2.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.42403 16.9453V21.0334"
                stroke="#064EA4"
                stroke-width="2.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.5583 2H8.71564C4.58757 2 2 4.92177 2 9.05794V20.216C2 24.3522 4.57553 27.2739 8.71564 27.2739H20.5583C24.6984 27.2739 27.2739 24.3522 27.2739 20.216V9.05794C27.2739 4.92177 24.6984 2 20.5583 2Z"
                stroke="#1E3D60"
                stroke-width="2.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="mb-0">Level:</p>
            <p className="mb-0 font-bold">medium</p>
          </div>
          <div className="mb-4 flex">
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-3"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M27.5356 14.7678C27.5356 21.8198 21.8198 27.5356 14.7678 27.5356C7.71584 27.5356 2 21.8198 2 14.7678C2 7.71584 7.71584 2 14.7678 2C21.8198 2 27.5356 7.71584 27.5356 14.7678Z"
                stroke="#1E3D60"
                stroke-width="2.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.5045 18.8298L14.3008 15.7255V9.03516"
                stroke="#064EA4"
                stroke-width="2.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="mb-0">Duration:</p>
            <p className="mb-0 font-bold">7hr56m</p>
          </div>
          <div className="mb-4 flex">
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-3"
            >
              <path
                d="M20.248 12.1359L24.3049 8.81575C25.3102 7.9928 26.8181 8.7098 26.8168 10.0071L26.802 19.0607C26.8008 20.3579 25.2917 21.0688 24.2889 20.2458L20.248 16.9257"
                stroke="#064EA4"
                stroke-width="2.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.2435 18.9827C20.3431 21.2397 18.5216 23.1483 16.1752 23.2442C16.0024 23.2515 7.57704 23.2345 7.57704 23.2345C5.24205 23.4118 3.19847 21.7339 3.01429 19.4854C3.00042 19.3178 3.0042 10.2776 3.0042 10.2776C2.90076 8.01813 4.7198 6.1047 7.0674 6.00514C7.24275 5.99665 15.6568 6.01243 15.6568 6.01243C18.0031 5.8376 20.053 7.52763 20.2346 9.78709C20.2473 9.94978 20.2435 18.9827 20.2435 18.9827Z"
                stroke="#1E3D60"
                stroke-width="2.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p className="mb-0">Lesson:</p>
            <p className="mb-0 font-bold">50</p>
          </div>
          <div className="mb-4 flex">
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-3"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.2815 2.95689L18.8644 8.1169C19.1175 8.62347 19.6061 8.97472 20.1727 9.05601L25.9507 9.8877C27.3783 10.0938 27.9464 11.824 26.9132 12.8153L22.735 16.8301C22.3244 17.2249 22.1375 17.7925 22.2346 18.3498L23.2207 24.0179C23.4635 25.42 21.9712 26.4897 20.6952 25.8264L15.5309 23.1484C15.0246 22.8857 14.4183 22.8857 13.9105 23.1484L8.74622 25.8264C7.47023 26.4897 5.9779 25.42 6.2222 24.0179L7.20679 18.3498C7.30392 17.7925 7.11701 17.2249 6.7064 16.8301L2.52816 12.8153C1.49501 11.824 2.0631 10.0938 3.49067 9.8877L9.26868 9.05601C9.8353 8.97472 10.3254 8.62347 10.5785 8.1169L13.1599 2.95689C13.7987 1.68104 15.6427 1.68104 16.2815 2.95689Z"
                stroke="#1E3D60"
                stroke-width="2.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p className="mb-0">Lifetime</p>
          </div>
          <div className="mb-4 flex">
            <span>
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-3 inline"
              >
                <rect
                  x="6.3"
                  y="2.3"
                  width="16.0289"
                  height="24.8306"
                  rx="4.16904"
                  stroke="#1E3D60"
                  stroke-width="2.6"
                />
                <path
                  d="M15.9414 23.0801C15.9414 23.8772 15.2952 24.5234 14.498 24.5234C13.7009 24.5234 13.0547 23.8772 13.0547 23.0801C13.0547 22.2829 13.7009 21.6367 14.498 21.6367C15.2952 21.6367 15.9414 22.2829 15.9414 23.0801Z"
                  fill="#064EA4"
                />
              </svg>
            </span>
            <p className="mb-0 overflow-hidden">
              Access From Any Computer, Tablet or Mobile
            </p>
          </div>
        </div>
      </div>
      {/* course card */}
      <div className=" gap-4 bg-neutral-200">
        <div className="grid gap-10 lg:grid-cols-2">
          <a href="#" className="card mx-auto w-11/12">
            <figure className="relative">
              <img
                className="card__image aspect-h-image"
                src="https://images.unsplash.com/photo-1667988152364-52ab908cd3bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                alt="image"
              />
              <div className=" chip chip--primary absolute top-20 right-3  md:top-6 lg:right-6">
                $199.00 USD
              </div>
              <div className="chip chip--secondary absolute top-6 right-3 md:right-40 lg:right-44">
                7hr56m
              </div>
            </figure>
            <div className="card__body">
              <h2 className="card__title">Lorem, ipsum dolor.</h2>
              <p className="card__desc">
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
          <a href="#" className="card mx-auto w-11/12">
            <figure className="relative">
              <img
                className="card__image aspect-h-image"
                src="https://images.unsplash.com/photo-1667988152364-52ab908cd3bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                alt="image"
              />
              <div className=" chip chip--primary absolute top-20 right-3  md:top-6 lg:right-6">
                $199.00 USD
              </div>
              <div className="chip chip--secondary absolute top-6 right-3 md:right-40 lg:right-44">
                7hr56m
              </div>
            </figure>
            <div className="card__body">
              <h2 className="card__title">Lorem, ipsum dolor.</h2>
              <p className="card__desc">
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
      </div>

      {/* featured course Card */}
      <div className="grid ">
        <a href="#" className="card mx-auto w-11/12 lg:grid-cols-5">
          <figure className="relative lg:col-span-3">
            <img
              className="card__image aspect-h-image"
              src="https://images.unsplash.com/photo-1667988152364-52ab908cd3bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="image"
            />
            <div className=" chip chip--primary absolute top-20 left-3  md:top-6  md:left-32 lg:left-36">
              $199.00 USD
            </div>
            <div className="chip chip--secondary absolute top-6 left-3 lg:left-6">
              7hr56m
            </div>
          </figure>
          <div className="card__body lg:col-span-2 lg:my-auto">
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
      {/* blog card */}
      <div className="mx-auto my-10  grid gap-10 md:w-9/12 lg:w-11/12 lg:grid-cols-2">
        <a href="#" className="card mx-auto w-11/12 text-lg">
          <figure className="relative">
            <img
              className="card__image aspect-video"
              src="https://images.unsplash.com/photo-1661347335413-e4ef4c97d625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
              alt="image"
            />
            <div className=" chip chip--secondary absolute top-4 right-3">
              $199.00 USD
            </div>
          </figure>
          <div className="card__body">
            <h4 className="card__desc">December 1,2022</h4>
            <h2 className="card__title">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </h2>
          </div>
        </a>
        <div className="grid grid-rows-3 gap-7 md:gap-4">
          <a href="#" className="card mx-auto w-11/12 md:grid-cols-2">
            <div>
              <img
                className="card__image aspect-video h-full"
                src="https://images.unsplash.com/photo-1667988152364-52ab908cd3bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                alt="image"
              />
            </div>
            <div className="card__body">
              <h4 className="card__title lg:text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Beatae, corrupti!
              </h4>
            </div>
          </a>
          <a href="#" className="card mx-auto w-11/12 md:grid-cols-2">
            <div>
              <img
                className="card__image aspect-video h-full"
                src="https://images.unsplash.com/photo-1661347335413-e4ef4c97d625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
                alt="image"
              />
            </div>
            <div className="card__body">
              <h4 className="card__title lg:text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Beatae, corrupti!
              </h4>
            </div>
          </a>
          <a href="#" className="card mx-auto w-11/12 md:grid-cols-2">
            <div>
              <img
                className="card__image aspect-video h-full"
                src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff4698e5af4686c9948_image-3-profile-picture-teacher-education-x-template.jpg"
                alt="image"
              />
            </div>
            <div className="card__body">
              <h4 className="card__title lg:text-sm ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Beatae, corrupti!
              </h4>
            </div>
          </a>
        </div>
      </div>
      {/* teacher Card */}
      <div className="grid  gap-10 md:grid-cols-2 lg:grid-cols-3 ">
        <a href="#" className="card mx-auto w-11/12">
          <img
            src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff4698e5af4686c9948_image-3-profile-picture-teacher-education-x-template.jpg"
            alt=""
          />
          <div className="card__body">
            <h3 className="card__title"> Andrew lorem</h3>
            <p className="card__desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              vero.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="rounded-full bg-neutral-500 duration-300 ease-in-out hover:bg-primary"
              >
                <svg
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36px"
                  height="36px"
                >
                  <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z" />
                </svg>
              </a>
              <a
                href="#"
                className="rounded-full bg-neutral-500 duration-300 ease-in-out hover:bg-primary"
              >
                <svg
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36px"
                  height="36px"
                >
                  <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z" />
                </svg>
              </a>
              <a
                href="#"
                className="rounded-full bg-neutral-500 duration-300 ease-in-out hover:bg-primary"
              >
                <svg
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36px"
                  height="36px"
                >
                  <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z" />
                </svg>
              </a>
            </div>
          </div>
        </a>
        <a href="#" className="card mx-auto w-11/12">
          <img
            src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff4698e5af4686c9948_image-3-profile-picture-teacher-education-x-template.jpg"
            alt=""
          />
          <div className="card__body">
            <h3 className="card__title"> Andrew lorem</h3>
            <p className="card__desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              vero.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="rounded-full bg-neutral-500 duration-300 ease-in-out hover:bg-primary"
              >
                <svg
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36px"
                  height="36px"
                >
                  <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z" />
                </svg>
              </a>
              <a
                href="#"
                className="rounded-full bg-neutral-500 duration-300 ease-in-out hover:bg-primary"
              >
                <svg
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36px"
                  height="36px"
                >
                  <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z" />
                </svg>
              </a>
              <a
                href="#"
                className="rounded-full bg-neutral-500 duration-300 ease-in-out hover:bg-primary"
              >
                <svg
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36px"
                  height="36px"
                >
                  <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z" />
                </svg>
              </a>
            </div>
          </div>
        </a>
        <a href="#" className="card mx-auto w-11/12">
          <img
            src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff4698e5af4686c9948_image-3-profile-picture-teacher-education-x-template.jpg"
            alt=""
          />
          <div className="card__body">
            <h3 className="card__title"> Andrew lorem</h3>
            <p className="card__desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              vero.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="rounded-full bg-neutral-500 duration-300 ease-in-out hover:bg-primary"
              >
                <svg
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36px"
                  height="36px"
                >
                  <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z" />
                </svg>
              </a>
              <a
                href="#"
                className="rounded-full bg-neutral-500 duration-300 ease-in-out hover:bg-primary"
              >
                <svg
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36px"
                  height="36px"
                >
                  <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z" />
                </svg>
              </a>
              <a
                href="#"
                className="rounded-full bg-neutral-500 duration-300 ease-in-out hover:bg-primary"
              >
                <svg
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36px"
                  height="36px"
                >
                  <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z" />
                </svg>
              </a>
            </div>
          </div>
        </a>
        <a href="#" className="card mx-auto w-11/12">
          <img
            src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff4698e5af4686c9948_image-3-profile-picture-teacher-education-x-template.jpg"
            alt=""
          />
          <div className="card__body">
            <h3 className="card__title"> Andrew lorem</h3>
            <p className="card__desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              vero.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="rounded-full bg-neutral-500 duration-300 ease-in-out hover:bg-primary"
              >
                <svg
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36px"
                  height="36px"
                >
                  <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z" />
                </svg>
              </a>
              <a
                href="#"
                className="rounded-full bg-neutral-500 duration-300 ease-in-out hover:bg-primary"
              >
                <svg
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36px"
                  height="36px"
                >
                  <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z" />
                </svg>
              </a>
              <a
                href="#"
                className="rounded-full bg-neutral-500 duration-300 ease-in-out hover:bg-primary"
              >
                <svg
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36px"
                  height="36px"
                >
                  <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z" />
                </svg>
              </a>
            </div>
          </div>
        </a>
        <a href="#" className="card mx-auto w-11/12">
          <img
            src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff4698e5af4686c9948_image-3-profile-picture-teacher-education-x-template.jpg"
            alt=""
          />
          <div className="card__body">
            <h3 className="card__title"> Andrew lorem</h3>
            <p className="card__desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              vero.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="rounded-full bg-neutral-500 duration-300 ease-in-out hover:bg-primary"
              >
                <svg
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36px"
                  height="36px"
                >
                  <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z" />
                </svg>
              </a>
              <a
                href="#"
                className="rounded-full bg-neutral-500 duration-300 ease-in-out hover:bg-primary"
              >
                <svg
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36px"
                  height="36px"
                >
                  <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z" />
                </svg>
              </a>
              <a
                href="#"
                className="rounded-full bg-neutral-500 duration-300 ease-in-out hover:bg-primary"
              >
                <svg
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36px"
                  height="36px"
                >
                  <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z" />
                </svg>
              </a>
            </div>
          </div>
        </a>
        <a href="#" className="card mx-auto w-11/12">
          <img
            src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff4698e5af4686c9948_image-3-profile-picture-teacher-education-x-template.jpg"
            alt=""
          />
          <div className="card__body">
            <h3 className="card__title"> Andrew lorem</h3>
            <p className="card__desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              vero.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="rounded-full bg-neutral-500 duration-300 ease-in-out hover:bg-primary"
              >
                <svg
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36px"
                  height="36px"
                >
                  <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z" />
                </svg>
              </a>
              <a
                href="#"
                className="rounded-full bg-neutral-500 duration-300 ease-in-out hover:bg-primary"
              >
                <svg
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36px"
                  height="36px"
                >
                  <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z" />
                </svg>
              </a>
              <a
                href="#"
                className="rounded-full bg-neutral-500 duration-300 ease-in-out hover:bg-primary"
              >
                <svg
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36px"
                  height="36px"
                >
                  <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z" />
                </svg>
              </a>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Card;

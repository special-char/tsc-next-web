'use client';

import React, { useState } from 'react';
import Image from 'next/link';

type Props = {};

const Card = (props: Props) => {
  const [price, setprice] = useState('$99.00USD');

  return (
    <section>
      <div className="card card__rate">
        {' '}
        <div>
          <h2>{price}!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
            nostrum, amet inventore doloremque quibusdam est!
          </p>
          <div className="">
            <div
            //   className="mb-8 h-16 w-full rounded-full bg-neutral-300 px-7 hover:border-2 hover:border-primary"
            >
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
      <div className=" flex  h-screen gap-4 bg-neutral-200">
        <a href="#" className="inline-block">
          <div className="card card__course ">
            <img
              src="https://images.unsplash.com/photo-1667493620964-5db1a9529f14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
              alt="image"
              className="mb-5"
            />
            <div className="card__body">
              <h2>Lorem, ipsum dolor.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatibus eius nesciunt cupiditate iure obcaecati a dicta non
                temporibus quis deserunt.
              </p>
              <div className="flex items-center">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="avatar avatar__image mr-3"
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
                <h3>lakshya</h3>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Card;

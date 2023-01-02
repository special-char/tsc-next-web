'use client';
import '@/styles/price.css';
import Link from 'next/link';
import Price from '@/ui/Price';
import CoursesPrice from '@/ui/CoursesPrice';
import DynamicForm from '@/ui/DynamicForm';
import { useState } from 'react';

type Props = {
  data: any;
};

const PriceCard = ({ data, fields, submitURL }: Props) => {
  const { price, courseFeatures, brochure } = data;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <dialog
        open={isOpen}
        className="fixed inset-0 z-50 h-screen w-screen rounded-lg bg-neutral-800 bg-opacity-60 shadow-base"
      >
        <div className="top-10 m-auto max-w-5xl rounded-3xl bg-neutral-100 p-10">
          <DynamicForm
            fields={fields}
            submitUrl={submitURL}
            formMethod="dialog"
            buttonStyle={'col-span-full'}
          />
        </div>
      </dialog>
      <aside className="price">
        <div className="price__body">
          <Price price={price} />
          <button
            onClick={() => setIsOpen(true)}
            className="btn btn--secondary btn--small"
          >
            Register
          </button>
          <Link
            href={brochure?.data.attributes.url}
            className="btn btn--primary btn--small"
            download
          >
            Download Brochure
          </Link>
        </div>
        <CoursesPrice features={courseFeatures} />
      </aside>
    </>
  );
};

export default PriceCard;

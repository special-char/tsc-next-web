'use client';

import { useMemo } from 'react';
import CustomForm from './CustomForm';
import { useState } from 'react';
import { FormFieldsDynamicZone } from 'types/types';

const wait = (time: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

type Props = {
  fields?: FormFieldsDynamicZone[];
};

const DynamicForm = ({ fields }: Props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const initialValues = useMemo(
    () =>
      fields?.reduce((acc, val) => {
        return { ...acc, [val.name]: val.initialvalue || '' };
      }, {}),
    [fields],
  );

  const onSubmit = async (values, actions) => {
    await wait(2000);
    setIsSubmitted(true);
    actions.resetForm();
  };

  return (
    <>
      {isSubmitted ? (
        <div className="flex h-full items-center">
          <div className="newsletter__subscribed">
            Your message has been submitted.
            <br />
            We will get back to you within 24-48 hours
          </div>
        </div>
      ) : (
        <CustomForm
          buttonStyle="register__btn"
          initialValues={initialValues}
          onSubmit={onSubmit}
          fields={fields}
        />
      )}
    </>
  );
};

export default DynamicForm;

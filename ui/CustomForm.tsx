import clsx from 'clsx';
import { Formik, Form } from 'formik';
import React from 'react';
import FieldItem from './Field';

type Props = {};

const CustomForm = ({
  buttonStyle,
  notification,
  data,
  fields,
  ...rest
}: Props) => {
  return (
    <>
      <Formik {...rest}>
        {({ isSubmitting }) => (
          <Form className="form relative">
            {fields.map((field) => {
              return <FieldItem key={field.name} {...field} />;
            })}
            <button
              type="submit"
              className={clsx('btn btn--primary', {
                [buttonStyle]: !![buttonStyle],
              })}
            >
              submit
            </button>
            {isSubmitting && (
              <div className="absolute flex h-full w-full items-center justify-center bg-neutral-100">
                <p
                  className={clsx('', {
                    [notification]: !![notification],
                  })}
                >
                  {data}
                </p>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CustomForm;

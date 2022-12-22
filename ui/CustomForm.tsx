import clsx from 'clsx';
import { Formik, Form, Field } from 'formik';
import Link from 'next/link';
import React, { Children } from 'react';
import Button from './Button';
import Icon from './Icon';

type Props = {};

const CustomForm = ({
  data,
  notification,
  buttonStyle,
  fields,
  ...rest
}: Props) => {
  return (
    <Formik {...rest}>
      {({ isSubmitting }) => (
        <Form className="form relative">
          {fields.map((field) => {
            return <Field key={field.name} {...field} />;
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
  );
};

export default CustomForm;

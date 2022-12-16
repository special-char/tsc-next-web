import clsx from 'clsx';
import { Formik, Form, Field } from 'formik';
import Link from 'next/link';
import React from 'react';
import Button from './Button';
import Icon from './Icon';

type Props = {};

const CustomForm = ({ buttonStyle, fields, ...rest }: Props) => {
  return (
    <Formik {...rest}>
      {({}) => (
        <Form className="form ">
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
        </Form>
      )}
    </Formik>
  );
};

export default CustomForm;

import { Formik, Form, Field } from 'formik';
import Link from 'next/link';
import React from 'react';
import Button from './Button';

type Props = {};

const CustomForm = ({ fields, ...rest }: Props) => {
  return (
    <Formik {...rest}>
      {({}) => (
        <Form className="form">
          {fields.map((field) => {
            return <Field key={field.name} {...field} />;
          })}
          <button type="submit" className="btn btn--primary">
            submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CustomForm;

import { Formik, Form, Field } from 'formik';
import Link from 'next/link';
import React from 'react';
import Button from './Button';
import Icon from './Icon';

type Props = {};

const CustomForm = ({ fields, ...rest }: Props) => {
  return (
    <Formik {...rest}>
      {({}) => (
        <Form className="form">
          {fields.map((field) => {
            return <Field key={field.name} {...field} />;
          })}
          <Button as="button" type="submit" variant="primary">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default CustomForm;

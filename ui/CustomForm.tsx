import clsx from 'clsx';
import { Formik, Form } from 'formik';
import React from 'react';
import Button from './Button';
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
            <Button className="" variant="primary" as="button" type="submit">
              {isSubmitting ? 'Please wait...' : 'Submit'}
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CustomForm;

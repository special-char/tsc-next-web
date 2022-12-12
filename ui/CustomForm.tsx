import { Formik, Form, Field } from 'formik';
import React from 'react';

type Props = {};

const CustomForm = ({ fields, ...rest }: Props) => {
  return (
    <Formik {...rest}>
      {({}) => (
        <Form className="contact__body">
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

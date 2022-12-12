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
          <Button as={Link} href="/" type="secondary" isRound className="w-10">
            <Icon name="facebook" height={16} width={16} fill="red" />
          </Button>
          <Button as={Link} href="/" type="secondary" size="large">
            Hello
          </Button>
          {/* <button type="submit" className="btn btn--primary">
            submit
          </button> */}
        </Form>
      )}
    </Formik>
  );
};

export default CustomForm;

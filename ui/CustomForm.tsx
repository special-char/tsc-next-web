'use client';

import { Formik, Form, Field } from 'formik';
import dynamic from 'next/dynamic';
import React from 'react';
import Button from './Button';

const TextInput = dynamic(() => import('./TextInput'), {
  loading: () => 'Loading...',
});

const TextArea = dynamic(() => import('./TextArea'), {
  loading: () => 'Loading...',
});

type Props = {};

const CustomForm = ({ buttonStyle, fields, ...rest }: Props) => {
  console.log(rest.initialValues);

  return (
    <Formik {...rest}>
      {({ isSubmitting }) => (
        <Form className="form relative">
          {fields.map(
            ({
              id,
              component,
              __component,
              field_id,
              initialvalue,
              ...rest
            }) => {
              if (component === 'TextArea') {
                return (
                  <Field
                    key={id}
                    id={field_id}
                    component={TextArea}
                    {...rest}
                  />
                );
              } else {
                return (
                  <Field
                    key={id}
                    id={field_id}
                    component={TextInput}
                    {...rest}
                  />
                );
              }
            },
          )}
          <Button className="" variant="primary" as="button" type="submit">
            {isSubmitting ? 'Please wait...' : 'Submit'}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default CustomForm;

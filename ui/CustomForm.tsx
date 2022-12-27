'use client';

import { Formik, Form, Field } from 'formik';
import React from 'react';
import Button from './Button';
import checkValidation from '@/lib/validation';
import TextInput from './TextInput';
import TextArea from './TextArea';

type Props = {};

const CustomForm = ({ buttonStyle, fields, ...rest }: Props) => {
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
              validation,
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
                    validate={(value) => {
                      let message = '';
                      for (let i = 0; i < validation.length; i++) {
                        const { validationType, ...rest } = validation[i];
                        const res = checkValidation[validationType]({
                          value,
                          ...rest,
                        });
                        if (res) {
                          message = res;
                          break;
                        }
                      }
                      return message;
                    }}
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

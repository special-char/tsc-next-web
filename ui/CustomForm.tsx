'use client';
import { Formik, Form, Field } from 'formik';
import React, { useState } from 'react';
import Button from './Button';
import checkValidation from '@/lib/validation';
import TextInput from './TextInput';
import TextArea from './TextArea';
import clsx from 'clsx';
import RadioButtons from './RadioButtons';
import Select from './Select';
// import ReCAPTCHA from 'react-google-recaptcha';
// import { set } from 'date-fns';

type Props = {
  buttonStyle?: string;
  fields: {
    id: string;
    component: string;
    field_id: string;
    initialvalue?: any;
    validation?: {
      validationType: string;
      [key: string]: any;
    }[];
    [key: string]: any;
  }[];
  formMethod?: string;
  wrapperClass?: string;
  onSubmit: (values: any, actions: any) => Promise<void>;
};

const CustomForm = ({
  buttonStyle,
  fields,
  formMethod,
  wrapperClass,
  onSubmit,
  ...rest
}: Props) => {
  const formProps: any = {};
  // const [capture, setCapture] = useState<boolean>(false);

  if (formMethod) {
    formProps.method = formMethod;
  }

  const handleSubmit = async (values, actions) => {
    // Handle form submission here
    // setSubmitting(false);
    // actions.setErrors({ Name: 'Please Select Capture' });
    // if (!capture) actions.setErrors({ Name: 'Please Select Capture' });
    onSubmit(values, actions);
  };

  return (
    <Formik initialValues={{}} onSubmit={handleSubmit} {...rest}>
      {({ isSubmitting }) => (
        <Form
          className={clsx('form relative', {
            [wrapperClass || '']: !!wrapperClass,
          })}
          {...formProps}
        >
          {fields.map(
            ({
              id,
              component,
              field_id,
              initialvalue,
              validation,
              ...rest
            }) => {
              const fieldProps = Object.keys(rest).reduce((acc, key) => {
                if (rest[key]) {
                  return {
                    ...acc,
                    [key]: rest[key],
                  };
                }
                return acc;
              }, {});

              if (component === 'TextArea') {
                return (
                  <Field
                    key={id}
                    id={field_id}
                    component={TextArea}
                    {...fieldProps}
                  />
                );
              } else if (component === 'Select') {
                return (
                  <Field
                    key={id}
                    id={field_id}
                    component={Select}
                    {...fieldProps}
                  />
                );
              } else if (component === 'Radio') {
                return (
                  <Field
                    key={id}
                    id={field_id}
                    component={RadioButtons}
                    {...fieldProps}
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
                      for (let i = 0; i < validation?.length; i++) {
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
                    {...fieldProps}
                  />
                );
              }
            },
          )}

          {/* Google reCAPTCHA Field */}
          {/* <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            onChange={(value) => {
              console.log('reCAPTCHA value:', value);
              if (value) {
                setCapture(true);
              } else {
                setCapture(false);
              }
            }}
          /> */}

          <Button
            className={clsx({
              [buttonStyle || '']: !!buttonStyle,
            })}
            variant="primary"
            as="button"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Please wait...' : 'Submit'}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default CustomForm;

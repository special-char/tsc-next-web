import React, { HtmlHTMLAttributes } from 'react';
import {
  Formik,
  Form as FormikForm,
  Field,
  FastField,
  FormikProps,
  FormikValues,
  FormikConfig,
  FieldAttributes,
  FieldConfig,
} from 'formik';
import classNames from 'classnames';
import Button from '@components/Button';

interface Props<Values> {
  className?: string;
  fields: FieldConfig<Values>[];
}

const Form = <Values extends FormikValues = FormikValues>({
  fields,
  className,
  ...props
}: Props<Values> & FormikConfig<Values>) => {
  return (
    <Formik {...props}>
      {({ isSubmitting }) => {
        return (
          <FormikForm
            className={classNames({
              [className || '']: !!className,
            })}
          >
            {fields.map((x) => (
              <FastField key={x.name} {...x} />
            ))}
            <Button id="submit" type="submit" isDisabled={isSubmitting}>
              {isSubmitting ? 'Please Wait...' : 'Submit'}
            </Button>
          </FormikForm>
        );
      }}
    </Formik>
  );
};

export default Form;

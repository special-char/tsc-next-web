import clsx from 'clsx';
import { Field } from 'formik';
import React from 'react';

type Props = {
  label: string;
  wrapperClassName: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const TextInput = ({
  field,
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  wrapperClass,
  className,
  ...rest
}: Props) => {
  return (
    <div
      className={clsx('form__group', {
        [wrapperClass]: !!wrapperClass,
      })}
    >
      <label className="form__group__label">{label}</label>
      <Field type="text" className="form__group__input" {...field} {...rest} />
      {touched[field.name] && errors[field.name] && (
        <p className="form__group__error">{errors[field.name]}</p>
      )}
    </div>
  );
};

export default TextInput;

import clsx from 'clsx';
import React from 'react';

type Props = {
  label: string;
  wrapperClassName: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const TextInput = ({
  field,
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  wrapperClassName,
  className,
  ...rest
}: Props) => {
  return (
    <div
      className={clsx('form', {
        [wrapperClassName]: !!wrapperClassName,
      })}
    >
      <label className="form__label">{label}</label>
      <input type="text" className="form__input" {...field} {...rest} />
      {touched[field.name] && errors[field.name] && (
        <p className="form__error">{errors[field.name]}</p>
      )}
    </div>
  );
};

export default TextInput;

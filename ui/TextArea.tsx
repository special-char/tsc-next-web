import clsx from 'clsx';
import React from 'react';

type Props = { label: string } & React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

const TextArea = ({
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
      <textarea className="form__textarea" {...field} {...rest}></textarea>
      {touched[field.name] && errors[field.name] && (
        <p className="form__error">{errors[field.name]}</p>
      )}
    </div>
  );
};

export default TextArea;

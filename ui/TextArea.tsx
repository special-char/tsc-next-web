import clsx from 'clsx';
import React from 'react';

type Props = { label: string } & React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

const TextArea = ({
  field,
  form: { touched, errors },
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
      <textarea
        className="form__group__textarea"
        {...field}
        {...rest}
      ></textarea>
      {touched[field.name] && errors[field.name] && (
        <p className="form__group__error">{errors[field.name]}</p>
      )}
    </div>
  );
};

export default TextArea;

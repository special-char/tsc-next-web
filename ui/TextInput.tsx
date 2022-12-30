import clsx from 'clsx';
import React from 'react';

type Props = {
  label: string;
  wrapperClassName: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const TextInput = ({
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
      <input
        type="text"
        className={clsx('form__group__input', {
          'border border-error outline-error': !!(
            touched[field.name] && errors[field.name]
          ),
        })}
        {...field}
        {...rest}
      />
      {touched[field.name] && errors[field.name] && (
        <p className="form__group__error">{errors[field.name]}</p>
      )}
    </div>
  );
};

export default TextInput;

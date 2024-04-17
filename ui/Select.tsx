import clsx from 'clsx';
import React from 'react';

type Props = {
  label: string;
  wrapperClassName: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Select = ({
  field,
  form: { touched, errors },
  label,
  wrapperClass,
  className,
  options,
  ...rest
}: Props) => {
  return (
    <div
      className={clsx('form__group', {
        [wrapperClass]: !!wrapperClass,
      })}
    >
      <label className="form__group__label">{label}</label>
      <select
        className={clsx('form__group__input', {
          'border border-error outline-error': !!(
            touched[field.name] && errors[field.name]
          ),
        })}
        {...field}
        {...rest}
      >
        <option value="">{`Select ${label}`}</option>
        {options.map((x) => {
          return <option key={x.key} value={x.key}>{x.value}</option>;
        })}
      </select>

      <input type="text" />
      {touched[field.name] && errors[field.name] && (
        <p className="form__group__error">{errors[field.name]}</p>
      )}
    </div>
  );
};

export default Select;

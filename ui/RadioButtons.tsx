import React from 'react';
import { Field, FieldProps } from 'formik';
import clsx from 'clsx';
import '@/styles/radiobutton.css';
export interface RadioButtonsProps {
  options: any;
  name?: string;
  label?: string;
  divClassName?: string | any;
}

const RadioButtons = ({
  divClassName,
  label,
  form: { touched, errors },
  name,
  options,
  field,
  ...rest
}: RadioButtonsProps & FieldProps) => {
  return (
    <div className={clsx(divClassName, 'form-group')}>
      <label>{label}</label>
      <div className="dropdownDiv">
        {options.map(({ ...option }) => {
          return (
            <div key={option.key} className="flex items-center gap-3">
              <Field
                className=""
                type="radio"
                id={option.value}
                {...field}
                value={option.value}
              />
              <label className="m-0" htmlFor={option.value}>
                {option.key}
              </label>
            </div>
          );
        })}
      </div>
      {touched[field.name] && errors[field.name] && (
        <p className="form__group__error">{errors[field.name]}</p>
      )}
    </div>
  );
};

export default RadioButtons;

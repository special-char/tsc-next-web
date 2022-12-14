import React from 'react';
import { FieldProps } from 'formik';
import clsx from 'clsx';

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
              <input
                className=""
                type="radio"
                id={option.value}
                {...field}
                value={option.value}
                defaultChecked={field.value === option.value}
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
      <style jsx>{`
        .dropdownDiv {
          min-height: 4rem;
          max-width: 100%;
          min-width: 100%;
          margin-bottom: 0px;
          padding-right: 1.875rem;
          padding-left: 1.875rem;
          border: 1px solid transparent;
          border-radius: 6.25rem;
          background-color: #f9fafb;
          color: #0f437f;
          font-size: 18px;
          line-height: 1.111em;
          appearance: none;
          display: flex;
          gap: 3rem;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default RadioButtons;

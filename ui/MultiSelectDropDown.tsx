import { Field, FieldProps } from 'formik';
import React, { useState } from 'react';
import DropDown from '../public/icons/rightarrow.svg';
import '@/styles/multiSelectDropDown.css';

export interface MultiSelectDropDownProps {
  options: any;
  name?: string;
  label?: string;
  divClassName?: string | any;
  placeholder: string;
}

const MultiSelectDropDown = ({
  divClassName,
  label,
  form: { touched, errors },
  name,
  options,
  placeholder,
  field,
  ...rest
}: MultiSelectDropDownProps & FieldProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="multiselectdropDown form-group">
      <label>{label}</label>
      <div
        onClick={() => setShowDropdown(!showDropdown)}
        className="multiselectdropDown__dropdownDiv"
      >
        <p style={{ margin: 0, color: '#62778f' }}>{placeholder}</p>
        <DropDown
          height={30}
          width={30}
          fill="#62778f"
          style={{ transform: 'rotate(90deg)' }}
        />
      </div>
      {showDropdown && (
        <div className="multiselectdropDown__showDropdown">
          {options.map(({ ...option }) => {
            return (
              <>
                <div className="multiselectdropDown__listDiv" key={option.id}>
                  <label className="mb-0" htmlFor={option.name}>
                    {option.name}
                  </label>
                  <Field
                    placeholder={placeholder}
                    type="checkbox"
                    id={option.name}
                    {...field}
                    value={option.name}
                    defaultChecked={field.name.includes(option.name)}
                  />
                </div>
              </>
            );
          })}
        </div>
      )}
      {touched[field.name] && errors[field.name] ? (
        <p className="form__group__error">{errors[field.name]}</p>
      ) : (
        ''
      )}
    </div>
  );
};

export default MultiSelectDropDown;

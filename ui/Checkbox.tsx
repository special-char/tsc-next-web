'use client';
import '@/styles/checkbox.css';
import { Field } from 'formik';

type Props = {};

const Checkbox = ({
  field: { name, value, onChange, onBlur },
  form: { setFieldValue },
  checkboxes,
  label,
}: Props) => {
  return (
    <div role="group" className="form-group">
      <label>{label}</label>
      <div className="checkbox-group">
        {checkboxes.map((checkbox) => {
          return (
            <label
              key={checkbox.value}
              role={'button'}
              className="checkbox-group__item"
            >
              <Field
                type="checkbox"
                name={checkbox.name}
                value={checkbox.value}
              />
              {checkbox.label}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default Checkbox;

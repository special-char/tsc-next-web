'use client';
import '@/styles/multiselect.css';
import DropdownIcon from '@/public/icons/rightarrow.svg';
import React, { useCallback, useState } from 'react';
import clsx from 'clsx';

type Props = {};

const MultiSelect = ({
  field: { name, value, onChange, onBlur },
  form: { setFieldValue },
  label,
  wrapperClassName,
  className,
  options,
  ...rest
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const clearItem = useCallback(
    (item) => {
      const index = value.findIndex((x) => x === item);
      if (index >= 0) {
        setFieldValue(name, [
          ...value.slice(0, index),
          ...value.slice(index + 1),
        ]);
      }
    },
    [value],
  );

  const selectItem = useCallback(
    (item) => {
      const isItemExist = value.some((x) => x.id === item.id);
      if (!isItemExist) {
        setFieldValue(name, [...value, item.name]);
      } else {
        setFieldValue(name, value);
      }
    },
    [value],
  );

  return (
    <div
      className={clsx('multiselect relative', {
        [wrapperClassName || '']: !!wrapperClassName,
      })}
    >
      <label className="multiselect__label" htmlFor="technologies">
        {label}
      </label>
      <div className="multiselect__form-control">
        <div className="multiselect__group">
          <div className="multiselect__group__selected">
            <ul className="multiselect__group__selected-items">
              {value.length !== 0
                ? value.map((x) => (
                    <li key={x}>
                      <div className="multiselect__group__selected-items__selected-item">
                        <span>{x}</span>
                        <button onClick={() => clearItem(x)}>x</button>
                      </div>
                    </li>
                  ))
                : 'Select'}
            </ul>
            <span role="button" onClick={() => setIsOpen((val) => !val)}>
              <DropdownIcon
                height={48}
                width={48}
                className="isOpen-icon !rotate-90 cursor-pointer place-self-center fill-neutral-700"
              />
            </span>
          </div>
        </div>
        {isOpen && (
          <ul className="multiselect__form-control__options">
            {options.map((x) => (
              <li
                key={x.id}
                className="multiselect__form-control__options__options-list"
              >
                <div role="button" onClick={() => selectItem(x)}>
                  {x.name}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MultiSelect;

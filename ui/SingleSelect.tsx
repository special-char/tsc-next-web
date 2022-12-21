'use client';
import '@/styles/singleSelect.css';
import React from 'react';
import clsx from 'clsx';
import { Field } from 'formik';

type Props = {};

const SingleSelect = ({
    field: { name, value, onChange, onBlur },
    form: { setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    label,
    wrapperClassName,
    obj,
}: Props) => {

    return (
        <div role="group" className={clsx("form_group", {
            [wrapperClassName || '']: !!wrapperClassName
        })}>
            <label>{label}</label>
            <div className="singleSelect">
                <Field
                    component="select"
                    id={obj.id}
                    name={obj.name}
                >
                    {
                        obj.options.map(x => {
                            return (
                                <option key={x.value} value={x.value}>{x.title}</option>
                            );
                        })
                    }
                </Field>
            </div>
        </div>
    );
};

export default SingleSelect;

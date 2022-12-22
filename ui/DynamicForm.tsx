'use client';

import React from 'react';
import CustomForm from './CustomForm'
import { getFormDetails } from '../lib/getFormDetails';
import { useCallback, useEffect, useState } from "react";

type Props = {
    id: number;
};

const DynamicForm = ({ id }: Props) => {
    console.log('id: ', id);

    const [fields, setFields] = useState(null)
    const [initialValues, setInitialValues] = useState(null)

    const loadData = useCallback(
        async (id) => {
            const formDetails = await getFormDetails(id);
            const fields = formDetails.data.attributes.fields;
            let initialvalues = fields.reduce((acc, val) => {
                return { ...acc, [val.name]: val.initialvalue || '' };
            }, {});
            setFields(fields)
            setInitialValues(initialvalues)
        },
        [],
    )

    useEffect(() => {
        loadData(id)
    }, [loadData])

    return (
        <>
            {initialValues && fields && (
                <CustomForm
                    buttonStyle="register__btn"
                    initialValues={initialValues}
                    onSubmit={(actions) => {
                        actions.resetForm();
                    }}
                    fields={fields}
                />
            )}
        </>
    );
};

export default DynamicForm;
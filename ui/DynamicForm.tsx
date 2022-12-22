'use client';

import React from 'react';
import CustomForm from './CustomForm'
import { getFormDetails } from '../lib/getFormDetails';
import { useCallback, useEffect, useState } from "react";

type Props = {
    id: number;
};

const DynamicForm = ({ id }: Props) => {
    const [isSubmitted, setIsSubmitted] = useState(false)

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
            {
                isSubmitted ? <div className="flex items-center h-full"><div className="newsletter__subscribed">Your message has been submitted.<br />
                    We will get back to you within 24-48 hours</div></div> :
                    <> {initialValues && fields && (
                        <CustomForm
                            buttonStyle="register__btn"
                            initialValues={initialValues}
                            onSubmit={(values, actions) => {
                                actions.setSubmitting(true);
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    actions.setSubmitting(false);
                                    setIsSubmitted(true)
                                    actions.resetForm();
                                }, 2000);
                            }}
                            fields={fields}
                        />
                    )}
                    </>
            }

        </>
    );
};

export default DynamicForm;
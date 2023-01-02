'use client';

import { getFormDetails } from '@/lib/getFormDetails';
import React, { useCallback, useEffect, useState } from 'react';
import { Form, FormFieldsDynamicZone, Maybe } from 'types/types';
import DynamicForm from './DynamicForm';

type Props = {};

const Register = ({}: Props) => {
  const [fields, setFields] = useState<Maybe<FormFieldsDynamicZone>[]>([]);
  const [submitURL, setSubmitURL] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const loadformData = useCallback(async () => {
    const res = await getFormDetails(1);
    console.log('res', res.data?.attributes?.fields);

    const { fields, submitURL } = res.data?.attributes as Form;

    if (fields && submitURL) {
      setFields(fields);
      setSubmitURL(submitURL);
    }
  }, []);

  useEffect(() => {
    loadformData();
  }, []);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="btn btn--secondary btn--small"
      >
        Register
      </button>
      <dialog
        open={isOpen}
        className="fixed inset-0 z-50 h-screen w-screen overflow-y-auto rounded-lg bg-neutral-800 bg-opacity-60 shadow-base"
      >
        <div className="top-10 m-auto grid max-w-5xl rounded-3xl bg-neutral-100 p-10">
          <DynamicForm
            fields={fields}
            submitUrl={submitURL}
            formMethod="dialog"
            buttonStyle={'col-span-full'}
          />
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="btn"
          >
            Close
          </button>
        </div>
      </dialog>
    </>
  );
};

export default Register;

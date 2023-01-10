'use client';

import { getFormDetails } from '@/lib/getFormDetails';
import clsx from 'clsx';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { Form, FormFieldsDynamicZone, Maybe } from 'types/types';
import DynamicForm from './DynamicForm';
import { usePathname } from 'next/navigation';

type Props = {
  formId: number;
  btnText?: string;
  btnClass?: string;
};

const Register = ({ formId, btnText, btnClass, additionalField }: Props) => {
  const [fields, setFields] = useState<Maybe<FormFieldsDynamicZone>[]>([]);
  const [submitURL, setSubmitURL] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const loadformData = useCallback(async (formId: number) => {
    const res = await getFormDetails(formId);
    // console.log('res', res.data?.attributes?.fields);

    const { fields, submitURL } = res.data?.attributes as Form;
    if (fields && submitURL) {
      setFields(fields);
      setSubmitURL(submitURL);
    }
  }, []);

  useEffect(() => {
    loadformData(formId);
  }, []);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={clsx('btn btn--small uppercase', {
          [btnClass || 'btn--secondary']: !![btnClass],
        })}
      >
        {btnText}
      </button>
      <dialog
        open={isOpen}
        className="fixed inset-0 z-50 h-screen w-screen overflow-y-auto rounded-lg bg-neutral-800 bg-opacity-60 shadow-base"
      >
        <div className="top-10 m-auto grid max-w-5xl gap-y-3 rounded-3xl bg-neutral-100 p-10">
          <DynamicForm
            buttonStyle={'col-span-2'}
            fields={fields}
            submitUrl={submitURL}
            formMethod="dialog"
            additionalField={additionalField}
          />
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="btn btn--secondary"
            style={{
              gridRow: 'revert',
            }}
          >
            Close
          </button>
        </div>
      </dialog>
    </>
  );
};

export default memo(Register);

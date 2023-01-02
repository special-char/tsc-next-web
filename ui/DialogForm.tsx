'use client';

import { getFormDetails } from '@/lib/getFormDetails';
import React, { useCallback, useEffect, useState } from 'react';
import { FormFieldsDynamicZone, Maybe } from 'types/types';
import DynamicForm from './DynamicForm';

type Props = {
  open: boolean;
};

const DialogForm = ({ open }: Props) => {
  const [fields, setFields] = useState<Maybe<FormFieldsDynamicZone>[]>([]);
  const [submitUrl, setSubmitUrl] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const loadformData = useCallback(async () => {
    const res = await getFormDetails(2);
    const fields = res.data?.attributes?.fields;
    const submitURL = res?.data?.attributes?.submitURL;

    if (fields && submitURL) {
      setFields(fields);
      setSubmitUrl(submitURL);
    }
  }, []);

  useEffect(() => {
    loadformData();
  }, []);

  return (
    <dialog
      id="MegaDialog"
      className="fixed inset-0 z-50 grid h-screen w-screen place-content-center rounded-2xl bg-neutral-500 bg-opacity-40 shadow-base"
      open={false}
      modal-mode="mega"
    >
      {fields && (
        <div className="max-w-lg overflow-y-auto rounded-3xl bg-neutral-100 p-10 shadow-base">
          <DynamicForm
            fields={fields}
            submitUrl={submitUrl}
            formMethod="dialog"
            buttonStyle={'col-span-full'}
          />
        </div>
      )}
    </dialog>
  );
};

export default DialogForm;

'use client';

import { getFormDetails } from '@/lib/getFormDetails';
import clsx from 'clsx';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { Form, FormFieldsDynamicZone, Maybe } from 'types/types';
import DynamicForm from './DynamicForm';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

type Props = {
  formId: number;
  btnText?: string;
  btnClass?: string;
  registerButtonURL?: string;
};

const Register = ({
  formId,
  btnText,
  btnClass,
  additionalField,
  registerButtonURL,
}: Props) => {
  const [fields, setFields] = useState<Maybe<FormFieldsDynamicZone>[]>([]);
  const [submitURL, setSubmitURL] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const loadformData = useCallback(async (formId: number) => {
    const res = await getFormDetails(formId);

    const { fields, submitURL } = res.data?.attributes as Form;
    if (fields && submitURL) {
      setFields(fields);
      setSubmitURL(submitURL);
    }
  }, []);

  useEffect(() => {
    loadformData(formId);
  }, []);

  const router = useRouter();

  return (
    <>
      {registerButtonURL && registerButtonURL != undefined ? (
        <Link
          href={registerButtonURL}
          className={clsx('btn btn--small uppercase', {
            [btnClass || 'btn--secondary']: !![btnClass],
          })}
          target="_blank"
        >
          {btnText}
        </Link>
      ) : (
        <button
          onClick={() => {
            setIsOpen(true);
          }}
          className={clsx('btn btn--small uppercase', {
            [btnClass || 'btn--secondary']: !![btnClass],
          })}
        >
          {btnText}
        </button>
      )}

      {fields.length > 0 && (
        <dialog
          open={isOpen}
          className="fixed inset-0 z-50 h-full w-full overflow-y-auto rounded-lg bg-neutral-800 bg-opacity-100 shadow-base"
        >
          <div className="top-10 m-auto grid max-w-5xl gap-y-3 rounded-3xl bg-neutral-100 px-4 py-12 md:px-8">
            <DynamicForm
              buttonStyle={'col-span-2'}
              fields={fields}
              submitUrl={submitURL}
              formMethod="dialog"
              additionalField={additionalField}
              isOpen={isOpen}
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
      )}
    </>
  );
};

export default memo(Register);

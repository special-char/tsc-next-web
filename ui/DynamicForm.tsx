'use client';

import { useMemo } from 'react';
import CustomForm from './CustomForm';
import { useState } from 'react';
import { FormFieldsDynamicZone } from 'types/types';

const wait = (time: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

type Props = {
  fields?: FormFieldsDynamicZone[];
  submitUrl: string;
  formMethod?: string;
  wrapperClass?: string;
};

const DynamicForm = ({
  fields,
  submitUrl,
  formMethod,
  wrapperClass,
  buttonStyle,
  additionalField,
}: Props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const initialValues = useMemo(
    () =>
      fields?.reduce((acc, val) => {
        return { ...acc, [val.name]: val.initialvalue || '' };
      }, {}),
    [fields],
  );

  const onSubmit = async (values, actions) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}${submitUrl}`,
        {
          method: 'POST',
          body: JSON.stringify({
            data: { ...values, ...(additionalField || {}) },
          }),
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          cache: 'no-cache',
          next: {
            revalidate: 0,
          },
        },
      );
      console.log(values);
      setIsSubmitted(true);
      actions.resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  const saveContact = () => {
    navigator.permissions
      .query({ name: 'contacts' })
      .then((permissionStatus) => {
        if (permissionStatus.state === 'granted') {
          var contact = new Contact();
          contact.name = new ContactName();
          contact.name.givenName = 'John';
          contact.name.familyName = 'Doe';
          contact.phoneNumbers = [new ContactField('mobile', '+1234567890')];
          contact.save().then(
            function () {
              console.log('Contact saved!');
            },
            function (error) {
              console.error('Error saving contact: ' + error.code);
            },
          );
        } else {
          console.log('Permission denied');
        }
      });
  };

  return (
    <>
      <button type="button" onClick={saveContact}>
        click me
      </button>
      {isSubmitted ? (
        <div className="flex h-full items-center">
          <div className="newsletter__subscribed">
            Your message has been submitted.
            <br />
            We will get back to you within 1-2 working days (within 10 a.m. to 6
            p.m. IST).
          </div>
        </div>
      ) : (
        <CustomForm
          initialValues={initialValues}
          onSubmit={onSubmit}
          fields={fields}
          formMethod={formMethod}
          wrapperClass={wrapperClass}
          buttonStyle={buttonStyle}
        />
      )}
    </>
  );
};

export default DynamicForm;

'use client';
import { getFormDetails } from '@/lib/getFormDetails';
import DynamicForm from '@/ui/DynamicForm';
import { use } from 'react';

type Props = {};

const ContactForm = (props: Props) => {
  const formDetails = use(getFormDetails(1));

  const fields = formDetails.data?.attributes?.fields;

  const submitUrl = formDetails.data?.attributes?.submitURL as string;

  return (
    <div className="contact__body">
      <DynamicForm fields={fields} submitUrl={submitUrl} />
    </div>
  );
};

export default ContactForm;

import { getFormDetails } from '@/lib/getFormDetails';
import DynamicForm from '@/ui/DynamicForm';
import { use } from 'react';

type Props = {};

const ContactForm = (props: Props) => {
  const formDetails = use(getFormDetails(1));

  if (!formDetails) {
    return null;
  }

  const fields = formDetails.data.data?.attributes?.fields;

  const submitUrl = formDetails.data.data?.attributes?.submitURL as string;

  return (
    <div className="contact__body">
      <DynamicForm fields={fields} submitUrl={submitUrl} />
    </div>
  );
};

export default ContactForm;

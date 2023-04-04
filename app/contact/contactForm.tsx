import { getFormDetails } from '@/lib/getFormDetails';
import DynamicForm from '@/ui/DynamicForm';

type Props = {};

const ContactForm = async (props: Props) => {
  const formDetails = await getFormDetails(1);

  const fields = formDetails.data?.attributes?.fields;

  const submitUrl = formDetails.data?.attributes?.submitURL as string;

  return (
    <div className="contact__body">
      <DynamicForm fields={fields} submitUrl={submitUrl} />
    </div>
  );
};

export default ContactForm;

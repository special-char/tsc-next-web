import { getFormDetails } from '@/lib/getFormDetails';
import DynamicForm from '@/ui/DynamicForm';

type Props = {};

const ContactForm = async (props: Props) => {
  const formDetails = await getFormDetails(1);

  if (!formDetails) {
    return null;
  }

  const fields = formDetails.data.data?.attributes?.fields;

  return (
    <div className="contact__body">
      <DynamicForm fields={fields} />
    </div>
  );
};

export default ContactForm;
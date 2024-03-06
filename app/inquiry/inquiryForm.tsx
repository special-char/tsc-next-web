import { getFormDetails } from '@/lib/getFormDetails';
import DynamicForm from '@/ui/DynamicForm';
import { use } from 'react';

type Props = {};

const InquiryForm = async (props: Props) => {
  const formDetails = await getFormDetails(4);

  const fields = formDetails?.data?.attributes?.fields;

  const submitUrl = formDetails?.data?.attributes?.submitURL as string;

  return (
    <div className="flex flex-col px-container py-4">
      <DynamicForm
        buttonStyle="px-3 py-3"
        fields={fields}
        submitUrl={submitUrl}
      />
    </div>
  );
};

export default InquiryForm;

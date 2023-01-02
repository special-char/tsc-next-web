import { notFound } from 'next/navigation';
import '@/styles/form.css';
import DynamicForm from '@/ui/DynamicForm';
import { getFormDetails } from '@/lib/getFormDetails';
type Props = {
  params: {
    form: string;
  };
};

const Page = async ({ params }: Props) => {
  const formDetails = await getFormDetails(Number(params.form));

  if (!formDetails) {
    notFound();
  }

  const fields = formDetails.data?.attributes?.fields;
  return (
    <>
      <section id="register" className="register">
        <h1 className="text-center">Registration Form!</h1>
        <div className="register__form-container">
          <DynamicForm fields={fields} />
        </div>
        <div className="register__bg-circle1 "></div>
        <div className="register__bg-circle2 "></div>
        <div className="register__bg-circle3 "></div>
      </section>
    </>
  );
};

export default Page;

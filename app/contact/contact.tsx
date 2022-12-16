'use client';
import EmailSvg from '@/public/icons/email.svg';
import PhoneSvg from '@/public/icons/phone.svg';
import AddressSvg from '@/public/icons/address.svg';
import '@/styles/contact.css';
import { Formik, Form, Field } from 'formik';
import TextInput from '@/ui/TextInput';
import TextArea from '@/ui/TextArea';
import CustomForm from '@/ui/CustomForm';

export const ContactSkeleton = () => {
  return (
    <section id="contact" className="contact animate-pulse">
      <h1 className="contact__title font-cursive">Get in touch!</h1>
      <p className="contact__desc font-cursive">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        aliquip commodo consequat
      </p>
      <div className="contact__body font-cursive">
        <CustomForm
          className="font-cursive"
          initialValues={{
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
          fields={fields}
        />
      </div>
      <div className="contact__cards">
        {CardData.map((cardData) => (
          <div className="contact__card_details">
            <div className="h-16 w-16 overflow-hidden rounded-full bg-neutral-300">
              <div className=""></div>
            </div>
            <h3 className="mt-4 font-cursive">Email</h3>
            <p className="px-4 font-cursive">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
          </div>
        ))}
      </div>
      <div className="contact__yellowcircle "></div>
      <div className="contact__orangecircle "></div>
      <div className="contact__blucircle "></div>
    </section>
  );
};

type Props = {};
const fields = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'Full Name',
    component: TextInput,
    validate: (value: string) => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    name: 'email',
    label: 'Email Address',
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    component: TextInput,
    validate: (value: string) => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },

  {
    name: 'phone',
    label: 'Phone Number',
    name: 'contactnumber',
    type: 'tel',
    placeholder: '+91 1234 5678 90',
    component: TextInput,
    validate: (value: string) => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    name: 'subject',
    label: 'Subject',
    type: 'text',
    placeholder: 'Subject',
    component: TextInput,
    validate: (value: string) => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    name: 'message',
    label: 'Message',
    placeholder: 'Write your message here...',
    component: TextArea,
    rows: 5,
    wrapperClassName: 'col-span-full',
    validate: (value: string) => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
];

const CardData = [
  {
    svg: <EmailSvg />,
    title: 'Email',
    description: 'contact@thespecialcharacter.com',
  },
  {
    svg: <PhoneSvg />,
    title: 'Phone',
    description: '+91 1234 5678 90',
  },
  {
    svg: <AddressSvg />,
    title: 'Address',
    description: 'B-604/605, Ganesh Glory11,SG-Hwy, Ahmedabad, Gujrat 382470',
  },
];
const initialValues = {
  name: '',
  email: '',
  contactnumber: '',
  subject: '',
  message: '',
};
const handleSubmit = (values: any) => {
  console.log('data of submit:', values);
};
const Contact = (props: Props) => {
  return (
    <section id="contact" className="contact">
      <h1 className="contact__title">Get in touch!</h1>
      <p className="contact__desc">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        aliquip commodo consequat
      </p>
      <div className="contact__body">
        <CustomForm
          initialValues={{
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
          fields={fields}
        />
      </div>
      <div className="contact__cards">
        {CardData.map((cardData) => (
          <div className="contact__card_details">
            <div className="contact__svg">{cardData.svg}</div>
            <h3 className="mt-4">{cardData.title}</h3>
            <p className="px-4">{cardData.description}</p>
          </div>
        ))}
      </div>
      <div className="contact__yellowcircle "></div>
      <div className="contact__orangecircle "></div>
      <div className="contact__blucircle "></div>
    </section>
  );
};
export default Contact;

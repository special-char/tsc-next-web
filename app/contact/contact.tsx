'use client';
import EmailSvg from '@/public/icons/email.svg';
import PhoneSvg from '@/public/icons/phone.svg';
import AddressSvg from '@/public/icons/address.svg';
import clsx from 'clsx';
import '@/styles/contact.css';
import { Field, Form, Formik } from 'formik';

type Props = {};
const formData = [
  {
    id: 'txtName',
    label: 'Name',
    name: 'name',
    type: 'text',
    // pattern: '^[a-zA-z ]*$',
    placeholder: 'Full Name...1',
    title: 'Enter your name',
    validate: (values: any) => {
      let error;
      if (!values) {
        error = 'Required name';
      }
      return error;
    },
  },
  {
    id: 'txtEmail',
    label: 'Email Address',
    name: 'email',
    type: 'email',
    // pattern: '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$',
    placeholder: 'Email ',
    title: 'Enter email address',
    validate: (values: any) => {
      let error;
      if (!values) {
        error = 'Required email';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values)) {
        error = 'Invalid email address';
      }
      return error;
    },
  },

  {
    id: 'txtPhone',
    label: 'Phone Number',
    name: 'contactnumber',
    type: 'tel',
    pattern: '[0-9]{10}',
    title: 'Enter 10 digit number',
    placeholder: '+91 1234 5678 90....3',
    validate: (values: any) => {
      let error;
      if (!values) {
        error = 'Required phone number';
      } else if (!/^\d{10}$/i.test(values)) {
        error = 'Invalid phone';
      }
      return error;
    },
  },
  {
    id: 'txtSubject',
    label: 'Subject',
    name: 'subject',
    type: 'text',
    //pattern: '^[a-zA-z ]*$',
    placeholder: 'Subject...4',
    title: 'Enter subject',
    validate: (values: any) => {
      let error;
      if (!values) {
        error = 'Required subject';
      }
      return error;
    },
  },
  {
    id: 'txtMessage',
    label: 'Message',
    name: 'message',
    type: 'textarea',
    //pattern: '^([A-Za-z0-9]+.[A-Za-z0-9]+(\r)?(\n)?)+$',
    placeholder: 'text area...',
    title: 'type your message here...',
    validate: (values: any) => {
      let error;
      if (!values) {
        error = 'Required messages';
      }
      return error;
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
      <div className="contact__body relative place-content-center">
        <div className="">
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ isSubmitting, values, errors, touched, dirty }) => (
              <Form className="form relative">
                {formData.map((formData: any) => {
                  return (
                    <div key={formData.id}>
                      <label className="form__label">{formData.label}</label>
                      {formData.type === 'textarea' ? (
                        <div>
                          <Field
                            as="textarea"
                            name={formData.name}
                            id={formData.id}
                            title={formData.title}
                            placeholder={formData.placeholder}
                            className="contact__textarea resize-none"
                            validate={formData.validate}
                          ></Field>
                          <p className="py-2 pl-9 text-error">
                            {touched[formData.name] && errors
                              ? errors[formData.name]
                              : ''}
                            {/* {errors[formData.name]} */}
                          </p>
                        </div>
                      ) : (
                        <div>
                          <Field
                            type={formData.type}
                            name={formData.name}
                            placeholder={formData.name}
                            title={formData.title}
                            className={clsx('form__input resize-none ', {
                              'outline-error': errors,
                            })}
                            validate={formData.validate}
                          />
                          <p className="py-2 pl-9 text-error">
                            {touched[formData.name] && errors
                              ? errors[formData.name]
                              : ''}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}

                <button
                  type="submit"
                  className="contact__button btn btn--primary btn--small"
                >
                  {isSubmitting ? 'Please wait' : 'submit'}
                </button>
                {isSubmitting && (
                  <div className="absolute z-50 m-auto flex h-full w-full items-center justify-center bg-neutral-100 px-2 py-5 text-center">
                    <p className="mb-0 h-auto w-full rounded-2xl bg-primary py-10 px-2 text-secondary1 shadow-base md:px-40">
                      Your message has been submitted. We will get back to you
                      within 24-48 hours.
                    </p>
                  </div>
                )}
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className="contact__cards relative ">
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

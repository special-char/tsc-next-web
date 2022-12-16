'use client';
import EmailSvg from '@/public/icons/email.svg';
import PhoneSvg from '@/public/icons/phone.svg';
import AddressSvg from '@/public/icons/address.svg';
import '@/styles/registration.css';
import { Formik, Form, Field } from 'formik';
import TextInput from '@/ui/TextInput';
import TextArea from '@/ui/TextArea';
import clsx from 'clsx';
import CustomForm from '@/ui/CustomForm';
import RadioButtons from '@/ui/RadioButtons';
import MultiSelectDropDown from '@/ui/MultiSelectDropDown';

export const RegisterSkeleton = () => {
  return (
    <section id="register" className="register animate-pulse">
      <h1 className="text-center font-cursive">Registration Form!</h1>
      <div className="register__form-container font-cursive">
        <CustomForm
          className="font-cursive"
          buttonStyle="register__btn"
          initialValues={{
            firstname: '',
            lastname: '',
            phonenumber: '',
            email: '',
            collegename: '',
            branch: '',
            interestedFor: '',
            technologyInterests: [],
          }}
          onSubmit={(values: any) => {
            console.log(values);
          }}
          fields={fields}
        />
      </div>

      <div className="register__bg-circle1 "></div>
      <div className="register__bg-circle2 "></div>
      <div className="register__bg-circle3 "></div>
    </section>
  );
};

type Props = {};
const options = [
  { key: 'Online', value: 'online' },
  { key: 'Offline', value: 'offline' },
];
const dropDown = [
  { id: 1, name: 'Advanced Javascript' },
  { id: 2, name: 'React JS' },
  { id: 3, name: 'React Native' },
];
const fields = [
  {
    name: 'firstname',
    label: 'First Name',
    type: 'text',
    placeholder: 'First Name',
    component: TextInput,
    validate: (value: string) => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    name: 'lastname',
    label: 'Last Name',
    type: 'text',
    placeholder: 'Last Name',
    component: TextInput,
    validate: (value: string) => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    label: 'Phone Number',
    name: 'phonenumber',
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
    label: 'College Name',
    name: 'collegename',
    type: 'text',
    placeholder: 'College Name',
    component: TextInput,
    validate: (value: string) => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    label: 'Branch',
    name: 'branch',
    type: 'text',
    placeholder: 'Branch',
    component: TextInput,
    validate: (value: string) => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    name: 'interestedFor',
    label: 'Interested For',
    options: options,
    component: RadioButtons as React.ComponentType,
    validate: (value: string) => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    name: 'technologyInterests',
    placeholder: 'Choose Options',
    label: 'Technology Interests',
    options: dropDown,
    component: MultiSelectDropDown as React.ComponentType,
    // validate: (value: Array<string>) => {
    //   if (!value) {
    //     return 'Please Enter Your Preference.';
    //   }
    //   return 'Required...';
    // },
    // divClassName: `${styles.textInput}`,
  },
];

const Register = (props: Props) => {
  return (
    <section id="register" className="register ">
      <h1 className="text-center">Registration Form!</h1>
      <div className="register__form-container">
        <CustomForm
          buttonStyle="register__btn"
          initialValues={{
            firstname: '',
            lastname: '',
            phonenumber: '',
            email: '',
            collegename: '',
            branch: '',
            interestedFor: '',
            technologyInterests: [],
          }}
          onSubmit={(values: any) => {
            console.log(values);
          }}
          fields={fields}
        />
      </div>

      <div className="register__bg-circle1 "></div>
      <div className="register__bg-circle2 "></div>
      <div className="register__bg-circle3 "></div>
    </section>
  );
};
export default Register;

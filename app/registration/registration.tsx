import styles from './register.module.scss';
import Form from '@components/Form';
import Typography from '@components/Typography';
import React from 'react';
import {
  registerFields,
  registerInitialValues,
  RegisterInitialType,
  dropDown,
} from '../../fields/registerFields';
import { axiosInstance } from 'hooks/useRequest';

const RegisterForm = () => {
  return (
    <section className="form">
      <div className="container">
        <div className="register-wrapper">
          <div className="register-title-wrapper">
            <Typography variant="h1" className="commonHeading">
              Registration Form
            </Typography>
          </div>
          <div className="register-content">
            <div className="card-register">
              <div className="w-form">
                <Form<RegisterInitialType>
                  fields={registerFields}
                  className={styles.registerForm}
                  initialValues={{
                    ...registerInitialValues,
                  }}
                  onSubmit={async (values) => {
                    const interestedTech = dropDown.find((e) =>
                      values.technologyInterests.includes(e.name),
                    );

                    const data = {
                      firstName: values.firstName,
                      lastName: values.lastName,
                      email: values.email,
                      phone: values.phoneNumber,
                      interestedFor: values.interestedFor,
                      intrestedTechnologies: interestedTech,
                    };
                    const res = await axiosInstance.post(
                      'register-forms',
                      data,
                    );

                    console.log('VALUES ::::', res);
                  }}
                ></Form>
              </div>
            </div>
          </div>
          <div className="bg register-shape-1" />
          <div className="bg register-shape-2" />
          <div className="bg register-shape-3" />
        </div>
      </div>
      <style jsx>{`
        @import './styles/variables.scss';
        .form {
          overflow: hidden;
          padding-top: 7.25rem;
          padding-bottom: 11.5rem;
        }
        .container {
          max-width: 1257px;
          margin-right: auto;
          margin-left: auto;
          padding-right: 1.5rem;
          padding-left: 1.5rem;
          display: 'flex';
        }
        .register-wrapper {
          position: relative;
        }
        .register-title-wrapper {
          margin-bottom: 2.4rem;
          align-self: center;
          display: flex;
          justify-content: center;
        }
        .register-content {
          display: flex;
          justify-content: center;
        }
        .w-form {
          margin-bottom: 1.3rem !important;
          width: 100%;
        }

        .register-links-wrapper {
          display: flex;
          width: 100%;
          max-width: 423px;
          flex-direction: column;
          justify-content: space-between;
          align-self: stretch;
        }
        .bg {
          position: absolute;
        }
        .bg.register-shape-1 {
          left: -269px;
          top: -299px;
          z-index: -1;
          width: 429px;
          min-height: 429px;
          min-width: 429px;
          border-radius: 1000px;
          background-color: $Secondary1;
        }
        .bg.register-shape-2 {
          top: 38px;
          right: -308px;
          z-index: -1;
          width: 429px;
          min-height: 429px;
          min-width: 429px;
          border-radius: 1000px;
          background-color: $Secondary2;
        }
        .bg.register-shape-3 {
          left: -263px;
          bottom: -250px;
          z-index: -1;
          width: 462px;
          min-height: 462px;
          min-width: 462px;
          border-radius: 1000px;
          background-color: $Secondary3;
        }

        @media screen and (max-width: $breakpointLgForMw) {
          .form {
            padding-top: 5.75rem;
            padding-bottom: 9rem;
          }
          .register-title-wrapper {
            margin-right: auto;
            margin-left: auto;
            text-align: center;
          }
          .register-content {
            flex-direction: column;
            align-items: center;
          }
          .register-links-wrapper {
            max-width: 720px;
            align-self: auto;
          }
          .bg.register-shape-1 {
            left: -288px;
            top: -332px;
          }
          .bg.register-shape-3 {
            bottom: -150px;
          }
        }
        @media screen and (max-width: $breakpointMdForMw) {
          .form {
            padding-top: 4.6rem;
            padding-bottom: 7.5rem;
          }
          .register-title-wrapper {
            margin-bottom: 2rem;
          }
          .card-register {
            min-height: 980px;
            margin-bottom: 3.25rem;
            padding: 2.75rem 2rem 2.75rem;
          }
          .bg.register-shape-1 {
            left: -329px;
            top: -344px;
          }
          .bg.register-shape-2 {
            top: 103px;
            right: -309px;
          }
          .bg.register-shape-3 {
            left: -295px;
            bottom: -90px;
          }
        }
        @media screen and (max-width: $breakpointSmForMw) {
          .form {
            padding-top: 3.75rem;
            padding-bottom: 5.75rem;
          }
          .container {
            padding-right: 0.4rem;
            padding-left: 0.4rem;
          }
          .register-title-wrapper {
            max-width: 358px;
          }
          .card-register {
            padding: 2.25rem 1.5rem 2rem;
          }
          .bg.register-shape-1 {
            left: -293px;
            top: -275px;
            width: 358px;
            min-height: 358px;
            min-width: 358px;
          }
          .bg.register-shape-2 {
            top: 173px;
            right: -282px;
            width: 358px;
            min-height: 358px;
            min-width: 358px;
          }
          .bg.register-shape-3 {
            bottom: 50px;
            width: 385px;
            min-height: 385px;
            min-width: 385px;
          }
        }
      `}</style>
    </section>
  );
};

export default RegisterForm;

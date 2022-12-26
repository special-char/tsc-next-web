import clsx from 'clsx';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import Button from './Button';

const Newsletter = ({ btnClass }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <>
      {isSubmitted ? (
        <div className="newsletter__subscribed">
          Thanks for joining our newsletter
        </div>
      ) : (
        <Formik
          initialValues={{
            email: '',
          }}
          onSubmit={async (values, actions) => {
            try {
              const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/newsletters`,
                {
                  method: 'POST',
                  body: JSON.stringify({
                    data: values,
                  }),
                  headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                  },
                },
              );
              setIsSubmitted(true);
              actions.resetForm();
            } catch (error) {
              console.log(error);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="newsletter">
                <Field
                  id="firstName"
                  type="email"
                  className="newsletter__input"
                  name="email"
                  placeholder="enter your email address"
                />
                <Button
                  className={clsx('newsletter__btn', {
                    [btnClass || '']: !!btnClass,
                  })}
                  variant="primary"
                  as="button"
                  type="submit"
                >
                  {isSubmitting ? 'Please wait...' : 'Submit'}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

export default Newsletter;

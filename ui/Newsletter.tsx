import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import Button from './Button';

const Newsletter = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  return (
    <>
      {isSubmitted ? <div className='newsletter__subscribed'>Thanks for joining our newsletter</div> : <Formik
        initialValues={{
          email: ''
        }}
        onSubmit={(values, actions) => {
          actions.setSubmitting(true);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
            setIsSubmitted(true)
            actions.resetForm();
          }, 2000);
        }}
        className="w-full"
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="newsletter">
              <Field id="firstName" type="email" className='newsletter__input' name="email" placeholder="enter your email address" />
              <Button className='newsletter__btn' variant='primary' as="button" type="submit">{isSubmitting ? "Please wait..." : "Submit"}</Button>
            </div>
          </Form>
        )}

      </Formik>}
    </>
  );
};

export default Newsletter;

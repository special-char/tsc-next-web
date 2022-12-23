import '@/styles/contact.css';
import ContactInfo from './contactInfo';
import ContactForm from './contactForm';
import ContactHeader from './contactHeader';

type Props = {};

const Contact = (props: Props) => {
  return (
    <section id="contact" className="contact">
      <ContactHeader />
      <ContactForm />
      <ContactInfo />
      <div className="contact__yellowcircle "></div>
      <div className="contact__orangecircle "></div>
      <div className="contact__blucircle "></div>
    </section>
  );
};
export default Contact;

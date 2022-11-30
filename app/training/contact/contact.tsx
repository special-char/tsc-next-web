import EmailSvg from '@/public/icons/email.svg';
import PhoneSvg from '@/public/icons/phone.svg';
import AddressSvg from '@/public/icons/address.svg';
import '@/styles/contact.css';

type Props = {};
const FormData = [
  {
    id: 'txtName',
    label: 'Name',
    type: 'name',
    placeholder: 'Full Name',
  },
  {
    id: 'txtEmail',
    label: 'Email Address',
    type: 'email',
    placeholder: 'Email',
  },

  {
    id: 'txtPhone',
    label: 'Phone Number',
    type: 'tel',
    placeholder: '+91 1234 5678 90',
  },
  {
    id: 'txtSubject',
    label: 'Subject',
    type: 'txtSubject',
    placeholder: 'Subject',
  },
  {
    id: 'txtMessage',
    label: 'Message',
    type: 'textarea',
    placeholder: 'Write your message here...',
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
const Contact = (props: Props) => {
  return (
    <section id="contact" className="contact">
      <h2 className="contact__title">Get in touch!</h2>
      <p className="contact__desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
      <div className="contact__body">
        {FormData.map((formData) => {
          return (
            <div className="form">
              <label className="form__label">{formData.label}</label>
              {formData.type === 'textarea' ? (
                <textarea
                  name=""
                  id=""
                  rows={5}
                  placeholder={formData.placeholder}
                  className="w-full rounded-2xl bg-neutral-200 px-4 py-2 outline-neutral-400 focus:outline"
                ></textarea>
              ) : (
                <input
                  type="text"
                  placeholder={formData.placeholder}
                  className="form__input"
                />
              )}
            </div>
          );
        })}
        <button className="btn btn--primary btn--small md:ml-6 md:h-16 md:w-44 lg:h-20 lg:w-44">
          submit
        </button>
      </div>

      <div className="contact__cards">
        {CardData.map((cardData) => (
          <div className="contact__card_details ">
            <div className="w-16 overflow-hidden rounded-full">
              {cardData.svg}
            </div>
            <h3 className="mt-4">{cardData.title}</h3>
            <p>{cardData.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Contact;

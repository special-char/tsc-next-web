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
      <h1 className="contact__title">Get in touch!</h1>
      <p className="contact__desc">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        aliquip commodo consequat
      </p>
      <div className="contact__body relative">
        <div className="contact__formdata">
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
                    className="contact__textarea"
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
        </div>
        <button className="contact__button btn btn--primary btn--small">
          submit
        </button>
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

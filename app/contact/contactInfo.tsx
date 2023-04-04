import EmailSvg from '@/public/icons/email.svg';
import PhoneSvg from '@/public/icons/phone.svg';
import AddressSvg from '@/public/icons/address.svg';
import { getContactDetail } from '@/lib/getContactDetail';
import { ContactDetail } from 'types/types';

type Props = {};

const ContactInfo = async (props: Props) => {
  const contactDetail = await getContactDetail();

  const { addresses, phoneNumber, email } = contactDetail.data.contactDetail
    .data?.attributes as ContactDetail;

  return (
    <div className="contact__cards">
      {[
        {
          id: 1,
          svg: <EmailSvg />,
          url: 'mailto:contact@thespecialcharacter.com',
          title: 'Email',
          description: email,
        },
        {
          id: 2,
          svg: <PhoneSvg />,
          title: 'Phone',
          url: 'tel:+918690090417',
          description: phoneNumber,
        },
        {
          id: 3,
          svg: <AddressSvg />,
          title: 'Address',
          name: 'Specialchar Pvt. Ltd.',
          url: 'https://www.google.co.in/maps/place/Ganesh+Glory+11/@23.1141762,72.5380681,17z/data=!3m1!4b1!4m5!3m4!1s0x395e8340ebe5d7cb:0x4b3ffb517276bef6!8m2!3d23.1141762!4d72.5402568',
          description: addresses
            ? `${addresses[0]?.line1}, ${addresses[0]?.line2}, ${addresses[0]?.city} ${addresses[0]?.state}-${addresses[0]?.pincode} ${addresses[0]?.country}`
            : '',
        },
      ].map((cardData) => (
        <div key={cardData.id} className="contact__card_details">
          <a
            className="contact__card_info "
            href={cardData.url}
            target={'_blank'}
          >
            <div className="contact__svg">{cardData.svg}</div>
            <h3 className="m-0 mt-4">{cardData.title}</h3>
            {cardData.name && <p>{cardData.name}</p>}
            <p className="px-4">{cardData.description}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;

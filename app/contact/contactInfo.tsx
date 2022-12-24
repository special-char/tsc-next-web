import EmailSvg from '@/public/icons/email.svg';
import PhoneSvg from '@/public/icons/phone.svg';
import AddressSvg from '@/public/icons/address.svg';
import { getContactDetail } from '@/lib/getContactDetail';
import { ContactDetail } from 'types/types';
import { use } from 'react';

type Props = {};

const ContactInfo = (props: Props) => {
  const contactDetail = use(getContactDetail());

  if (!contactDetail) {
    return null;
  }

  const { addresses, phoneNumber, email } = contactDetail.data.contactDetail
    .data?.attributes as ContactDetail;

  return (
    <div className="contact__cards">
      {[
        {
          id: 1,
          svg: <EmailSvg />,
          title: 'Email',
          description: email,
        },
        {
          id: 2,
          svg: <PhoneSvg />,
          title: 'Phone',
          description: phoneNumber,
        },
        {
          id: 3,
          svg: <AddressSvg />,
          title: 'Address',
          description: addresses
            ? `${addresses[0]?.line1}, ${addresses[0]?.line2}, ${addresses[0]?.city} ${addresses[0]?.state}-${addresses[0]?.pincode} ${addresses[0]?.country}`
            : '',
        },
      ].map((cardData) => (
        <div key={cardData.id} className="contact__card_details">
          <div className="contact__svg">{cardData.svg}</div>
          <h3 className="mt-4">{cardData.title}</h3>
          <p className="px-4">{cardData.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;

'use client';

import EmailSvg from '@/public/icons/email.svg';
import PhoneSvg from '@/public/icons/phone.svg';
import AddressSvg from '@/public/icons/address.svg';
import '@/styles/contact.css';
import { useCallback, useEffect, useState } from 'react';
import { ContactDetail } from 'types/types';
import { getContactDetail } from '@/lib/getContactDetail';
import DynamicForm from '@/ui/DynamicForm';

type Props = {};

const Contact = (props: Props) => {
  const [contactDetails, setContactDetails] = useState([]);

  const loadData = useCallback(async () => {
    const contactDetail = await getContactDetail();

    if (!contactDetail) return null;

    const { addresses, phoneNumber, email } = contactDetail.data.contactDetail
      .data?.attributes as ContactDetail;

    setContactDetails([
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
        description: `${addresses[0]?.line1}, ${addresses[0]?.line2}, ${addresses[0]?.city} ${addresses[0]?.state}-${addresses[0]?.pincode} ${addresses[0]?.country}`,
      },
    ]);
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <section id="contact" className="contact">
      <h1 className="contact__title">Get in touch!</h1>
      <p className="contact__desc">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        aliquip commodo consequat
      </p>
      <div className="contact__body">
        <DynamicForm id={1} />
      </div>
      <div className="contact__cards">
        {contactDetails.map((cardData) => (
          <div key={cardData.id} className="contact__card_details">
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

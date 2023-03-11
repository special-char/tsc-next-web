import React, { use } from 'react';
import EmailSvg from '@/public/icons/email.svg';
import PhoneSvg from '@/public/icons/phone.svg';
import AddressSvg from '@/public/icons/address.svg';
import { getContactDetail } from '@/lib/getContactDetail';
import { ContactDetail } from 'types/types';
import ContactHeader from 'app/contact/contactHeader';
import '@/styles/connect.css';

type Props = {};

const Page = (props: Props) => {
  const contactDetail = use(getContactDetail());

  const { addresses, phoneNumber, email } = contactDetail.data.contactDetail
    .data?.attributes as ContactDetail;
  return (
    <section id="connecting" className="connecting">
      <div className="connecting__flow">
        <ContactHeader />
        <div className="connecting__section">
          <div className="connecting__body grid grid-cols-1 gap-8 lg:grid-cols-3">
            {[
              {
                id: 1,
                svg: <EmailSvg />,
                title: 'Email',
                url: 'mailto:contact@thespecialcharacter.com',
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
                url: 'https://www.google.co.in/maps/place/Ganesh+Glory+11/@23.1141762,72.5380681,17z/data=!3m1!4b1!4m5!3m4!1s0x395e8340ebe5d7cb:0x4b3ffb517276bef6!8m2!3d23.1141762!4d72.5402568',
                description: addresses
                  ? `${addresses[0]?.line1}, ${addresses[0]?.line2}, ${addresses[0]?.city} ${addresses[0]?.state}-${addresses[0]?.pincode} ${addresses[0]?.country}`
                  : '',
              },
            ].map((cardData) => (
              <div key={cardData.id} className="connecting__details">
                <a
                  className="connecting__info "
                  href={cardData.url}
                  target={'_blank'}
                >
                  <figure className="connecting__svg">{cardData.svg}</figure>
                  <h4 className="text-lg hover:text-primary">
                    {cardData.title}
                  </h4>
                  <p className="connecting__p">{cardData.description}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="connecting__blucircle"></div>
      <div className="connecting__yellowcircle"></div>
      <div className="connecting__orangecircle "></div>
    </section>
  );
};

export default Page;

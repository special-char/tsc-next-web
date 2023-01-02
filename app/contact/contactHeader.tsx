import { getBannerHeaderData } from '@/lib/getBannerHeader';
import { ComponentCommonHeaders } from 'types/types';

type Props = {};

const ContactHeader = async (props: Props) => {
  const bannerHeader = await getBannerHeaderData('contact-page');

  if (!bannerHeader) return null;

  const bannerHeaderData =
    bannerHeader.data.bannerHeader.data?.attributes?.bannerHeader;

  const [{ title, description }] = bannerHeaderData as ComponentCommonHeaders[];
  return (
    <>
      <h1 className="contact__title">{title}</h1>
      <p className="contact__desc">{description}</p>
    </>
  );
};

export default ContactHeader;

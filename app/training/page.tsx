import Banner from './banner';
import Companyhistory from './companyhistory';
import Blogs from './blogs';
import Courses from './courses';
import Leaders from './leaders';
import Footer from './footer';
import GrowCareer from './growcareer';
import Perks from './perks';
import SocialMedia from './socialMedia';
import Faq from './faq';
import Contactform from './contactform';
import Category from './category';
import OurOffice from './ourOffice';

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      {/* <Banner /> */}
      {/* <Courses /> */}
      {/* <Perks /> */}
      <Faq />
      {/* <SocialMedia /> */}
      {/* <Leaders /> */}
      {/* <Companyhistory /> */}
      {/* <Banner /> */}
      {/* <GrowCareer /> */}
      {/* <Footer /> */}
      {/* <Blogs />  */}
      {/* <Leaders />
      <Companyhistory />
      <Banner /> */}
      <GrowCareer />
      <Footer />
      {/* <Blogs />
      <Contactform /> */}
      <Banner />
      <Courses />
      <Perks />
      <Leaders />
      <Companyhistory />
      <GrowCareer />
      <Footer />
      <Blogs />
      <Category />
      <OurOffice />
    </>
  );
};

export default Page;

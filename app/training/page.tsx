import Education from './education';
import Banner from './banner';
import Companyhistory from './companyhistory';
import Blogs from './blogs';
import Courses from './courses';
import Event from './event';
import Leaders from './leaders';
import Footer from './footer';
import GrowCareer from './growcareer';
import Perks from './perks';
import SocialMedia from './socialMedia';
import Faq from './faq';
import Contactform from './contactform';

import Category from './category';
import OurOffice from './ourOffice';
import Contact from './contact';
import Features from './features';

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      {/* <Banner />
      <Courses />
      <Perks />
      <Education />
      <Leaders />
      <Companyhistory />
      <GrowCareer />
      <Footer />
      <Blogs />
      <Category />
      <OurOffice /> */}
      {/* <Contact /> */}
      <Features />
      <Faq />
      <GrowCareer />
      <Banner />
      <Event />
      <Education />
      <Aboutheader />
      <Achievements />
    </>
  );
};

export default Page;
